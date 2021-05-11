import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Permission } from '../permission/permission.entity';

@Entity()
export class Role {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    default: 1,
  })
  status: number;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @ManyToMany(() => User)
  users: User[];

  @ManyToMany(() => Permission, (permission) => permission.roles)
  permissions: Permission[];
}
