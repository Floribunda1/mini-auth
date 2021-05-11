import { ApiProperty } from '@nestjs/swagger';
import { RoleNames, Roles } from './role.types';

export class CreateRoleDto {
  @ApiProperty()
  id: Roles;

  @ApiProperty()
  name: RoleNames;

  @ApiProperty({
    required: false,
  })
  status?: 0 | 1;
}

export class SetRolePermissionDto {
  @ApiProperty()
  id: Roles;

  @ApiProperty()
  permissions: number[];
}
