/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model assistant
 *
 */
export type assistant = $Result.DefaultSelection<Prisma.$assistantPayload>;
/**
 * Model business
 *
 */
export type business = $Result.DefaultSelection<Prisma.$businessPayload>;
/**
 * Model pdf
 *
 */
export type pdf = $Result.DefaultSelection<Prisma.$pdfPayload>;
/**
 * Model reminder
 *
 */
export type reminder = $Result.DefaultSelection<Prisma.$reminderPayload>;
/**
 * Model task
 *
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assistants
 * const assistants = await prisma.assistant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Assistants
   * const assistants = await prisma.assistant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.assistant`: Exposes CRUD operations for the **assistant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Assistants
   * const assistants = await prisma.assistant.findMany()
   * ```
   */
  get assistant(): Prisma.assistantDelegate<ExtArgs>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **business** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   */
  get business(): Prisma.businessDelegate<ExtArgs>;

  /**
   * `prisma.pdf`: Exposes CRUD operations for the **pdf** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Pdfs
   * const pdfs = await prisma.pdf.findMany()
   * ```
   */
  get pdf(): Prisma.pdfDelegate<ExtArgs>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **reminder** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reminders
   * const reminders = await prisma.reminder.findMany()
   * ```
   */
  get reminder(): Prisma.reminderDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   */
  get task(): Prisma.taskDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    assistant: 'assistant';
    business: 'business';
    pdf: 'pdf';
    reminder: 'reminder';
    task: 'task';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'assistant' | 'business' | 'pdf' | 'reminder' | 'task' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      assistant: {
        payload: Prisma.$assistantPayload<ExtArgs>;
        fields: Prisma.assistantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.assistantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.assistantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload>;
          };
          findFirst: {
            args: Prisma.assistantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.assistantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload>;
          };
          findMany: {
            args: Prisma.assistantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload>[];
          };
          create: {
            args: Prisma.assistantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload>;
          };
          createMany: {
            args: Prisma.assistantCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.assistantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload>;
          };
          update: {
            args: Prisma.assistantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload>;
          };
          deleteMany: {
            args: Prisma.assistantDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.assistantUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.assistantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assistantPayload>;
          };
          aggregate: {
            args: Prisma.AssistantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAssistant>;
          };
          groupBy: {
            args: Prisma.assistantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AssistantGroupByOutputType>[];
          };
          count: {
            args: Prisma.assistantCountArgs<ExtArgs>;
            result: $Utils.Optional<AssistantCountAggregateOutputType> | number;
          };
        };
      };
      business: {
        payload: Prisma.$businessPayload<ExtArgs>;
        fields: Prisma.businessFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.businessFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.businessFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          findFirst: {
            args: Prisma.businessFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.businessFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          findMany: {
            args: Prisma.businessFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[];
          };
          create: {
            args: Prisma.businessCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          createMany: {
            args: Prisma.businessCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.businessDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          update: {
            args: Prisma.businessUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          deleteMany: {
            args: Prisma.businessDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.businessUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.businessUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness>;
          };
          groupBy: {
            args: Prisma.businessGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BusinessGroupByOutputType>[];
          };
          count: {
            args: Prisma.businessCountArgs<ExtArgs>;
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number;
          };
        };
      };
      pdf: {
        payload: Prisma.$pdfPayload<ExtArgs>;
        fields: Prisma.pdfFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.pdfFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.pdfFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>;
          };
          findFirst: {
            args: Prisma.pdfFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.pdfFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>;
          };
          findMany: {
            args: Prisma.pdfFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>[];
          };
          create: {
            args: Prisma.pdfCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>;
          };
          createMany: {
            args: Prisma.pdfCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.pdfDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>;
          };
          update: {
            args: Prisma.pdfUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>;
          };
          deleteMany: {
            args: Prisma.pdfDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.pdfUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.pdfUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>;
          };
          aggregate: {
            args: Prisma.PdfAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePdf>;
          };
          groupBy: {
            args: Prisma.pdfGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PdfGroupByOutputType>[];
          };
          count: {
            args: Prisma.pdfCountArgs<ExtArgs>;
            result: $Utils.Optional<PdfCountAggregateOutputType> | number;
          };
        };
      };
      reminder: {
        payload: Prisma.$reminderPayload<ExtArgs>;
        fields: Prisma.reminderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reminderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reminderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload>;
          };
          findFirst: {
            args: Prisma.reminderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reminderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload>;
          };
          findMany: {
            args: Prisma.reminderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload>[];
          };
          create: {
            args: Prisma.reminderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload>;
          };
          createMany: {
            args: Prisma.reminderCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reminderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload>;
          };
          update: {
            args: Prisma.reminderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload>;
          };
          deleteMany: {
            args: Prisma.reminderDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reminderUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reminderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reminderPayload>;
          };
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReminder>;
          };
          groupBy: {
            args: Prisma.reminderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReminderGroupByOutputType>[];
          };
          count: {
            args: Prisma.reminderCountArgs<ExtArgs>;
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number;
          };
        };
      };
      task: {
        payload: Prisma.$taskPayload<ExtArgs>;
        fields: Prisma.taskFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[];
          };
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTask>;
          };
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TaskGroupByOutputType>[];
          };
          count: {
            args: Prisma.taskCountArgs<ExtArgs>;
            result: $Utils.Optional<TaskCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AssistantCountOutputType
   */

  export type AssistantCountOutputType = {
    task: number;
  };

  export type AssistantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | AssistantCountOutputTypeCountTaskArgs;
  };

  // Custom InputTypes

  /**
   * AssistantCountOutputType without action
   */
  export type AssistantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the AssistantCountOutputType
       */
      select?: AssistantCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * AssistantCountOutputType without action
   */
  export type AssistantCountOutputTypeCountTaskArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: taskWhereInput;
  };

  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    pdf: number;
  };

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf?: boolean | BusinessCountOutputTypeCountPdfArgs;
  };

  // Custom InputTypes

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: pdfWhereInput;
    };

  /**
   * Count Type PdfCountOutputType
   */

  export type PdfCountOutputType = {
    assistant: number;
  };

  export type PdfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assistant?: boolean | PdfCountOutputTypeCountAssistantArgs;
  };

  // Custom InputTypes

  /**
   * PdfCountOutputType without action
   */
  export type PdfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PdfCountOutputType
     */
    select?: PdfCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PdfCountOutputType without action
   */
  export type PdfCountOutputTypeCountAssistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: assistantWhereInput;
    };

  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    reminder: number;
  };

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminder?: boolean | TaskCountOutputTypeCountReminderArgs;
  };

  // Custom InputTypes

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: reminderWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assistant: number;
    pdf: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assistant?: boolean | UserCountOutputTypeCountAssistantArgs;
    pdf?: boolean | UserCountOutputTypeCountPdfArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssistantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: assistantWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pdfWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model assistant
   */

  export type AggregateAssistant = {
    _count: AssistantCountAggregateOutputType | null;
    _min: AssistantMinAggregateOutputType | null;
    _max: AssistantMaxAggregateOutputType | null;
  };

  export type AssistantMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    status: string | null;
    pdf_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AssistantMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    status: string | null;
    pdf_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AssistantCountAggregateOutputType = {
    id: number;
    name: number;
    status: number;
    pdf_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AssistantMinAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    pdf_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AssistantMaxAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    pdf_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AssistantCountAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    pdf_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AssistantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assistant to aggregate.
     */
    where?: assistantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assistants to fetch.
     */
    orderBy?: assistantOrderByWithRelationInput | assistantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: assistantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assistants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assistants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned assistants
     **/
    _count?: true | AssistantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AssistantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AssistantMaxAggregateInputType;
  };

  export type GetAssistantAggregateType<T extends AssistantAggregateArgs> = {
    [P in keyof T & keyof AggregateAssistant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssistant[P]>
      : GetScalarType<T[P], AggregateAssistant[P]>;
  };

  export type assistantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assistantWhereInput;
    orderBy?: assistantOrderByWithAggregationInput | assistantOrderByWithAggregationInput[];
    by: AssistantScalarFieldEnum[] | AssistantScalarFieldEnum;
    having?: assistantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssistantCountAggregateInputType | true;
    _min?: AssistantMinAggregateInputType;
    _max?: AssistantMaxAggregateInputType;
  };

  export type AssistantGroupByOutputType = {
    id: string;
    name: string;
    status: string;
    pdf_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: AssistantCountAggregateOutputType | null;
    _min: AssistantMinAggregateOutputType | null;
    _max: AssistantMaxAggregateOutputType | null;
  };

  type GetAssistantGroupByPayload<T extends assistantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssistantGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AssistantGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AssistantGroupByOutputType[P]>
          : GetScalarType<T[P], AssistantGroupByOutputType[P]>;
      }
    >
  >;

  export type assistantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        status?: boolean;
        pdf_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        pdf?: boolean | pdfDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        task?: boolean | assistant$taskArgs<ExtArgs>;
        _count?: boolean | AssistantCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['assistant']
    >;

  export type assistantSelectScalar = {
    id?: boolean;
    name?: boolean;
    status?: boolean;
    pdf_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type assistantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf?: boolean | pdfDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    task?: boolean | assistant$taskArgs<ExtArgs>;
    _count?: boolean | AssistantCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $assistantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'assistant';
    objects: {
      pdf: Prisma.$pdfPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      task: Prisma.$taskPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        status: string;
        pdf_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['assistant']
    >;
    composites: {};
  };

  type assistantGetPayload<S extends boolean | null | undefined | assistantDefaultArgs> = $Result.GetResult<
    Prisma.$assistantPayload,
    S
  >;

  type assistantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    assistantFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AssistantCountAggregateInputType | true;
  };

  export interface assistantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assistant']; meta: { name: 'assistant' } };
    /**
     * Find zero or one Assistant that matches the filter.
     * @param {assistantFindUniqueArgs} args - Arguments to find a Assistant
     * @example
     * // Get one Assistant
     * const assistant = await prisma.assistant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends assistantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, assistantFindUniqueArgs<ExtArgs>>,
    ): Prisma__assistantClient<
      $Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Assistant that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {assistantFindUniqueOrThrowArgs} args - Arguments to find a Assistant
     * @example
     * // Get one Assistant
     * const assistant = await prisma.assistant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends assistantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, assistantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__assistantClient<
      $Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Assistant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assistantFindFirstArgs} args - Arguments to find a Assistant
     * @example
     * // Get one Assistant
     * const assistant = await prisma.assistant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends assistantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, assistantFindFirstArgs<ExtArgs>>,
    ): Prisma__assistantClient<
      $Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Assistant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assistantFindFirstOrThrowArgs} args - Arguments to find a Assistant
     * @example
     * // Get one Assistant
     * const assistant = await prisma.assistant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends assistantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, assistantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__assistantClient<
      $Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Assistants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assistantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assistants
     * const assistants = await prisma.assistant.findMany()
     *
     * // Get first 10 Assistants
     * const assistants = await prisma.assistant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const assistantWithIdOnly = await prisma.assistant.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends assistantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assistantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Assistant.
     * @param {assistantCreateArgs} args - Arguments to create a Assistant.
     * @example
     * // Create one Assistant
     * const Assistant = await prisma.assistant.create({
     *   data: {
     *     // ... data to create a Assistant
     *   }
     * })
     *
     **/
    create<T extends assistantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, assistantCreateArgs<ExtArgs>>,
    ): Prisma__assistantClient<$Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Assistants.
     *     @param {assistantCreateManyArgs} args - Arguments to create many Assistants.
     *     @example
     *     // Create many Assistants
     *     const assistant = await prisma.assistant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends assistantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assistantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Assistant.
     * @param {assistantDeleteArgs} args - Arguments to delete one Assistant.
     * @example
     * // Delete one Assistant
     * const Assistant = await prisma.assistant.delete({
     *   where: {
     *     // ... filter to delete one Assistant
     *   }
     * })
     *
     **/
    delete<T extends assistantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, assistantDeleteArgs<ExtArgs>>,
    ): Prisma__assistantClient<$Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Assistant.
     * @param {assistantUpdateArgs} args - Arguments to update one Assistant.
     * @example
     * // Update one Assistant
     * const assistant = await prisma.assistant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends assistantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, assistantUpdateArgs<ExtArgs>>,
    ): Prisma__assistantClient<$Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Assistants.
     * @param {assistantDeleteManyArgs} args - Arguments to filter Assistants to delete.
     * @example
     * // Delete a few Assistants
     * const { count } = await prisma.assistant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends assistantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assistantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Assistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assistantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assistants
     * const assistant = await prisma.assistant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends assistantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, assistantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Assistant.
     * @param {assistantUpsertArgs} args - Arguments to update or create a Assistant.
     * @example
     * // Update or create a Assistant
     * const assistant = await prisma.assistant.upsert({
     *   create: {
     *     // ... data to create a Assistant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assistant we want to update
     *   }
     * })
     **/
    upsert<T extends assistantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, assistantUpsertArgs<ExtArgs>>,
    ): Prisma__assistantClient<$Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Assistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assistantCountArgs} args - Arguments to filter Assistants to count.
     * @example
     * // Count the number of Assistants
     * const count = await prisma.assistant.count({
     *   where: {
     *     // ... the filter for the Assistants we want to count
     *   }
     * })
     **/
    count<T extends assistantCountArgs>(
      args?: Subset<T, assistantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssistantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Assistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AssistantAggregateArgs>(
      args: Subset<T, AssistantAggregateArgs>,
    ): Prisma.PrismaPromise<GetAssistantAggregateType<T>>;

    /**
     * Group by Assistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assistantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends assistantGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assistantGroupByArgs['orderBy'] }
        : { orderBy?: assistantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, assistantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAssistantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the assistant model
     */
    readonly fields: assistantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assistant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assistantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pdf<T extends pdfDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, pdfDefaultArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    task<T extends assistant$taskArgs<ExtArgs> = {}>(
      args?: Subset<T, assistant$taskArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the assistant model
   */
  interface assistantFieldRefs {
    readonly id: FieldRef<'assistant', 'String'>;
    readonly name: FieldRef<'assistant', 'String'>;
    readonly status: FieldRef<'assistant', 'String'>;
    readonly pdf_id: FieldRef<'assistant', 'String'>;
    readonly user_id: FieldRef<'assistant', 'String'>;
    readonly created_at: FieldRef<'assistant', 'DateTime'>;
    readonly updated_at: FieldRef<'assistant', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * assistant findUnique
   */
  export type assistantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * Filter, which assistant to fetch.
     */
    where: assistantWhereUniqueInput;
  };

  /**
   * assistant findUniqueOrThrow
   */
  export type assistantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * Filter, which assistant to fetch.
     */
    where: assistantWhereUniqueInput;
  };

  /**
   * assistant findFirst
   */
  export type assistantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * Filter, which assistant to fetch.
     */
    where?: assistantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assistants to fetch.
     */
    orderBy?: assistantOrderByWithRelationInput | assistantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for assistants.
     */
    cursor?: assistantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assistants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assistants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of assistants.
     */
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[];
  };

  /**
   * assistant findFirstOrThrow
   */
  export type assistantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * Filter, which assistant to fetch.
     */
    where?: assistantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assistants to fetch.
     */
    orderBy?: assistantOrderByWithRelationInput | assistantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for assistants.
     */
    cursor?: assistantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assistants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assistants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of assistants.
     */
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[];
  };

  /**
   * assistant findMany
   */
  export type assistantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * Filter, which assistants to fetch.
     */
    where?: assistantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assistants to fetch.
     */
    orderBy?: assistantOrderByWithRelationInput | assistantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing assistants.
     */
    cursor?: assistantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assistants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assistants.
     */
    skip?: number;
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[];
  };

  /**
   * assistant create
   */
  export type assistantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * The data needed to create a assistant.
     */
    data: XOR<assistantCreateInput, assistantUncheckedCreateInput>;
  };

  /**
   * assistant createMany
   */
  export type assistantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assistants.
     */
    data: assistantCreateManyInput | assistantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * assistant update
   */
  export type assistantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * The data needed to update a assistant.
     */
    data: XOR<assistantUpdateInput, assistantUncheckedUpdateInput>;
    /**
     * Choose, which assistant to update.
     */
    where: assistantWhereUniqueInput;
  };

  /**
   * assistant updateMany
   */
  export type assistantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assistants.
     */
    data: XOR<assistantUpdateManyMutationInput, assistantUncheckedUpdateManyInput>;
    /**
     * Filter which assistants to update
     */
    where?: assistantWhereInput;
  };

  /**
   * assistant upsert
   */
  export type assistantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * The filter to search for the assistant to update in case it exists.
     */
    where: assistantWhereUniqueInput;
    /**
     * In case the assistant found by the `where` argument doesn't exist, create a new assistant with this data.
     */
    create: XOR<assistantCreateInput, assistantUncheckedCreateInput>;
    /**
     * In case the assistant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assistantUpdateInput, assistantUncheckedUpdateInput>;
  };

  /**
   * assistant delete
   */
  export type assistantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    /**
     * Filter which assistant to delete.
     */
    where: assistantWhereUniqueInput;
  };

  /**
   * assistant deleteMany
   */
  export type assistantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assistants to delete
     */
    where?: assistantWhereInput;
  };

  /**
   * assistant.task
   */
  export type assistant$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    where?: taskWhereInput;
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    cursor?: taskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * assistant without action
   */
  export type assistantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
  };

  /**
   * Model business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  export type BusinessMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type BusinessMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type BusinessCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    contact_number: number;
    opening_hours: number;
    closing_hours: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type BusinessMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type BusinessMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type BusinessCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business to aggregate.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned businesses
     **/
    _count?: true | BusinessCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BusinessMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BusinessMaxAggregateInputType;
  };

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>;
  };

  export type businessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: businessWhereInput;
    orderBy?: businessOrderByWithAggregationInput | businessOrderByWithAggregationInput[];
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum;
    having?: businessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessCountAggregateInputType | true;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
  };

  export type BusinessGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  type GetBusinessGroupByPayload<T extends businessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BusinessGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
          : GetScalarType<T[P], BusinessGroupByOutputType[P]>;
      }
    >
  >;

  export type businessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        location?: boolean;
        contact_number?: boolean;
        opening_hours?: boolean;
        closing_hours?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tenant_id?: boolean;
        pdf?: boolean | business$pdfArgs<ExtArgs>;
        _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business']
    >;

  export type businessSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    contact_number?: boolean;
    opening_hours?: boolean;
    closing_hours?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type businessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf?: boolean | business$pdfArgs<ExtArgs>;
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $businessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business';
    objects: {
      pdf: Prisma.$pdfPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        contact_number: string | null;
        opening_hours: string | null;
        closing_hours: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['business']
    >;
    composites: {};
  };

  type businessGetPayload<S extends boolean | null | undefined | businessDefaultArgs> = $Result.GetResult<
    Prisma.$businessPayload,
    S
  >;

  type businessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    businessFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BusinessCountAggregateInputType | true;
  };

  export interface businessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business']; meta: { name: 'business' } };
    /**
     * Find zero or one Business that matches the filter.
     * @param {businessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends businessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, businessFindUniqueArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {businessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends businessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends businessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindFirstArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends businessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     *
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends businessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business.
     * @param {businessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     *
     **/
    create<T extends businessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, businessCreateArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Businesses.
     *     @param {businessCreateManyArgs} args - Arguments to create many Businesses.
     *     @example
     *     // Create many Businesses
     *     const business = await prisma.business.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends businessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business.
     * @param {businessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     *
     **/
    delete<T extends businessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, businessDeleteArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Business.
     * @param {businessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends businessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpdateArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Businesses.
     * @param {businessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends businessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends businessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business.
     * @param {businessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     **/
    upsert<T extends businessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpsertArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
     **/
    count<T extends businessCountArgs>(
      args?: Subset<T, businessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BusinessAggregateArgs>(
      args: Subset<T, BusinessAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusinessAggregateType<T>>;

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends businessGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: businessGroupByArgs['orderBy'] }
        : { orderBy?: businessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, businessGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business model
     */
    readonly fields: businessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__businessClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pdf<T extends business$pdfArgs<ExtArgs> = {}>(
      args?: Subset<T, business$pdfArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business model
   */
  interface businessFieldRefs {
    readonly id: FieldRef<'business', 'String'>;
    readonly description: FieldRef<'business', 'String'>;
    readonly location: FieldRef<'business', 'String'>;
    readonly contact_number: FieldRef<'business', 'String'>;
    readonly opening_hours: FieldRef<'business', 'String'>;
    readonly closing_hours: FieldRef<'business', 'String'>;
    readonly name: FieldRef<'business', 'String'>;
    readonly created_at: FieldRef<'business', 'DateTime'>;
    readonly updated_at: FieldRef<'business', 'DateTime'>;
    readonly tenant_id: FieldRef<'business', 'String'>;
  }

  // Custom InputTypes

  /**
   * business findUnique
   */
  export type businessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business findUniqueOrThrow
   */
  export type businessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business findFirst
   */
  export type businessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business findFirstOrThrow
   */
  export type businessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business findMany
   */
  export type businessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which businesses to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business create
   */
  export type businessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The data needed to create a business.
     */
    data: XOR<businessCreateInput, businessUncheckedCreateInput>;
  };

  /**
   * business createMany
   */
  export type businessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many businesses.
     */
    data: businessCreateManyInput | businessCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business update
   */
  export type businessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The data needed to update a business.
     */
    data: XOR<businessUpdateInput, businessUncheckedUpdateInput>;
    /**
     * Choose, which business to update.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business updateMany
   */
  export type businessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update businesses.
     */
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyInput>;
    /**
     * Filter which businesses to update
     */
    where?: businessWhereInput;
  };

  /**
   * business upsert
   */
  export type businessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The filter to search for the business to update in case it exists.
     */
    where: businessWhereUniqueInput;
    /**
     * In case the business found by the `where` argument doesn't exist, create a new business with this data.
     */
    create: XOR<businessCreateInput, businessUncheckedCreateInput>;
    /**
     * In case the business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<businessUpdateInput, businessUncheckedUpdateInput>;
  };

  /**
   * business delete
   */
  export type businessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter which business to delete.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business deleteMany
   */
  export type businessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which businesses to delete
     */
    where?: businessWhereInput;
  };

  /**
   * business.pdf
   */
  export type business$pdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    where?: pdfWhereInput;
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[];
    cursor?: pdfWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[];
  };

  /**
   * business without action
   */
  export type businessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
  };

  /**
   * Model pdf
   */

  export type AggregatePdf = {
    _count: PdfCountAggregateOutputType | null;
    _min: PdfMinAggregateOutputType | null;
    _max: PdfMaxAggregateOutputType | null;
  };

  export type PdfMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    upload_time: Date | null;
    user_id: string | null;
    business_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PdfMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    upload_time: Date | null;
    user_id: string | null;
    business_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PdfCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    upload_time: number;
    user_id: number;
    business_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PdfMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    upload_time?: true;
    user_id?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PdfMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    upload_time?: true;
    user_id?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PdfCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    upload_time?: true;
    user_id?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pdf to aggregate.
     */
    where?: pdfWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pdfs to fetch.
     */
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: pdfWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pdfs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pdfs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned pdfs
     **/
    _count?: true | PdfCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PdfMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PdfMaxAggregateInputType;
  };

  export type GetPdfAggregateType<T extends PdfAggregateArgs> = {
    [P in keyof T & keyof AggregatePdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePdf[P]>
      : GetScalarType<T[P], AggregatePdf[P]>;
  };

  export type pdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pdfWhereInput;
    orderBy?: pdfOrderByWithAggregationInput | pdfOrderByWithAggregationInput[];
    by: PdfScalarFieldEnum[] | PdfScalarFieldEnum;
    having?: pdfScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PdfCountAggregateInputType | true;
    _min?: PdfMinAggregateInputType;
    _max?: PdfMaxAggregateInputType;
  };

  export type PdfGroupByOutputType = {
    id: string;
    title: string;
    content: string;
    upload_time: Date;
    user_id: string;
    business_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PdfCountAggregateOutputType | null;
    _min: PdfMinAggregateOutputType | null;
    _max: PdfMaxAggregateOutputType | null;
  };

  type GetPdfGroupByPayload<T extends pdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PdfGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PdfGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PdfGroupByOutputType[P]>
          : GetScalarType<T[P], PdfGroupByOutputType[P]>;
      }
    >
  >;

  export type pdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      upload_time?: boolean;
      user_id?: boolean;
      business_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      assistant?: boolean | pdf$assistantArgs<ExtArgs>;
      business?: boolean | businessDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | PdfCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pdf']
  >;

  export type pdfSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    upload_time?: boolean;
    user_id?: boolean;
    business_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type pdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assistant?: boolean | pdf$assistantArgs<ExtArgs>;
    business?: boolean | businessDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | PdfCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $pdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'pdf';
    objects: {
      assistant: Prisma.$assistantPayload<ExtArgs>[];
      business: Prisma.$businessPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        content: string;
        upload_time: Date;
        user_id: string;
        business_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['pdf']
    >;
    composites: {};
  };

  type pdfGetPayload<S extends boolean | null | undefined | pdfDefaultArgs> = $Result.GetResult<Prisma.$pdfPayload, S>;

  type pdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    pdfFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PdfCountAggregateInputType | true;
  };

  export interface pdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pdf']; meta: { name: 'pdf' } };
    /**
     * Find zero or one Pdf that matches the filter.
     * @param {pdfFindUniqueArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends pdfFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pdfFindUniqueArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Pdf that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {pdfFindUniqueOrThrowArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends pdfFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pdfFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Pdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfFindFirstArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends pdfFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pdfFindFirstArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Pdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfFindFirstOrThrowArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends pdfFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pdfFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Pdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pdfs
     * const pdfs = await prisma.pdf.findMany()
     *
     * // Get first 10 Pdfs
     * const pdfs = await prisma.pdf.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pdfWithIdOnly = await prisma.pdf.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends pdfFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pdfFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Pdf.
     * @param {pdfCreateArgs} args - Arguments to create a Pdf.
     * @example
     * // Create one Pdf
     * const Pdf = await prisma.pdf.create({
     *   data: {
     *     // ... data to create a Pdf
     *   }
     * })
     *
     **/
    create<T extends pdfCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pdfCreateArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Pdfs.
     *     @param {pdfCreateManyArgs} args - Arguments to create many Pdfs.
     *     @example
     *     // Create many Pdfs
     *     const pdf = await prisma.pdf.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends pdfCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pdfCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Pdf.
     * @param {pdfDeleteArgs} args - Arguments to delete one Pdf.
     * @example
     * // Delete one Pdf
     * const Pdf = await prisma.pdf.delete({
     *   where: {
     *     // ... filter to delete one Pdf
     *   }
     * })
     *
     **/
    delete<T extends pdfDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pdfDeleteArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Pdf.
     * @param {pdfUpdateArgs} args - Arguments to update one Pdf.
     * @example
     * // Update one Pdf
     * const pdf = await prisma.pdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends pdfUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pdfUpdateArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Pdfs.
     * @param {pdfDeleteManyArgs} args - Arguments to filter Pdfs to delete.
     * @example
     * // Delete a few Pdfs
     * const { count } = await prisma.pdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends pdfDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pdfDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pdfs
     * const pdf = await prisma.pdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends pdfUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pdfUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Pdf.
     * @param {pdfUpsertArgs} args - Arguments to update or create a Pdf.
     * @example
     * // Update or create a Pdf
     * const pdf = await prisma.pdf.upsert({
     *   create: {
     *     // ... data to create a Pdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pdf we want to update
     *   }
     * })
     **/
    upsert<T extends pdfUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pdfUpsertArgs<ExtArgs>>,
    ): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Pdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfCountArgs} args - Arguments to filter Pdfs to count.
     * @example
     * // Count the number of Pdfs
     * const count = await prisma.pdf.count({
     *   where: {
     *     // ... the filter for the Pdfs we want to count
     *   }
     * })
     **/
    count<T extends pdfCountArgs>(
      args?: Subset<T, pdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PdfCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Pdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PdfAggregateArgs>(
      args: Subset<T, PdfAggregateArgs>,
    ): Prisma.PrismaPromise<GetPdfAggregateType<T>>;

    /**
     * Group by Pdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends pdfGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pdfGroupByArgs['orderBy'] }
        : { orderBy?: pdfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, pdfGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the pdf model
     */
    readonly fields: pdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pdfClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assistant<T extends pdf$assistantArgs<ExtArgs> = {}>(
      args?: Subset<T, pdf$assistantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'findMany'> | Null>;

    business<T extends businessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, businessDefaultArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the pdf model
   */
  interface pdfFieldRefs {
    readonly id: FieldRef<'pdf', 'String'>;
    readonly title: FieldRef<'pdf', 'String'>;
    readonly content: FieldRef<'pdf', 'String'>;
    readonly upload_time: FieldRef<'pdf', 'DateTime'>;
    readonly user_id: FieldRef<'pdf', 'String'>;
    readonly business_id: FieldRef<'pdf', 'String'>;
    readonly created_at: FieldRef<'pdf', 'DateTime'>;
    readonly updated_at: FieldRef<'pdf', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * pdf findUnique
   */
  export type pdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * Filter, which pdf to fetch.
     */
    where: pdfWhereUniqueInput;
  };

  /**
   * pdf findUniqueOrThrow
   */
  export type pdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * Filter, which pdf to fetch.
     */
    where: pdfWhereUniqueInput;
  };

  /**
   * pdf findFirst
   */
  export type pdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * Filter, which pdf to fetch.
     */
    where?: pdfWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pdfs to fetch.
     */
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pdfs.
     */
    cursor?: pdfWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pdfs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pdfs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[];
  };

  /**
   * pdf findFirstOrThrow
   */
  export type pdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * Filter, which pdf to fetch.
     */
    where?: pdfWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pdfs to fetch.
     */
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pdfs.
     */
    cursor?: pdfWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pdfs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pdfs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[];
  };

  /**
   * pdf findMany
   */
  export type pdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * Filter, which pdfs to fetch.
     */
    where?: pdfWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pdfs to fetch.
     */
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing pdfs.
     */
    cursor?: pdfWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pdfs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pdfs.
     */
    skip?: number;
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[];
  };

  /**
   * pdf create
   */
  export type pdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * The data needed to create a pdf.
     */
    data: XOR<pdfCreateInput, pdfUncheckedCreateInput>;
  };

  /**
   * pdf createMany
   */
  export type pdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pdfs.
     */
    data: pdfCreateManyInput | pdfCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * pdf update
   */
  export type pdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * The data needed to update a pdf.
     */
    data: XOR<pdfUpdateInput, pdfUncheckedUpdateInput>;
    /**
     * Choose, which pdf to update.
     */
    where: pdfWhereUniqueInput;
  };

  /**
   * pdf updateMany
   */
  export type pdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pdfs.
     */
    data: XOR<pdfUpdateManyMutationInput, pdfUncheckedUpdateManyInput>;
    /**
     * Filter which pdfs to update
     */
    where?: pdfWhereInput;
  };

  /**
   * pdf upsert
   */
  export type pdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * The filter to search for the pdf to update in case it exists.
     */
    where: pdfWhereUniqueInput;
    /**
     * In case the pdf found by the `where` argument doesn't exist, create a new pdf with this data.
     */
    create: XOR<pdfCreateInput, pdfUncheckedCreateInput>;
    /**
     * In case the pdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pdfUpdateInput, pdfUncheckedUpdateInput>;
  };

  /**
   * pdf delete
   */
  export type pdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    /**
     * Filter which pdf to delete.
     */
    where: pdfWhereUniqueInput;
  };

  /**
   * pdf deleteMany
   */
  export type pdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pdfs to delete
     */
    where?: pdfWhereInput;
  };

  /**
   * pdf.assistant
   */
  export type pdf$assistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    where?: assistantWhereInput;
    orderBy?: assistantOrderByWithRelationInput | assistantOrderByWithRelationInput[];
    cursor?: assistantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[];
  };

  /**
   * pdf without action
   */
  export type pdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
  };

  /**
   * Model reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null;
    _min: ReminderMinAggregateOutputType | null;
    _max: ReminderMaxAggregateOutputType | null;
  };

  export type ReminderMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    reminder_time: Date | null;
    task_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReminderMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    reminder_time: Date | null;
    task_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReminderCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    reminder_time: number;
    task_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReminderMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    reminder_time?: true;
    task_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReminderMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    reminder_time?: true;
    task_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReminderCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    reminder_time?: true;
    task_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reminder to aggregate.
     */
    where?: reminderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reminders to fetch.
     */
    orderBy?: reminderOrderByWithRelationInput | reminderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reminderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reminders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reminders
     **/
    _count?: true | ReminderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReminderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReminderMaxAggregateInputType;
  };

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
    [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>;
  };

  export type reminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reminderWhereInput;
    orderBy?: reminderOrderByWithAggregationInput | reminderOrderByWithAggregationInput[];
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum;
    having?: reminderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReminderCountAggregateInputType | true;
    _min?: ReminderMinAggregateInputType;
    _max?: ReminderMaxAggregateInputType;
  };

  export type ReminderGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    reminder_time: Date;
    task_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReminderCountAggregateOutputType | null;
    _min: ReminderMinAggregateOutputType | null;
    _max: ReminderMaxAggregateOutputType | null;
  };

  type GetReminderGroupByPayload<T extends reminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReminderGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
          : GetScalarType<T[P], ReminderGroupByOutputType[P]>;
      }
    >
  >;

  export type reminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        reminder_time?: boolean;
        task_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        task?: boolean | taskDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['reminder']
    >;

  export type reminderSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    reminder_time?: boolean;
    task_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | taskDefaultArgs<ExtArgs>;
  };

  export type $reminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'reminder';
    objects: {
      task: Prisma.$taskPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        reminder_time: Date;
        task_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['reminder']
    >;
    composites: {};
  };

  type reminderGetPayload<S extends boolean | null | undefined | reminderDefaultArgs> = $Result.GetResult<
    Prisma.$reminderPayload,
    S
  >;

  type reminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reminderFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ReminderCountAggregateInputType | true;
  };

  export interface reminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reminder']; meta: { name: 'reminder' } };
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {reminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reminderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reminderFindUniqueArgs<ExtArgs>>,
    ): Prisma__reminderClient<
      $Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Reminder that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reminderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reminderFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reminderClient<
      $Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reminderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reminderFindFirstArgs<ExtArgs>>,
    ): Prisma__reminderClient<
      $Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reminderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reminderFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reminderClient<
      $Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reminderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     *
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reminderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reminderFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Reminder.
     * @param {reminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     *
     **/
    create<T extends reminderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reminderCreateArgs<ExtArgs>>,
    ): Prisma__reminderClient<$Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reminders.
     *     @param {reminderCreateManyArgs} args - Arguments to create many Reminders.
     *     @example
     *     // Create many Reminders
     *     const reminder = await prisma.reminder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reminderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reminderCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Reminder.
     * @param {reminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     *
     **/
    delete<T extends reminderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reminderDeleteArgs<ExtArgs>>,
    ): Prisma__reminderClient<$Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Reminder.
     * @param {reminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reminderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reminderUpdateArgs<ExtArgs>>,
    ): Prisma__reminderClient<$Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reminders.
     * @param {reminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reminderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reminderDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reminderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reminderUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Reminder.
     * @param {reminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     **/
    upsert<T extends reminderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reminderUpsertArgs<ExtArgs>>,
    ): Prisma__reminderClient<$Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
     **/
    count<T extends reminderCountArgs>(
      args?: Subset<T, reminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReminderAggregateArgs>(
      args: Subset<T, ReminderAggregateArgs>,
    ): Prisma.PrismaPromise<GetReminderAggregateType<T>>;

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reminderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends reminderGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reminderGroupByArgs['orderBy'] }
        : { orderBy?: reminderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reminderGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the reminder model
     */
    readonly fields: reminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reminderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    task<T extends taskDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, taskDefaultArgs<ExtArgs>>,
    ): Prisma__taskClient<
      $Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the reminder model
   */
  interface reminderFieldRefs {
    readonly id: FieldRef<'reminder', 'String'>;
    readonly title: FieldRef<'reminder', 'String'>;
    readonly description: FieldRef<'reminder', 'String'>;
    readonly reminder_time: FieldRef<'reminder', 'DateTime'>;
    readonly task_id: FieldRef<'reminder', 'String'>;
    readonly created_at: FieldRef<'reminder', 'DateTime'>;
    readonly updated_at: FieldRef<'reminder', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * reminder findUnique
   */
  export type reminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * Filter, which reminder to fetch.
     */
    where: reminderWhereUniqueInput;
  };

  /**
   * reminder findUniqueOrThrow
   */
  export type reminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * Filter, which reminder to fetch.
     */
    where: reminderWhereUniqueInput;
  };

  /**
   * reminder findFirst
   */
  export type reminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * Filter, which reminder to fetch.
     */
    where?: reminderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reminders to fetch.
     */
    orderBy?: reminderOrderByWithRelationInput | reminderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reminders.
     */
    cursor?: reminderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reminders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[];
  };

  /**
   * reminder findFirstOrThrow
   */
  export type reminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * Filter, which reminder to fetch.
     */
    where?: reminderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reminders to fetch.
     */
    orderBy?: reminderOrderByWithRelationInput | reminderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reminders.
     */
    cursor?: reminderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reminders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[];
  };

  /**
   * reminder findMany
   */
  export type reminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * Filter, which reminders to fetch.
     */
    where?: reminderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reminders to fetch.
     */
    orderBy?: reminderOrderByWithRelationInput | reminderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reminders.
     */
    cursor?: reminderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reminders.
     */
    skip?: number;
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[];
  };

  /**
   * reminder create
   */
  export type reminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * The data needed to create a reminder.
     */
    data: XOR<reminderCreateInput, reminderUncheckedCreateInput>;
  };

  /**
   * reminder createMany
   */
  export type reminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reminders.
     */
    data: reminderCreateManyInput | reminderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * reminder update
   */
  export type reminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * The data needed to update a reminder.
     */
    data: XOR<reminderUpdateInput, reminderUncheckedUpdateInput>;
    /**
     * Choose, which reminder to update.
     */
    where: reminderWhereUniqueInput;
  };

  /**
   * reminder updateMany
   */
  export type reminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reminders.
     */
    data: XOR<reminderUpdateManyMutationInput, reminderUncheckedUpdateManyInput>;
    /**
     * Filter which reminders to update
     */
    where?: reminderWhereInput;
  };

  /**
   * reminder upsert
   */
  export type reminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * The filter to search for the reminder to update in case it exists.
     */
    where: reminderWhereUniqueInput;
    /**
     * In case the reminder found by the `where` argument doesn't exist, create a new reminder with this data.
     */
    create: XOR<reminderCreateInput, reminderUncheckedCreateInput>;
    /**
     * In case the reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reminderUpdateInput, reminderUncheckedUpdateInput>;
  };

  /**
   * reminder delete
   */
  export type reminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    /**
     * Filter which reminder to delete.
     */
    where: reminderWhereUniqueInput;
  };

  /**
   * reminder deleteMany
   */
  export type reminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reminders to delete
     */
    where?: reminderWhereInput;
  };

  /**
   * reminder without action
   */
  export type reminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
  };

  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  export type TaskMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    due_date: Date | null;
    assistant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TaskMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    due_date: Date | null;
    assistant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TaskCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    status: number;
    due_date: number;
    assistant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TaskMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    due_date?: true;
    assistant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TaskMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    due_date?: true;
    assistant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TaskCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    due_date?: true;
    assistant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tasks
     **/
    _count?: true | TaskCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TaskMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TaskMaxAggregateInputType;
  };

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>;
  };

  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput;
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[];
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum;
    having?: taskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
  };

  export type TaskGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    status: string;
    due_date: Date | null;
    assistant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TaskGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
          : GetScalarType<T[P], TaskGroupByOutputType[P]>;
      }
    >
  >;

  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      status?: boolean;
      due_date?: boolean;
      assistant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      reminder?: boolean | task$reminderArgs<ExtArgs>;
      assistant?: boolean | assistantDefaultArgs<ExtArgs>;
      _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['task']
  >;

  export type taskSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    due_date?: boolean;
    assistant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminder?: boolean | task$reminderArgs<ExtArgs>;
    assistant?: boolean | assistantDefaultArgs<ExtArgs>;
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'task';
    objects: {
      reminder: Prisma.$reminderPayload<ExtArgs>[];
      assistant: Prisma.$assistantPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        status: string;
        due_date: Date | null;
        assistant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['task']
    >;
    composites: {};
  };

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<
    Prisma.$taskPayload,
    S
  >;

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    taskFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TaskCountAggregateInputType | true;
  };

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task']; meta: { name: 'task' } };
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends taskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends taskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     *
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends taskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     *
     **/
    create<T extends taskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, taskCreateArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tasks.
     *     @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends taskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     *
     **/
    delete<T extends taskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, taskDeleteArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends taskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpdateArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends taskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends taskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     **/
    upsert<T extends taskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpsertArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
     **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TaskAggregateArgs>(
      args: Subset<T, TaskAggregateArgs>,
    ): Prisma.PrismaPromise<GetTaskAggregateType<T>>;

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the task model
     */
    readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reminder<T extends task$reminderArgs<ExtArgs> = {}>(
      args?: Subset<T, task$reminderArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reminderPayload<ExtArgs>, T, 'findMany'> | Null>;

    assistant<T extends assistantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, assistantDefaultArgs<ExtArgs>>,
    ): Prisma__assistantClient<
      $Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<'task', 'String'>;
    readonly title: FieldRef<'task', 'String'>;
    readonly description: FieldRef<'task', 'String'>;
    readonly status: FieldRef<'task', 'String'>;
    readonly due_date: FieldRef<'task', 'DateTime'>;
    readonly assistant_id: FieldRef<'task', 'String'>;
    readonly created_at: FieldRef<'task', 'DateTime'>;
    readonly updated_at: FieldRef<'task', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>;
  };

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>;
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>;
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput;
  };

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput;
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>;
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>;
  };

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput;
  };

  /**
   * task.reminder
   */
  export type task$reminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminder
     */
    select?: reminderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reminderInclude<ExtArgs> | null;
    where?: reminderWhereInput;
    orderBy?: reminderOrderByWithRelationInput | reminderOrderByWithRelationInput[];
    cursor?: reminderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[];
  };

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      assistant?: boolean | user$assistantArgs<ExtArgs>;
      pdf?: boolean | user$pdfArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assistant?: boolean | user$assistantArgs<ExtArgs>;
    pdf?: boolean | user$pdfArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      assistant: Prisma.$assistantPayload<ExtArgs>[];
      pdf: Prisma.$pdfPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assistant<T extends user$assistantArgs<ExtArgs> = {}>(
      args?: Subset<T, user$assistantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assistantPayload<ExtArgs>, T, 'findMany'> | Null>;

    pdf<T extends user$pdfArgs<ExtArgs> = {}>(
      args?: Subset<T, user$pdfArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.assistant
   */
  export type user$assistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assistant
     */
    select?: assistantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assistantInclude<ExtArgs> | null;
    where?: assistantWhereInput;
    orderBy?: assistantOrderByWithRelationInput | assistantOrderByWithRelationInput[];
    cursor?: assistantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[];
  };

  /**
   * user.pdf
   */
  export type user$pdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdfInclude<ExtArgs> | null;
    where?: pdfWhereInput;
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[];
    cursor?: pdfWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AssistantScalarFieldEnum: {
    id: 'id';
    name: 'name';
    status: 'status';
    pdf_id: 'pdf_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AssistantScalarFieldEnum = (typeof AssistantScalarFieldEnum)[keyof typeof AssistantScalarFieldEnum];

  export const BusinessScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    contact_number: 'contact_number';
    opening_hours: 'opening_hours';
    closing_hours: 'closing_hours';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum];

  export const PdfScalarFieldEnum: {
    id: 'id';
    title: 'title';
    content: 'content';
    upload_time: 'upload_time';
    user_id: 'user_id';
    business_id: 'business_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PdfScalarFieldEnum = (typeof PdfScalarFieldEnum)[keyof typeof PdfScalarFieldEnum];

  export const ReminderScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    reminder_time: 'reminder_time';
    task_id: 'task_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum];

  export const TaskScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    status: 'status';
    due_date: 'due_date';
    assistant_id: 'assistant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type assistantWhereInput = {
    AND?: assistantWhereInput | assistantWhereInput[];
    OR?: assistantWhereInput[];
    NOT?: assistantWhereInput | assistantWhereInput[];
    id?: UuidFilter<'assistant'> | string;
    name?: StringFilter<'assistant'> | string;
    status?: StringFilter<'assistant'> | string;
    pdf_id?: UuidFilter<'assistant'> | string;
    user_id?: UuidFilter<'assistant'> | string;
    created_at?: DateTimeFilter<'assistant'> | Date | string;
    updated_at?: DateTimeFilter<'assistant'> | Date | string;
    pdf?: XOR<PdfRelationFilter, pdfWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    task?: TaskListRelationFilter;
  };

  export type assistantOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    pdf_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    pdf?: pdfOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    task?: taskOrderByRelationAggregateInput;
  };

  export type assistantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: assistantWhereInput | assistantWhereInput[];
      OR?: assistantWhereInput[];
      NOT?: assistantWhereInput | assistantWhereInput[];
      name?: StringFilter<'assistant'> | string;
      status?: StringFilter<'assistant'> | string;
      pdf_id?: UuidFilter<'assistant'> | string;
      user_id?: UuidFilter<'assistant'> | string;
      created_at?: DateTimeFilter<'assistant'> | Date | string;
      updated_at?: DateTimeFilter<'assistant'> | Date | string;
      pdf?: XOR<PdfRelationFilter, pdfWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      task?: TaskListRelationFilter;
    },
    'id'
  >;

  export type assistantOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    pdf_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: assistantCountOrderByAggregateInput;
    _max?: assistantMaxOrderByAggregateInput;
    _min?: assistantMinOrderByAggregateInput;
  };

  export type assistantScalarWhereWithAggregatesInput = {
    AND?: assistantScalarWhereWithAggregatesInput | assistantScalarWhereWithAggregatesInput[];
    OR?: assistantScalarWhereWithAggregatesInput[];
    NOT?: assistantScalarWhereWithAggregatesInput | assistantScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'assistant'> | string;
    name?: StringWithAggregatesFilter<'assistant'> | string;
    status?: StringWithAggregatesFilter<'assistant'> | string;
    pdf_id?: UuidWithAggregatesFilter<'assistant'> | string;
    user_id?: UuidWithAggregatesFilter<'assistant'> | string;
    created_at?: DateTimeWithAggregatesFilter<'assistant'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'assistant'> | Date | string;
  };

  export type businessWhereInput = {
    AND?: businessWhereInput | businessWhereInput[];
    OR?: businessWhereInput[];
    NOT?: businessWhereInput | businessWhereInput[];
    id?: UuidFilter<'business'> | string;
    description?: StringNullableFilter<'business'> | string | null;
    location?: StringNullableFilter<'business'> | string | null;
    contact_number?: StringNullableFilter<'business'> | string | null;
    opening_hours?: StringNullableFilter<'business'> | string | null;
    closing_hours?: StringNullableFilter<'business'> | string | null;
    name?: StringFilter<'business'> | string;
    created_at?: DateTimeFilter<'business'> | Date | string;
    updated_at?: DateTimeFilter<'business'> | Date | string;
    tenant_id?: StringFilter<'business'> | string;
    pdf?: PdfListRelationFilter;
  };

  export type businessOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    pdf?: pdfOrderByRelationAggregateInput;
  };

  export type businessWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: businessWhereInput | businessWhereInput[];
      OR?: businessWhereInput[];
      NOT?: businessWhereInput | businessWhereInput[];
      description?: StringNullableFilter<'business'> | string | null;
      location?: StringNullableFilter<'business'> | string | null;
      contact_number?: StringNullableFilter<'business'> | string | null;
      opening_hours?: StringNullableFilter<'business'> | string | null;
      closing_hours?: StringNullableFilter<'business'> | string | null;
      name?: StringFilter<'business'> | string;
      created_at?: DateTimeFilter<'business'> | Date | string;
      updated_at?: DateTimeFilter<'business'> | Date | string;
      tenant_id?: StringFilter<'business'> | string;
      pdf?: PdfListRelationFilter;
    },
    'id'
  >;

  export type businessOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: businessCountOrderByAggregateInput;
    _max?: businessMaxOrderByAggregateInput;
    _min?: businessMinOrderByAggregateInput;
  };

  export type businessScalarWhereWithAggregatesInput = {
    AND?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[];
    OR?: businessScalarWhereWithAggregatesInput[];
    NOT?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business'> | string;
    description?: StringNullableWithAggregatesFilter<'business'> | string | null;
    location?: StringNullableWithAggregatesFilter<'business'> | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'business'> | string | null;
    opening_hours?: StringNullableWithAggregatesFilter<'business'> | string | null;
    closing_hours?: StringNullableWithAggregatesFilter<'business'> | string | null;
    name?: StringWithAggregatesFilter<'business'> | string;
    created_at?: DateTimeWithAggregatesFilter<'business'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'business'> | string;
  };

  export type pdfWhereInput = {
    AND?: pdfWhereInput | pdfWhereInput[];
    OR?: pdfWhereInput[];
    NOT?: pdfWhereInput | pdfWhereInput[];
    id?: UuidFilter<'pdf'> | string;
    title?: StringFilter<'pdf'> | string;
    content?: StringFilter<'pdf'> | string;
    upload_time?: DateTimeFilter<'pdf'> | Date | string;
    user_id?: UuidFilter<'pdf'> | string;
    business_id?: UuidFilter<'pdf'> | string;
    created_at?: DateTimeFilter<'pdf'> | Date | string;
    updated_at?: DateTimeFilter<'pdf'> | Date | string;
    assistant?: AssistantListRelationFilter;
    business?: XOR<BusinessRelationFilter, businessWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type pdfOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    upload_time?: SortOrder;
    user_id?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    assistant?: assistantOrderByRelationAggregateInput;
    business?: businessOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type pdfWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: pdfWhereInput | pdfWhereInput[];
      OR?: pdfWhereInput[];
      NOT?: pdfWhereInput | pdfWhereInput[];
      title?: StringFilter<'pdf'> | string;
      content?: StringFilter<'pdf'> | string;
      upload_time?: DateTimeFilter<'pdf'> | Date | string;
      user_id?: UuidFilter<'pdf'> | string;
      business_id?: UuidFilter<'pdf'> | string;
      created_at?: DateTimeFilter<'pdf'> | Date | string;
      updated_at?: DateTimeFilter<'pdf'> | Date | string;
      assistant?: AssistantListRelationFilter;
      business?: XOR<BusinessRelationFilter, businessWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type pdfOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    upload_time?: SortOrder;
    user_id?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: pdfCountOrderByAggregateInput;
    _max?: pdfMaxOrderByAggregateInput;
    _min?: pdfMinOrderByAggregateInput;
  };

  export type pdfScalarWhereWithAggregatesInput = {
    AND?: pdfScalarWhereWithAggregatesInput | pdfScalarWhereWithAggregatesInput[];
    OR?: pdfScalarWhereWithAggregatesInput[];
    NOT?: pdfScalarWhereWithAggregatesInput | pdfScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'pdf'> | string;
    title?: StringWithAggregatesFilter<'pdf'> | string;
    content?: StringWithAggregatesFilter<'pdf'> | string;
    upload_time?: DateTimeWithAggregatesFilter<'pdf'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'pdf'> | string;
    business_id?: UuidWithAggregatesFilter<'pdf'> | string;
    created_at?: DateTimeWithAggregatesFilter<'pdf'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'pdf'> | Date | string;
  };

  export type reminderWhereInput = {
    AND?: reminderWhereInput | reminderWhereInput[];
    OR?: reminderWhereInput[];
    NOT?: reminderWhereInput | reminderWhereInput[];
    id?: UuidFilter<'reminder'> | string;
    title?: StringFilter<'reminder'> | string;
    description?: StringNullableFilter<'reminder'> | string | null;
    reminder_time?: DateTimeFilter<'reminder'> | Date | string;
    task_id?: UuidFilter<'reminder'> | string;
    created_at?: DateTimeFilter<'reminder'> | Date | string;
    updated_at?: DateTimeFilter<'reminder'> | Date | string;
    task?: XOR<TaskRelationFilter, taskWhereInput>;
  };

  export type reminderOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    reminder_time?: SortOrder;
    task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    task?: taskOrderByWithRelationInput;
  };

  export type reminderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reminderWhereInput | reminderWhereInput[];
      OR?: reminderWhereInput[];
      NOT?: reminderWhereInput | reminderWhereInput[];
      title?: StringFilter<'reminder'> | string;
      description?: StringNullableFilter<'reminder'> | string | null;
      reminder_time?: DateTimeFilter<'reminder'> | Date | string;
      task_id?: UuidFilter<'reminder'> | string;
      created_at?: DateTimeFilter<'reminder'> | Date | string;
      updated_at?: DateTimeFilter<'reminder'> | Date | string;
      task?: XOR<TaskRelationFilter, taskWhereInput>;
    },
    'id'
  >;

  export type reminderOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    reminder_time?: SortOrder;
    task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reminderCountOrderByAggregateInput;
    _max?: reminderMaxOrderByAggregateInput;
    _min?: reminderMinOrderByAggregateInput;
  };

  export type reminderScalarWhereWithAggregatesInput = {
    AND?: reminderScalarWhereWithAggregatesInput | reminderScalarWhereWithAggregatesInput[];
    OR?: reminderScalarWhereWithAggregatesInput[];
    NOT?: reminderScalarWhereWithAggregatesInput | reminderScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'reminder'> | string;
    title?: StringWithAggregatesFilter<'reminder'> | string;
    description?: StringNullableWithAggregatesFilter<'reminder'> | string | null;
    reminder_time?: DateTimeWithAggregatesFilter<'reminder'> | Date | string;
    task_id?: UuidWithAggregatesFilter<'reminder'> | string;
    created_at?: DateTimeWithAggregatesFilter<'reminder'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'reminder'> | Date | string;
  };

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[];
    OR?: taskWhereInput[];
    NOT?: taskWhereInput | taskWhereInput[];
    id?: UuidFilter<'task'> | string;
    title?: StringFilter<'task'> | string;
    description?: StringNullableFilter<'task'> | string | null;
    status?: StringFilter<'task'> | string;
    due_date?: DateTimeNullableFilter<'task'> | Date | string | null;
    assistant_id?: UuidFilter<'task'> | string;
    created_at?: DateTimeFilter<'task'> | Date | string;
    updated_at?: DateTimeFilter<'task'> | Date | string;
    reminder?: ReminderListRelationFilter;
    assistant?: XOR<AssistantRelationFilter, assistantWhereInput>;
  };

  export type taskOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    due_date?: SortOrderInput | SortOrder;
    assistant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    reminder?: reminderOrderByRelationAggregateInput;
    assistant?: assistantOrderByWithRelationInput;
  };

  export type taskWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: taskWhereInput | taskWhereInput[];
      OR?: taskWhereInput[];
      NOT?: taskWhereInput | taskWhereInput[];
      title?: StringFilter<'task'> | string;
      description?: StringNullableFilter<'task'> | string | null;
      status?: StringFilter<'task'> | string;
      due_date?: DateTimeNullableFilter<'task'> | Date | string | null;
      assistant_id?: UuidFilter<'task'> | string;
      created_at?: DateTimeFilter<'task'> | Date | string;
      updated_at?: DateTimeFilter<'task'> | Date | string;
      reminder?: ReminderListRelationFilter;
      assistant?: XOR<AssistantRelationFilter, assistantWhereInput>;
    },
    'id'
  >;

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    due_date?: SortOrderInput | SortOrder;
    assistant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: taskCountOrderByAggregateInput;
    _max?: taskMaxOrderByAggregateInput;
    _min?: taskMinOrderByAggregateInput;
  };

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[];
    OR?: taskScalarWhereWithAggregatesInput[];
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'task'> | string;
    title?: StringWithAggregatesFilter<'task'> | string;
    description?: StringNullableWithAggregatesFilter<'task'> | string | null;
    status?: StringWithAggregatesFilter<'task'> | string;
    due_date?: DateTimeNullableWithAggregatesFilter<'task'> | Date | string | null;
    assistant_id?: UuidWithAggregatesFilter<'task'> | string;
    created_at?: DateTimeWithAggregatesFilter<'task'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'task'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    assistant?: AssistantListRelationFilter;
    pdf?: PdfListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    assistant?: assistantOrderByRelationAggregateInput;
    pdf?: pdfOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      assistant?: AssistantListRelationFilter;
      pdf?: PdfListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type assistantCreateInput = {
    id?: string;
    name: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf: pdfCreateNestedOneWithoutAssistantInput;
    user: userCreateNestedOneWithoutAssistantInput;
    task?: taskCreateNestedManyWithoutAssistantInput;
  };

  export type assistantUncheckedCreateInput = {
    id?: string;
    name: string;
    status: string;
    pdf_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskUncheckedCreateNestedManyWithoutAssistantInput;
  };

  export type assistantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf?: pdfUpdateOneRequiredWithoutAssistantNestedInput;
    user?: userUpdateOneRequiredWithoutAssistantNestedInput;
    task?: taskUpdateManyWithoutAssistantNestedInput;
  };

  export type assistantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    pdf_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUncheckedUpdateManyWithoutAssistantNestedInput;
  };

  export type assistantCreateManyInput = {
    id?: string;
    name: string;
    status: string;
    pdf_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assistantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assistantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    pdf_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type businessCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    pdf?: pdfCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    pdf?: pdfUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    pdf?: pdfUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    pdf?: pdfUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type businessCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type businessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type businessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type pdfCreateInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantCreateNestedManyWithoutPdfInput;
    business: businessCreateNestedOneWithoutPdfInput;
    user: userCreateNestedOneWithoutPdfInput;
  };

  export type pdfUncheckedCreateInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    user_id: string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantUncheckedCreateNestedManyWithoutPdfInput;
  };

  export type pdfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUpdateManyWithoutPdfNestedInput;
    business?: businessUpdateOneRequiredWithoutPdfNestedInput;
    user?: userUpdateOneRequiredWithoutPdfNestedInput;
  };

  export type pdfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUncheckedUpdateManyWithoutPdfNestedInput;
  };

  export type pdfCreateManyInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    user_id: string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type pdfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type pdfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reminderCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    reminder_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    task: taskCreateNestedOneWithoutReminderInput;
  };

  export type reminderUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    reminder_time: Date | string;
    task_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    reminder_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUpdateOneRequiredWithoutReminderNestedInput;
  };

  export type reminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    reminder_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    task_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reminderCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    reminder_time: Date | string;
    task_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    reminder_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    reminder_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    task_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    reminder?: reminderCreateNestedManyWithoutTaskInput;
    assistant: assistantCreateNestedOneWithoutTaskInput;
  };

  export type taskUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    due_date?: Date | string | null;
    assistant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reminder?: reminderUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type taskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reminder?: reminderUpdateManyWithoutTaskNestedInput;
    assistant?: assistantUpdateOneRequiredWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assistant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reminder?: reminderUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type taskCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    due_date?: Date | string | null;
    assistant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assistant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantCreateNestedManyWithoutUserInput;
    pdf?: pdfCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantUncheckedCreateNestedManyWithoutUserInput;
    pdf?: pdfUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUpdateManyWithoutUserNestedInput;
    pdf?: pdfUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUncheckedUpdateManyWithoutUserNestedInput;
    pdf?: pdfUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PdfRelationFilter = {
    is?: pdfWhereInput;
    isNot?: pdfWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type TaskListRelationFilter = {
    every?: taskWhereInput;
    some?: taskWhereInput;
    none?: taskWhereInput;
  };

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type assistantCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    pdf_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type assistantMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    pdf_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type assistantMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    pdf_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type PdfListRelationFilter = {
    every?: pdfWhereInput;
    some?: pdfWhereInput;
    none?: pdfWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type pdfOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type businessCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type businessMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type businessMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type AssistantListRelationFilter = {
    every?: assistantWhereInput;
    some?: assistantWhereInput;
    none?: assistantWhereInput;
  };

  export type BusinessRelationFilter = {
    is?: businessWhereInput;
    isNot?: businessWhereInput;
  };

  export type assistantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type pdfCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    upload_time?: SortOrder;
    user_id?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type pdfMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    upload_time?: SortOrder;
    user_id?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type pdfMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    upload_time?: SortOrder;
    user_id?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TaskRelationFilter = {
    is?: taskWhereInput;
    isNot?: taskWhereInput;
  };

  export type reminderCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    reminder_time?: SortOrder;
    task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reminderMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    reminder_time?: SortOrder;
    task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reminderMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    reminder_time?: SortOrder;
    task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type ReminderListRelationFilter = {
    every?: reminderWhereInput;
    some?: reminderWhereInput;
    none?: reminderWhereInput;
  };

  export type AssistantRelationFilter = {
    is?: assistantWhereInput;
    isNot?: assistantWhereInput;
  };

  export type reminderOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    due_date?: SortOrder;
    assistant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    due_date?: SortOrder;
    assistant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    due_date?: SortOrder;
    assistant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type pdfCreateNestedOneWithoutAssistantInput = {
    create?: XOR<pdfCreateWithoutAssistantInput, pdfUncheckedCreateWithoutAssistantInput>;
    connectOrCreate?: pdfCreateOrConnectWithoutAssistantInput;
    connect?: pdfWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAssistantInput = {
    create?: XOR<userCreateWithoutAssistantInput, userUncheckedCreateWithoutAssistantInput>;
    connectOrCreate?: userCreateOrConnectWithoutAssistantInput;
    connect?: userWhereUniqueInput;
  };

  export type taskCreateNestedManyWithoutAssistantInput = {
    create?:
      | XOR<taskCreateWithoutAssistantInput, taskUncheckedCreateWithoutAssistantInput>
      | taskCreateWithoutAssistantInput[]
      | taskUncheckedCreateWithoutAssistantInput[];
    connectOrCreate?: taskCreateOrConnectWithoutAssistantInput | taskCreateOrConnectWithoutAssistantInput[];
    createMany?: taskCreateManyAssistantInputEnvelope;
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
  };

  export type taskUncheckedCreateNestedManyWithoutAssistantInput = {
    create?:
      | XOR<taskCreateWithoutAssistantInput, taskUncheckedCreateWithoutAssistantInput>
      | taskCreateWithoutAssistantInput[]
      | taskUncheckedCreateWithoutAssistantInput[];
    connectOrCreate?: taskCreateOrConnectWithoutAssistantInput | taskCreateOrConnectWithoutAssistantInput[];
    createMany?: taskCreateManyAssistantInputEnvelope;
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type pdfUpdateOneRequiredWithoutAssistantNestedInput = {
    create?: XOR<pdfCreateWithoutAssistantInput, pdfUncheckedCreateWithoutAssistantInput>;
    connectOrCreate?: pdfCreateOrConnectWithoutAssistantInput;
    upsert?: pdfUpsertWithoutAssistantInput;
    connect?: pdfWhereUniqueInput;
    update?: XOR<
      XOR<pdfUpdateToOneWithWhereWithoutAssistantInput, pdfUpdateWithoutAssistantInput>,
      pdfUncheckedUpdateWithoutAssistantInput
    >;
  };

  export type userUpdateOneRequiredWithoutAssistantNestedInput = {
    create?: XOR<userCreateWithoutAssistantInput, userUncheckedCreateWithoutAssistantInput>;
    connectOrCreate?: userCreateOrConnectWithoutAssistantInput;
    upsert?: userUpsertWithoutAssistantInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAssistantInput, userUpdateWithoutAssistantInput>,
      userUncheckedUpdateWithoutAssistantInput
    >;
  };

  export type taskUpdateManyWithoutAssistantNestedInput = {
    create?:
      | XOR<taskCreateWithoutAssistantInput, taskUncheckedCreateWithoutAssistantInput>
      | taskCreateWithoutAssistantInput[]
      | taskUncheckedCreateWithoutAssistantInput[];
    connectOrCreate?: taskCreateOrConnectWithoutAssistantInput | taskCreateOrConnectWithoutAssistantInput[];
    upsert?: taskUpsertWithWhereUniqueWithoutAssistantInput | taskUpsertWithWhereUniqueWithoutAssistantInput[];
    createMany?: taskCreateManyAssistantInputEnvelope;
    set?: taskWhereUniqueInput | taskWhereUniqueInput[];
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[];
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    update?: taskUpdateWithWhereUniqueWithoutAssistantInput | taskUpdateWithWhereUniqueWithoutAssistantInput[];
    updateMany?: taskUpdateManyWithWhereWithoutAssistantInput | taskUpdateManyWithWhereWithoutAssistantInput[];
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[];
  };

  export type taskUncheckedUpdateManyWithoutAssistantNestedInput = {
    create?:
      | XOR<taskCreateWithoutAssistantInput, taskUncheckedCreateWithoutAssistantInput>
      | taskCreateWithoutAssistantInput[]
      | taskUncheckedCreateWithoutAssistantInput[];
    connectOrCreate?: taskCreateOrConnectWithoutAssistantInput | taskCreateOrConnectWithoutAssistantInput[];
    upsert?: taskUpsertWithWhereUniqueWithoutAssistantInput | taskUpsertWithWhereUniqueWithoutAssistantInput[];
    createMany?: taskCreateManyAssistantInputEnvelope;
    set?: taskWhereUniqueInput | taskWhereUniqueInput[];
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[];
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    update?: taskUpdateWithWhereUniqueWithoutAssistantInput | taskUpdateWithWhereUniqueWithoutAssistantInput[];
    updateMany?: taskUpdateManyWithWhereWithoutAssistantInput | taskUpdateManyWithWhereWithoutAssistantInput[];
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[];
  };

  export type pdfCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<pdfCreateWithoutBusinessInput, pdfUncheckedCreateWithoutBusinessInput>
      | pdfCreateWithoutBusinessInput[]
      | pdfUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: pdfCreateOrConnectWithoutBusinessInput | pdfCreateOrConnectWithoutBusinessInput[];
    createMany?: pdfCreateManyBusinessInputEnvelope;
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
  };

  export type pdfUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<pdfCreateWithoutBusinessInput, pdfUncheckedCreateWithoutBusinessInput>
      | pdfCreateWithoutBusinessInput[]
      | pdfUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: pdfCreateOrConnectWithoutBusinessInput | pdfCreateOrConnectWithoutBusinessInput[];
    createMany?: pdfCreateManyBusinessInputEnvelope;
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type pdfUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<pdfCreateWithoutBusinessInput, pdfUncheckedCreateWithoutBusinessInput>
      | pdfCreateWithoutBusinessInput[]
      | pdfUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: pdfCreateOrConnectWithoutBusinessInput | pdfCreateOrConnectWithoutBusinessInput[];
    upsert?: pdfUpsertWithWhereUniqueWithoutBusinessInput | pdfUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: pdfCreateManyBusinessInputEnvelope;
    set?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    disconnect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    delete?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    update?: pdfUpdateWithWhereUniqueWithoutBusinessInput | pdfUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: pdfUpdateManyWithWhereWithoutBusinessInput | pdfUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: pdfScalarWhereInput | pdfScalarWhereInput[];
  };

  export type pdfUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<pdfCreateWithoutBusinessInput, pdfUncheckedCreateWithoutBusinessInput>
      | pdfCreateWithoutBusinessInput[]
      | pdfUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: pdfCreateOrConnectWithoutBusinessInput | pdfCreateOrConnectWithoutBusinessInput[];
    upsert?: pdfUpsertWithWhereUniqueWithoutBusinessInput | pdfUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: pdfCreateManyBusinessInputEnvelope;
    set?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    disconnect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    delete?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    update?: pdfUpdateWithWhereUniqueWithoutBusinessInput | pdfUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: pdfUpdateManyWithWhereWithoutBusinessInput | pdfUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: pdfScalarWhereInput | pdfScalarWhereInput[];
  };

  export type assistantCreateNestedManyWithoutPdfInput = {
    create?:
      | XOR<assistantCreateWithoutPdfInput, assistantUncheckedCreateWithoutPdfInput>
      | assistantCreateWithoutPdfInput[]
      | assistantUncheckedCreateWithoutPdfInput[];
    connectOrCreate?: assistantCreateOrConnectWithoutPdfInput | assistantCreateOrConnectWithoutPdfInput[];
    createMany?: assistantCreateManyPdfInputEnvelope;
    connect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
  };

  export type businessCreateNestedOneWithoutPdfInput = {
    create?: XOR<businessCreateWithoutPdfInput, businessUncheckedCreateWithoutPdfInput>;
    connectOrCreate?: businessCreateOrConnectWithoutPdfInput;
    connect?: businessWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPdfInput = {
    create?: XOR<userCreateWithoutPdfInput, userUncheckedCreateWithoutPdfInput>;
    connectOrCreate?: userCreateOrConnectWithoutPdfInput;
    connect?: userWhereUniqueInput;
  };

  export type assistantUncheckedCreateNestedManyWithoutPdfInput = {
    create?:
      | XOR<assistantCreateWithoutPdfInput, assistantUncheckedCreateWithoutPdfInput>
      | assistantCreateWithoutPdfInput[]
      | assistantUncheckedCreateWithoutPdfInput[];
    connectOrCreate?: assistantCreateOrConnectWithoutPdfInput | assistantCreateOrConnectWithoutPdfInput[];
    createMany?: assistantCreateManyPdfInputEnvelope;
    connect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
  };

  export type assistantUpdateManyWithoutPdfNestedInput = {
    create?:
      | XOR<assistantCreateWithoutPdfInput, assistantUncheckedCreateWithoutPdfInput>
      | assistantCreateWithoutPdfInput[]
      | assistantUncheckedCreateWithoutPdfInput[];
    connectOrCreate?: assistantCreateOrConnectWithoutPdfInput | assistantCreateOrConnectWithoutPdfInput[];
    upsert?: assistantUpsertWithWhereUniqueWithoutPdfInput | assistantUpsertWithWhereUniqueWithoutPdfInput[];
    createMany?: assistantCreateManyPdfInputEnvelope;
    set?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    disconnect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    delete?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    connect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    update?: assistantUpdateWithWhereUniqueWithoutPdfInput | assistantUpdateWithWhereUniqueWithoutPdfInput[];
    updateMany?: assistantUpdateManyWithWhereWithoutPdfInput | assistantUpdateManyWithWhereWithoutPdfInput[];
    deleteMany?: assistantScalarWhereInput | assistantScalarWhereInput[];
  };

  export type businessUpdateOneRequiredWithoutPdfNestedInput = {
    create?: XOR<businessCreateWithoutPdfInput, businessUncheckedCreateWithoutPdfInput>;
    connectOrCreate?: businessCreateOrConnectWithoutPdfInput;
    upsert?: businessUpsertWithoutPdfInput;
    connect?: businessWhereUniqueInput;
    update?: XOR<
      XOR<businessUpdateToOneWithWhereWithoutPdfInput, businessUpdateWithoutPdfInput>,
      businessUncheckedUpdateWithoutPdfInput
    >;
  };

  export type userUpdateOneRequiredWithoutPdfNestedInput = {
    create?: XOR<userCreateWithoutPdfInput, userUncheckedCreateWithoutPdfInput>;
    connectOrCreate?: userCreateOrConnectWithoutPdfInput;
    upsert?: userUpsertWithoutPdfInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPdfInput, userUpdateWithoutPdfInput>,
      userUncheckedUpdateWithoutPdfInput
    >;
  };

  export type assistantUncheckedUpdateManyWithoutPdfNestedInput = {
    create?:
      | XOR<assistantCreateWithoutPdfInput, assistantUncheckedCreateWithoutPdfInput>
      | assistantCreateWithoutPdfInput[]
      | assistantUncheckedCreateWithoutPdfInput[];
    connectOrCreate?: assistantCreateOrConnectWithoutPdfInput | assistantCreateOrConnectWithoutPdfInput[];
    upsert?: assistantUpsertWithWhereUniqueWithoutPdfInput | assistantUpsertWithWhereUniqueWithoutPdfInput[];
    createMany?: assistantCreateManyPdfInputEnvelope;
    set?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    disconnect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    delete?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    connect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    update?: assistantUpdateWithWhereUniqueWithoutPdfInput | assistantUpdateWithWhereUniqueWithoutPdfInput[];
    updateMany?: assistantUpdateManyWithWhereWithoutPdfInput | assistantUpdateManyWithWhereWithoutPdfInput[];
    deleteMany?: assistantScalarWhereInput | assistantScalarWhereInput[];
  };

  export type taskCreateNestedOneWithoutReminderInput = {
    create?: XOR<taskCreateWithoutReminderInput, taskUncheckedCreateWithoutReminderInput>;
    connectOrCreate?: taskCreateOrConnectWithoutReminderInput;
    connect?: taskWhereUniqueInput;
  };

  export type taskUpdateOneRequiredWithoutReminderNestedInput = {
    create?: XOR<taskCreateWithoutReminderInput, taskUncheckedCreateWithoutReminderInput>;
    connectOrCreate?: taskCreateOrConnectWithoutReminderInput;
    upsert?: taskUpsertWithoutReminderInput;
    connect?: taskWhereUniqueInput;
    update?: XOR<
      XOR<taskUpdateToOneWithWhereWithoutReminderInput, taskUpdateWithoutReminderInput>,
      taskUncheckedUpdateWithoutReminderInput
    >;
  };

  export type reminderCreateNestedManyWithoutTaskInput = {
    create?:
      | XOR<reminderCreateWithoutTaskInput, reminderUncheckedCreateWithoutTaskInput>
      | reminderCreateWithoutTaskInput[]
      | reminderUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: reminderCreateOrConnectWithoutTaskInput | reminderCreateOrConnectWithoutTaskInput[];
    createMany?: reminderCreateManyTaskInputEnvelope;
    connect?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
  };

  export type assistantCreateNestedOneWithoutTaskInput = {
    create?: XOR<assistantCreateWithoutTaskInput, assistantUncheckedCreateWithoutTaskInput>;
    connectOrCreate?: assistantCreateOrConnectWithoutTaskInput;
    connect?: assistantWhereUniqueInput;
  };

  export type reminderUncheckedCreateNestedManyWithoutTaskInput = {
    create?:
      | XOR<reminderCreateWithoutTaskInput, reminderUncheckedCreateWithoutTaskInput>
      | reminderCreateWithoutTaskInput[]
      | reminderUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: reminderCreateOrConnectWithoutTaskInput | reminderCreateOrConnectWithoutTaskInput[];
    createMany?: reminderCreateManyTaskInputEnvelope;
    connect?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type reminderUpdateManyWithoutTaskNestedInput = {
    create?:
      | XOR<reminderCreateWithoutTaskInput, reminderUncheckedCreateWithoutTaskInput>
      | reminderCreateWithoutTaskInput[]
      | reminderUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: reminderCreateOrConnectWithoutTaskInput | reminderCreateOrConnectWithoutTaskInput[];
    upsert?: reminderUpsertWithWhereUniqueWithoutTaskInput | reminderUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: reminderCreateManyTaskInputEnvelope;
    set?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
    disconnect?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
    delete?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
    connect?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
    update?: reminderUpdateWithWhereUniqueWithoutTaskInput | reminderUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: reminderUpdateManyWithWhereWithoutTaskInput | reminderUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: reminderScalarWhereInput | reminderScalarWhereInput[];
  };

  export type assistantUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<assistantCreateWithoutTaskInput, assistantUncheckedCreateWithoutTaskInput>;
    connectOrCreate?: assistantCreateOrConnectWithoutTaskInput;
    upsert?: assistantUpsertWithoutTaskInput;
    connect?: assistantWhereUniqueInput;
    update?: XOR<
      XOR<assistantUpdateToOneWithWhereWithoutTaskInput, assistantUpdateWithoutTaskInput>,
      assistantUncheckedUpdateWithoutTaskInput
    >;
  };

  export type reminderUncheckedUpdateManyWithoutTaskNestedInput = {
    create?:
      | XOR<reminderCreateWithoutTaskInput, reminderUncheckedCreateWithoutTaskInput>
      | reminderCreateWithoutTaskInput[]
      | reminderUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: reminderCreateOrConnectWithoutTaskInput | reminderCreateOrConnectWithoutTaskInput[];
    upsert?: reminderUpsertWithWhereUniqueWithoutTaskInput | reminderUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: reminderCreateManyTaskInputEnvelope;
    set?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
    disconnect?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
    delete?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
    connect?: reminderWhereUniqueInput | reminderWhereUniqueInput[];
    update?: reminderUpdateWithWhereUniqueWithoutTaskInput | reminderUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: reminderUpdateManyWithWhereWithoutTaskInput | reminderUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: reminderScalarWhereInput | reminderScalarWhereInput[];
  };

  export type assistantCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<assistantCreateWithoutUserInput, assistantUncheckedCreateWithoutUserInput>
      | assistantCreateWithoutUserInput[]
      | assistantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: assistantCreateOrConnectWithoutUserInput | assistantCreateOrConnectWithoutUserInput[];
    createMany?: assistantCreateManyUserInputEnvelope;
    connect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
  };

  export type pdfCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<pdfCreateWithoutUserInput, pdfUncheckedCreateWithoutUserInput>
      | pdfCreateWithoutUserInput[]
      | pdfUncheckedCreateWithoutUserInput[];
    connectOrCreate?: pdfCreateOrConnectWithoutUserInput | pdfCreateOrConnectWithoutUserInput[];
    createMany?: pdfCreateManyUserInputEnvelope;
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
  };

  export type assistantUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<assistantCreateWithoutUserInput, assistantUncheckedCreateWithoutUserInput>
      | assistantCreateWithoutUserInput[]
      | assistantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: assistantCreateOrConnectWithoutUserInput | assistantCreateOrConnectWithoutUserInput[];
    createMany?: assistantCreateManyUserInputEnvelope;
    connect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
  };

  export type pdfUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<pdfCreateWithoutUserInput, pdfUncheckedCreateWithoutUserInput>
      | pdfCreateWithoutUserInput[]
      | pdfUncheckedCreateWithoutUserInput[];
    connectOrCreate?: pdfCreateOrConnectWithoutUserInput | pdfCreateOrConnectWithoutUserInput[];
    createMany?: pdfCreateManyUserInputEnvelope;
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
  };

  export type assistantUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<assistantCreateWithoutUserInput, assistantUncheckedCreateWithoutUserInput>
      | assistantCreateWithoutUserInput[]
      | assistantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: assistantCreateOrConnectWithoutUserInput | assistantCreateOrConnectWithoutUserInput[];
    upsert?: assistantUpsertWithWhereUniqueWithoutUserInput | assistantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: assistantCreateManyUserInputEnvelope;
    set?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    disconnect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    delete?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    connect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    update?: assistantUpdateWithWhereUniqueWithoutUserInput | assistantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: assistantUpdateManyWithWhereWithoutUserInput | assistantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: assistantScalarWhereInput | assistantScalarWhereInput[];
  };

  export type pdfUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<pdfCreateWithoutUserInput, pdfUncheckedCreateWithoutUserInput>
      | pdfCreateWithoutUserInput[]
      | pdfUncheckedCreateWithoutUserInput[];
    connectOrCreate?: pdfCreateOrConnectWithoutUserInput | pdfCreateOrConnectWithoutUserInput[];
    upsert?: pdfUpsertWithWhereUniqueWithoutUserInput | pdfUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: pdfCreateManyUserInputEnvelope;
    set?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    disconnect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    delete?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    update?: pdfUpdateWithWhereUniqueWithoutUserInput | pdfUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: pdfUpdateManyWithWhereWithoutUserInput | pdfUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: pdfScalarWhereInput | pdfScalarWhereInput[];
  };

  export type assistantUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<assistantCreateWithoutUserInput, assistantUncheckedCreateWithoutUserInput>
      | assistantCreateWithoutUserInput[]
      | assistantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: assistantCreateOrConnectWithoutUserInput | assistantCreateOrConnectWithoutUserInput[];
    upsert?: assistantUpsertWithWhereUniqueWithoutUserInput | assistantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: assistantCreateManyUserInputEnvelope;
    set?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    disconnect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    delete?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    connect?: assistantWhereUniqueInput | assistantWhereUniqueInput[];
    update?: assistantUpdateWithWhereUniqueWithoutUserInput | assistantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: assistantUpdateManyWithWhereWithoutUserInput | assistantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: assistantScalarWhereInput | assistantScalarWhereInput[];
  };

  export type pdfUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<pdfCreateWithoutUserInput, pdfUncheckedCreateWithoutUserInput>
      | pdfCreateWithoutUserInput[]
      | pdfUncheckedCreateWithoutUserInput[];
    connectOrCreate?: pdfCreateOrConnectWithoutUserInput | pdfCreateOrConnectWithoutUserInput[];
    upsert?: pdfUpsertWithWhereUniqueWithoutUserInput | pdfUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: pdfCreateManyUserInputEnvelope;
    set?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    disconnect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    delete?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[];
    update?: pdfUpdateWithWhereUniqueWithoutUserInput | pdfUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: pdfUpdateManyWithWhereWithoutUserInput | pdfUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: pdfScalarWhereInput | pdfScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type pdfCreateWithoutAssistantInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business: businessCreateNestedOneWithoutPdfInput;
    user: userCreateNestedOneWithoutPdfInput;
  };

  export type pdfUncheckedCreateWithoutAssistantInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    user_id: string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type pdfCreateOrConnectWithoutAssistantInput = {
    where: pdfWhereUniqueInput;
    create: XOR<pdfCreateWithoutAssistantInput, pdfUncheckedCreateWithoutAssistantInput>;
  };

  export type userCreateWithoutAssistantInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf?: pdfCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAssistantInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf?: pdfUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAssistantInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAssistantInput, userUncheckedCreateWithoutAssistantInput>;
  };

  export type taskCreateWithoutAssistantInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    reminder?: reminderCreateNestedManyWithoutTaskInput;
  };

  export type taskUncheckedCreateWithoutAssistantInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    reminder?: reminderUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type taskCreateOrConnectWithoutAssistantInput = {
    where: taskWhereUniqueInput;
    create: XOR<taskCreateWithoutAssistantInput, taskUncheckedCreateWithoutAssistantInput>;
  };

  export type taskCreateManyAssistantInputEnvelope = {
    data: taskCreateManyAssistantInput | taskCreateManyAssistantInput[];
    skipDuplicates?: boolean;
  };

  export type pdfUpsertWithoutAssistantInput = {
    update: XOR<pdfUpdateWithoutAssistantInput, pdfUncheckedUpdateWithoutAssistantInput>;
    create: XOR<pdfCreateWithoutAssistantInput, pdfUncheckedCreateWithoutAssistantInput>;
    where?: pdfWhereInput;
  };

  export type pdfUpdateToOneWithWhereWithoutAssistantInput = {
    where?: pdfWhereInput;
    data: XOR<pdfUpdateWithoutAssistantInput, pdfUncheckedUpdateWithoutAssistantInput>;
  };

  export type pdfUpdateWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: businessUpdateOneRequiredWithoutPdfNestedInput;
    user?: userUpdateOneRequiredWithoutPdfNestedInput;
  };

  export type pdfUncheckedUpdateWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutAssistantInput = {
    update: XOR<userUpdateWithoutAssistantInput, userUncheckedUpdateWithoutAssistantInput>;
    create: XOR<userCreateWithoutAssistantInput, userUncheckedCreateWithoutAssistantInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAssistantInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAssistantInput, userUncheckedUpdateWithoutAssistantInput>;
  };

  export type userUpdateWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf?: pdfUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf?: pdfUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type taskUpsertWithWhereUniqueWithoutAssistantInput = {
    where: taskWhereUniqueInput;
    update: XOR<taskUpdateWithoutAssistantInput, taskUncheckedUpdateWithoutAssistantInput>;
    create: XOR<taskCreateWithoutAssistantInput, taskUncheckedCreateWithoutAssistantInput>;
  };

  export type taskUpdateWithWhereUniqueWithoutAssistantInput = {
    where: taskWhereUniqueInput;
    data: XOR<taskUpdateWithoutAssistantInput, taskUncheckedUpdateWithoutAssistantInput>;
  };

  export type taskUpdateManyWithWhereWithoutAssistantInput = {
    where: taskScalarWhereInput;
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutAssistantInput>;
  };

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[];
    OR?: taskScalarWhereInput[];
    NOT?: taskScalarWhereInput | taskScalarWhereInput[];
    id?: UuidFilter<'task'> | string;
    title?: StringFilter<'task'> | string;
    description?: StringNullableFilter<'task'> | string | null;
    status?: StringFilter<'task'> | string;
    due_date?: DateTimeNullableFilter<'task'> | Date | string | null;
    assistant_id?: UuidFilter<'task'> | string;
    created_at?: DateTimeFilter<'task'> | Date | string;
    updated_at?: DateTimeFilter<'task'> | Date | string;
  };

  export type pdfCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantCreateNestedManyWithoutPdfInput;
    user: userCreateNestedOneWithoutPdfInput;
  };

  export type pdfUncheckedCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantUncheckedCreateNestedManyWithoutPdfInput;
  };

  export type pdfCreateOrConnectWithoutBusinessInput = {
    where: pdfWhereUniqueInput;
    create: XOR<pdfCreateWithoutBusinessInput, pdfUncheckedCreateWithoutBusinessInput>;
  };

  export type pdfCreateManyBusinessInputEnvelope = {
    data: pdfCreateManyBusinessInput | pdfCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type pdfUpsertWithWhereUniqueWithoutBusinessInput = {
    where: pdfWhereUniqueInput;
    update: XOR<pdfUpdateWithoutBusinessInput, pdfUncheckedUpdateWithoutBusinessInput>;
    create: XOR<pdfCreateWithoutBusinessInput, pdfUncheckedCreateWithoutBusinessInput>;
  };

  export type pdfUpdateWithWhereUniqueWithoutBusinessInput = {
    where: pdfWhereUniqueInput;
    data: XOR<pdfUpdateWithoutBusinessInput, pdfUncheckedUpdateWithoutBusinessInput>;
  };

  export type pdfUpdateManyWithWhereWithoutBusinessInput = {
    where: pdfScalarWhereInput;
    data: XOR<pdfUpdateManyMutationInput, pdfUncheckedUpdateManyWithoutBusinessInput>;
  };

  export type pdfScalarWhereInput = {
    AND?: pdfScalarWhereInput | pdfScalarWhereInput[];
    OR?: pdfScalarWhereInput[];
    NOT?: pdfScalarWhereInput | pdfScalarWhereInput[];
    id?: UuidFilter<'pdf'> | string;
    title?: StringFilter<'pdf'> | string;
    content?: StringFilter<'pdf'> | string;
    upload_time?: DateTimeFilter<'pdf'> | Date | string;
    user_id?: UuidFilter<'pdf'> | string;
    business_id?: UuidFilter<'pdf'> | string;
    created_at?: DateTimeFilter<'pdf'> | Date | string;
    updated_at?: DateTimeFilter<'pdf'> | Date | string;
  };

  export type assistantCreateWithoutPdfInput = {
    id?: string;
    name: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAssistantInput;
    task?: taskCreateNestedManyWithoutAssistantInput;
  };

  export type assistantUncheckedCreateWithoutPdfInput = {
    id?: string;
    name: string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskUncheckedCreateNestedManyWithoutAssistantInput;
  };

  export type assistantCreateOrConnectWithoutPdfInput = {
    where: assistantWhereUniqueInput;
    create: XOR<assistantCreateWithoutPdfInput, assistantUncheckedCreateWithoutPdfInput>;
  };

  export type assistantCreateManyPdfInputEnvelope = {
    data: assistantCreateManyPdfInput | assistantCreateManyPdfInput[];
    skipDuplicates?: boolean;
  };

  export type businessCreateWithoutPdfInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type businessUncheckedCreateWithoutPdfInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type businessCreateOrConnectWithoutPdfInput = {
    where: businessWhereUniqueInput;
    create: XOR<businessCreateWithoutPdfInput, businessUncheckedCreateWithoutPdfInput>;
  };

  export type userCreateWithoutPdfInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPdfInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPdfInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPdfInput, userUncheckedCreateWithoutPdfInput>;
  };

  export type assistantUpsertWithWhereUniqueWithoutPdfInput = {
    where: assistantWhereUniqueInput;
    update: XOR<assistantUpdateWithoutPdfInput, assistantUncheckedUpdateWithoutPdfInput>;
    create: XOR<assistantCreateWithoutPdfInput, assistantUncheckedCreateWithoutPdfInput>;
  };

  export type assistantUpdateWithWhereUniqueWithoutPdfInput = {
    where: assistantWhereUniqueInput;
    data: XOR<assistantUpdateWithoutPdfInput, assistantUncheckedUpdateWithoutPdfInput>;
  };

  export type assistantUpdateManyWithWhereWithoutPdfInput = {
    where: assistantScalarWhereInput;
    data: XOR<assistantUpdateManyMutationInput, assistantUncheckedUpdateManyWithoutPdfInput>;
  };

  export type assistantScalarWhereInput = {
    AND?: assistantScalarWhereInput | assistantScalarWhereInput[];
    OR?: assistantScalarWhereInput[];
    NOT?: assistantScalarWhereInput | assistantScalarWhereInput[];
    id?: UuidFilter<'assistant'> | string;
    name?: StringFilter<'assistant'> | string;
    status?: StringFilter<'assistant'> | string;
    pdf_id?: UuidFilter<'assistant'> | string;
    user_id?: UuidFilter<'assistant'> | string;
    created_at?: DateTimeFilter<'assistant'> | Date | string;
    updated_at?: DateTimeFilter<'assistant'> | Date | string;
  };

  export type businessUpsertWithoutPdfInput = {
    update: XOR<businessUpdateWithoutPdfInput, businessUncheckedUpdateWithoutPdfInput>;
    create: XOR<businessCreateWithoutPdfInput, businessUncheckedCreateWithoutPdfInput>;
    where?: businessWhereInput;
  };

  export type businessUpdateToOneWithWhereWithoutPdfInput = {
    where?: businessWhereInput;
    data: XOR<businessUpdateWithoutPdfInput, businessUncheckedUpdateWithoutPdfInput>;
  };

  export type businessUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type businessUncheckedUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutPdfInput = {
    update: XOR<userUpdateWithoutPdfInput, userUncheckedUpdateWithoutPdfInput>;
    create: XOR<userCreateWithoutPdfInput, userUncheckedCreateWithoutPdfInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPdfInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPdfInput, userUncheckedUpdateWithoutPdfInput>;
  };

  export type userUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type taskCreateWithoutReminderInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant: assistantCreateNestedOneWithoutTaskInput;
  };

  export type taskUncheckedCreateWithoutReminderInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    due_date?: Date | string | null;
    assistant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskCreateOrConnectWithoutReminderInput = {
    where: taskWhereUniqueInput;
    create: XOR<taskCreateWithoutReminderInput, taskUncheckedCreateWithoutReminderInput>;
  };

  export type taskUpsertWithoutReminderInput = {
    update: XOR<taskUpdateWithoutReminderInput, taskUncheckedUpdateWithoutReminderInput>;
    create: XOR<taskCreateWithoutReminderInput, taskUncheckedCreateWithoutReminderInput>;
    where?: taskWhereInput;
  };

  export type taskUpdateToOneWithWhereWithoutReminderInput = {
    where?: taskWhereInput;
    data: XOR<taskUpdateWithoutReminderInput, taskUncheckedUpdateWithoutReminderInput>;
  };

  export type taskUpdateWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUpdateOneRequiredWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assistant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reminderCreateWithoutTaskInput = {
    id?: string;
    title: string;
    description?: string | null;
    reminder_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reminderUncheckedCreateWithoutTaskInput = {
    id?: string;
    title: string;
    description?: string | null;
    reminder_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reminderCreateOrConnectWithoutTaskInput = {
    where: reminderWhereUniqueInput;
    create: XOR<reminderCreateWithoutTaskInput, reminderUncheckedCreateWithoutTaskInput>;
  };

  export type reminderCreateManyTaskInputEnvelope = {
    data: reminderCreateManyTaskInput | reminderCreateManyTaskInput[];
    skipDuplicates?: boolean;
  };

  export type assistantCreateWithoutTaskInput = {
    id?: string;
    name: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf: pdfCreateNestedOneWithoutAssistantInput;
    user: userCreateNestedOneWithoutAssistantInput;
  };

  export type assistantUncheckedCreateWithoutTaskInput = {
    id?: string;
    name: string;
    status: string;
    pdf_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assistantCreateOrConnectWithoutTaskInput = {
    where: assistantWhereUniqueInput;
    create: XOR<assistantCreateWithoutTaskInput, assistantUncheckedCreateWithoutTaskInput>;
  };

  export type reminderUpsertWithWhereUniqueWithoutTaskInput = {
    where: reminderWhereUniqueInput;
    update: XOR<reminderUpdateWithoutTaskInput, reminderUncheckedUpdateWithoutTaskInput>;
    create: XOR<reminderCreateWithoutTaskInput, reminderUncheckedCreateWithoutTaskInput>;
  };

  export type reminderUpdateWithWhereUniqueWithoutTaskInput = {
    where: reminderWhereUniqueInput;
    data: XOR<reminderUpdateWithoutTaskInput, reminderUncheckedUpdateWithoutTaskInput>;
  };

  export type reminderUpdateManyWithWhereWithoutTaskInput = {
    where: reminderScalarWhereInput;
    data: XOR<reminderUpdateManyMutationInput, reminderUncheckedUpdateManyWithoutTaskInput>;
  };

  export type reminderScalarWhereInput = {
    AND?: reminderScalarWhereInput | reminderScalarWhereInput[];
    OR?: reminderScalarWhereInput[];
    NOT?: reminderScalarWhereInput | reminderScalarWhereInput[];
    id?: UuidFilter<'reminder'> | string;
    title?: StringFilter<'reminder'> | string;
    description?: StringNullableFilter<'reminder'> | string | null;
    reminder_time?: DateTimeFilter<'reminder'> | Date | string;
    task_id?: UuidFilter<'reminder'> | string;
    created_at?: DateTimeFilter<'reminder'> | Date | string;
    updated_at?: DateTimeFilter<'reminder'> | Date | string;
  };

  export type assistantUpsertWithoutTaskInput = {
    update: XOR<assistantUpdateWithoutTaskInput, assistantUncheckedUpdateWithoutTaskInput>;
    create: XOR<assistantCreateWithoutTaskInput, assistantUncheckedCreateWithoutTaskInput>;
    where?: assistantWhereInput;
  };

  export type assistantUpdateToOneWithWhereWithoutTaskInput = {
    where?: assistantWhereInput;
    data: XOR<assistantUpdateWithoutTaskInput, assistantUncheckedUpdateWithoutTaskInput>;
  };

  export type assistantUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf?: pdfUpdateOneRequiredWithoutAssistantNestedInput;
    user?: userUpdateOneRequiredWithoutAssistantNestedInput;
  };

  export type assistantUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    pdf_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assistantCreateWithoutUserInput = {
    id?: string;
    name: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf: pdfCreateNestedOneWithoutAssistantInput;
    task?: taskCreateNestedManyWithoutAssistantInput;
  };

  export type assistantUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    status: string;
    pdf_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskUncheckedCreateNestedManyWithoutAssistantInput;
  };

  export type assistantCreateOrConnectWithoutUserInput = {
    where: assistantWhereUniqueInput;
    create: XOR<assistantCreateWithoutUserInput, assistantUncheckedCreateWithoutUserInput>;
  };

  export type assistantCreateManyUserInputEnvelope = {
    data: assistantCreateManyUserInput | assistantCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type pdfCreateWithoutUserInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantCreateNestedManyWithoutPdfInput;
    business: businessCreateNestedOneWithoutPdfInput;
  };

  export type pdfUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistant?: assistantUncheckedCreateNestedManyWithoutPdfInput;
  };

  export type pdfCreateOrConnectWithoutUserInput = {
    where: pdfWhereUniqueInput;
    create: XOR<pdfCreateWithoutUserInput, pdfUncheckedCreateWithoutUserInput>;
  };

  export type pdfCreateManyUserInputEnvelope = {
    data: pdfCreateManyUserInput | pdfCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type assistantUpsertWithWhereUniqueWithoutUserInput = {
    where: assistantWhereUniqueInput;
    update: XOR<assistantUpdateWithoutUserInput, assistantUncheckedUpdateWithoutUserInput>;
    create: XOR<assistantCreateWithoutUserInput, assistantUncheckedCreateWithoutUserInput>;
  };

  export type assistantUpdateWithWhereUniqueWithoutUserInput = {
    where: assistantWhereUniqueInput;
    data: XOR<assistantUpdateWithoutUserInput, assistantUncheckedUpdateWithoutUserInput>;
  };

  export type assistantUpdateManyWithWhereWithoutUserInput = {
    where: assistantScalarWhereInput;
    data: XOR<assistantUpdateManyMutationInput, assistantUncheckedUpdateManyWithoutUserInput>;
  };

  export type pdfUpsertWithWhereUniqueWithoutUserInput = {
    where: pdfWhereUniqueInput;
    update: XOR<pdfUpdateWithoutUserInput, pdfUncheckedUpdateWithoutUserInput>;
    create: XOR<pdfCreateWithoutUserInput, pdfUncheckedCreateWithoutUserInput>;
  };

  export type pdfUpdateWithWhereUniqueWithoutUserInput = {
    where: pdfWhereUniqueInput;
    data: XOR<pdfUpdateWithoutUserInput, pdfUncheckedUpdateWithoutUserInput>;
  };

  export type pdfUpdateManyWithWhereWithoutUserInput = {
    where: pdfScalarWhereInput;
    data: XOR<pdfUpdateManyMutationInput, pdfUncheckedUpdateManyWithoutUserInput>;
  };

  export type taskCreateManyAssistantInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskUpdateWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reminder?: reminderUpdateManyWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reminder?: reminderUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateManyWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type pdfCreateManyBusinessInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type pdfUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUpdateManyWithoutPdfNestedInput;
    user?: userUpdateOneRequiredWithoutPdfNestedInput;
  };

  export type pdfUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUncheckedUpdateManyWithoutPdfNestedInput;
  };

  export type pdfUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assistantCreateManyPdfInput = {
    id?: string;
    name: string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assistantUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAssistantNestedInput;
    task?: taskUpdateManyWithoutAssistantNestedInput;
  };

  export type assistantUncheckedUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUncheckedUpdateManyWithoutAssistantNestedInput;
  };

  export type assistantUncheckedUpdateManyWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reminderCreateManyTaskInput = {
    id?: string;
    title: string;
    description?: string | null;
    reminder_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reminderUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    reminder_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reminderUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    reminder_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reminderUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    reminder_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assistantCreateManyUserInput = {
    id?: string;
    name: string;
    status: string;
    pdf_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type pdfCreateManyUserInput = {
    id?: string;
    title: string;
    content: string;
    upload_time?: Date | string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assistantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf?: pdfUpdateOneRequiredWithoutAssistantNestedInput;
    task?: taskUpdateManyWithoutAssistantNestedInput;
  };

  export type assistantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    pdf_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUncheckedUpdateManyWithoutAssistantNestedInput;
  };

  export type assistantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    pdf_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type pdfUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUpdateManyWithoutPdfNestedInput;
    business?: businessUpdateOneRequiredWithoutPdfNestedInput;
  };

  export type pdfUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistant?: assistantUncheckedUpdateManyWithoutPdfNestedInput;
  };

  export type pdfUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    upload_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use AssistantCountOutputTypeDefaultArgs instead
   */
  export type AssistantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    AssistantCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use BusinessCountOutputTypeDefaultArgs instead
   */
  export type BusinessCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PdfCountOutputTypeDefaultArgs instead
   */
  export type PdfCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    PdfCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TaskCountOutputTypeDefaultArgs instead
   */
  export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TaskCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use assistantDefaultArgs instead
   */
  export type assistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    assistantDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use businessDefaultArgs instead
   */
  export type businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    businessDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use pdfDefaultArgs instead
   */
  export type pdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pdfDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reminderDefaultArgs instead
   */
  export type reminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reminderDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use taskDefaultArgs instead
   */
  export type taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = taskDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
