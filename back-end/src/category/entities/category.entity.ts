import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryType } from '../enums/categoryTypeEnum';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: CategoryType, default: CategoryType.MAIN })
  categoryType: CategoryType;
}
