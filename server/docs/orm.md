## 一些数据库的操作

### 多对多关联

#### 查询

例如我想查询某一个 user 有什么角色，在 typeorm 中只需要

```typescript
const userInfo = this.userRepository.findOne({
  // 选择字段
  select: [],
  // 筛选
  where: { id: userId },
  // 关联查询
  relations: ['role']
})
```

如果是用原生的 SQL 语句

```sql
select user.id, user.username, role.name as rolename from user 
left join user_roles_role on user.id = user_roles_role.userId 
left join role on role.id = user_roles_role.roleId 
```

或者是使用 queryBuilder

```typescript
const user = await this.userRepository
  .createQueryBuilder('user')
  .select(['user.id', 'user.username'])
  .leftJoinAndSelect('user.roles', 'role', 'user.id = :id', { id: userId })
  .getOne()
```

#### 修改

比如说我想给某一个用户赋予某个角色的权限

```typescript
const user = await this.userRepository.cr
```


## QueryBuilder

在关联查询的时候可能会比较懵，稍微拆解一下

```typescript
const user = await createQueryBuilder("user")
    .leftJoinAndSelect("user.photos", "photo")
    .where("user.name = :name", { name: "Timber" })
    .andWhere("photo.isRemoved = :isRemoved", { isRemoved: false })
    .getOne();
```

最后生成的 SQL 语句为

```sql
SELECT user.*, photo.* FROM users user
    LEFT JOIN photos photo ON photo.user = user.id
    WHERE user.name = 'Timber' AND photo.isRemoved = FALSE
```

解释一下:

选择 user 和 photo 表的所有字段

从 user 左连接 photo on photo.user = user.id

最后是限制条件

在 typeorm 的多对多关系更新/删除中，如果使用 api 的话，需要做两次操作

1. findOne
2. update

使用 queryBuilder 尽量进行一次操作

例如下面这个例子

```typescript
import {getRepository} from "typeorm";

const postRepository = getRepository(Post);
const post = await postRepository.findOne(1, { relations: ["categories"] });
post.categories.push(category);
await postRepository.save(post);
```

这样会带来额外的性能开销，为了解决这个问题， typeorm 内置了 `relationQueryBuilder`

```typescript
import {getConnection} from "typeorm";

await getConnection()
    .createQueryBuilder()
    .relation(Post, "categories")
    .of(post)
    .add(category);
```



在 typeorm 中，没有 `upsert` 方法，即找到就更新，找不到就创建，可以统一使用 `save` 方法，会自动做这件事情

