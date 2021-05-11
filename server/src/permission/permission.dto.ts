import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionDto {
  @ApiProperty()
  route: string;

  @ApiProperty()
  name: string;

  @ApiProperty({
    required: false,
  })
  status?: 0 | 1;
}
