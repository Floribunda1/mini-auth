## uml 的设计

```puml
@startuml RBAC
class User {
  id : 用户的 id
  email : 用户邮箱
  username : 用户名
  create_time : 创建时间
  update_time : 修改时间
}

class Permission {
  id : 权限 id
  route : method + url
  name : 权限的说明
  status : 状态
  create_time : 创建时间
  update_time : 修改时间
}

class Role {
  id : 角色 id
  name : 角色说明
  status : 角色状态
  create_time : 创建时间
  update_time : 修改时间
}

class Role_Permission_Join {
  id : 主键
  role_id : 角色 id
  permission_id : 权限 id
}

class User_Role_Join {
  id : 主键
  user_id : 角色 id
  role_id : 权限 id
}
@enduml
```

## 任务分解

### 权限的 crud

#### user

- [x] 接入 OAuth, 创建用户，返回 session
- [x] 获取用户信息（包含 role）
- [x] 更新用户信息
- [ ] 删除用户
  

- [ ] 为用户赋予 role
- [ ] 删除用户某一 role

#### role

- [ ] 创建 role
- [ ] 修改 role 信息
- [ ] 删除 role
  

- [ ] 查看 role 权限列表
- [ ] 增加 role 的权限
- [ ] 删除 role 的权限

#### permission

- [ ] 创建 permission
- [ ] 修改 permission 信息
- [ ] 删除 permission

## 一些经验

### error handler

