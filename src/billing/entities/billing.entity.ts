import {
  AfterInsert,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 0 })
  Value: number;

  @Column()
  month: string;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updateAt: Date;

  @Column({ nullable: true })
  doneAt: Date;

  @BeforeInsert()
  updateCreatedDate() {
    this.createdAt = new Date();
    this.updateAt = new Date();
  }

  @AfterInsert()
  updateDate() {
    this.updateAt = new Date();
  }
}
