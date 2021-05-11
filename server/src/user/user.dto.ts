import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '../role/role.types';

export class CreateUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;
}

export class UpdateUserDto {
  @ApiProperty()
  username?: string;
}

export class SetUserRoleDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  roles: Roles[];
}
