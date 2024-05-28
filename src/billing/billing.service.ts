import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Billing } from './entities/billing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(Billing)
    private readonly billingRepository: Repository<Billing>,
  ) {}

  async create(createBillingDto: CreateBillingDto) {
    const newBilling = this.billingRepository.create(createBillingDto);
    newBilling.updateAt = new Date();
    await this.billingRepository.save(newBilling);

    return newBilling;
  }

  async findAll() {
    return await this.billingRepository.find();
  }

  async findOne(id: number) {
    const billing = await this.billingRepository.findOne({
      where: { id: id },
    });

    if (!billing) throw new NotFoundException();

    return billing;
  }

  async update(id: number, updateBillingDto: UpdateBillingDto) {
    const billing = await this.billingRepository.findOne({
      where: { id: id },
    });

    if (!billing) throw new NotFoundException();

    Object.assign(billing, updateBillingDto);

    return await this.billingRepository.save(billing);
  }

  async remove(id: number) {
    const billing = await this.billingRepository.findOne({
      where: { id: id },
    });

    if (!billing) throw new NotFoundException();

    await this.billingRepository.remove(billing);

    return 'sucessful removing billing';
  }
}
