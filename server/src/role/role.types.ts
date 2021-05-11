export enum RoleEnum {
  USER,
  SUPER_ADMIN,
  DESIGNER,
  ICON_ADMIN,
  RESOURCE_ADMIN,
}

export type Roles = typeof RoleEnum[keyof typeof RoleEnum];
