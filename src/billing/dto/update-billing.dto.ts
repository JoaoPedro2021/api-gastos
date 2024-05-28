import { PartialType } from '@nestjs/mapped-types';
import { CreateBillingDto } from './create-billing.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBillingDto extends PartialType(CreateBillingDto) {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  title?: string;

  @ApiProperty()
  month?: string;

  @ApiProperty()
  Value?: number;

  @ApiProperty()
  updateAt: Date;

  @ApiProperty()
  doneAt?: Date;
}
