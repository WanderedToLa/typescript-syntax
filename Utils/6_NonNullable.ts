type None = string | null | undefined | boolean | number;
type NotNone = NonNullable<None>; // string | boolean | number