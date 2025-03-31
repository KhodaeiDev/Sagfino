import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Agency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column({ default: 'pending' })
  status: 'pending' | 'approved';

  @Column({ nullable: true })
  website?: string;

  @Column({ nullable: true })
  instagram?: string;

  @Column({ nullable: true })
  telegram?: string;

  @OneToOne(() => User)
  @JoinColumn()
  owner: User;
}
