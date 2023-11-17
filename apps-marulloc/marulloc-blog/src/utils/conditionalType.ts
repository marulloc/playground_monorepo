export type AsyncFunctionValueType<T> = T extends Promise<infer U> ? U : T;
