
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Contacts
 * 
 */
export type Contacts = $Result.DefaultSelection<Prisma.$ContactsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.roles.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.contacts`: Exposes CRUD operations for the **Contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.ContactsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Roles: 'Roles',
    Users: 'Users',
    Contacts: 'Contacts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "roles" | "users" | "contacts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Contacts: {
        payload: Prisma.$ContactsPayload<ExtArgs>
        fields: Prisma.ContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findFirst: {
            args: Prisma.ContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findMany: {
            args: Prisma.ContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          create: {
            args: Prisma.ContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          createMany: {
            args: Prisma.ContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          update: {
            args: Prisma.ContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          deleteMany: {
            args: Prisma.ContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.ContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    contacts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | UsersCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>


  export type RolesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
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
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */ 
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'String'>
    readonly name: FieldRef<"Roles", 'String'>
    readonly createdAt: FieldRef<"Roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
  }

  /**
   * Roles.users
   */
  export type Roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roleId: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roleId: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    roleId: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    roleId: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    roles?: boolean | RolesDefaultArgs<ExtArgs>
    contacts?: boolean | Users$contactsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | RolesDefaultArgs<ExtArgs>
    contacts?: boolean | Users$contactsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      roles: Prisma.$RolesPayload<ExtArgs>
      contacts: Prisma.$ContactsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
      roleId: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    contacts<T extends Users$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Users$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly roleId: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.contacts
   */
  export type Users$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    cursor?: ContactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to aggregate.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithAggregationInput | ContactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: ContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _avg?: ContactsAvgAggregateInputType
    _sum?: ContactsSumAggregateInputType
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type ContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>


  export type ContactsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type ContactsGetPayload<S extends boolean | null | undefined | ContactsDefaultArgs> = $Result.GetResult<Prisma.$ContactsPayload, S>

  type ContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface ContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacts'], meta: { name: 'Contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {ContactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsFindUniqueArgs>(args: SelectSubset<T, ContactsFindUniqueArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsFindFirstArgs>(args?: SelectSubset<T, ContactsFindFirstArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactsFindManyArgs>(args?: SelectSubset<T, ContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contacts.
     * @param {ContactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends ContactsCreateArgs>(args: SelectSubset<T, ContactsCreateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contacts.
     * @param {ContactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsCreateManyArgs>(args?: SelectSubset<T, ContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contacts.
     * @param {ContactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends ContactsDeleteArgs>(args: SelectSubset<T, ContactsDeleteArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contacts.
     * @param {ContactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsUpdateArgs>(args: SelectSubset<T, ContactsUpdateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsDeleteManyArgs>(args?: SelectSubset<T, ContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsUpdateManyArgs>(args: SelectSubset<T, ContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contacts.
     * @param {ContactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends ContactsUpsertArgs>(args: SelectSubset<T, ContactsUpsertArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactsCountArgs>(
      args?: Subset<T, ContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
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
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacts model
   */
  readonly fields: ContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacts model
   */ 
  interface ContactsFieldRefs {
    readonly id: FieldRef<"Contacts", 'Int'>
    readonly name: FieldRef<"Contacts", 'String'>
    readonly email: FieldRef<"Contacts", 'String'>
    readonly phone: FieldRef<"Contacts", 'String'>
    readonly userId: FieldRef<"Contacts", 'Int'>
    readonly createdAt: FieldRef<"Contacts", 'DateTime'>
    readonly updatedAt: FieldRef<"Contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacts findUnique
   */
  export type ContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findUniqueOrThrow
   */
  export type ContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findFirst
   */
  export type ContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findFirstOrThrow
   */
  export type ContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findMany
   */
  export type ContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts create
   */
  export type ContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contacts.
     */
    data: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
  }

  /**
   * Contacts createMany
   */
  export type ContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts update
   */
  export type ContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contacts.
     */
    data: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
    /**
     * Choose, which Contacts to update.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts updateMany
   */
  export type ContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
  }

  /**
   * Contacts upsert
   */
  export type ContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contacts to update in case it exists.
     */
    where: ContactsWhereUniqueInput
    /**
     * In case the Contacts found by the `where` argument doesn't exist, create a new Contacts with this data.
     */
    create: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
    /**
     * In case the Contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
  }

  /**
   * Contacts delete
   */
  export type ContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter which Contacts to delete.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts deleteMany
   */
  export type ContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactsWhereInput
  }

  /**
   * Contacts without action
   */
  export type ContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roleId: 'roleId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: StringFilter<"Roles"> | string
    name?: StringFilter<"Roles"> | string
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    users?: UsersListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    users?: UsersOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    users?: UsersListRelationFilter
  }, "id" | "name">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roles"> | string
    name?: StringWithAggregatesFilter<"Roles"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    roleId?: StringFilter<"Users"> | string
    roles?: XOR<RolesRelationFilter, RolesWhereInput>
    contacts?: ContactsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    roles?: RolesOrderByWithRelationInput
    contacts?: ContactsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    roleId?: StringFilter<"Users"> | string
    roles?: XOR<RolesRelationFilter, RolesWhereInput>
    contacts?: ContactsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    roleId?: StringWithAggregatesFilter<"Users"> | string
  }

  export type ContactsWhereInput = {
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    id?: IntFilter<"Contacts"> | number
    name?: StringFilter<"Contacts"> | string
    email?: StringFilter<"Contacts"> | string
    phone?: StringFilter<"Contacts"> | string
    userId?: IntFilter<"Contacts"> | number
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type ContactsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type ContactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    name?: StringFilter<"Contacts"> | string
    email?: StringFilter<"Contacts"> | string
    phone?: StringFilter<"Contacts"> | string
    userId?: IntFilter<"Contacts"> | number
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id">

  export type ContactsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactsCountOrderByAggregateInput
    _avg?: ContactsAvgOrderByAggregateInput
    _max?: ContactsMaxOrderByAggregateInput
    _min?: ContactsMinOrderByAggregateInput
    _sum?: ContactsSumOrderByAggregateInput
  }

  export type ContactsScalarWhereWithAggregatesInput = {
    AND?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    OR?: ContactsScalarWhereWithAggregatesInput[]
    NOT?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contacts"> | number
    name?: StringWithAggregatesFilter<"Contacts"> | string
    email?: StringWithAggregatesFilter<"Contacts"> | string
    phone?: StringWithAggregatesFilter<"Contacts"> | string
    userId?: IntWithAggregatesFilter<"Contacts"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
  }

  export type RolesCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UsersCreateNestedManyWithoutRolesInput
  }

  export type RolesUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RolesCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles: RolesCreateNestedOneWithoutUsersInput
    contacts?: ContactsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: string
    contacts?: ContactsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RolesUpdateOneRequiredWithoutUsersNestedInput
    contacts?: ContactsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
    contacts?: ContactsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsCreateInput = {
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutContactsInput
  }

  export type ContactsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RolesRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type ContactsListRelationFilter = {
    every?: ContactsWhereInput
    some?: ContactsWhereInput
    none?: ContactsWhereInput
  }

  export type ContactsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ContactsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UsersCreateNestedManyWithoutRolesInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRolesInput | UsersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRolesInput | UsersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRolesInput | UsersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRolesInput | UsersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRolesInput | UsersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRolesInput | UsersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type ContactsCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput> | ContactsCreateWithoutUserInput[] | ContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput | ContactsCreateOrConnectWithoutUserInput[]
    createMany?: ContactsCreateManyUserInputEnvelope
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
  }

  export type ContactsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput> | ContactsCreateWithoutUserInput[] | ContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput | ContactsCreateOrConnectWithoutUserInput[]
    createMany?: ContactsCreateManyUserInputEnvelope
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type ContactsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput> | ContactsCreateWithoutUserInput[] | ContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput | ContactsCreateOrConnectWithoutUserInput[]
    upsert?: ContactsUpsertWithWhereUniqueWithoutUserInput | ContactsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactsCreateManyUserInputEnvelope
    set?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    disconnect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    delete?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    update?: ContactsUpdateWithWhereUniqueWithoutUserInput | ContactsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactsUpdateManyWithWhereWithoutUserInput | ContactsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContactsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput> | ContactsCreateWithoutUserInput[] | ContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput | ContactsCreateOrConnectWithoutUserInput[]
    upsert?: ContactsUpsertWithWhereUniqueWithoutUserInput | ContactsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactsCreateManyUserInputEnvelope
    set?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    disconnect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    delete?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    update?: ContactsUpdateWithWhereUniqueWithoutUserInput | ContactsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactsUpdateManyWithWhereWithoutUserInput | ContactsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutContactsInput = {
    create?: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutContactsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutContactsInput
    upsert?: UsersUpsertWithoutContactsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutContactsInput, UsersUpdateWithoutContactsInput>, UsersUncheckedUpdateWithoutContactsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsersCreateWithoutRolesInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRolesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
  }

  export type UsersCreateManyRolesInputEnvelope = {
    data: UsersCreateManyRolesInput | UsersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRolesInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRolesInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
  }

  export type UsersUpdateManyWithWhereWithoutRolesInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRolesInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    roleId?: StringFilter<"Users"> | string
  }

  export type RolesCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type ContactsCreateWithoutUserInput = {
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsCreateOrConnectWithoutUserInput = {
    where: ContactsWhereUniqueInput
    create: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
  }

  export type ContactsCreateManyUserInputEnvelope = {
    data: ContactsCreateManyUserInput | ContactsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactsWhereUniqueInput
    update: XOR<ContactsUpdateWithoutUserInput, ContactsUncheckedUpdateWithoutUserInput>
    create: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
  }

  export type ContactsUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactsWhereUniqueInput
    data: XOR<ContactsUpdateWithoutUserInput, ContactsUncheckedUpdateWithoutUserInput>
  }

  export type ContactsUpdateManyWithWhereWithoutUserInput = {
    where: ContactsScalarWhereInput
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactsScalarWhereInput = {
    AND?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
    OR?: ContactsScalarWhereInput[]
    NOT?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
    id?: IntFilter<"Contacts"> | number
    name?: StringFilter<"Contacts"> | string
    email?: StringFilter<"Contacts"> | string
    phone?: StringFilter<"Contacts"> | string
    userId?: IntFilter<"Contacts"> | number
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
  }

  export type UsersCreateWithoutContactsInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles: RolesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutContactsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: string
  }

  export type UsersCreateOrConnectWithoutContactsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
  }

  export type UsersUpsertWithoutContactsInput = {
    update: XOR<UsersUpdateWithoutContactsInput, UsersUncheckedUpdateWithoutContactsInput>
    create: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutContactsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutContactsInput, UsersUncheckedUpdateWithoutContactsInput>
  }

  export type UsersUpdateWithoutContactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateManyRolesInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateManyUserInput = {
    id?: number
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolesDefaultArgs instead
     */
    export type RolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactsDefaultArgs instead
     */
    export type ContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}