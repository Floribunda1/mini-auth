export enum RoleEnum {
  USER,
  SUPER_ADMIN,
  DESIGNER,
  ICON_ADMIN,
  RESOURCE_ADMIN,
}

export enum RoleNameEnum {
  USER = 'user',
  SUPER_ADMIN = 'super admin',
  DESIGNER = 'designer',
  ICON_ADMIN = 'icon admin',
  RESOURCE_ADMIN = 'resource admin',
}

export type RoleNames = typeof RoleNameEnum[keyof typeof RoleNameEnum];

export type Roles = typeof RoleEnum[keyof typeof RoleEnum];
