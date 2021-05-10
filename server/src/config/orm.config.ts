import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
  host: 'localhost',
  type: 'mysql',
  port: 3306,
  username: 'root',
  password: 'cw1094cw',
  database: 'task',
  entities: ['../**/*.entity.js'],
  synchronize: true,
};
