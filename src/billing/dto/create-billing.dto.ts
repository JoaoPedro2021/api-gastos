import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBillingDto {
  @ApiProperty({
    example: 'Conta de Luz',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: '100',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  Value: number;

  @ApiProperty({
    example: 'Abril',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  month: string;

  doneAt?: Date;
}
