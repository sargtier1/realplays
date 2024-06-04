// @ts-nocheck
import { Prisma } from ".prisma/client";

import { builder } from "../../lib/graphql/builder";

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
    ? Filters[F]
    : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never]
    ? T[K]
    : ApplyFilters<T[K]>;
};

export const DateTime = builder.scalarType("DateTime", {
  parseValue: (value) => {
    try {
      const date = new Date(value);
      if (date.toString() === "Invalid Date") throw new Error("Invalid Date");
      return date;
    } catch (error) {
      throw new Error("Invalid Date");
    }
  },
  serialize: (value) => (value ? new Date(value) : null),
});

export const TransactionIsolationLevel = builder.enumType(
  "TransactionIsolationLevel",
  {
    values: [
      "ReadUncommitted",
      "ReadCommitted",
      "RepeatableRead",
      "Serializable",
    ] as const,
  }
);

export const UserScalarFieldEnum = builder.enumType("UserScalarFieldEnum", {
  values: ["id", "email", "name", "role"] as const,
});

export const ProfileScalarFieldEnum = builder.enumType(
  "ProfileScalarFieldEnum",
  {
    values: ["id", "bio", "userId"] as const,
  }
);

export const PostScalarFieldEnum = builder.enumType("PostScalarFieldEnum", {
  values: [
    "id",
    "createdAt",
    "updatedAt",
    "title",
    "published",
    "authorId",
  ] as const,
});

export const CategoryScalarFieldEnum = builder.enumType(
  "CategoryScalarFieldEnum",
  {
    values: ["id", "name"] as const,
  }
);

export const SortOrder = builder.enumType("SortOrder", {
  values: ["asc", "desc"] as const,
});

export const QueryMode = builder.enumType("QueryMode", {
  values: ["default", "insensitive"] as const,
});

export const NullsOrder = builder.enumType("NullsOrder", {
  values: ["first", "last"] as const,
});

export const Role = builder.enumType("Role", {
  values: ["USER", "ADMIN"] as const,
});

export const UserWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [UserWhereInput] }),
  OR: t.field({ required: false, type: [UserWhereInput] }),
  NOT: t.field({ required: false, type: [UserWhereInput] }),
  id: t.field({ required: false, type: IntFilter }),
  email: t.field({ required: false, type: StringFilter }),
  name: t.field({ required: false, type: StringNullableFilter }),
  role: t.field({ required: false, type: EnumRoleFilter }),
  posts: t.field({ required: false, type: PostListRelationFilter }),
  profile: t.field({ required: false, type: ProfileWhereInput }),
});
export const UserWhereInput = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereInput>, false>(
    "UserWhereInput"
  )
  .implement({
    fields: UserWhereInputFields,
  });

export const UserOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
  posts: t.field({ required: false, type: PostOrderByRelationAggregateInput }),
  profile: t.field({ required: false, type: ProfileOrderByWithRelationInput }),
});
export const UserOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithRelationInput>,
    false
  >("UserOrderByWithRelationInput")
  .implement({
    fields: UserOrderByWithRelationInputFields,
  });

export const UserWhereUniqueInputFields = (t: any) => ({
  id: t.int({ required: false }),
  email: t.string({ required: false }),
  AND: t.field({ required: false, type: [UserWhereInput] }),
  OR: t.field({ required: false, type: [UserWhereInput] }),
  NOT: t.field({ required: false, type: [UserWhereInput] }),
  name: t.field({ required: false, type: StringNullableFilter }),
  role: t.field({ required: false, type: EnumRoleFilter }),
  posts: t.field({ required: false, type: PostListRelationFilter }),
  profile: t.field({ required: false, type: ProfileWhereInput }),
});
export const UserWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserWhereUniqueInput>,
    false
  >("UserWhereUniqueInput")
  .implement({
    fields: UserWhereUniqueInputFields,
  });

export const UserOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
  _count: t.field({ required: false, type: UserCountOrderByAggregateInput }),
  _avg: t.field({ required: false, type: UserAvgOrderByAggregateInput }),
  _max: t.field({ required: false, type: UserMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: UserMinOrderByAggregateInput }),
  _sum: t.field({ required: false, type: UserSumOrderByAggregateInput }),
});
export const UserOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithAggregationInput>,
    false
  >("UserOrderByWithAggregationInput")
  .implement({
    fields: UserOrderByWithAggregationInputFields,
  });

export const UserScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [UserScalarWhereWithAggregatesInput] }),
  OR: t.field({ required: false, type: [UserScalarWhereWithAggregatesInput] }),
  NOT: t.field({ required: false, type: [UserScalarWhereWithAggregatesInput] }),
  id: t.field({ required: false, type: IntWithAggregatesFilter }),
  email: t.field({ required: false, type: StringWithAggregatesFilter }),
  name: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  role: t.field({ required: false, type: EnumRoleWithAggregatesFilter }),
});
export const UserScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserScalarWhereWithAggregatesInput>,
    false
  >("UserScalarWhereWithAggregatesInput")
  .implement({
    fields: UserScalarWhereWithAggregatesInputFields,
  });

export const ProfileWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [ProfileWhereInput] }),
  OR: t.field({ required: false, type: [ProfileWhereInput] }),
  NOT: t.field({ required: false, type: [ProfileWhereInput] }),
  id: t.field({ required: false, type: IntFilter }),
  bio: t.field({ required: false, type: StringFilter }),
  userId: t.field({ required: false, type: IntFilter }),
  user: t.field({ required: false, type: UserWhereInput }),
});
export const ProfileWhereInput = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.ProfileWhereInput>, false>(
    "ProfileWhereInput"
  )
  .implement({
    fields: ProfileWhereInputFields,
  });

export const ProfileOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  bio: t.field({ required: false, type: SortOrder }),
  userId: t.field({ required: false, type: SortOrder }),
  user: t.field({ required: false, type: UserOrderByWithRelationInput }),
});
export const ProfileOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileOrderByWithRelationInput>,
    false
  >("ProfileOrderByWithRelationInput")
  .implement({
    fields: ProfileOrderByWithRelationInputFields,
  });

export const ProfileWhereUniqueInputFields = (t: any) => ({
  id: t.int({ required: false }),
  userId: t.int({ required: false }),
  AND: t.field({ required: false, type: [ProfileWhereInput] }),
  OR: t.field({ required: false, type: [ProfileWhereInput] }),
  NOT: t.field({ required: false, type: [ProfileWhereInput] }),
  bio: t.field({ required: false, type: StringFilter }),
  user: t.field({ required: false, type: UserWhereInput }),
});
export const ProfileWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileWhereUniqueInput>,
    false
  >("ProfileWhereUniqueInput")
  .implement({
    fields: ProfileWhereUniqueInputFields,
  });

export const ProfileOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  bio: t.field({ required: false, type: SortOrder }),
  userId: t.field({ required: false, type: SortOrder }),
  _count: t.field({ required: false, type: ProfileCountOrderByAggregateInput }),
  _avg: t.field({ required: false, type: ProfileAvgOrderByAggregateInput }),
  _max: t.field({ required: false, type: ProfileMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: ProfileMinOrderByAggregateInput }),
  _sum: t.field({ required: false, type: ProfileSumOrderByAggregateInput }),
});
export const ProfileOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileOrderByWithAggregationInput>,
    false
  >("ProfileOrderByWithAggregationInput")
  .implement({
    fields: ProfileOrderByWithAggregationInputFields,
  });

export const ProfileScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [ProfileScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [ProfileScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [ProfileScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: IntWithAggregatesFilter }),
  bio: t.field({ required: false, type: StringWithAggregatesFilter }),
  userId: t.field({ required: false, type: IntWithAggregatesFilter }),
});
export const ProfileScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileScalarWhereWithAggregatesInput>,
    false
  >("ProfileScalarWhereWithAggregatesInput")
  .implement({
    fields: ProfileScalarWhereWithAggregatesInputFields,
  });

export const PostWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [PostWhereInput] }),
  OR: t.field({ required: false, type: [PostWhereInput] }),
  NOT: t.field({ required: false, type: [PostWhereInput] }),
  id: t.field({ required: false, type: IntFilter }),
  createdAt: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeFilter }),
  title: t.field({ required: false, type: StringFilter }),
  published: t.field({ required: false, type: BoolFilter }),
  authorId: t.field({ required: false, type: IntFilter }),
  author: t.field({ required: false, type: UserWhereInput }),
  categories: t.field({ required: false, type: CategoryListRelationFilter }),
});
export const PostWhereInput = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.PostWhereInput>, false>(
    "PostWhereInput"
  )
  .implement({
    fields: PostWhereInputFields,
  });

export const PostOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  createdAt: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  published: t.field({ required: false, type: SortOrder }),
  authorId: t.field({ required: false, type: SortOrder }),
  author: t.field({ required: false, type: UserOrderByWithRelationInput }),
  categories: t.field({
    required: false,
    type: CategoryOrderByRelationAggregateInput,
  }),
});
export const PostOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostOrderByWithRelationInput>,
    false
  >("PostOrderByWithRelationInput")
  .implement({
    fields: PostOrderByWithRelationInputFields,
  });

export const PostWhereUniqueInputFields = (t: any) => ({
  id: t.int({ required: false }),
  AND: t.field({ required: false, type: [PostWhereInput] }),
  OR: t.field({ required: false, type: [PostWhereInput] }),
  NOT: t.field({ required: false, type: [PostWhereInput] }),
  createdAt: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeFilter }),
  title: t.field({ required: false, type: StringFilter }),
  published: t.field({ required: false, type: BoolFilter }),
  authorId: t.field({ required: false, type: IntFilter }),
  author: t.field({ required: false, type: UserWhereInput }),
  categories: t.field({ required: false, type: CategoryListRelationFilter }),
});
export const PostWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostWhereUniqueInput>,
    false
  >("PostWhereUniqueInput")
  .implement({
    fields: PostWhereUniqueInputFields,
  });

export const PostOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  createdAt: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  published: t.field({ required: false, type: SortOrder }),
  authorId: t.field({ required: false, type: SortOrder }),
  _count: t.field({ required: false, type: PostCountOrderByAggregateInput }),
  _avg: t.field({ required: false, type: PostAvgOrderByAggregateInput }),
  _max: t.field({ required: false, type: PostMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: PostMinOrderByAggregateInput }),
  _sum: t.field({ required: false, type: PostSumOrderByAggregateInput }),
});
export const PostOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostOrderByWithAggregationInput>,
    false
  >("PostOrderByWithAggregationInput")
  .implement({
    fields: PostOrderByWithAggregationInputFields,
  });

export const PostScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [PostScalarWhereWithAggregatesInput] }),
  OR: t.field({ required: false, type: [PostScalarWhereWithAggregatesInput] }),
  NOT: t.field({ required: false, type: [PostScalarWhereWithAggregatesInput] }),
  id: t.field({ required: false, type: IntWithAggregatesFilter }),
  createdAt: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updatedAt: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  title: t.field({ required: false, type: StringWithAggregatesFilter }),
  published: t.field({ required: false, type: BoolWithAggregatesFilter }),
  authorId: t.field({ required: false, type: IntWithAggregatesFilter }),
});
export const PostScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostScalarWhereWithAggregatesInput>,
    false
  >("PostScalarWhereWithAggregatesInput")
  .implement({
    fields: PostScalarWhereWithAggregatesInputFields,
  });

export const CategoryWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [CategoryWhereInput] }),
  OR: t.field({ required: false, type: [CategoryWhereInput] }),
  NOT: t.field({ required: false, type: [CategoryWhereInput] }),
  id: t.field({ required: false, type: IntFilter }),
  name: t.field({ required: false, type: StringFilter }),
  posts: t.field({ required: false, type: PostListRelationFilter }),
});
export const CategoryWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryWhereInput>,
    false
  >("CategoryWhereInput")
  .implement({
    fields: CategoryWhereInputFields,
  });

export const CategoryOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  posts: t.field({ required: false, type: PostOrderByRelationAggregateInput }),
});
export const CategoryOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryOrderByWithRelationInput>,
    false
  >("CategoryOrderByWithRelationInput")
  .implement({
    fields: CategoryOrderByWithRelationInputFields,
  });

export const CategoryWhereUniqueInputFields = (t: any) => ({
  id: t.int({ required: false }),
  AND: t.field({ required: false, type: [CategoryWhereInput] }),
  OR: t.field({ required: false, type: [CategoryWhereInput] }),
  NOT: t.field({ required: false, type: [CategoryWhereInput] }),
  name: t.field({ required: false, type: StringFilter }),
  posts: t.field({ required: false, type: PostListRelationFilter }),
});
export const CategoryWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryWhereUniqueInput>,
    false
  >("CategoryWhereUniqueInput")
  .implement({
    fields: CategoryWhereUniqueInputFields,
  });

export const CategoryOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: CategoryCountOrderByAggregateInput,
  }),
  _avg: t.field({ required: false, type: CategoryAvgOrderByAggregateInput }),
  _max: t.field({ required: false, type: CategoryMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: CategoryMinOrderByAggregateInput }),
  _sum: t.field({ required: false, type: CategorySumOrderByAggregateInput }),
});
export const CategoryOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryOrderByWithAggregationInput>,
    false
  >("CategoryOrderByWithAggregationInput")
  .implement({
    fields: CategoryOrderByWithAggregationInputFields,
  });

export const CategoryScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [CategoryScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [CategoryScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [CategoryScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: IntWithAggregatesFilter }),
  name: t.field({ required: false, type: StringWithAggregatesFilter }),
});
export const CategoryScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryScalarWhereWithAggregatesInput>,
    false
  >("CategoryScalarWhereWithAggregatesInput")
  .implement({
    fields: CategoryScalarWhereWithAggregatesInputFields,
  });

export const UserCreateInputFields = (t: any) => ({
  email: t.string({ required: true }),
  name: t.string({ required: false }),
  role: t.field({ required: false, type: Role }),
  posts: t.field({
    required: false,
    type: PostCreateNestedManyWithoutAuthorInput,
  }),
  profile: t.field({
    required: false,
    type: ProfileCreateNestedOneWithoutUserInput,
  }),
});
export const UserCreateInput = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateInput>, false>(
    "UserCreateInput"
  )
  .implement({
    fields: UserCreateInputFields,
  });

export const UserUpdateInputFields = (t: any) => ({
  email: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  role: t.field({ required: false, type: EnumRoleFieldUpdateOperationsInput }),
  posts: t.field({
    required: false,
    type: PostUpdateManyWithoutAuthorNestedInput,
  }),
  profile: t.field({
    required: false,
    type: ProfileUpdateOneWithoutUserNestedInput,
  }),
});
export const UserUpdateInput = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateInput>, false>(
    "UserUpdateInput"
  )
  .implement({
    fields: UserUpdateInputFields,
  });

export const UserCreateManyInputFields = (t: any) => ({
  id: t.int({ required: false }),
  email: t.string({ required: true }),
  name: t.string({ required: false }),
  role: t.field({ required: false, type: Role }),
});
export const UserCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyInput>,
    false
  >("UserCreateManyInput")
  .implement({
    fields: UserCreateManyInputFields,
  });

export const UserUpdateManyMutationInputFields = (t: any) => ({
  email: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  role: t.field({ required: false, type: EnumRoleFieldUpdateOperationsInput }),
});
export const UserUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyMutationInput>,
    false
  >("UserUpdateManyMutationInput")
  .implement({
    fields: UserUpdateManyMutationInputFields,
  });

export const ProfileCreateInputFields = (t: any) => ({
  bio: t.string({ required: true }),
  user: t.field({
    required: true,
    type: UserCreateNestedOneWithoutProfileInput,
  }),
});
export const ProfileCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileCreateInput>,
    false
  >("ProfileCreateInput")
  .implement({
    fields: ProfileCreateInputFields,
  });

export const ProfileUpdateInputFields = (t: any) => ({
  bio: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  user: t.field({
    required: false,
    type: UserUpdateOneRequiredWithoutProfileNestedInput,
  }),
});
export const ProfileUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileUpdateInput>,
    false
  >("ProfileUpdateInput")
  .implement({
    fields: ProfileUpdateInputFields,
  });

export const ProfileCreateManyInputFields = (t: any) => ({
  id: t.int({ required: false }),
  bio: t.string({ required: true }),
  userId: t.int({ required: true }),
});
export const ProfileCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileCreateManyInput>,
    false
  >("ProfileCreateManyInput")
  .implement({
    fields: ProfileCreateManyInputFields,
  });

export const ProfileUpdateManyMutationInputFields = (t: any) => ({
  bio: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
});
export const ProfileUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileUpdateManyMutationInput>,
    false
  >("ProfileUpdateManyMutationInput")
  .implement({
    fields: ProfileUpdateManyMutationInputFields,
  });

export const PostCreateInputFields = (t: any) => ({
  createdAt: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  title: t.string({ required: true }),
  published: t.boolean({ required: false }),
  author: t.field({
    required: true,
    type: UserCreateNestedOneWithoutPostsInput,
  }),
  categories: t.field({
    required: false,
    type: CategoryCreateNestedManyWithoutPostsInput,
  }),
});
export const PostCreateInput = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.PostCreateInput>, false>(
    "PostCreateInput"
  )
  .implement({
    fields: PostCreateInputFields,
  });

export const PostUpdateInputFields = (t: any) => ({
  createdAt: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  published: t.field({ required: false, type: BoolFieldUpdateOperationsInput }),
  author: t.field({
    required: false,
    type: UserUpdateOneRequiredWithoutPostsNestedInput,
  }),
  categories: t.field({
    required: false,
    type: CategoryUpdateManyWithoutPostsNestedInput,
  }),
});
export const PostUpdateInput = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.PostUpdateInput>, false>(
    "PostUpdateInput"
  )
  .implement({
    fields: PostUpdateInputFields,
  });

export const PostCreateManyInputFields = (t: any) => ({
  id: t.int({ required: false }),
  createdAt: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  title: t.string({ required: true }),
  published: t.boolean({ required: false }),
  authorId: t.int({ required: true }),
});
export const PostCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateManyInput>,
    false
  >("PostCreateManyInput")
  .implement({
    fields: PostCreateManyInputFields,
  });

export const PostUpdateManyMutationInputFields = (t: any) => ({
  createdAt: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  published: t.field({ required: false, type: BoolFieldUpdateOperationsInput }),
});
export const PostUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateManyMutationInput>,
    false
  >("PostUpdateManyMutationInput")
  .implement({
    fields: PostUpdateManyMutationInputFields,
  });

export const CategoryCreateInputFields = (t: any) => ({
  name: t.string({ required: true }),
  posts: t.field({
    required: false,
    type: PostCreateNestedManyWithoutCategoriesInput,
  }),
});
export const CategoryCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryCreateInput>,
    false
  >("CategoryCreateInput")
  .implement({
    fields: CategoryCreateInputFields,
  });

export const CategoryUpdateInputFields = (t: any) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  posts: t.field({
    required: false,
    type: PostUpdateManyWithoutCategoriesNestedInput,
  }),
});
export const CategoryUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryUpdateInput>,
    false
  >("CategoryUpdateInput")
  .implement({
    fields: CategoryUpdateInputFields,
  });

export const CategoryCreateManyInputFields = (t: any) => ({
  id: t.int({ required: false }),
  name: t.string({ required: true }),
});
export const CategoryCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryCreateManyInput>,
    false
  >("CategoryCreateManyInput")
  .implement({
    fields: CategoryCreateManyInputFields,
  });

export const CategoryUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
});
export const CategoryUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryUpdateManyMutationInput>,
    false
  >("CategoryUpdateManyMutationInput")
  .implement({
    fields: CategoryUpdateManyMutationInputFields,
  });

export const IntFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntFilter }),
});
export const IntFilter = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFilter>, false>(
    "IntFilter"
  )
  .implement({
    fields: IntFilterFields,
  });

export const StringFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringFilter }),
});
export const StringFilter = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>, false>(
    "StringFilter"
  )
  .implement({
    fields: StringFilterFields,
  });

export const StringNullableFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const StringNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringNullableFilter>,
    false
  >("StringNullableFilter")
  .implement({
    fields: StringNullableFilterFields,
  });

export const EnumRoleFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Role }),
  in: t.field({ required: false, type: [Role] }),
  notIn: t.field({ required: false, type: [Role] }),
  not: t.field({ required: false, type: Role }),
});
export const EnumRoleFilter = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumRoleFilter>, false>(
    "EnumRoleFilter"
  )
  .implement({
    fields: EnumRoleFilterFields,
  });

export const PostListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: PostWhereInput }),
  some: t.field({ required: false, type: PostWhereInput }),
  none: t.field({ required: false, type: PostWhereInput }),
});
export const PostListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostListRelationFilter>,
    false
  >("PostListRelationFilter")
  .implement({
    fields: PostListRelationFilterFields,
  });

export const ProfileNullableRelationFilterFields = (t: any) => ({
  is: t.field({ required: false, type: ProfileWhereInput }),
  isNot: t.field({ required: false, type: ProfileWhereInput }),
});
export const ProfileNullableRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileNullableRelationFilter>,
    false
  >("ProfileNullableRelationFilter")
  .implement({
    fields: ProfileNullableRelationFilterFields,
  });

export const PostOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const PostOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostOrderByRelationAggregateInput>,
    false
  >("PostOrderByRelationAggregateInput")
  .implement({
    fields: PostOrderByRelationAggregateInputFields,
  });

export const UserCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
});
export const UserCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCountOrderByAggregateInput>,
    false
  >("UserCountOrderByAggregateInput")
  .implement({
    fields: UserCountOrderByAggregateInputFields,
  });

export const UserAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
});
export const UserAvgOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserAvgOrderByAggregateInput>,
    false
  >("UserAvgOrderByAggregateInput")
  .implement({
    fields: UserAvgOrderByAggregateInputFields,
  });

export const UserMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
});
export const UserMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserMaxOrderByAggregateInput>,
    false
  >("UserMaxOrderByAggregateInput")
  .implement({
    fields: UserMaxOrderByAggregateInputFields,
  });

export const UserMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
});
export const UserMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserMinOrderByAggregateInput>,
    false
  >("UserMinOrderByAggregateInput")
  .implement({
    fields: UserMinOrderByAggregateInputFields,
  });

export const UserSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
});
export const UserSumOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserSumOrderByAggregateInput>,
    false
  >("UserSumOrderByAggregateInput")
  .implement({
    fields: UserSumOrderByAggregateInputFields,
  });

export const IntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _avg: t.field({ required: false, type: NestedFloatFilter }),
  _sum: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedIntFilter }),
  _max: t.field({ required: false, type: NestedIntFilter }),
});
export const IntWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.IntWithAggregatesFilter>,
    false
  >("IntWithAggregatesFilter")
  .implement({
    fields: IntWithAggregatesFilterFields,
  });

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedStringFilter }),
  _max: t.field({ required: false, type: NestedStringFilter }),
});
export const StringWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>,
    false
  >("StringWithAggregatesFilter")
  .implement({
    fields: StringWithAggregatesFilterFields,
  });

export const StringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({
    required: false,
    type: NestedStringNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedStringNullableFilter }),
  _max: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const StringNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringNullableWithAggregatesFilter>,
    false
  >("StringNullableWithAggregatesFilter")
  .implement({
    fields: StringNullableWithAggregatesFilterFields,
  });

export const EnumRoleWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Role }),
  in: t.field({ required: false, type: [Role] }),
  notIn: t.field({ required: false, type: [Role] }),
  not: t.field({ required: false, type: Role }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedEnumRoleFilter }),
  _max: t.field({ required: false, type: NestedEnumRoleFilter }),
});
export const EnumRoleWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.EnumRoleWithAggregatesFilter>,
    false
  >("EnumRoleWithAggregatesFilter")
  .implement({
    fields: EnumRoleWithAggregatesFilterFields,
  });

export const UserRelationFilterFields = (t: any) => ({
  is: t.field({ required: false, type: UserWhereInput }),
  isNot: t.field({ required: false, type: UserWhereInput }),
});
export const UserRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserRelationFilter>,
    false
  >("UserRelationFilter")
  .implement({
    fields: UserRelationFilterFields,
  });

export const ProfileCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  bio: t.field({ required: false, type: SortOrder }),
  userId: t.field({ required: false, type: SortOrder }),
});
export const ProfileCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileCountOrderByAggregateInput>,
    false
  >("ProfileCountOrderByAggregateInput")
  .implement({
    fields: ProfileCountOrderByAggregateInputFields,
  });

export const ProfileAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  userId: t.field({ required: false, type: SortOrder }),
});
export const ProfileAvgOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileAvgOrderByAggregateInput>,
    false
  >("ProfileAvgOrderByAggregateInput")
  .implement({
    fields: ProfileAvgOrderByAggregateInputFields,
  });

export const ProfileMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  bio: t.field({ required: false, type: SortOrder }),
  userId: t.field({ required: false, type: SortOrder }),
});
export const ProfileMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileMaxOrderByAggregateInput>,
    false
  >("ProfileMaxOrderByAggregateInput")
  .implement({
    fields: ProfileMaxOrderByAggregateInputFields,
  });

export const ProfileMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  bio: t.field({ required: false, type: SortOrder }),
  userId: t.field({ required: false, type: SortOrder }),
});
export const ProfileMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileMinOrderByAggregateInput>,
    false
  >("ProfileMinOrderByAggregateInput")
  .implement({
    fields: ProfileMinOrderByAggregateInputFields,
  });

export const ProfileSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  userId: t.field({ required: false, type: SortOrder }),
});
export const ProfileSumOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileSumOrderByAggregateInput>,
    false
  >("ProfileSumOrderByAggregateInput")
  .implement({
    fields: ProfileSumOrderByAggregateInputFields,
  });

export const DateTimeFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const DateTimeFilter = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFilter>, false>(
    "DateTimeFilter"
  )
  .implement({
    fields: DateTimeFilterFields,
  });

export const BoolFilterFields = (t: any) => ({
  equals: t.boolean({ required: false }),
  not: t.field({ required: false, type: NestedBoolFilter }),
});
export const BoolFilter = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.BoolFilter>, false>(
    "BoolFilter"
  )
  .implement({
    fields: BoolFilterFields,
  });

export const CategoryListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: CategoryWhereInput }),
  some: t.field({ required: false, type: CategoryWhereInput }),
  none: t.field({ required: false, type: CategoryWhereInput }),
});
export const CategoryListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryListRelationFilter>,
    false
  >("CategoryListRelationFilter")
  .implement({
    fields: CategoryListRelationFilterFields,
  });

export const CategoryOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const CategoryOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryOrderByRelationAggregateInput>,
    false
  >("CategoryOrderByRelationAggregateInput")
  .implement({
    fields: CategoryOrderByRelationAggregateInputFields,
  });

export const PostCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  createdAt: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  published: t.field({ required: false, type: SortOrder }),
  authorId: t.field({ required: false, type: SortOrder }),
});
export const PostCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCountOrderByAggregateInput>,
    false
  >("PostCountOrderByAggregateInput")
  .implement({
    fields: PostCountOrderByAggregateInputFields,
  });

export const PostAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  authorId: t.field({ required: false, type: SortOrder }),
});
export const PostAvgOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostAvgOrderByAggregateInput>,
    false
  >("PostAvgOrderByAggregateInput")
  .implement({
    fields: PostAvgOrderByAggregateInputFields,
  });

export const PostMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  createdAt: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  published: t.field({ required: false, type: SortOrder }),
  authorId: t.field({ required: false, type: SortOrder }),
});
export const PostMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostMaxOrderByAggregateInput>,
    false
  >("PostMaxOrderByAggregateInput")
  .implement({
    fields: PostMaxOrderByAggregateInputFields,
  });

export const PostMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  createdAt: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  published: t.field({ required: false, type: SortOrder }),
  authorId: t.field({ required: false, type: SortOrder }),
});
export const PostMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostMinOrderByAggregateInput>,
    false
  >("PostMinOrderByAggregateInput")
  .implement({
    fields: PostMinOrderByAggregateInputFields,
  });

export const PostSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  authorId: t.field({ required: false, type: SortOrder }),
});
export const PostSumOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostSumOrderByAggregateInput>,
    false
  >("PostSumOrderByAggregateInput")
  .implement({
    fields: PostSumOrderByAggregateInputFields,
  });

export const DateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedDateTimeFilter }),
  _max: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const DateTimeWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeWithAggregatesFilter>,
    false
  >("DateTimeWithAggregatesFilter")
  .implement({
    fields: DateTimeWithAggregatesFilterFields,
  });

export const BoolWithAggregatesFilterFields = (t: any) => ({
  equals: t.boolean({ required: false }),
  not: t.field({ required: false, type: NestedBoolWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedBoolFilter }),
  _max: t.field({ required: false, type: NestedBoolFilter }),
});
export const BoolWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.BoolWithAggregatesFilter>,
    false
  >("BoolWithAggregatesFilter")
  .implement({
    fields: BoolWithAggregatesFilterFields,
  });

export const CategoryCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
});
export const CategoryCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryCountOrderByAggregateInput>,
    false
  >("CategoryCountOrderByAggregateInput")
  .implement({
    fields: CategoryCountOrderByAggregateInputFields,
  });

export const CategoryAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
});
export const CategoryAvgOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryAvgOrderByAggregateInput>,
    false
  >("CategoryAvgOrderByAggregateInput")
  .implement({
    fields: CategoryAvgOrderByAggregateInputFields,
  });

export const CategoryMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
});
export const CategoryMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryMaxOrderByAggregateInput>,
    false
  >("CategoryMaxOrderByAggregateInput")
  .implement({
    fields: CategoryMaxOrderByAggregateInputFields,
  });

export const CategoryMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
});
export const CategoryMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryMinOrderByAggregateInput>,
    false
  >("CategoryMinOrderByAggregateInput")
  .implement({
    fields: CategoryMinOrderByAggregateInputFields,
  });

export const CategorySumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
});
export const CategorySumOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategorySumOrderByAggregateInput>,
    false
  >("CategorySumOrderByAggregateInput")
  .implement({
    fields: CategorySumOrderByAggregateInputFields,
  });

export const PostCreateNestedManyWithoutAuthorInputFields = (t: any) => ({
  create: t.field({ required: false, type: [PostCreateWithoutAuthorInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [PostCreateOrConnectWithoutAuthorInput],
  }),
  createMany: t.field({
    required: false,
    type: PostCreateManyAuthorInputEnvelope,
  }),
  connect: t.field({ required: false, type: [PostWhereUniqueInput] }),
});
export const PostCreateNestedManyWithoutAuthorInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateNestedManyWithoutAuthorInput>,
    false
  >("PostCreateNestedManyWithoutAuthorInput")
  .implement({
    fields: PostCreateNestedManyWithoutAuthorInputFields,
  });

export const ProfileCreateNestedOneWithoutUserInputFields = (t: any) => ({
  create: t.field({ required: false, type: ProfileCreateWithoutUserInput }),
  connectOrCreate: t.field({
    required: false,
    type: ProfileCreateOrConnectWithoutUserInput,
  }),
  connect: t.field({ required: false, type: ProfileWhereUniqueInput }),
});
export const ProfileCreateNestedOneWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileCreateNestedOneWithoutUserInput>,
    false
  >("ProfileCreateNestedOneWithoutUserInput")
  .implement({
    fields: ProfileCreateNestedOneWithoutUserInputFields,
  });

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({ required: false }),
});
export const StringFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>,
    false
  >("StringFieldUpdateOperationsInput")
  .implement({
    fields: StringFieldUpdateOperationsInputFields,
  });

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({ required: false }),
});
export const NullableStringFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>,
    false
  >("NullableStringFieldUpdateOperationsInput")
  .implement({
    fields: NullableStringFieldUpdateOperationsInputFields,
  });

export const EnumRoleFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: Role }),
});
export const EnumRoleFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.EnumRoleFieldUpdateOperationsInput>,
    false
  >("EnumRoleFieldUpdateOperationsInput")
  .implement({
    fields: EnumRoleFieldUpdateOperationsInputFields,
  });

export const PostUpdateManyWithoutAuthorNestedInputFields = (t: any) => ({
  create: t.field({ required: false, type: [PostCreateWithoutAuthorInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [PostCreateOrConnectWithoutAuthorInput],
  }),
  upsert: t.field({
    required: false,
    type: [PostUpsertWithWhereUniqueWithoutAuthorInput],
  }),
  createMany: t.field({
    required: false,
    type: PostCreateManyAuthorInputEnvelope,
  }),
  set: t.field({ required: false, type: [PostWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [PostWhereUniqueInput] }),
  delete: t.field({ required: false, type: [PostWhereUniqueInput] }),
  connect: t.field({ required: false, type: [PostWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [PostUpdateWithWhereUniqueWithoutAuthorInput],
  }),
  updateMany: t.field({
    required: false,
    type: [PostUpdateManyWithWhereWithoutAuthorInput],
  }),
  deleteMany: t.field({ required: false, type: [PostScalarWhereInput] }),
});
export const PostUpdateManyWithoutAuthorNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateManyWithoutAuthorNestedInput>,
    false
  >("PostUpdateManyWithoutAuthorNestedInput")
  .implement({
    fields: PostUpdateManyWithoutAuthorNestedInputFields,
  });

export const ProfileUpdateOneWithoutUserNestedInputFields = (t: any) => ({
  create: t.field({ required: false, type: ProfileCreateWithoutUserInput }),
  connectOrCreate: t.field({
    required: false,
    type: ProfileCreateOrConnectWithoutUserInput,
  }),
  upsert: t.field({ required: false, type: ProfileUpsertWithoutUserInput }),
  disconnect: t.field({ required: false, type: ProfileWhereInput }),
  delete: t.field({ required: false, type: ProfileWhereInput }),
  connect: t.field({ required: false, type: ProfileWhereUniqueInput }),
  update: t.field({
    required: false,
    type: ProfileUpdateToOneWithWhereWithoutUserInput,
  }),
});
export const ProfileUpdateOneWithoutUserNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileUpdateOneWithoutUserNestedInput>,
    false
  >("ProfileUpdateOneWithoutUserNestedInput")
  .implement({
    fields: ProfileUpdateOneWithoutUserNestedInputFields,
  });

export const IntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({ required: false }),
  increment: t.int({ required: false }),
  decrement: t.int({ required: false }),
  multiply: t.int({ required: false }),
  divide: t.int({ required: false }),
});
export const IntFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.IntFieldUpdateOperationsInput>,
    false
  >("IntFieldUpdateOperationsInput")
  .implement({
    fields: IntFieldUpdateOperationsInputFields,
  });

export const UserCreateNestedOneWithoutProfileInputFields = (t: any) => ({
  create: t.field({ required: false, type: UserCreateWithoutProfileInput }),
  connectOrCreate: t.field({
    required: false,
    type: UserCreateOrConnectWithoutProfileInput,
  }),
  connect: t.field({ required: false, type: UserWhereUniqueInput }),
});
export const UserCreateNestedOneWithoutProfileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutProfileInput>,
    false
  >("UserCreateNestedOneWithoutProfileInput")
  .implement({
    fields: UserCreateNestedOneWithoutProfileInputFields,
  });

export const UserUpdateOneRequiredWithoutProfileNestedInputFields = (
  t: any
) => ({
  create: t.field({ required: false, type: UserCreateWithoutProfileInput }),
  connectOrCreate: t.field({
    required: false,
    type: UserCreateOrConnectWithoutProfileInput,
  }),
  upsert: t.field({ required: false, type: UserUpsertWithoutProfileInput }),
  connect: t.field({ required: false, type: UserWhereUniqueInput }),
  update: t.field({
    required: false,
    type: UserUpdateToOneWithWhereWithoutProfileInput,
  }),
});
export const UserUpdateOneRequiredWithoutProfileNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutProfileNestedInput>,
    false
  >("UserUpdateOneRequiredWithoutProfileNestedInput")
  .implement({
    fields: UserUpdateOneRequiredWithoutProfileNestedInputFields,
  });

export const UserCreateNestedOneWithoutPostsInputFields = (t: any) => ({
  create: t.field({ required: false, type: UserCreateWithoutPostsInput }),
  connectOrCreate: t.field({
    required: false,
    type: UserCreateOrConnectWithoutPostsInput,
  }),
  connect: t.field({ required: false, type: UserWhereUniqueInput }),
});
export const UserCreateNestedOneWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutPostsInput>,
    false
  >("UserCreateNestedOneWithoutPostsInput")
  .implement({
    fields: UserCreateNestedOneWithoutPostsInputFields,
  });

export const CategoryCreateNestedManyWithoutPostsInputFields = (t: any) => ({
  create: t.field({ required: false, type: [CategoryCreateWithoutPostsInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [CategoryCreateOrConnectWithoutPostsInput],
  }),
  connect: t.field({ required: false, type: [CategoryWhereUniqueInput] }),
});
export const CategoryCreateNestedManyWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryCreateNestedManyWithoutPostsInput>,
    false
  >("CategoryCreateNestedManyWithoutPostsInput")
  .implement({
    fields: CategoryCreateNestedManyWithoutPostsInputFields,
  });

export const DateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: DateTime }),
});
export const DateTimeFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeFieldUpdateOperationsInput>,
    false
  >("DateTimeFieldUpdateOperationsInput")
  .implement({
    fields: DateTimeFieldUpdateOperationsInputFields,
  });

export const BoolFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.boolean({ required: false }),
});
export const BoolFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.BoolFieldUpdateOperationsInput>,
    false
  >("BoolFieldUpdateOperationsInput")
  .implement({
    fields: BoolFieldUpdateOperationsInputFields,
  });

export const UserUpdateOneRequiredWithoutPostsNestedInputFields = (t: any) => ({
  create: t.field({ required: false, type: UserCreateWithoutPostsInput }),
  connectOrCreate: t.field({
    required: false,
    type: UserCreateOrConnectWithoutPostsInput,
  }),
  upsert: t.field({ required: false, type: UserUpsertWithoutPostsInput }),
  connect: t.field({ required: false, type: UserWhereUniqueInput }),
  update: t.field({
    required: false,
    type: UserUpdateToOneWithWhereWithoutPostsInput,
  }),
});
export const UserUpdateOneRequiredWithoutPostsNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutPostsNestedInput>,
    false
  >("UserUpdateOneRequiredWithoutPostsNestedInput")
  .implement({
    fields: UserUpdateOneRequiredWithoutPostsNestedInputFields,
  });

export const CategoryUpdateManyWithoutPostsNestedInputFields = (t: any) => ({
  create: t.field({ required: false, type: [CategoryCreateWithoutPostsInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [CategoryCreateOrConnectWithoutPostsInput],
  }),
  upsert: t.field({
    required: false,
    type: [CategoryUpsertWithWhereUniqueWithoutPostsInput],
  }),
  set: t.field({ required: false, type: [CategoryWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [CategoryWhereUniqueInput] }),
  delete: t.field({ required: false, type: [CategoryWhereUniqueInput] }),
  connect: t.field({ required: false, type: [CategoryWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [CategoryUpdateWithWhereUniqueWithoutPostsInput],
  }),
  updateMany: t.field({
    required: false,
    type: [CategoryUpdateManyWithWhereWithoutPostsInput],
  }),
  deleteMany: t.field({ required: false, type: [CategoryScalarWhereInput] }),
});
export const CategoryUpdateManyWithoutPostsNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryUpdateManyWithoutPostsNestedInput>,
    false
  >("CategoryUpdateManyWithoutPostsNestedInput")
  .implement({
    fields: CategoryUpdateManyWithoutPostsNestedInputFields,
  });

export const PostCreateNestedManyWithoutCategoriesInputFields = (t: any) => ({
  create: t.field({
    required: false,
    type: [PostCreateWithoutCategoriesInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [PostCreateOrConnectWithoutCategoriesInput],
  }),
  connect: t.field({ required: false, type: [PostWhereUniqueInput] }),
});
export const PostCreateNestedManyWithoutCategoriesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateNestedManyWithoutCategoriesInput>,
    false
  >("PostCreateNestedManyWithoutCategoriesInput")
  .implement({
    fields: PostCreateNestedManyWithoutCategoriesInputFields,
  });

export const PostUpdateManyWithoutCategoriesNestedInputFields = (t: any) => ({
  create: t.field({
    required: false,
    type: [PostCreateWithoutCategoriesInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [PostCreateOrConnectWithoutCategoriesInput],
  }),
  upsert: t.field({
    required: false,
    type: [PostUpsertWithWhereUniqueWithoutCategoriesInput],
  }),
  set: t.field({ required: false, type: [PostWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [PostWhereUniqueInput] }),
  delete: t.field({ required: false, type: [PostWhereUniqueInput] }),
  connect: t.field({ required: false, type: [PostWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [PostUpdateWithWhereUniqueWithoutCategoriesInput],
  }),
  updateMany: t.field({
    required: false,
    type: [PostUpdateManyWithWhereWithoutCategoriesInput],
  }),
  deleteMany: t.field({ required: false, type: [PostScalarWhereInput] }),
});
export const PostUpdateManyWithoutCategoriesNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateManyWithoutCategoriesNestedInput>,
    false
  >("PostUpdateManyWithoutCategoriesNestedInput")
  .implement({
    fields: PostUpdateManyWithoutCategoriesNestedInputFields,
  });

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntFilter }),
});
export const NestedIntFilter = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>, false>(
    "NestedIntFilter"
  )
  .implement({
    fields: NestedIntFilterFields,
  });

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringFilter }),
});
export const NestedStringFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>,
    false
  >("NestedStringFilter")
  .implement({
    fields: NestedStringFilterFields,
  });

export const NestedStringNullableFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const NestedStringNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableFilter>,
    false
  >("NestedStringNullableFilter")
  .implement({
    fields: NestedStringNullableFilterFields,
  });

export const NestedEnumRoleFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Role }),
  in: t.field({ required: false, type: [Role] }),
  notIn: t.field({ required: false, type: [Role] }),
  not: t.field({ required: false, type: Role }),
});
export const NestedEnumRoleFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedEnumRoleFilter>,
    false
  >("NestedEnumRoleFilter")
  .implement({
    fields: NestedEnumRoleFilterFields,
  });

export const NestedIntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _avg: t.field({ required: false, type: NestedFloatFilter }),
  _sum: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedIntFilter }),
  _max: t.field({ required: false, type: NestedIntFilter }),
});
export const NestedIntWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedIntWithAggregatesFilter>,
    false
  >("NestedIntWithAggregatesFilter")
  .implement({
    fields: NestedIntWithAggregatesFilterFields,
  });

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({ required: false }),
  in: t.floatList({ required: false }),
  notIn: t.floatList({ required: false }),
  lt: t.float({ required: false }),
  lte: t.float({ required: false }),
  gt: t.float({ required: false }),
  gte: t.float({ required: false }),
  not: t.field({ required: false, type: NestedFloatFilter }),
});
export const NestedFloatFilter = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>, false>(
    "NestedFloatFilter"
  )
  .implement({
    fields: NestedFloatFilterFields,
  });

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedStringFilter }),
  _max: t.field({ required: false, type: NestedStringFilter }),
});
export const NestedStringWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>,
    false
  >("NestedStringWithAggregatesFilter")
  .implement({
    fields: NestedStringWithAggregatesFilterFields,
  });

export const NestedStringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({
    required: false,
    type: NestedStringNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedStringNullableFilter }),
  _max: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const NestedStringNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableWithAggregatesFilter>,
    false
  >("NestedStringNullableWithAggregatesFilter")
  .implement({
    fields: NestedStringNullableWithAggregatesFilterFields,
  });

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntNullableFilter }),
});
export const NestedIntNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>,
    false
  >("NestedIntNullableFilter")
  .implement({
    fields: NestedIntNullableFilterFields,
  });

export const NestedEnumRoleWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Role }),
  in: t.field({ required: false, type: [Role] }),
  notIn: t.field({ required: false, type: [Role] }),
  not: t.field({ required: false, type: Role }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedEnumRoleFilter }),
  _max: t.field({ required: false, type: NestedEnumRoleFilter }),
});
export const NestedEnumRoleWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedEnumRoleWithAggregatesFilter>,
    false
  >("NestedEnumRoleWithAggregatesFilter")
  .implement({
    fields: NestedEnumRoleWithAggregatesFilterFields,
  });

export const NestedDateTimeFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const NestedDateTimeFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeFilter>,
    false
  >("NestedDateTimeFilter")
  .implement({
    fields: NestedDateTimeFilterFields,
  });

export const NestedBoolFilterFields = (t: any) => ({
  equals: t.boolean({ required: false }),
  not: t.field({ required: false, type: NestedBoolFilter }),
});
export const NestedBoolFilter = builder
  .inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedBoolFilter>, false>(
    "NestedBoolFilter"
  )
  .implement({
    fields: NestedBoolFilterFields,
  });

export const NestedDateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedDateTimeFilter }),
  _max: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const NestedDateTimeWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeWithAggregatesFilter>,
    false
  >("NestedDateTimeWithAggregatesFilter")
  .implement({
    fields: NestedDateTimeWithAggregatesFilterFields,
  });

export const NestedBoolWithAggregatesFilterFields = (t: any) => ({
  equals: t.boolean({ required: false }),
  not: t.field({ required: false, type: NestedBoolWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedBoolFilter }),
  _max: t.field({ required: false, type: NestedBoolFilter }),
});
export const NestedBoolWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedBoolWithAggregatesFilter>,
    false
  >("NestedBoolWithAggregatesFilter")
  .implement({
    fields: NestedBoolWithAggregatesFilterFields,
  });

export const PostCreateWithoutAuthorInputFields = (t: any) => ({
  createdAt: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  title: t.string({ required: true }),
  published: t.boolean({ required: false }),
  categories: t.field({
    required: false,
    type: CategoryCreateNestedManyWithoutPostsInput,
  }),
});
export const PostCreateWithoutAuthorInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateWithoutAuthorInput>,
    false
  >("PostCreateWithoutAuthorInput")
  .implement({
    fields: PostCreateWithoutAuthorInputFields,
  });

export const PostCreateOrConnectWithoutAuthorInputFields = (t: any) => ({
  where: t.field({ required: true, type: PostWhereUniqueInput }),
  create: t.field({ required: true, type: PostCreateWithoutAuthorInput }),
});
export const PostCreateOrConnectWithoutAuthorInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateOrConnectWithoutAuthorInput>,
    false
  >("PostCreateOrConnectWithoutAuthorInput")
  .implement({
    fields: PostCreateOrConnectWithoutAuthorInputFields,
  });

export const PostCreateManyAuthorInputEnvelopeFields = (t: any) => ({
  data: t.field({ required: true, type: [PostCreateManyAuthorInput] }),
  skipDuplicates: t.boolean({ required: false }),
});
export const PostCreateManyAuthorInputEnvelope = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateManyAuthorInputEnvelope>,
    false
  >("PostCreateManyAuthorInputEnvelope")
  .implement({
    fields: PostCreateManyAuthorInputEnvelopeFields,
  });

export const ProfileCreateWithoutUserInputFields = (t: any) => ({
  bio: t.string({ required: true }),
});
export const ProfileCreateWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileCreateWithoutUserInput>,
    false
  >("ProfileCreateWithoutUserInput")
  .implement({
    fields: ProfileCreateWithoutUserInputFields,
  });

export const ProfileCreateOrConnectWithoutUserInputFields = (t: any) => ({
  where: t.field({ required: true, type: ProfileWhereUniqueInput }),
  create: t.field({ required: true, type: ProfileCreateWithoutUserInput }),
});
export const ProfileCreateOrConnectWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileCreateOrConnectWithoutUserInput>,
    false
  >("ProfileCreateOrConnectWithoutUserInput")
  .implement({
    fields: ProfileCreateOrConnectWithoutUserInputFields,
  });

export const PostUpsertWithWhereUniqueWithoutAuthorInputFields = (t: any) => ({
  where: t.field({ required: true, type: PostWhereUniqueInput }),
  update: t.field({ required: true, type: PostUpdateWithoutAuthorInput }),
  create: t.field({ required: true, type: PostCreateWithoutAuthorInput }),
});
export const PostUpsertWithWhereUniqueWithoutAuthorInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput>,
    false
  >("PostUpsertWithWhereUniqueWithoutAuthorInput")
  .implement({
    fields: PostUpsertWithWhereUniqueWithoutAuthorInputFields,
  });

export const PostUpdateWithWhereUniqueWithoutAuthorInputFields = (t: any) => ({
  where: t.field({ required: true, type: PostWhereUniqueInput }),
  data: t.field({ required: true, type: PostUpdateWithoutAuthorInput }),
});
export const PostUpdateWithWhereUniqueWithoutAuthorInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput>,
    false
  >("PostUpdateWithWhereUniqueWithoutAuthorInput")
  .implement({
    fields: PostUpdateWithWhereUniqueWithoutAuthorInputFields,
  });

export const PostUpdateManyWithWhereWithoutAuthorInputFields = (t: any) => ({
  where: t.field({ required: true, type: PostScalarWhereInput }),
  data: t.field({ required: true, type: PostUpdateManyMutationInput }),
});
export const PostUpdateManyWithWhereWithoutAuthorInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateManyWithWhereWithoutAuthorInput>,
    false
  >("PostUpdateManyWithWhereWithoutAuthorInput")
  .implement({
    fields: PostUpdateManyWithWhereWithoutAuthorInputFields,
  });

export const PostScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [PostScalarWhereInput] }),
  OR: t.field({ required: false, type: [PostScalarWhereInput] }),
  NOT: t.field({ required: false, type: [PostScalarWhereInput] }),
  id: t.field({ required: false, type: IntFilter }),
  createdAt: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeFilter }),
  title: t.field({ required: false, type: StringFilter }),
  published: t.field({ required: false, type: BoolFilter }),
  authorId: t.field({ required: false, type: IntFilter }),
});
export const PostScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostScalarWhereInput>,
    false
  >("PostScalarWhereInput")
  .implement({
    fields: PostScalarWhereInputFields,
  });

export const ProfileUpsertWithoutUserInputFields = (t: any) => ({
  update: t.field({ required: true, type: ProfileUpdateWithoutUserInput }),
  create: t.field({ required: true, type: ProfileCreateWithoutUserInput }),
  where: t.field({ required: false, type: ProfileWhereInput }),
});
export const ProfileUpsertWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileUpsertWithoutUserInput>,
    false
  >("ProfileUpsertWithoutUserInput")
  .implement({
    fields: ProfileUpsertWithoutUserInputFields,
  });

export const ProfileUpdateToOneWithWhereWithoutUserInputFields = (t: any) => ({
  where: t.field({ required: false, type: ProfileWhereInput }),
  data: t.field({ required: true, type: ProfileUpdateWithoutUserInput }),
});
export const ProfileUpdateToOneWithWhereWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput>,
    false
  >("ProfileUpdateToOneWithWhereWithoutUserInput")
  .implement({
    fields: ProfileUpdateToOneWithWhereWithoutUserInputFields,
  });

export const ProfileUpdateWithoutUserInputFields = (t: any) => ({
  bio: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
});
export const ProfileUpdateWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ProfileUpdateWithoutUserInput>,
    false
  >("ProfileUpdateWithoutUserInput")
  .implement({
    fields: ProfileUpdateWithoutUserInputFields,
  });

export const UserCreateWithoutProfileInputFields = (t: any) => ({
  email: t.string({ required: true }),
  name: t.string({ required: false }),
  role: t.field({ required: false, type: Role }),
  posts: t.field({
    required: false,
    type: PostCreateNestedManyWithoutAuthorInput,
  }),
});
export const UserCreateWithoutProfileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutProfileInput>,
    false
  >("UserCreateWithoutProfileInput")
  .implement({
    fields: UserCreateWithoutProfileInputFields,
  });

export const UserCreateOrConnectWithoutProfileInputFields = (t: any) => ({
  where: t.field({ required: true, type: UserWhereUniqueInput }),
  create: t.field({ required: true, type: UserCreateWithoutProfileInput }),
});
export const UserCreateOrConnectWithoutProfileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutProfileInput>,
    false
  >("UserCreateOrConnectWithoutProfileInput")
  .implement({
    fields: UserCreateOrConnectWithoutProfileInputFields,
  });

export const UserUpsertWithoutProfileInputFields = (t: any) => ({
  update: t.field({ required: true, type: UserUpdateWithoutProfileInput }),
  create: t.field({ required: true, type: UserCreateWithoutProfileInput }),
  where: t.field({ required: false, type: UserWhereInput }),
});
export const UserUpsertWithoutProfileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutProfileInput>,
    false
  >("UserUpsertWithoutProfileInput")
  .implement({
    fields: UserUpsertWithoutProfileInputFields,
  });

export const UserUpdateToOneWithWhereWithoutProfileInputFields = (t: any) => ({
  where: t.field({ required: false, type: UserWhereInput }),
  data: t.field({ required: true, type: UserUpdateWithoutProfileInput }),
});
export const UserUpdateToOneWithWhereWithoutProfileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutProfileInput>,
    false
  >("UserUpdateToOneWithWhereWithoutProfileInput")
  .implement({
    fields: UserUpdateToOneWithWhereWithoutProfileInputFields,
  });

export const UserUpdateWithoutProfileInputFields = (t: any) => ({
  email: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  role: t.field({ required: false, type: EnumRoleFieldUpdateOperationsInput }),
  posts: t.field({
    required: false,
    type: PostUpdateManyWithoutAuthorNestedInput,
  }),
});
export const UserUpdateWithoutProfileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutProfileInput>,
    false
  >("UserUpdateWithoutProfileInput")
  .implement({
    fields: UserUpdateWithoutProfileInputFields,
  });

export const UserCreateWithoutPostsInputFields = (t: any) => ({
  email: t.string({ required: true }),
  name: t.string({ required: false }),
  role: t.field({ required: false, type: Role }),
  profile: t.field({
    required: false,
    type: ProfileCreateNestedOneWithoutUserInput,
  }),
});
export const UserCreateWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutPostsInput>,
    false
  >("UserCreateWithoutPostsInput")
  .implement({
    fields: UserCreateWithoutPostsInputFields,
  });

export const UserCreateOrConnectWithoutPostsInputFields = (t: any) => ({
  where: t.field({ required: true, type: UserWhereUniqueInput }),
  create: t.field({ required: true, type: UserCreateWithoutPostsInput }),
});
export const UserCreateOrConnectWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutPostsInput>,
    false
  >("UserCreateOrConnectWithoutPostsInput")
  .implement({
    fields: UserCreateOrConnectWithoutPostsInputFields,
  });

export const CategoryCreateWithoutPostsInputFields = (t: any) => ({
  name: t.string({ required: true }),
});
export const CategoryCreateWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryCreateWithoutPostsInput>,
    false
  >("CategoryCreateWithoutPostsInput")
  .implement({
    fields: CategoryCreateWithoutPostsInputFields,
  });

export const CategoryCreateOrConnectWithoutPostsInputFields = (t: any) => ({
  where: t.field({ required: true, type: CategoryWhereUniqueInput }),
  create: t.field({ required: true, type: CategoryCreateWithoutPostsInput }),
});
export const CategoryCreateOrConnectWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryCreateOrConnectWithoutPostsInput>,
    false
  >("CategoryCreateOrConnectWithoutPostsInput")
  .implement({
    fields: CategoryCreateOrConnectWithoutPostsInputFields,
  });

export const UserUpsertWithoutPostsInputFields = (t: any) => ({
  update: t.field({ required: true, type: UserUpdateWithoutPostsInput }),
  create: t.field({ required: true, type: UserCreateWithoutPostsInput }),
  where: t.field({ required: false, type: UserWhereInput }),
});
export const UserUpsertWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutPostsInput>,
    false
  >("UserUpsertWithoutPostsInput")
  .implement({
    fields: UserUpsertWithoutPostsInputFields,
  });

export const UserUpdateToOneWithWhereWithoutPostsInputFields = (t: any) => ({
  where: t.field({ required: false, type: UserWhereInput }),
  data: t.field({ required: true, type: UserUpdateWithoutPostsInput }),
});
export const UserUpdateToOneWithWhereWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutPostsInput>,
    false
  >("UserUpdateToOneWithWhereWithoutPostsInput")
  .implement({
    fields: UserUpdateToOneWithWhereWithoutPostsInputFields,
  });

export const UserUpdateWithoutPostsInputFields = (t: any) => ({
  email: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  role: t.field({ required: false, type: EnumRoleFieldUpdateOperationsInput }),
  profile: t.field({
    required: false,
    type: ProfileUpdateOneWithoutUserNestedInput,
  }),
});
export const UserUpdateWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutPostsInput>,
    false
  >("UserUpdateWithoutPostsInput")
  .implement({
    fields: UserUpdateWithoutPostsInputFields,
  });

export const CategoryUpsertWithWhereUniqueWithoutPostsInputFields = (
  t: any
) => ({
  where: t.field({ required: true, type: CategoryWhereUniqueInput }),
  update: t.field({ required: true, type: CategoryUpdateWithoutPostsInput }),
  create: t.field({ required: true, type: CategoryCreateWithoutPostsInput }),
});
export const CategoryUpsertWithWhereUniqueWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryUpsertWithWhereUniqueWithoutPostsInput>,
    false
  >("CategoryUpsertWithWhereUniqueWithoutPostsInput")
  .implement({
    fields: CategoryUpsertWithWhereUniqueWithoutPostsInputFields,
  });

export const CategoryUpdateWithWhereUniqueWithoutPostsInputFields = (
  t: any
) => ({
  where: t.field({ required: true, type: CategoryWhereUniqueInput }),
  data: t.field({ required: true, type: CategoryUpdateWithoutPostsInput }),
});
export const CategoryUpdateWithWhereUniqueWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryUpdateWithWhereUniqueWithoutPostsInput>,
    false
  >("CategoryUpdateWithWhereUniqueWithoutPostsInput")
  .implement({
    fields: CategoryUpdateWithWhereUniqueWithoutPostsInputFields,
  });

export const CategoryUpdateManyWithWhereWithoutPostsInputFields = (t: any) => ({
  where: t.field({ required: true, type: CategoryScalarWhereInput }),
  data: t.field({ required: true, type: CategoryUpdateManyMutationInput }),
});
export const CategoryUpdateManyWithWhereWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryUpdateManyWithWhereWithoutPostsInput>,
    false
  >("CategoryUpdateManyWithWhereWithoutPostsInput")
  .implement({
    fields: CategoryUpdateManyWithWhereWithoutPostsInputFields,
  });

export const CategoryScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [CategoryScalarWhereInput] }),
  OR: t.field({ required: false, type: [CategoryScalarWhereInput] }),
  NOT: t.field({ required: false, type: [CategoryScalarWhereInput] }),
  id: t.field({ required: false, type: IntFilter }),
  name: t.field({ required: false, type: StringFilter }),
});
export const CategoryScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryScalarWhereInput>,
    false
  >("CategoryScalarWhereInput")
  .implement({
    fields: CategoryScalarWhereInputFields,
  });

export const PostCreateWithoutCategoriesInputFields = (t: any) => ({
  createdAt: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  title: t.string({ required: true }),
  published: t.boolean({ required: false }),
  author: t.field({
    required: true,
    type: UserCreateNestedOneWithoutPostsInput,
  }),
});
export const PostCreateWithoutCategoriesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateWithoutCategoriesInput>,
    false
  >("PostCreateWithoutCategoriesInput")
  .implement({
    fields: PostCreateWithoutCategoriesInputFields,
  });

export const PostCreateOrConnectWithoutCategoriesInputFields = (t: any) => ({
  where: t.field({ required: true, type: PostWhereUniqueInput }),
  create: t.field({ required: true, type: PostCreateWithoutCategoriesInput }),
});
export const PostCreateOrConnectWithoutCategoriesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateOrConnectWithoutCategoriesInput>,
    false
  >("PostCreateOrConnectWithoutCategoriesInput")
  .implement({
    fields: PostCreateOrConnectWithoutCategoriesInputFields,
  });

export const PostUpsertWithWhereUniqueWithoutCategoriesInputFields = (
  t: any
) => ({
  where: t.field({ required: true, type: PostWhereUniqueInput }),
  update: t.field({ required: true, type: PostUpdateWithoutCategoriesInput }),
  create: t.field({ required: true, type: PostCreateWithoutCategoriesInput }),
});
export const PostUpsertWithWhereUniqueWithoutCategoriesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpsertWithWhereUniqueWithoutCategoriesInput>,
    false
  >("PostUpsertWithWhereUniqueWithoutCategoriesInput")
  .implement({
    fields: PostUpsertWithWhereUniqueWithoutCategoriesInputFields,
  });

export const PostUpdateWithWhereUniqueWithoutCategoriesInputFields = (
  t: any
) => ({
  where: t.field({ required: true, type: PostWhereUniqueInput }),
  data: t.field({ required: true, type: PostUpdateWithoutCategoriesInput }),
});
export const PostUpdateWithWhereUniqueWithoutCategoriesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateWithWhereUniqueWithoutCategoriesInput>,
    false
  >("PostUpdateWithWhereUniqueWithoutCategoriesInput")
  .implement({
    fields: PostUpdateWithWhereUniqueWithoutCategoriesInputFields,
  });

export const PostUpdateManyWithWhereWithoutCategoriesInputFields = (
  t: any
) => ({
  where: t.field({ required: true, type: PostScalarWhereInput }),
  data: t.field({ required: true, type: PostUpdateManyMutationInput }),
});
export const PostUpdateManyWithWhereWithoutCategoriesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateManyWithWhereWithoutCategoriesInput>,
    false
  >("PostUpdateManyWithWhereWithoutCategoriesInput")
  .implement({
    fields: PostUpdateManyWithWhereWithoutCategoriesInputFields,
  });

export const PostCreateManyAuthorInputFields = (t: any) => ({
  id: t.int({ required: false }),
  createdAt: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  title: t.string({ required: true }),
  published: t.boolean({ required: false }),
});
export const PostCreateManyAuthorInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostCreateManyAuthorInput>,
    false
  >("PostCreateManyAuthorInput")
  .implement({
    fields: PostCreateManyAuthorInputFields,
  });

export const PostUpdateWithoutAuthorInputFields = (t: any) => ({
  createdAt: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  published: t.field({ required: false, type: BoolFieldUpdateOperationsInput }),
  categories: t.field({
    required: false,
    type: CategoryUpdateManyWithoutPostsNestedInput,
  }),
});
export const PostUpdateWithoutAuthorInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateWithoutAuthorInput>,
    false
  >("PostUpdateWithoutAuthorInput")
  .implement({
    fields: PostUpdateWithoutAuthorInputFields,
  });

export const CategoryUpdateWithoutPostsInputFields = (t: any) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
});
export const CategoryUpdateWithoutPostsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.CategoryUpdateWithoutPostsInput>,
    false
  >("CategoryUpdateWithoutPostsInput")
  .implement({
    fields: CategoryUpdateWithoutPostsInputFields,
  });

export const PostUpdateWithoutCategoriesInputFields = (t: any) => ({
  createdAt: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  published: t.field({ required: false, type: BoolFieldUpdateOperationsInput }),
  author: t.field({
    required: false,
    type: UserUpdateOneRequiredWithoutPostsNestedInput,
  }),
});
export const PostUpdateWithoutCategoriesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.PostUpdateWithoutCategoriesInput>,
    false
  >("PostUpdateWithoutCategoriesInput")
  .implement({
    fields: PostUpdateWithoutCategoriesInputFields,
  });
