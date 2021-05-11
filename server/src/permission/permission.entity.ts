import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../role/role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  route: string;

  @Column()
  name: string;

  @Column({
    default: 1,
  })
  status: 0 | 1;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}
