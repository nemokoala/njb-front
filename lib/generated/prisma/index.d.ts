
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
 * Model ImageList
 * 
 */
export type ImageList = $Result.DefaultSelection<Prisma.$ImageListPayload>
/**
 * Model activation_token
 * 
 */
export type activation_token = $Result.DefaultSelection<Prisma.$activation_tokenPayload>
/**
 * Model ai_api_usage
 * 
 */
export type ai_api_usage = $Result.DefaultSelection<Prisma.$ai_api_usagePayload>
/**
 * Model authority
 * 
 */
export type authority = $Result.DefaultSelection<Prisma.$authorityPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model ingredient
 * 
 */
export type ingredient = $Result.DefaultSelection<Prisma.$ingredientPayload>
/**
 * Model member
 * 
 */
export type member = $Result.DefaultSelection<Prisma.$memberPayload>
/**
 * Model refresh_token
 * 
 */
export type refresh_token = $Result.DefaultSelection<Prisma.$refresh_tokenPayload>
/**
 * Model refrigerator
 * 
 */
export type refrigerator = $Result.DefaultSelection<Prisma.$refrigeratorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const member_join_type: {
  GOOGLE: 'GOOGLE',
  KAKAO: 'KAKAO',
  LOCAL: 'LOCAL',
  NAVER: 'NAVER'
};

export type member_join_type = (typeof member_join_type)[keyof typeof member_join_type]

}

export type member_join_type = $Enums.member_join_type

export const member_join_type: typeof $Enums.member_join_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ImageLists
 * const imageLists = await prisma.imageList.findMany()
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
   * // Fetch zero or more ImageLists
   * const imageLists = await prisma.imageList.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.imageList`: Exposes CRUD operations for the **ImageList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageLists
    * const imageLists = await prisma.imageList.findMany()
    * ```
    */
  get imageList(): Prisma.ImageListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activation_token`: Exposes CRUD operations for the **activation_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activation_tokens
    * const activation_tokens = await prisma.activation_token.findMany()
    * ```
    */
  get activation_token(): Prisma.activation_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ai_api_usage`: Exposes CRUD operations for the **ai_api_usage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_api_usages
    * const ai_api_usages = await prisma.ai_api_usage.findMany()
    * ```
    */
  get ai_api_usage(): Prisma.ai_api_usageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authority`: Exposes CRUD operations for the **authority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authorities
    * const authorities = await prisma.authority.findMany()
    * ```
    */
  get authority(): Prisma.authorityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.ingredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refresh_token`: Exposes CRUD operations for the **refresh_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refresh_tokens
    * const refresh_tokens = await prisma.refresh_token.findMany()
    * ```
    */
  get refresh_token(): Prisma.refresh_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refrigerator`: Exposes CRUD operations for the **refrigerator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refrigerators
    * const refrigerators = await prisma.refrigerator.findMany()
    * ```
    */
  get refrigerator(): Prisma.refrigeratorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    ImageList: 'ImageList',
    activation_token: 'activation_token',
    ai_api_usage: 'ai_api_usage',
    authority: 'authority',
    category: 'category',
    ingredient: 'ingredient',
    member: 'member',
    refresh_token: 'refresh_token',
    refrigerator: 'refrigerator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "imageList" | "activation_token" | "ai_api_usage" | "authority" | "category" | "ingredient" | "member" | "refresh_token" | "refrigerator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ImageList: {
        payload: Prisma.$ImageListPayload<ExtArgs>
        fields: Prisma.ImageListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload>
          }
          findFirst: {
            args: Prisma.ImageListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload>
          }
          findMany: {
            args: Prisma.ImageListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload>[]
          }
          create: {
            args: Prisma.ImageListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload>
          }
          createMany: {
            args: Prisma.ImageListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload>
          }
          update: {
            args: Prisma.ImageListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload>
          }
          deleteMany: {
            args: Prisma.ImageListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageListPayload>
          }
          aggregate: {
            args: Prisma.ImageListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageList>
          }
          groupBy: {
            args: Prisma.ImageListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageListCountArgs<ExtArgs>
            result: $Utils.Optional<ImageListCountAggregateOutputType> | number
          }
        }
      }
      activation_token: {
        payload: Prisma.$activation_tokenPayload<ExtArgs>
        fields: Prisma.activation_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activation_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activation_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload>
          }
          findFirst: {
            args: Prisma.activation_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activation_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload>
          }
          findMany: {
            args: Prisma.activation_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload>[]
          }
          create: {
            args: Prisma.activation_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload>
          }
          createMany: {
            args: Prisma.activation_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.activation_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload>
          }
          update: {
            args: Prisma.activation_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload>
          }
          deleteMany: {
            args: Prisma.activation_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activation_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.activation_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activation_tokenPayload>
          }
          aggregate: {
            args: Prisma.Activation_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivation_token>
          }
          groupBy: {
            args: Prisma.activation_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Activation_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.activation_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Activation_tokenCountAggregateOutputType> | number
          }
        }
      }
      ai_api_usage: {
        payload: Prisma.$ai_api_usagePayload<ExtArgs>
        fields: Prisma.ai_api_usageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ai_api_usageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ai_api_usageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload>
          }
          findFirst: {
            args: Prisma.ai_api_usageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ai_api_usageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload>
          }
          findMany: {
            args: Prisma.ai_api_usageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload>[]
          }
          create: {
            args: Prisma.ai_api_usageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload>
          }
          createMany: {
            args: Prisma.ai_api_usageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ai_api_usageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload>
          }
          update: {
            args: Prisma.ai_api_usageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload>
          }
          deleteMany: {
            args: Prisma.ai_api_usageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ai_api_usageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ai_api_usageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_api_usagePayload>
          }
          aggregate: {
            args: Prisma.Ai_api_usageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_api_usage>
          }
          groupBy: {
            args: Prisma.ai_api_usageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_api_usageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ai_api_usageCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_api_usageCountAggregateOutputType> | number
          }
        }
      }
      authority: {
        payload: Prisma.$authorityPayload<ExtArgs>
        fields: Prisma.authorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload>
          }
          findFirst: {
            args: Prisma.authorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload>
          }
          findMany: {
            args: Prisma.authorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload>[]
          }
          create: {
            args: Prisma.authorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload>
          }
          createMany: {
            args: Prisma.authorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.authorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload>
          }
          update: {
            args: Prisma.authorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload>
          }
          deleteMany: {
            args: Prisma.authorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.authorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorityPayload>
          }
          aggregate: {
            args: Prisma.AuthorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthority>
          }
          groupBy: {
            args: Prisma.authorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorityCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorityCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ingredient: {
        payload: Prisma.$ingredientPayload<ExtArgs>
        fields: Prisma.ingredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          findFirst: {
            args: Prisma.ingredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          findMany: {
            args: Prisma.ingredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>[]
          }
          create: {
            args: Prisma.ingredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          createMany: {
            args: Prisma.ingredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ingredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          update: {
            args: Prisma.ingredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          deleteMany: {
            args: Prisma.ingredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ingredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.ingredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      member: {
        payload: Prisma.$memberPayload<ExtArgs>
        fields: Prisma.memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findFirst: {
            args: Prisma.memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findMany: {
            args: Prisma.memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          create: {
            args: Prisma.memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          createMany: {
            args: Prisma.memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          update: {
            args: Prisma.memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          deleteMany: {
            args: Prisma.memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.memberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      refresh_token: {
        payload: Prisma.$refresh_tokenPayload<ExtArgs>
        fields: Prisma.refresh_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refresh_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refresh_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          findFirst: {
            args: Prisma.refresh_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refresh_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          findMany: {
            args: Prisma.refresh_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>[]
          }
          create: {
            args: Prisma.refresh_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          createMany: {
            args: Prisma.refresh_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.refresh_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          update: {
            args: Prisma.refresh_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          deleteMany: {
            args: Prisma.refresh_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refresh_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.refresh_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          aggregate: {
            args: Prisma.Refresh_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefresh_token>
          }
          groupBy: {
            args: Prisma.refresh_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.refresh_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokenCountAggregateOutputType> | number
          }
        }
      }
      refrigerator: {
        payload: Prisma.$refrigeratorPayload<ExtArgs>
        fields: Prisma.refrigeratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refrigeratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refrigeratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload>
          }
          findFirst: {
            args: Prisma.refrigeratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refrigeratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload>
          }
          findMany: {
            args: Prisma.refrigeratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload>[]
          }
          create: {
            args: Prisma.refrigeratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload>
          }
          createMany: {
            args: Prisma.refrigeratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.refrigeratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload>
          }
          update: {
            args: Prisma.refrigeratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload>
          }
          deleteMany: {
            args: Prisma.refrigeratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refrigeratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.refrigeratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refrigeratorPayload>
          }
          aggregate: {
            args: Prisma.RefrigeratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefrigerator>
          }
          groupBy: {
            args: Prisma.refrigeratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefrigeratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.refrigeratorCountArgs<ExtArgs>
            result: $Utils.Optional<RefrigeratorCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    imageList?: ImageListOmit
    activation_token?: activation_tokenOmit
    ai_api_usage?: ai_api_usageOmit
    authority?: authorityOmit
    category?: categoryOmit
    ingredient?: ingredientOmit
    member?: memberOmit
    refresh_token?: refresh_tokenOmit
    refrigerator?: refrigeratorOmit
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
    | 'updateManyAndReturn'
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    ingredient: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | CategoryCountOutputTypeCountIngredientArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    ai_api_usage: number
    ingredient: number
    refresh_token: number
    refrigerator: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_api_usage?: boolean | MemberCountOutputTypeCountAi_api_usageArgs
    ingredient?: boolean | MemberCountOutputTypeCountIngredientArgs
    refresh_token?: boolean | MemberCountOutputTypeCountRefresh_tokenArgs
    refrigerator?: boolean | MemberCountOutputTypeCountRefrigeratorArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountAi_api_usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_api_usageWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountRefresh_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokenWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountRefrigeratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refrigeratorWhereInput
  }


  /**
   * Count Type RefrigeratorCountOutputType
   */

  export type RefrigeratorCountOutputType = {
    ingredient: number
  }

  export type RefrigeratorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | RefrigeratorCountOutputTypeCountIngredientArgs
  }

  // Custom InputTypes
  /**
   * RefrigeratorCountOutputType without action
   */
  export type RefrigeratorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefrigeratorCountOutputType
     */
    select?: RefrigeratorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RefrigeratorCountOutputType without action
   */
  export type RefrigeratorCountOutputTypeCountIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ImageList
   */

  export type AggregateImageList = {
    _count: ImageListCountAggregateOutputType | null
    _avg: ImageListAvgAggregateOutputType | null
    _sum: ImageListSumAggregateOutputType | null
    _min: ImageListMinAggregateOutputType | null
    _max: ImageListMaxAggregateOutputType | null
  }

  export type ImageListAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageListSumAggregateOutputType = {
    id: number | null
  }

  export type ImageListMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
  }

  export type ImageListMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
  }

  export type ImageListCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    _all: number
  }


  export type ImageListAvgAggregateInputType = {
    id?: true
  }

  export type ImageListSumAggregateInputType = {
    id?: true
  }

  export type ImageListMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
  }

  export type ImageListMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
  }

  export type ImageListCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    _all?: true
  }

  export type ImageListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageList to aggregate.
     */
    where?: ImageListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageLists to fetch.
     */
    orderBy?: ImageListOrderByWithRelationInput | ImageListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageLists
    **/
    _count?: true | ImageListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageListMaxAggregateInputType
  }

  export type GetImageListAggregateType<T extends ImageListAggregateArgs> = {
        [P in keyof T & keyof AggregateImageList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageList[P]>
      : GetScalarType<T[P], AggregateImageList[P]>
  }




  export type ImageListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageListWhereInput
    orderBy?: ImageListOrderByWithAggregationInput | ImageListOrderByWithAggregationInput[]
    by: ImageListScalarFieldEnum[] | ImageListScalarFieldEnum
    having?: ImageListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageListCountAggregateInputType | true
    _avg?: ImageListAvgAggregateInputType
    _sum?: ImageListSumAggregateInputType
    _min?: ImageListMinAggregateInputType
    _max?: ImageListMaxAggregateInputType
  }

  export type ImageListGroupByOutputType = {
    id: number
    name: string
    imageUrl: string
    _count: ImageListCountAggregateOutputType | null
    _avg: ImageListAvgAggregateOutputType | null
    _sum: ImageListSumAggregateOutputType | null
    _min: ImageListMinAggregateOutputType | null
    _max: ImageListMaxAggregateOutputType | null
  }

  type GetImageListGroupByPayload<T extends ImageListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageListGroupByOutputType[P]>
            : GetScalarType<T[P], ImageListGroupByOutputType[P]>
        }
      >
    >


  export type ImageListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["imageList"]>



  export type ImageListSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
  }

  export type ImageListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl", ExtArgs["result"]["imageList"]>

  export type $ImageListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string
    }, ExtArgs["result"]["imageList"]>
    composites: {}
  }

  type ImageListGetPayload<S extends boolean | null | undefined | ImageListDefaultArgs> = $Result.GetResult<Prisma.$ImageListPayload, S>

  type ImageListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageListCountAggregateInputType | true
    }

  export interface ImageListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageList'], meta: { name: 'ImageList' } }
    /**
     * Find zero or one ImageList that matches the filter.
     * @param {ImageListFindUniqueArgs} args - Arguments to find a ImageList
     * @example
     * // Get one ImageList
     * const imageList = await prisma.imageList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageListFindUniqueArgs>(args: SelectSubset<T, ImageListFindUniqueArgs<ExtArgs>>): Prisma__ImageListClient<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageListFindUniqueOrThrowArgs} args - Arguments to find a ImageList
     * @example
     * // Get one ImageList
     * const imageList = await prisma.imageList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageListFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageListClient<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageListFindFirstArgs} args - Arguments to find a ImageList
     * @example
     * // Get one ImageList
     * const imageList = await prisma.imageList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageListFindFirstArgs>(args?: SelectSubset<T, ImageListFindFirstArgs<ExtArgs>>): Prisma__ImageListClient<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageListFindFirstOrThrowArgs} args - Arguments to find a ImageList
     * @example
     * // Get one ImageList
     * const imageList = await prisma.imageList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageListFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageListClient<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageLists
     * const imageLists = await prisma.imageList.findMany()
     * 
     * // Get first 10 ImageLists
     * const imageLists = await prisma.imageList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageListWithIdOnly = await prisma.imageList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageListFindManyArgs>(args?: SelectSubset<T, ImageListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageList.
     * @param {ImageListCreateArgs} args - Arguments to create a ImageList.
     * @example
     * // Create one ImageList
     * const ImageList = await prisma.imageList.create({
     *   data: {
     *     // ... data to create a ImageList
     *   }
     * })
     * 
     */
    create<T extends ImageListCreateArgs>(args: SelectSubset<T, ImageListCreateArgs<ExtArgs>>): Prisma__ImageListClient<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageLists.
     * @param {ImageListCreateManyArgs} args - Arguments to create many ImageLists.
     * @example
     * // Create many ImageLists
     * const imageList = await prisma.imageList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageListCreateManyArgs>(args?: SelectSubset<T, ImageListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImageList.
     * @param {ImageListDeleteArgs} args - Arguments to delete one ImageList.
     * @example
     * // Delete one ImageList
     * const ImageList = await prisma.imageList.delete({
     *   where: {
     *     // ... filter to delete one ImageList
     *   }
     * })
     * 
     */
    delete<T extends ImageListDeleteArgs>(args: SelectSubset<T, ImageListDeleteArgs<ExtArgs>>): Prisma__ImageListClient<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageList.
     * @param {ImageListUpdateArgs} args - Arguments to update one ImageList.
     * @example
     * // Update one ImageList
     * const imageList = await prisma.imageList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageListUpdateArgs>(args: SelectSubset<T, ImageListUpdateArgs<ExtArgs>>): Prisma__ImageListClient<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageLists.
     * @param {ImageListDeleteManyArgs} args - Arguments to filter ImageLists to delete.
     * @example
     * // Delete a few ImageLists
     * const { count } = await prisma.imageList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageListDeleteManyArgs>(args?: SelectSubset<T, ImageListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageLists
     * const imageList = await prisma.imageList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageListUpdateManyArgs>(args: SelectSubset<T, ImageListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageList.
     * @param {ImageListUpsertArgs} args - Arguments to update or create a ImageList.
     * @example
     * // Update or create a ImageList
     * const imageList = await prisma.imageList.upsert({
     *   create: {
     *     // ... data to create a ImageList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageList we want to update
     *   }
     * })
     */
    upsert<T extends ImageListUpsertArgs>(args: SelectSubset<T, ImageListUpsertArgs<ExtArgs>>): Prisma__ImageListClient<$Result.GetResult<Prisma.$ImageListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageListCountArgs} args - Arguments to filter ImageLists to count.
     * @example
     * // Count the number of ImageLists
     * const count = await prisma.imageList.count({
     *   where: {
     *     // ... the filter for the ImageLists we want to count
     *   }
     * })
    **/
    count<T extends ImageListCountArgs>(
      args?: Subset<T, ImageListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageListAggregateArgs>(args: Subset<T, ImageListAggregateArgs>): Prisma.PrismaPromise<GetImageListAggregateType<T>>

    /**
     * Group by ImageList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageListGroupByArgs} args - Group by arguments.
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
      T extends ImageListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageListGroupByArgs['orderBy'] }
        : { orderBy?: ImageListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageList model
   */
  readonly fields: ImageListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ImageList model
   */
  interface ImageListFieldRefs {
    readonly id: FieldRef<"ImageList", 'Int'>
    readonly name: FieldRef<"ImageList", 'String'>
    readonly imageUrl: FieldRef<"ImageList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImageList findUnique
   */
  export type ImageListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * Filter, which ImageList to fetch.
     */
    where: ImageListWhereUniqueInput
  }

  /**
   * ImageList findUniqueOrThrow
   */
  export type ImageListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * Filter, which ImageList to fetch.
     */
    where: ImageListWhereUniqueInput
  }

  /**
   * ImageList findFirst
   */
  export type ImageListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * Filter, which ImageList to fetch.
     */
    where?: ImageListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageLists to fetch.
     */
    orderBy?: ImageListOrderByWithRelationInput | ImageListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageLists.
     */
    cursor?: ImageListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageLists.
     */
    distinct?: ImageListScalarFieldEnum | ImageListScalarFieldEnum[]
  }

  /**
   * ImageList findFirstOrThrow
   */
  export type ImageListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * Filter, which ImageList to fetch.
     */
    where?: ImageListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageLists to fetch.
     */
    orderBy?: ImageListOrderByWithRelationInput | ImageListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageLists.
     */
    cursor?: ImageListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageLists.
     */
    distinct?: ImageListScalarFieldEnum | ImageListScalarFieldEnum[]
  }

  /**
   * ImageList findMany
   */
  export type ImageListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * Filter, which ImageLists to fetch.
     */
    where?: ImageListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageLists to fetch.
     */
    orderBy?: ImageListOrderByWithRelationInput | ImageListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageLists.
     */
    cursor?: ImageListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageLists.
     */
    skip?: number
    distinct?: ImageListScalarFieldEnum | ImageListScalarFieldEnum[]
  }

  /**
   * ImageList create
   */
  export type ImageListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * The data needed to create a ImageList.
     */
    data: XOR<ImageListCreateInput, ImageListUncheckedCreateInput>
  }

  /**
   * ImageList createMany
   */
  export type ImageListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageLists.
     */
    data: ImageListCreateManyInput | ImageListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageList update
   */
  export type ImageListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * The data needed to update a ImageList.
     */
    data: XOR<ImageListUpdateInput, ImageListUncheckedUpdateInput>
    /**
     * Choose, which ImageList to update.
     */
    where: ImageListWhereUniqueInput
  }

  /**
   * ImageList updateMany
   */
  export type ImageListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageLists.
     */
    data: XOR<ImageListUpdateManyMutationInput, ImageListUncheckedUpdateManyInput>
    /**
     * Filter which ImageLists to update
     */
    where?: ImageListWhereInput
    /**
     * Limit how many ImageLists to update.
     */
    limit?: number
  }

  /**
   * ImageList upsert
   */
  export type ImageListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * The filter to search for the ImageList to update in case it exists.
     */
    where: ImageListWhereUniqueInput
    /**
     * In case the ImageList found by the `where` argument doesn't exist, create a new ImageList with this data.
     */
    create: XOR<ImageListCreateInput, ImageListUncheckedCreateInput>
    /**
     * In case the ImageList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageListUpdateInput, ImageListUncheckedUpdateInput>
  }

  /**
   * ImageList delete
   */
  export type ImageListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
    /**
     * Filter which ImageList to delete.
     */
    where: ImageListWhereUniqueInput
  }

  /**
   * ImageList deleteMany
   */
  export type ImageListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageLists to delete
     */
    where?: ImageListWhereInput
    /**
     * Limit how many ImageLists to delete.
     */
    limit?: number
  }

  /**
   * ImageList without action
   */
  export type ImageListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageList
     */
    select?: ImageListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageList
     */
    omit?: ImageListOmit<ExtArgs> | null
  }


  /**
   * Model activation_token
   */

  export type AggregateActivation_token = {
    _count: Activation_tokenCountAggregateOutputType | null
    _avg: Activation_tokenAvgAggregateOutputType | null
    _sum: Activation_tokenSumAggregateOutputType | null
    _min: Activation_tokenMinAggregateOutputType | null
    _max: Activation_tokenMaxAggregateOutputType | null
  }

  export type Activation_tokenAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type Activation_tokenSumAggregateOutputType = {
    id: bigint | null
    member_id: bigint | null
  }

  export type Activation_tokenMinAggregateOutputType = {
    created_at: Date | null
    expired_at: Date | null
    id: bigint | null
    member_id: bigint | null
    token: string | null
  }

  export type Activation_tokenMaxAggregateOutputType = {
    created_at: Date | null
    expired_at: Date | null
    id: bigint | null
    member_id: bigint | null
    token: string | null
  }

  export type Activation_tokenCountAggregateOutputType = {
    created_at: number
    expired_at: number
    id: number
    member_id: number
    token: number
    _all: number
  }


  export type Activation_tokenAvgAggregateInputType = {
    id?: true
    member_id?: true
  }

  export type Activation_tokenSumAggregateInputType = {
    id?: true
    member_id?: true
  }

  export type Activation_tokenMinAggregateInputType = {
    created_at?: true
    expired_at?: true
    id?: true
    member_id?: true
    token?: true
  }

  export type Activation_tokenMaxAggregateInputType = {
    created_at?: true
    expired_at?: true
    id?: true
    member_id?: true
    token?: true
  }

  export type Activation_tokenCountAggregateInputType = {
    created_at?: true
    expired_at?: true
    id?: true
    member_id?: true
    token?: true
    _all?: true
  }

  export type Activation_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activation_token to aggregate.
     */
    where?: activation_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activation_tokens to fetch.
     */
    orderBy?: activation_tokenOrderByWithRelationInput | activation_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activation_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activation_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activation_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activation_tokens
    **/
    _count?: true | Activation_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Activation_tokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Activation_tokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Activation_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Activation_tokenMaxAggregateInputType
  }

  export type GetActivation_tokenAggregateType<T extends Activation_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateActivation_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivation_token[P]>
      : GetScalarType<T[P], AggregateActivation_token[P]>
  }




  export type activation_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activation_tokenWhereInput
    orderBy?: activation_tokenOrderByWithAggregationInput | activation_tokenOrderByWithAggregationInput[]
    by: Activation_tokenScalarFieldEnum[] | Activation_tokenScalarFieldEnum
    having?: activation_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Activation_tokenCountAggregateInputType | true
    _avg?: Activation_tokenAvgAggregateInputType
    _sum?: Activation_tokenSumAggregateInputType
    _min?: Activation_tokenMinAggregateInputType
    _max?: Activation_tokenMaxAggregateInputType
  }

  export type Activation_tokenGroupByOutputType = {
    created_at: Date
    expired_at: Date
    id: bigint
    member_id: bigint
    token: string
    _count: Activation_tokenCountAggregateOutputType | null
    _avg: Activation_tokenAvgAggregateOutputType | null
    _sum: Activation_tokenSumAggregateOutputType | null
    _min: Activation_tokenMinAggregateOutputType | null
    _max: Activation_tokenMaxAggregateOutputType | null
  }

  type GetActivation_tokenGroupByPayload<T extends activation_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Activation_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Activation_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Activation_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Activation_tokenGroupByOutputType[P]>
        }
      >
    >


  export type activation_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    expired_at?: boolean
    id?: boolean
    member_id?: boolean
    token?: boolean
    member?: boolean | memberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activation_token"]>



  export type activation_tokenSelectScalar = {
    created_at?: boolean
    expired_at?: boolean
    id?: boolean
    member_id?: boolean
    token?: boolean
  }

  export type activation_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created_at" | "expired_at" | "id" | "member_id" | "token", ExtArgs["result"]["activation_token"]>
  export type activation_tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | memberDefaultArgs<ExtArgs>
  }

  export type $activation_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activation_token"
    objects: {
      member: Prisma.$memberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      created_at: Date
      expired_at: Date
      id: bigint
      member_id: bigint
      token: string
    }, ExtArgs["result"]["activation_token"]>
    composites: {}
  }

  type activation_tokenGetPayload<S extends boolean | null | undefined | activation_tokenDefaultArgs> = $Result.GetResult<Prisma.$activation_tokenPayload, S>

  type activation_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activation_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Activation_tokenCountAggregateInputType | true
    }

  export interface activation_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activation_token'], meta: { name: 'activation_token' } }
    /**
     * Find zero or one Activation_token that matches the filter.
     * @param {activation_tokenFindUniqueArgs} args - Arguments to find a Activation_token
     * @example
     * // Get one Activation_token
     * const activation_token = await prisma.activation_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activation_tokenFindUniqueArgs>(args: SelectSubset<T, activation_tokenFindUniqueArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activation_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activation_tokenFindUniqueOrThrowArgs} args - Arguments to find a Activation_token
     * @example
     * // Get one Activation_token
     * const activation_token = await prisma.activation_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activation_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, activation_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activation_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activation_tokenFindFirstArgs} args - Arguments to find a Activation_token
     * @example
     * // Get one Activation_token
     * const activation_token = await prisma.activation_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activation_tokenFindFirstArgs>(args?: SelectSubset<T, activation_tokenFindFirstArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activation_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activation_tokenFindFirstOrThrowArgs} args - Arguments to find a Activation_token
     * @example
     * // Get one Activation_token
     * const activation_token = await prisma.activation_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activation_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, activation_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activation_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activation_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activation_tokens
     * const activation_tokens = await prisma.activation_token.findMany()
     * 
     * // Get first 10 Activation_tokens
     * const activation_tokens = await prisma.activation_token.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const activation_tokenWithCreated_atOnly = await prisma.activation_token.findMany({ select: { created_at: true } })
     * 
     */
    findMany<T extends activation_tokenFindManyArgs>(args?: SelectSubset<T, activation_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activation_token.
     * @param {activation_tokenCreateArgs} args - Arguments to create a Activation_token.
     * @example
     * // Create one Activation_token
     * const Activation_token = await prisma.activation_token.create({
     *   data: {
     *     // ... data to create a Activation_token
     *   }
     * })
     * 
     */
    create<T extends activation_tokenCreateArgs>(args: SelectSubset<T, activation_tokenCreateArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activation_tokens.
     * @param {activation_tokenCreateManyArgs} args - Arguments to create many Activation_tokens.
     * @example
     * // Create many Activation_tokens
     * const activation_token = await prisma.activation_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activation_tokenCreateManyArgs>(args?: SelectSubset<T, activation_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activation_token.
     * @param {activation_tokenDeleteArgs} args - Arguments to delete one Activation_token.
     * @example
     * // Delete one Activation_token
     * const Activation_token = await prisma.activation_token.delete({
     *   where: {
     *     // ... filter to delete one Activation_token
     *   }
     * })
     * 
     */
    delete<T extends activation_tokenDeleteArgs>(args: SelectSubset<T, activation_tokenDeleteArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activation_token.
     * @param {activation_tokenUpdateArgs} args - Arguments to update one Activation_token.
     * @example
     * // Update one Activation_token
     * const activation_token = await prisma.activation_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activation_tokenUpdateArgs>(args: SelectSubset<T, activation_tokenUpdateArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activation_tokens.
     * @param {activation_tokenDeleteManyArgs} args - Arguments to filter Activation_tokens to delete.
     * @example
     * // Delete a few Activation_tokens
     * const { count } = await prisma.activation_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activation_tokenDeleteManyArgs>(args?: SelectSubset<T, activation_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activation_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activation_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activation_tokens
     * const activation_token = await prisma.activation_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activation_tokenUpdateManyArgs>(args: SelectSubset<T, activation_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activation_token.
     * @param {activation_tokenUpsertArgs} args - Arguments to update or create a Activation_token.
     * @example
     * // Update or create a Activation_token
     * const activation_token = await prisma.activation_token.upsert({
     *   create: {
     *     // ... data to create a Activation_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activation_token we want to update
     *   }
     * })
     */
    upsert<T extends activation_tokenUpsertArgs>(args: SelectSubset<T, activation_tokenUpsertArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activation_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activation_tokenCountArgs} args - Arguments to filter Activation_tokens to count.
     * @example
     * // Count the number of Activation_tokens
     * const count = await prisma.activation_token.count({
     *   where: {
     *     // ... the filter for the Activation_tokens we want to count
     *   }
     * })
    **/
    count<T extends activation_tokenCountArgs>(
      args?: Subset<T, activation_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Activation_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activation_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Activation_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Activation_tokenAggregateArgs>(args: Subset<T, Activation_tokenAggregateArgs>): Prisma.PrismaPromise<GetActivation_tokenAggregateType<T>>

    /**
     * Group by Activation_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activation_tokenGroupByArgs} args - Group by arguments.
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
      T extends activation_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activation_tokenGroupByArgs['orderBy'] }
        : { orderBy?: activation_tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activation_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivation_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activation_token model
   */
  readonly fields: activation_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activation_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activation_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends memberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, memberDefaultArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the activation_token model
   */
  interface activation_tokenFieldRefs {
    readonly created_at: FieldRef<"activation_token", 'DateTime'>
    readonly expired_at: FieldRef<"activation_token", 'DateTime'>
    readonly id: FieldRef<"activation_token", 'BigInt'>
    readonly member_id: FieldRef<"activation_token", 'BigInt'>
    readonly token: FieldRef<"activation_token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * activation_token findUnique
   */
  export type activation_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * Filter, which activation_token to fetch.
     */
    where: activation_tokenWhereUniqueInput
  }

  /**
   * activation_token findUniqueOrThrow
   */
  export type activation_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * Filter, which activation_token to fetch.
     */
    where: activation_tokenWhereUniqueInput
  }

  /**
   * activation_token findFirst
   */
  export type activation_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * Filter, which activation_token to fetch.
     */
    where?: activation_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activation_tokens to fetch.
     */
    orderBy?: activation_tokenOrderByWithRelationInput | activation_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activation_tokens.
     */
    cursor?: activation_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activation_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activation_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activation_tokens.
     */
    distinct?: Activation_tokenScalarFieldEnum | Activation_tokenScalarFieldEnum[]
  }

  /**
   * activation_token findFirstOrThrow
   */
  export type activation_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * Filter, which activation_token to fetch.
     */
    where?: activation_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activation_tokens to fetch.
     */
    orderBy?: activation_tokenOrderByWithRelationInput | activation_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activation_tokens.
     */
    cursor?: activation_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activation_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activation_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activation_tokens.
     */
    distinct?: Activation_tokenScalarFieldEnum | Activation_tokenScalarFieldEnum[]
  }

  /**
   * activation_token findMany
   */
  export type activation_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * Filter, which activation_tokens to fetch.
     */
    where?: activation_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activation_tokens to fetch.
     */
    orderBy?: activation_tokenOrderByWithRelationInput | activation_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activation_tokens.
     */
    cursor?: activation_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activation_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activation_tokens.
     */
    skip?: number
    distinct?: Activation_tokenScalarFieldEnum | Activation_tokenScalarFieldEnum[]
  }

  /**
   * activation_token create
   */
  export type activation_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a activation_token.
     */
    data: XOR<activation_tokenCreateInput, activation_tokenUncheckedCreateInput>
  }

  /**
   * activation_token createMany
   */
  export type activation_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activation_tokens.
     */
    data: activation_tokenCreateManyInput | activation_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activation_token update
   */
  export type activation_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a activation_token.
     */
    data: XOR<activation_tokenUpdateInput, activation_tokenUncheckedUpdateInput>
    /**
     * Choose, which activation_token to update.
     */
    where: activation_tokenWhereUniqueInput
  }

  /**
   * activation_token updateMany
   */
  export type activation_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activation_tokens.
     */
    data: XOR<activation_tokenUpdateManyMutationInput, activation_tokenUncheckedUpdateManyInput>
    /**
     * Filter which activation_tokens to update
     */
    where?: activation_tokenWhereInput
    /**
     * Limit how many activation_tokens to update.
     */
    limit?: number
  }

  /**
   * activation_token upsert
   */
  export type activation_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the activation_token to update in case it exists.
     */
    where: activation_tokenWhereUniqueInput
    /**
     * In case the activation_token found by the `where` argument doesn't exist, create a new activation_token with this data.
     */
    create: XOR<activation_tokenCreateInput, activation_tokenUncheckedCreateInput>
    /**
     * In case the activation_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activation_tokenUpdateInput, activation_tokenUncheckedUpdateInput>
  }

  /**
   * activation_token delete
   */
  export type activation_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    /**
     * Filter which activation_token to delete.
     */
    where: activation_tokenWhereUniqueInput
  }

  /**
   * activation_token deleteMany
   */
  export type activation_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activation_tokens to delete
     */
    where?: activation_tokenWhereInput
    /**
     * Limit how many activation_tokens to delete.
     */
    limit?: number
  }

  /**
   * activation_token without action
   */
  export type activation_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
  }


  /**
   * Model ai_api_usage
   */

  export type AggregateAi_api_usage = {
    _count: Ai_api_usageCountAggregateOutputType | null
    _avg: Ai_api_usageAvgAggregateOutputType | null
    _sum: Ai_api_usageSumAggregateOutputType | null
    _min: Ai_api_usageMinAggregateOutputType | null
    _max: Ai_api_usageMaxAggregateOutputType | null
  }

  export type Ai_api_usageAvgAggregateOutputType = {
    call_count: number | null
    id: number | null
    member_id: number | null
  }

  export type Ai_api_usageSumAggregateOutputType = {
    call_count: number | null
    id: bigint | null
    member_id: bigint | null
  }

  export type Ai_api_usageMinAggregateOutputType = {
    call_count: number | null
    usage_date: Date | null
    created_at: Date | null
    id: bigint | null
    member_id: bigint | null
    updated_at: Date | null
  }

  export type Ai_api_usageMaxAggregateOutputType = {
    call_count: number | null
    usage_date: Date | null
    created_at: Date | null
    id: bigint | null
    member_id: bigint | null
    updated_at: Date | null
  }

  export type Ai_api_usageCountAggregateOutputType = {
    call_count: number
    usage_date: number
    created_at: number
    id: number
    member_id: number
    updated_at: number
    _all: number
  }


  export type Ai_api_usageAvgAggregateInputType = {
    call_count?: true
    id?: true
    member_id?: true
  }

  export type Ai_api_usageSumAggregateInputType = {
    call_count?: true
    id?: true
    member_id?: true
  }

  export type Ai_api_usageMinAggregateInputType = {
    call_count?: true
    usage_date?: true
    created_at?: true
    id?: true
    member_id?: true
    updated_at?: true
  }

  export type Ai_api_usageMaxAggregateInputType = {
    call_count?: true
    usage_date?: true
    created_at?: true
    id?: true
    member_id?: true
    updated_at?: true
  }

  export type Ai_api_usageCountAggregateInputType = {
    call_count?: true
    usage_date?: true
    created_at?: true
    id?: true
    member_id?: true
    updated_at?: true
    _all?: true
  }

  export type Ai_api_usageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_api_usage to aggregate.
     */
    where?: ai_api_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_api_usages to fetch.
     */
    orderBy?: ai_api_usageOrderByWithRelationInput | ai_api_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ai_api_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_api_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_api_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_api_usages
    **/
    _count?: true | Ai_api_usageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_api_usageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_api_usageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_api_usageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_api_usageMaxAggregateInputType
  }

  export type GetAi_api_usageAggregateType<T extends Ai_api_usageAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_api_usage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_api_usage[P]>
      : GetScalarType<T[P], AggregateAi_api_usage[P]>
  }




  export type ai_api_usageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_api_usageWhereInput
    orderBy?: ai_api_usageOrderByWithAggregationInput | ai_api_usageOrderByWithAggregationInput[]
    by: Ai_api_usageScalarFieldEnum[] | Ai_api_usageScalarFieldEnum
    having?: ai_api_usageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_api_usageCountAggregateInputType | true
    _avg?: Ai_api_usageAvgAggregateInputType
    _sum?: Ai_api_usageSumAggregateInputType
    _min?: Ai_api_usageMinAggregateInputType
    _max?: Ai_api_usageMaxAggregateInputType
  }

  export type Ai_api_usageGroupByOutputType = {
    call_count: number | null
    usage_date: Date | null
    created_at: Date | null
    id: bigint
    member_id: bigint | null
    updated_at: Date | null
    _count: Ai_api_usageCountAggregateOutputType | null
    _avg: Ai_api_usageAvgAggregateOutputType | null
    _sum: Ai_api_usageSumAggregateOutputType | null
    _min: Ai_api_usageMinAggregateOutputType | null
    _max: Ai_api_usageMaxAggregateOutputType | null
  }

  type GetAi_api_usageGroupByPayload<T extends ai_api_usageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_api_usageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_api_usageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_api_usageGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_api_usageGroupByOutputType[P]>
        }
      >
    >


  export type ai_api_usageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    call_count?: boolean
    usage_date?: boolean
    created_at?: boolean
    id?: boolean
    member_id?: boolean
    updated_at?: boolean
    member?: boolean | ai_api_usage$memberArgs<ExtArgs>
  }, ExtArgs["result"]["ai_api_usage"]>



  export type ai_api_usageSelectScalar = {
    call_count?: boolean
    usage_date?: boolean
    created_at?: boolean
    id?: boolean
    member_id?: boolean
    updated_at?: boolean
  }

  export type ai_api_usageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"call_count" | "usage_date" | "created_at" | "id" | "member_id" | "updated_at", ExtArgs["result"]["ai_api_usage"]>
  export type ai_api_usageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | ai_api_usage$memberArgs<ExtArgs>
  }

  export type $ai_api_usagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ai_api_usage"
    objects: {
      member: Prisma.$memberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      call_count: number | null
      usage_date: Date | null
      created_at: Date | null
      id: bigint
      member_id: bigint | null
      updated_at: Date | null
    }, ExtArgs["result"]["ai_api_usage"]>
    composites: {}
  }

  type ai_api_usageGetPayload<S extends boolean | null | undefined | ai_api_usageDefaultArgs> = $Result.GetResult<Prisma.$ai_api_usagePayload, S>

  type ai_api_usageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ai_api_usageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_api_usageCountAggregateInputType | true
    }

  export interface ai_api_usageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_api_usage'], meta: { name: 'ai_api_usage' } }
    /**
     * Find zero or one Ai_api_usage that matches the filter.
     * @param {ai_api_usageFindUniqueArgs} args - Arguments to find a Ai_api_usage
     * @example
     * // Get one Ai_api_usage
     * const ai_api_usage = await prisma.ai_api_usage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ai_api_usageFindUniqueArgs>(args: SelectSubset<T, ai_api_usageFindUniqueArgs<ExtArgs>>): Prisma__ai_api_usageClient<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ai_api_usage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ai_api_usageFindUniqueOrThrowArgs} args - Arguments to find a Ai_api_usage
     * @example
     * // Get one Ai_api_usage
     * const ai_api_usage = await prisma.ai_api_usage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ai_api_usageFindUniqueOrThrowArgs>(args: SelectSubset<T, ai_api_usageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ai_api_usageClient<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_api_usage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_api_usageFindFirstArgs} args - Arguments to find a Ai_api_usage
     * @example
     * // Get one Ai_api_usage
     * const ai_api_usage = await prisma.ai_api_usage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ai_api_usageFindFirstArgs>(args?: SelectSubset<T, ai_api_usageFindFirstArgs<ExtArgs>>): Prisma__ai_api_usageClient<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_api_usage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_api_usageFindFirstOrThrowArgs} args - Arguments to find a Ai_api_usage
     * @example
     * // Get one Ai_api_usage
     * const ai_api_usage = await prisma.ai_api_usage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ai_api_usageFindFirstOrThrowArgs>(args?: SelectSubset<T, ai_api_usageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ai_api_usageClient<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ai_api_usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_api_usageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_api_usages
     * const ai_api_usages = await prisma.ai_api_usage.findMany()
     * 
     * // Get first 10 Ai_api_usages
     * const ai_api_usages = await prisma.ai_api_usage.findMany({ take: 10 })
     * 
     * // Only select the `call_count`
     * const ai_api_usageWithCall_countOnly = await prisma.ai_api_usage.findMany({ select: { call_count: true } })
     * 
     */
    findMany<T extends ai_api_usageFindManyArgs>(args?: SelectSubset<T, ai_api_usageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ai_api_usage.
     * @param {ai_api_usageCreateArgs} args - Arguments to create a Ai_api_usage.
     * @example
     * // Create one Ai_api_usage
     * const Ai_api_usage = await prisma.ai_api_usage.create({
     *   data: {
     *     // ... data to create a Ai_api_usage
     *   }
     * })
     * 
     */
    create<T extends ai_api_usageCreateArgs>(args: SelectSubset<T, ai_api_usageCreateArgs<ExtArgs>>): Prisma__ai_api_usageClient<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ai_api_usages.
     * @param {ai_api_usageCreateManyArgs} args - Arguments to create many Ai_api_usages.
     * @example
     * // Create many Ai_api_usages
     * const ai_api_usage = await prisma.ai_api_usage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ai_api_usageCreateManyArgs>(args?: SelectSubset<T, ai_api_usageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ai_api_usage.
     * @param {ai_api_usageDeleteArgs} args - Arguments to delete one Ai_api_usage.
     * @example
     * // Delete one Ai_api_usage
     * const Ai_api_usage = await prisma.ai_api_usage.delete({
     *   where: {
     *     // ... filter to delete one Ai_api_usage
     *   }
     * })
     * 
     */
    delete<T extends ai_api_usageDeleteArgs>(args: SelectSubset<T, ai_api_usageDeleteArgs<ExtArgs>>): Prisma__ai_api_usageClient<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ai_api_usage.
     * @param {ai_api_usageUpdateArgs} args - Arguments to update one Ai_api_usage.
     * @example
     * // Update one Ai_api_usage
     * const ai_api_usage = await prisma.ai_api_usage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ai_api_usageUpdateArgs>(args: SelectSubset<T, ai_api_usageUpdateArgs<ExtArgs>>): Prisma__ai_api_usageClient<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ai_api_usages.
     * @param {ai_api_usageDeleteManyArgs} args - Arguments to filter Ai_api_usages to delete.
     * @example
     * // Delete a few Ai_api_usages
     * const { count } = await prisma.ai_api_usage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ai_api_usageDeleteManyArgs>(args?: SelectSubset<T, ai_api_usageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_api_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_api_usageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_api_usages
     * const ai_api_usage = await prisma.ai_api_usage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ai_api_usageUpdateManyArgs>(args: SelectSubset<T, ai_api_usageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ai_api_usage.
     * @param {ai_api_usageUpsertArgs} args - Arguments to update or create a Ai_api_usage.
     * @example
     * // Update or create a Ai_api_usage
     * const ai_api_usage = await prisma.ai_api_usage.upsert({
     *   create: {
     *     // ... data to create a Ai_api_usage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_api_usage we want to update
     *   }
     * })
     */
    upsert<T extends ai_api_usageUpsertArgs>(args: SelectSubset<T, ai_api_usageUpsertArgs<ExtArgs>>): Prisma__ai_api_usageClient<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ai_api_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_api_usageCountArgs} args - Arguments to filter Ai_api_usages to count.
     * @example
     * // Count the number of Ai_api_usages
     * const count = await prisma.ai_api_usage.count({
     *   where: {
     *     // ... the filter for the Ai_api_usages we want to count
     *   }
     * })
    **/
    count<T extends ai_api_usageCountArgs>(
      args?: Subset<T, ai_api_usageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_api_usageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_api_usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_api_usageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_api_usageAggregateArgs>(args: Subset<T, Ai_api_usageAggregateArgs>): Prisma.PrismaPromise<GetAi_api_usageAggregateType<T>>

    /**
     * Group by Ai_api_usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_api_usageGroupByArgs} args - Group by arguments.
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
      T extends ai_api_usageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_api_usageGroupByArgs['orderBy'] }
        : { orderBy?: ai_api_usageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ai_api_usageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_api_usageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ai_api_usage model
   */
  readonly fields: ai_api_usageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_api_usage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_api_usageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends ai_api_usage$memberArgs<ExtArgs> = {}>(args?: Subset<T, ai_api_usage$memberArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ai_api_usage model
   */
  interface ai_api_usageFieldRefs {
    readonly call_count: FieldRef<"ai_api_usage", 'Int'>
    readonly usage_date: FieldRef<"ai_api_usage", 'DateTime'>
    readonly created_at: FieldRef<"ai_api_usage", 'DateTime'>
    readonly id: FieldRef<"ai_api_usage", 'BigInt'>
    readonly member_id: FieldRef<"ai_api_usage", 'BigInt'>
    readonly updated_at: FieldRef<"ai_api_usage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ai_api_usage findUnique
   */
  export type ai_api_usageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * Filter, which ai_api_usage to fetch.
     */
    where: ai_api_usageWhereUniqueInput
  }

  /**
   * ai_api_usage findUniqueOrThrow
   */
  export type ai_api_usageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * Filter, which ai_api_usage to fetch.
     */
    where: ai_api_usageWhereUniqueInput
  }

  /**
   * ai_api_usage findFirst
   */
  export type ai_api_usageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * Filter, which ai_api_usage to fetch.
     */
    where?: ai_api_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_api_usages to fetch.
     */
    orderBy?: ai_api_usageOrderByWithRelationInput | ai_api_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_api_usages.
     */
    cursor?: ai_api_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_api_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_api_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_api_usages.
     */
    distinct?: Ai_api_usageScalarFieldEnum | Ai_api_usageScalarFieldEnum[]
  }

  /**
   * ai_api_usage findFirstOrThrow
   */
  export type ai_api_usageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * Filter, which ai_api_usage to fetch.
     */
    where?: ai_api_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_api_usages to fetch.
     */
    orderBy?: ai_api_usageOrderByWithRelationInput | ai_api_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_api_usages.
     */
    cursor?: ai_api_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_api_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_api_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_api_usages.
     */
    distinct?: Ai_api_usageScalarFieldEnum | Ai_api_usageScalarFieldEnum[]
  }

  /**
   * ai_api_usage findMany
   */
  export type ai_api_usageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * Filter, which ai_api_usages to fetch.
     */
    where?: ai_api_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_api_usages to fetch.
     */
    orderBy?: ai_api_usageOrderByWithRelationInput | ai_api_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_api_usages.
     */
    cursor?: ai_api_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_api_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_api_usages.
     */
    skip?: number
    distinct?: Ai_api_usageScalarFieldEnum | Ai_api_usageScalarFieldEnum[]
  }

  /**
   * ai_api_usage create
   */
  export type ai_api_usageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * The data needed to create a ai_api_usage.
     */
    data?: XOR<ai_api_usageCreateInput, ai_api_usageUncheckedCreateInput>
  }

  /**
   * ai_api_usage createMany
   */
  export type ai_api_usageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_api_usages.
     */
    data: ai_api_usageCreateManyInput | ai_api_usageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_api_usage update
   */
  export type ai_api_usageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * The data needed to update a ai_api_usage.
     */
    data: XOR<ai_api_usageUpdateInput, ai_api_usageUncheckedUpdateInput>
    /**
     * Choose, which ai_api_usage to update.
     */
    where: ai_api_usageWhereUniqueInput
  }

  /**
   * ai_api_usage updateMany
   */
  export type ai_api_usageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_api_usages.
     */
    data: XOR<ai_api_usageUpdateManyMutationInput, ai_api_usageUncheckedUpdateManyInput>
    /**
     * Filter which ai_api_usages to update
     */
    where?: ai_api_usageWhereInput
    /**
     * Limit how many ai_api_usages to update.
     */
    limit?: number
  }

  /**
   * ai_api_usage upsert
   */
  export type ai_api_usageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * The filter to search for the ai_api_usage to update in case it exists.
     */
    where: ai_api_usageWhereUniqueInput
    /**
     * In case the ai_api_usage found by the `where` argument doesn't exist, create a new ai_api_usage with this data.
     */
    create: XOR<ai_api_usageCreateInput, ai_api_usageUncheckedCreateInput>
    /**
     * In case the ai_api_usage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_api_usageUpdateInput, ai_api_usageUncheckedUpdateInput>
  }

  /**
   * ai_api_usage delete
   */
  export type ai_api_usageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    /**
     * Filter which ai_api_usage to delete.
     */
    where: ai_api_usageWhereUniqueInput
  }

  /**
   * ai_api_usage deleteMany
   */
  export type ai_api_usageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_api_usages to delete
     */
    where?: ai_api_usageWhereInput
    /**
     * Limit how many ai_api_usages to delete.
     */
    limit?: number
  }

  /**
   * ai_api_usage.member
   */
  export type ai_api_usage$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    where?: memberWhereInput
  }

  /**
   * ai_api_usage without action
   */
  export type ai_api_usageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
  }


  /**
   * Model authority
   */

  export type AggregateAuthority = {
    _count: AuthorityCountAggregateOutputType | null
    _min: AuthorityMinAggregateOutputType | null
    _max: AuthorityMaxAggregateOutputType | null
  }

  export type AuthorityMinAggregateOutputType = {
    authority_name: string | null
  }

  export type AuthorityMaxAggregateOutputType = {
    authority_name: string | null
  }

  export type AuthorityCountAggregateOutputType = {
    authority_name: number
    _all: number
  }


  export type AuthorityMinAggregateInputType = {
    authority_name?: true
  }

  export type AuthorityMaxAggregateInputType = {
    authority_name?: true
  }

  export type AuthorityCountAggregateInputType = {
    authority_name?: true
    _all?: true
  }

  export type AuthorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authority to aggregate.
     */
    where?: authorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorities to fetch.
     */
    orderBy?: authorityOrderByWithRelationInput | authorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authorities
    **/
    _count?: true | AuthorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorityMaxAggregateInputType
  }

  export type GetAuthorityAggregateType<T extends AuthorityAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthority[P]>
      : GetScalarType<T[P], AggregateAuthority[P]>
  }




  export type authorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorityWhereInput
    orderBy?: authorityOrderByWithAggregationInput | authorityOrderByWithAggregationInput[]
    by: AuthorityScalarFieldEnum[] | AuthorityScalarFieldEnum
    having?: authorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorityCountAggregateInputType | true
    _min?: AuthorityMinAggregateInputType
    _max?: AuthorityMaxAggregateInputType
  }

  export type AuthorityGroupByOutputType = {
    authority_name: string
    _count: AuthorityCountAggregateOutputType | null
    _min: AuthorityMinAggregateOutputType | null
    _max: AuthorityMaxAggregateOutputType | null
  }

  type GetAuthorityGroupByPayload<T extends authorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorityGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorityGroupByOutputType[P]>
        }
      >
    >


  export type authoritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authority_name?: boolean
  }, ExtArgs["result"]["authority"]>



  export type authoritySelectScalar = {
    authority_name?: boolean
  }

  export type authorityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"authority_name", ExtArgs["result"]["authority"]>

  export type $authorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authority"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      authority_name: string
    }, ExtArgs["result"]["authority"]>
    composites: {}
  }

  type authorityGetPayload<S extends boolean | null | undefined | authorityDefaultArgs> = $Result.GetResult<Prisma.$authorityPayload, S>

  type authorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorityCountAggregateInputType | true
    }

  export interface authorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authority'], meta: { name: 'authority' } }
    /**
     * Find zero or one Authority that matches the filter.
     * @param {authorityFindUniqueArgs} args - Arguments to find a Authority
     * @example
     * // Get one Authority
     * const authority = await prisma.authority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorityFindUniqueArgs>(args: SelectSubset<T, authorityFindUniqueArgs<ExtArgs>>): Prisma__authorityClient<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorityFindUniqueOrThrowArgs} args - Arguments to find a Authority
     * @example
     * // Get one Authority
     * const authority = await prisma.authority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorityFindUniqueOrThrowArgs>(args: SelectSubset<T, authorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorityClient<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorityFindFirstArgs} args - Arguments to find a Authority
     * @example
     * // Get one Authority
     * const authority = await prisma.authority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorityFindFirstArgs>(args?: SelectSubset<T, authorityFindFirstArgs<ExtArgs>>): Prisma__authorityClient<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorityFindFirstOrThrowArgs} args - Arguments to find a Authority
     * @example
     * // Get one Authority
     * const authority = await prisma.authority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorityFindFirstOrThrowArgs>(args?: SelectSubset<T, authorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorityClient<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authorities
     * const authorities = await prisma.authority.findMany()
     * 
     * // Get first 10 Authorities
     * const authorities = await prisma.authority.findMany({ take: 10 })
     * 
     * // Only select the `authority_name`
     * const authorityWithAuthority_nameOnly = await prisma.authority.findMany({ select: { authority_name: true } })
     * 
     */
    findMany<T extends authorityFindManyArgs>(args?: SelectSubset<T, authorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authority.
     * @param {authorityCreateArgs} args - Arguments to create a Authority.
     * @example
     * // Create one Authority
     * const Authority = await prisma.authority.create({
     *   data: {
     *     // ... data to create a Authority
     *   }
     * })
     * 
     */
    create<T extends authorityCreateArgs>(args: SelectSubset<T, authorityCreateArgs<ExtArgs>>): Prisma__authorityClient<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authorities.
     * @param {authorityCreateManyArgs} args - Arguments to create many Authorities.
     * @example
     * // Create many Authorities
     * const authority = await prisma.authority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorityCreateManyArgs>(args?: SelectSubset<T, authorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Authority.
     * @param {authorityDeleteArgs} args - Arguments to delete one Authority.
     * @example
     * // Delete one Authority
     * const Authority = await prisma.authority.delete({
     *   where: {
     *     // ... filter to delete one Authority
     *   }
     * })
     * 
     */
    delete<T extends authorityDeleteArgs>(args: SelectSubset<T, authorityDeleteArgs<ExtArgs>>): Prisma__authorityClient<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authority.
     * @param {authorityUpdateArgs} args - Arguments to update one Authority.
     * @example
     * // Update one Authority
     * const authority = await prisma.authority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorityUpdateArgs>(args: SelectSubset<T, authorityUpdateArgs<ExtArgs>>): Prisma__authorityClient<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authorities.
     * @param {authorityDeleteManyArgs} args - Arguments to filter Authorities to delete.
     * @example
     * // Delete a few Authorities
     * const { count } = await prisma.authority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorityDeleteManyArgs>(args?: SelectSubset<T, authorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authorities
     * const authority = await prisma.authority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorityUpdateManyArgs>(args: SelectSubset<T, authorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authority.
     * @param {authorityUpsertArgs} args - Arguments to update or create a Authority.
     * @example
     * // Update or create a Authority
     * const authority = await prisma.authority.upsert({
     *   create: {
     *     // ... data to create a Authority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authority we want to update
     *   }
     * })
     */
    upsert<T extends authorityUpsertArgs>(args: SelectSubset<T, authorityUpsertArgs<ExtArgs>>): Prisma__authorityClient<$Result.GetResult<Prisma.$authorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorityCountArgs} args - Arguments to filter Authorities to count.
     * @example
     * // Count the number of Authorities
     * const count = await prisma.authority.count({
     *   where: {
     *     // ... the filter for the Authorities we want to count
     *   }
     * })
    **/
    count<T extends authorityCountArgs>(
      args?: Subset<T, authorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorityAggregateArgs>(args: Subset<T, AuthorityAggregateArgs>): Prisma.PrismaPromise<GetAuthorityAggregateType<T>>

    /**
     * Group by Authority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorityGroupByArgs} args - Group by arguments.
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
      T extends authorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorityGroupByArgs['orderBy'] }
        : { orderBy?: authorityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authority model
   */
  readonly fields: authorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the authority model
   */
  interface authorityFieldRefs {
    readonly authority_name: FieldRef<"authority", 'String'>
  }
    

  // Custom InputTypes
  /**
   * authority findUnique
   */
  export type authorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * Filter, which authority to fetch.
     */
    where: authorityWhereUniqueInput
  }

  /**
   * authority findUniqueOrThrow
   */
  export type authorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * Filter, which authority to fetch.
     */
    where: authorityWhereUniqueInput
  }

  /**
   * authority findFirst
   */
  export type authorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * Filter, which authority to fetch.
     */
    where?: authorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorities to fetch.
     */
    orderBy?: authorityOrderByWithRelationInput | authorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authorities.
     */
    cursor?: authorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authorities.
     */
    distinct?: AuthorityScalarFieldEnum | AuthorityScalarFieldEnum[]
  }

  /**
   * authority findFirstOrThrow
   */
  export type authorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * Filter, which authority to fetch.
     */
    where?: authorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorities to fetch.
     */
    orderBy?: authorityOrderByWithRelationInput | authorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authorities.
     */
    cursor?: authorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authorities.
     */
    distinct?: AuthorityScalarFieldEnum | AuthorityScalarFieldEnum[]
  }

  /**
   * authority findMany
   */
  export type authorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * Filter, which authorities to fetch.
     */
    where?: authorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorities to fetch.
     */
    orderBy?: authorityOrderByWithRelationInput | authorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authorities.
     */
    cursor?: authorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorities.
     */
    skip?: number
    distinct?: AuthorityScalarFieldEnum | AuthorityScalarFieldEnum[]
  }

  /**
   * authority create
   */
  export type authorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * The data needed to create a authority.
     */
    data: XOR<authorityCreateInput, authorityUncheckedCreateInput>
  }

  /**
   * authority createMany
   */
  export type authorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authorities.
     */
    data: authorityCreateManyInput | authorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authority update
   */
  export type authorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * The data needed to update a authority.
     */
    data: XOR<authorityUpdateInput, authorityUncheckedUpdateInput>
    /**
     * Choose, which authority to update.
     */
    where: authorityWhereUniqueInput
  }

  /**
   * authority updateMany
   */
  export type authorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authorities.
     */
    data: XOR<authorityUpdateManyMutationInput, authorityUncheckedUpdateManyInput>
    /**
     * Filter which authorities to update
     */
    where?: authorityWhereInput
    /**
     * Limit how many authorities to update.
     */
    limit?: number
  }

  /**
   * authority upsert
   */
  export type authorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * The filter to search for the authority to update in case it exists.
     */
    where: authorityWhereUniqueInput
    /**
     * In case the authority found by the `where` argument doesn't exist, create a new authority with this data.
     */
    create: XOR<authorityCreateInput, authorityUncheckedCreateInput>
    /**
     * In case the authority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorityUpdateInput, authorityUncheckedUpdateInput>
  }

  /**
   * authority delete
   */
  export type authorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
    /**
     * Filter which authority to delete.
     */
    where: authorityWhereUniqueInput
  }

  /**
   * authority deleteMany
   */
  export type authorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authorities to delete
     */
    where?: authorityWhereInput
    /**
     * Limit how many authorities to delete.
     */
    limit?: number
  }

  /**
   * authority without action
   */
  export type authorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authority
     */
    select?: authoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the authority
     */
    omit?: authorityOmit<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: bigint | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: bigint | null
    category_name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: bigint | null
    category_name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    category_name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    category_name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: bigint
    category_name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    ingredient?: boolean | category$ingredientArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type categorySelectScalar = {
    category_id?: boolean
    category_name?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | category$ingredientArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      ingredient: Prisma.$ingredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: bigint
      category_name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
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
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredient<T extends category$ingredientArgs<ExtArgs> = {}>(args?: Subset<T, category$ingredientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly category_id: FieldRef<"category", 'BigInt'>
    readonly category_name: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.ingredient
   */
  export type category$ingredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    where?: ingredientWhereInput
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    cursor?: ingredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    quantity: number | null
    category_id: number | null
    ingredient_id: number | null
    member_id: number | null
    refrigerator_id: number | null
  }

  export type IngredientSumAggregateOutputType = {
    quantity: number | null
    category_id: bigint | null
    ingredient_id: bigint | null
    member_id: bigint | null
    refrigerator_id: bigint | null
  }

  export type IngredientMinAggregateOutputType = {
    expiration_date: Date | null
    quantity: number | null
    category_id: bigint | null
    ingredient_id: bigint | null
    member_id: bigint | null
    refrigerator_id: bigint | null
    registration_date: Date | null
    ingredient_name: string | null
    photo_url: string | null
  }

  export type IngredientMaxAggregateOutputType = {
    expiration_date: Date | null
    quantity: number | null
    category_id: bigint | null
    ingredient_id: bigint | null
    member_id: bigint | null
    refrigerator_id: bigint | null
    registration_date: Date | null
    ingredient_name: string | null
    photo_url: string | null
  }

  export type IngredientCountAggregateOutputType = {
    expiration_date: number
    quantity: number
    category_id: number
    ingredient_id: number
    member_id: number
    refrigerator_id: number
    registration_date: number
    ingredient_name: number
    photo_url: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    quantity?: true
    category_id?: true
    ingredient_id?: true
    member_id?: true
    refrigerator_id?: true
  }

  export type IngredientSumAggregateInputType = {
    quantity?: true
    category_id?: true
    ingredient_id?: true
    member_id?: true
    refrigerator_id?: true
  }

  export type IngredientMinAggregateInputType = {
    expiration_date?: true
    quantity?: true
    category_id?: true
    ingredient_id?: true
    member_id?: true
    refrigerator_id?: true
    registration_date?: true
    ingredient_name?: true
    photo_url?: true
  }

  export type IngredientMaxAggregateInputType = {
    expiration_date?: true
    quantity?: true
    category_id?: true
    ingredient_id?: true
    member_id?: true
    refrigerator_id?: true
    registration_date?: true
    ingredient_name?: true
    photo_url?: true
  }

  export type IngredientCountAggregateInputType = {
    expiration_date?: true
    quantity?: true
    category_id?: true
    ingredient_id?: true
    member_id?: true
    refrigerator_id?: true
    registration_date?: true
    ingredient_name?: true
    photo_url?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredient to aggregate.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type ingredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientWhereInput
    orderBy?: ingredientOrderByWithAggregationInput | ingredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: ingredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    expiration_date: Date
    quantity: number
    category_id: bigint
    ingredient_id: bigint
    member_id: bigint
    refrigerator_id: bigint
    registration_date: Date | null
    ingredient_name: string
    photo_url: string | null
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends ingredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type ingredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expiration_date?: boolean
    quantity?: boolean
    category_id?: boolean
    ingredient_id?: boolean
    member_id?: boolean
    refrigerator_id?: boolean
    registration_date?: boolean
    ingredient_name?: boolean
    photo_url?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    refrigerator?: boolean | refrigeratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>



  export type ingredientSelectScalar = {
    expiration_date?: boolean
    quantity?: boolean
    category_id?: boolean
    ingredient_id?: boolean
    member_id?: boolean
    refrigerator_id?: boolean
    registration_date?: boolean
    ingredient_name?: boolean
    photo_url?: boolean
  }

  export type ingredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expiration_date" | "quantity" | "category_id" | "ingredient_id" | "member_id" | "refrigerator_id" | "registration_date" | "ingredient_name" | "photo_url", ExtArgs["result"]["ingredient"]>
  export type ingredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    refrigerator?: boolean | refrigeratorDefaultArgs<ExtArgs>
  }

  export type $ingredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingredient"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      member: Prisma.$memberPayload<ExtArgs>
      refrigerator: Prisma.$refrigeratorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      expiration_date: Date
      quantity: number
      category_id: bigint
      ingredient_id: bigint
      member_id: bigint
      refrigerator_id: bigint
      registration_date: Date | null
      ingredient_name: string
      photo_url: string | null
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type ingredientGetPayload<S extends boolean | null | undefined | ingredientDefaultArgs> = $Result.GetResult<Prisma.$ingredientPayload, S>

  type ingredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface ingredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingredient'], meta: { name: 'ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {ingredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingredientFindUniqueArgs>(args: SelectSubset<T, ingredientFindUniqueArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingredientFindUniqueOrThrowArgs>(args: SelectSubset<T, ingredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingredientFindFirstArgs>(args?: SelectSubset<T, ingredientFindFirstArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingredientFindFirstOrThrowArgs>(args?: SelectSubset<T, ingredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `expiration_date`
     * const ingredientWithExpiration_dateOnly = await prisma.ingredient.findMany({ select: { expiration_date: true } })
     * 
     */
    findMany<T extends ingredientFindManyArgs>(args?: SelectSubset<T, ingredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {ingredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends ingredientCreateArgs>(args: SelectSubset<T, ingredientCreateArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {ingredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingredientCreateManyArgs>(args?: SelectSubset<T, ingredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ingredient.
     * @param {ingredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends ingredientDeleteArgs>(args: SelectSubset<T, ingredientDeleteArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {ingredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingredientUpdateArgs>(args: SelectSubset<T, ingredientUpdateArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {ingredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingredientDeleteManyArgs>(args?: SelectSubset<T, ingredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingredientUpdateManyArgs>(args: SelectSubset<T, ingredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingredient.
     * @param {ingredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends ingredientUpsertArgs>(args: SelectSubset<T, ingredientUpsertArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends ingredientCountArgs>(
      args?: Subset<T, ingredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientGroupByArgs} args - Group by arguments.
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
      T extends ingredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingredientGroupByArgs['orderBy'] }
        : { orderBy?: ingredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingredient model
   */
  readonly fields: ingredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends memberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, memberDefaultArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    refrigerator<T extends refrigeratorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, refrigeratorDefaultArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ingredient model
   */
  interface ingredientFieldRefs {
    readonly expiration_date: FieldRef<"ingredient", 'DateTime'>
    readonly quantity: FieldRef<"ingredient", 'Int'>
    readonly category_id: FieldRef<"ingredient", 'BigInt'>
    readonly ingredient_id: FieldRef<"ingredient", 'BigInt'>
    readonly member_id: FieldRef<"ingredient", 'BigInt'>
    readonly refrigerator_id: FieldRef<"ingredient", 'BigInt'>
    readonly registration_date: FieldRef<"ingredient", 'DateTime'>
    readonly ingredient_name: FieldRef<"ingredient", 'String'>
    readonly photo_url: FieldRef<"ingredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ingredient findUnique
   */
  export type ingredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient findUniqueOrThrow
   */
  export type ingredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient findFirst
   */
  export type ingredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient findFirstOrThrow
   */
  export type ingredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient findMany
   */
  export type ingredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredients to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient create
   */
  export type ingredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The data needed to create a ingredient.
     */
    data: XOR<ingredientCreateInput, ingredientUncheckedCreateInput>
  }

  /**
   * ingredient createMany
   */
  export type ingredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingredients.
     */
    data: ingredientCreateManyInput | ingredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredient update
   */
  export type ingredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The data needed to update a ingredient.
     */
    data: XOR<ingredientUpdateInput, ingredientUncheckedUpdateInput>
    /**
     * Choose, which ingredient to update.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient updateMany
   */
  export type ingredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingredients.
     */
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyInput>
    /**
     * Filter which ingredients to update
     */
    where?: ingredientWhereInput
    /**
     * Limit how many ingredients to update.
     */
    limit?: number
  }

  /**
   * ingredient upsert
   */
  export type ingredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The filter to search for the ingredient to update in case it exists.
     */
    where: ingredientWhereUniqueInput
    /**
     * In case the ingredient found by the `where` argument doesn't exist, create a new ingredient with this data.
     */
    create: XOR<ingredientCreateInput, ingredientUncheckedCreateInput>
    /**
     * In case the ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingredientUpdateInput, ingredientUncheckedUpdateInput>
  }

  /**
   * ingredient delete
   */
  export type ingredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter which ingredient to delete.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient deleteMany
   */
  export type ingredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredients to delete
     */
    where?: ingredientWhereInput
    /**
     * Limit how many ingredients to delete.
     */
    limit?: number
  }

  /**
   * ingredient without action
   */
  export type ingredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
  }


  /**
   * Model member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    member_id: number | null
  }

  export type MemberSumAggregateOutputType = {
    member_id: bigint | null
  }

  export type MemberMinAggregateOutputType = {
    activated: boolean | null
    created_at: Date | null
    member_id: bigint | null
    updated_at: Date | null
    email: string | null
    nickname: string | null
    password: string | null
    fcm_token: string | null
    role: string | null
    join_type: $Enums.member_join_type | null
  }

  export type MemberMaxAggregateOutputType = {
    activated: boolean | null
    created_at: Date | null
    member_id: bigint | null
    updated_at: Date | null
    email: string | null
    nickname: string | null
    password: string | null
    fcm_token: string | null
    role: string | null
    join_type: $Enums.member_join_type | null
  }

  export type MemberCountAggregateOutputType = {
    activated: number
    created_at: number
    member_id: number
    updated_at: number
    email: number
    nickname: number
    password: number
    fcm_token: number
    role: number
    join_type: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    member_id?: true
  }

  export type MemberSumAggregateInputType = {
    member_id?: true
  }

  export type MemberMinAggregateInputType = {
    activated?: true
    created_at?: true
    member_id?: true
    updated_at?: true
    email?: true
    nickname?: true
    password?: true
    fcm_token?: true
    role?: true
    join_type?: true
  }

  export type MemberMaxAggregateInputType = {
    activated?: true
    created_at?: true
    member_id?: true
    updated_at?: true
    email?: true
    nickname?: true
    password?: true
    fcm_token?: true
    role?: true
    join_type?: true
  }

  export type MemberCountAggregateInputType = {
    activated?: true
    created_at?: true
    member_id?: true
    updated_at?: true
    email?: true
    nickname?: true
    password?: true
    fcm_token?: true
    role?: true
    join_type?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member to aggregate.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
    orderBy?: memberOrderByWithAggregationInput | memberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    activated: boolean
    created_at: Date | null
    member_id: bigint
    updated_at: Date | null
    email: string
    nickname: string | null
    password: string | null
    fcm_token: string | null
    role: string | null
    join_type: $Enums.member_join_type | null
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activated?: boolean
    created_at?: boolean
    member_id?: boolean
    updated_at?: boolean
    email?: boolean
    nickname?: boolean
    password?: boolean
    fcm_token?: boolean
    role?: boolean
    join_type?: boolean
    activation_token?: boolean | member$activation_tokenArgs<ExtArgs>
    ai_api_usage?: boolean | member$ai_api_usageArgs<ExtArgs>
    ingredient?: boolean | member$ingredientArgs<ExtArgs>
    refresh_token?: boolean | member$refresh_tokenArgs<ExtArgs>
    refrigerator?: boolean | member$refrigeratorArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type memberSelectScalar = {
    activated?: boolean
    created_at?: boolean
    member_id?: boolean
    updated_at?: boolean
    email?: boolean
    nickname?: boolean
    password?: boolean
    fcm_token?: boolean
    role?: boolean
    join_type?: boolean
  }

  export type memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"activated" | "created_at" | "member_id" | "updated_at" | "email" | "nickname" | "password" | "fcm_token" | "role" | "join_type", ExtArgs["result"]["member"]>
  export type memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activation_token?: boolean | member$activation_tokenArgs<ExtArgs>
    ai_api_usage?: boolean | member$ai_api_usageArgs<ExtArgs>
    ingredient?: boolean | member$ingredientArgs<ExtArgs>
    refresh_token?: boolean | member$refresh_tokenArgs<ExtArgs>
    refrigerator?: boolean | member$refrigeratorArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member"
    objects: {
      activation_token: Prisma.$activation_tokenPayload<ExtArgs> | null
      ai_api_usage: Prisma.$ai_api_usagePayload<ExtArgs>[]
      ingredient: Prisma.$ingredientPayload<ExtArgs>[]
      refresh_token: Prisma.$refresh_tokenPayload<ExtArgs>[]
      refrigerator: Prisma.$refrigeratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      activated: boolean
      created_at: Date | null
      member_id: bigint
      updated_at: Date | null
      email: string
      nickname: string | null
      password: string | null
      fcm_token: string | null
      role: string | null
      join_type: $Enums.member_join_type | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type memberGetPayload<S extends boolean | null | undefined | memberDefaultArgs> = $Result.GetResult<Prisma.$memberPayload, S>

  type memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member'], meta: { name: 'member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {memberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memberFindUniqueArgs>(args: SelectSubset<T, memberFindUniqueArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memberFindUniqueOrThrowArgs>(args: SelectSubset<T, memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memberFindFirstArgs>(args?: SelectSubset<T, memberFindFirstArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memberFindFirstOrThrowArgs>(args?: SelectSubset<T, memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `activated`
     * const memberWithActivatedOnly = await prisma.member.findMany({ select: { activated: true } })
     * 
     */
    findMany<T extends memberFindManyArgs>(args?: SelectSubset<T, memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {memberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends memberCreateArgs>(args: SelectSubset<T, memberCreateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {memberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memberCreateManyArgs>(args?: SelectSubset<T, memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {memberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends memberDeleteArgs>(args: SelectSubset<T, memberDeleteArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {memberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memberUpdateArgs>(args: SelectSubset<T, memberUpdateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {memberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memberDeleteManyArgs>(args?: SelectSubset<T, memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memberUpdateManyArgs>(args: SelectSubset<T, memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {memberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends memberUpsertArgs>(args: SelectSubset<T, memberUpsertArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends memberCountArgs>(
      args?: Subset<T, memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberGroupByArgs} args - Group by arguments.
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
      T extends memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memberGroupByArgs['orderBy'] }
        : { orderBy?: memberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member model
   */
  readonly fields: memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activation_token<T extends member$activation_tokenArgs<ExtArgs> = {}>(args?: Subset<T, member$activation_tokenArgs<ExtArgs>>): Prisma__activation_tokenClient<$Result.GetResult<Prisma.$activation_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ai_api_usage<T extends member$ai_api_usageArgs<ExtArgs> = {}>(args?: Subset<T, member$ai_api_usageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_api_usagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredient<T extends member$ingredientArgs<ExtArgs> = {}>(args?: Subset<T, member$ingredientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refresh_token<T extends member$refresh_tokenArgs<ExtArgs> = {}>(args?: Subset<T, member$refresh_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refrigerator<T extends member$refrigeratorArgs<ExtArgs> = {}>(args?: Subset<T, member$refrigeratorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the member model
   */
  interface memberFieldRefs {
    readonly activated: FieldRef<"member", 'Boolean'>
    readonly created_at: FieldRef<"member", 'DateTime'>
    readonly member_id: FieldRef<"member", 'BigInt'>
    readonly updated_at: FieldRef<"member", 'DateTime'>
    readonly email: FieldRef<"member", 'String'>
    readonly nickname: FieldRef<"member", 'String'>
    readonly password: FieldRef<"member", 'String'>
    readonly fcm_token: FieldRef<"member", 'String'>
    readonly role: FieldRef<"member", 'String'>
    readonly join_type: FieldRef<"member", 'member_join_type'>
  }
    

  // Custom InputTypes
  /**
   * member findUnique
   */
  export type memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findUniqueOrThrow
   */
  export type memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findFirst
   */
  export type memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findFirstOrThrow
   */
  export type memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findMany
   */
  export type memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member create
   */
  export type memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to create a member.
     */
    data: XOR<memberCreateInput, memberUncheckedCreateInput>
  }

  /**
   * member createMany
   */
  export type memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member update
   */
  export type memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to update a member.
     */
    data: XOR<memberUpdateInput, memberUncheckedUpdateInput>
    /**
     * Choose, which member to update.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member updateMany
   */
  export type memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * member upsert
   */
  export type memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The filter to search for the member to update in case it exists.
     */
    where: memberWhereUniqueInput
    /**
     * In case the member found by the `where` argument doesn't exist, create a new member with this data.
     */
    create: XOR<memberCreateInput, memberUncheckedCreateInput>
    /**
     * In case the member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memberUpdateInput, memberUncheckedUpdateInput>
  }

  /**
   * member delete
   */
  export type memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter which member to delete.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member deleteMany
   */
  export type memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: memberWhereInput
    /**
     * Limit how many members to delete.
     */
    limit?: number
  }

  /**
   * member.activation_token
   */
  export type member$activation_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activation_token
     */
    select?: activation_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activation_token
     */
    omit?: activation_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activation_tokenInclude<ExtArgs> | null
    where?: activation_tokenWhereInput
  }

  /**
   * member.ai_api_usage
   */
  export type member$ai_api_usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_api_usage
     */
    select?: ai_api_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_api_usage
     */
    omit?: ai_api_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_api_usageInclude<ExtArgs> | null
    where?: ai_api_usageWhereInput
    orderBy?: ai_api_usageOrderByWithRelationInput | ai_api_usageOrderByWithRelationInput[]
    cursor?: ai_api_usageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ai_api_usageScalarFieldEnum | Ai_api_usageScalarFieldEnum[]
  }

  /**
   * member.ingredient
   */
  export type member$ingredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    where?: ingredientWhereInput
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    cursor?: ingredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * member.refresh_token
   */
  export type member$refresh_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    where?: refresh_tokenWhereInput
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    cursor?: refresh_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * member.refrigerator
   */
  export type member$refrigeratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    where?: refrigeratorWhereInput
    orderBy?: refrigeratorOrderByWithRelationInput | refrigeratorOrderByWithRelationInput[]
    cursor?: refrigeratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefrigeratorScalarFieldEnum | RefrigeratorScalarFieldEnum[]
  }

  /**
   * member without action
   */
  export type memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
  }


  /**
   * Model refresh_token
   */

  export type AggregateRefresh_token = {
    _count: Refresh_tokenCountAggregateOutputType | null
    _avg: Refresh_tokenAvgAggregateOutputType | null
    _sum: Refresh_tokenSumAggregateOutputType | null
    _min: Refresh_tokenMinAggregateOutputType | null
    _max: Refresh_tokenMaxAggregateOutputType | null
  }

  export type Refresh_tokenAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type Refresh_tokenSumAggregateOutputType = {
    id: bigint | null
    member_id: bigint | null
  }

  export type Refresh_tokenMinAggregateOutputType = {
    auto_login: boolean | null
    created_at: Date | null
    expires_at: Date | null
    id: bigint | null
    issued_at: Date | null
    member_id: bigint | null
    updated_at: Date | null
    device_info: string | null
    value: string | null
  }

  export type Refresh_tokenMaxAggregateOutputType = {
    auto_login: boolean | null
    created_at: Date | null
    expires_at: Date | null
    id: bigint | null
    issued_at: Date | null
    member_id: bigint | null
    updated_at: Date | null
    device_info: string | null
    value: string | null
  }

  export type Refresh_tokenCountAggregateOutputType = {
    auto_login: number
    created_at: number
    expires_at: number
    id: number
    issued_at: number
    member_id: number
    updated_at: number
    device_info: number
    value: number
    _all: number
  }


  export type Refresh_tokenAvgAggregateInputType = {
    id?: true
    member_id?: true
  }

  export type Refresh_tokenSumAggregateInputType = {
    id?: true
    member_id?: true
  }

  export type Refresh_tokenMinAggregateInputType = {
    auto_login?: true
    created_at?: true
    expires_at?: true
    id?: true
    issued_at?: true
    member_id?: true
    updated_at?: true
    device_info?: true
    value?: true
  }

  export type Refresh_tokenMaxAggregateInputType = {
    auto_login?: true
    created_at?: true
    expires_at?: true
    id?: true
    issued_at?: true
    member_id?: true
    updated_at?: true
    device_info?: true
    value?: true
  }

  export type Refresh_tokenCountAggregateInputType = {
    auto_login?: true
    created_at?: true
    expires_at?: true
    id?: true
    issued_at?: true
    member_id?: true
    updated_at?: true
    device_info?: true
    value?: true
    _all?: true
  }

  export type Refresh_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_token to aggregate.
     */
    where?: refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refresh_tokens
    **/
    _count?: true | Refresh_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Refresh_tokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Refresh_tokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Refresh_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Refresh_tokenMaxAggregateInputType
  }

  export type GetRefresh_tokenAggregateType<T extends Refresh_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefresh_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefresh_token[P]>
      : GetScalarType<T[P], AggregateRefresh_token[P]>
  }




  export type refresh_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokenWhereInput
    orderBy?: refresh_tokenOrderByWithAggregationInput | refresh_tokenOrderByWithAggregationInput[]
    by: Refresh_tokenScalarFieldEnum[] | Refresh_tokenScalarFieldEnum
    having?: refresh_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Refresh_tokenCountAggregateInputType | true
    _avg?: Refresh_tokenAvgAggregateInputType
    _sum?: Refresh_tokenSumAggregateInputType
    _min?: Refresh_tokenMinAggregateInputType
    _max?: Refresh_tokenMaxAggregateInputType
  }

  export type Refresh_tokenGroupByOutputType = {
    auto_login: boolean | null
    created_at: Date | null
    expires_at: Date | null
    id: bigint
    issued_at: Date | null
    member_id: bigint | null
    updated_at: Date | null
    device_info: string | null
    value: string | null
    _count: Refresh_tokenCountAggregateOutputType | null
    _avg: Refresh_tokenAvgAggregateOutputType | null
    _sum: Refresh_tokenSumAggregateOutputType | null
    _min: Refresh_tokenMinAggregateOutputType | null
    _max: Refresh_tokenMaxAggregateOutputType | null
  }

  type GetRefresh_tokenGroupByPayload<T extends refresh_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Refresh_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Refresh_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Refresh_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Refresh_tokenGroupByOutputType[P]>
        }
      >
    >


  export type refresh_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    auto_login?: boolean
    created_at?: boolean
    expires_at?: boolean
    id?: boolean
    issued_at?: boolean
    member_id?: boolean
    updated_at?: boolean
    device_info?: boolean
    value?: boolean
    member?: boolean | refresh_token$memberArgs<ExtArgs>
  }, ExtArgs["result"]["refresh_token"]>



  export type refresh_tokenSelectScalar = {
    auto_login?: boolean
    created_at?: boolean
    expires_at?: boolean
    id?: boolean
    issued_at?: boolean
    member_id?: boolean
    updated_at?: boolean
    device_info?: boolean
    value?: boolean
  }

  export type refresh_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"auto_login" | "created_at" | "expires_at" | "id" | "issued_at" | "member_id" | "updated_at" | "device_info" | "value", ExtArgs["result"]["refresh_token"]>
  export type refresh_tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | refresh_token$memberArgs<ExtArgs>
  }

  export type $refresh_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refresh_token"
    objects: {
      member: Prisma.$memberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      auto_login: boolean | null
      created_at: Date | null
      expires_at: Date | null
      id: bigint
      issued_at: Date | null
      member_id: bigint | null
      updated_at: Date | null
      device_info: string | null
      value: string | null
    }, ExtArgs["result"]["refresh_token"]>
    composites: {}
  }

  type refresh_tokenGetPayload<S extends boolean | null | undefined | refresh_tokenDefaultArgs> = $Result.GetResult<Prisma.$refresh_tokenPayload, S>

  type refresh_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refresh_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Refresh_tokenCountAggregateInputType | true
    }

  export interface refresh_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refresh_token'], meta: { name: 'refresh_token' } }
    /**
     * Find zero or one Refresh_token that matches the filter.
     * @param {refresh_tokenFindUniqueArgs} args - Arguments to find a Refresh_token
     * @example
     * // Get one Refresh_token
     * const refresh_token = await prisma.refresh_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refresh_tokenFindUniqueArgs>(args: SelectSubset<T, refresh_tokenFindUniqueArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refresh_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refresh_tokenFindUniqueOrThrowArgs} args - Arguments to find a Refresh_token
     * @example
     * // Get one Refresh_token
     * const refresh_token = await prisma.refresh_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refresh_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, refresh_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refresh_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenFindFirstArgs} args - Arguments to find a Refresh_token
     * @example
     * // Get one Refresh_token
     * const refresh_token = await prisma.refresh_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refresh_tokenFindFirstArgs>(args?: SelectSubset<T, refresh_tokenFindFirstArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refresh_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenFindFirstOrThrowArgs} args - Arguments to find a Refresh_token
     * @example
     * // Get one Refresh_token
     * const refresh_token = await prisma.refresh_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refresh_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, refresh_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refresh_tokens
     * const refresh_tokens = await prisma.refresh_token.findMany()
     * 
     * // Get first 10 Refresh_tokens
     * const refresh_tokens = await prisma.refresh_token.findMany({ take: 10 })
     * 
     * // Only select the `auto_login`
     * const refresh_tokenWithAuto_loginOnly = await prisma.refresh_token.findMany({ select: { auto_login: true } })
     * 
     */
    findMany<T extends refresh_tokenFindManyArgs>(args?: SelectSubset<T, refresh_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refresh_token.
     * @param {refresh_tokenCreateArgs} args - Arguments to create a Refresh_token.
     * @example
     * // Create one Refresh_token
     * const Refresh_token = await prisma.refresh_token.create({
     *   data: {
     *     // ... data to create a Refresh_token
     *   }
     * })
     * 
     */
    create<T extends refresh_tokenCreateArgs>(args: SelectSubset<T, refresh_tokenCreateArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refresh_tokens.
     * @param {refresh_tokenCreateManyArgs} args - Arguments to create many Refresh_tokens.
     * @example
     * // Create many Refresh_tokens
     * const refresh_token = await prisma.refresh_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refresh_tokenCreateManyArgs>(args?: SelectSubset<T, refresh_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refresh_token.
     * @param {refresh_tokenDeleteArgs} args - Arguments to delete one Refresh_token.
     * @example
     * // Delete one Refresh_token
     * const Refresh_token = await prisma.refresh_token.delete({
     *   where: {
     *     // ... filter to delete one Refresh_token
     *   }
     * })
     * 
     */
    delete<T extends refresh_tokenDeleteArgs>(args: SelectSubset<T, refresh_tokenDeleteArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refresh_token.
     * @param {refresh_tokenUpdateArgs} args - Arguments to update one Refresh_token.
     * @example
     * // Update one Refresh_token
     * const refresh_token = await prisma.refresh_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refresh_tokenUpdateArgs>(args: SelectSubset<T, refresh_tokenUpdateArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refresh_tokens.
     * @param {refresh_tokenDeleteManyArgs} args - Arguments to filter Refresh_tokens to delete.
     * @example
     * // Delete a few Refresh_tokens
     * const { count } = await prisma.refresh_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refresh_tokenDeleteManyArgs>(args?: SelectSubset<T, refresh_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refresh_tokens
     * const refresh_token = await prisma.refresh_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refresh_tokenUpdateManyArgs>(args: SelectSubset<T, refresh_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refresh_token.
     * @param {refresh_tokenUpsertArgs} args - Arguments to update or create a Refresh_token.
     * @example
     * // Update or create a Refresh_token
     * const refresh_token = await prisma.refresh_token.upsert({
     *   create: {
     *     // ... data to create a Refresh_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refresh_token we want to update
     *   }
     * })
     */
    upsert<T extends refresh_tokenUpsertArgs>(args: SelectSubset<T, refresh_tokenUpsertArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenCountArgs} args - Arguments to filter Refresh_tokens to count.
     * @example
     * // Count the number of Refresh_tokens
     * const count = await prisma.refresh_token.count({
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to count
     *   }
     * })
    **/
    count<T extends refresh_tokenCountArgs>(
      args?: Subset<T, refresh_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Refresh_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refresh_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Refresh_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Refresh_tokenAggregateArgs>(args: Subset<T, Refresh_tokenAggregateArgs>): Prisma.PrismaPromise<GetRefresh_tokenAggregateType<T>>

    /**
     * Group by Refresh_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenGroupByArgs} args - Group by arguments.
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
      T extends refresh_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refresh_tokenGroupByArgs['orderBy'] }
        : { orderBy?: refresh_tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, refresh_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefresh_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refresh_token model
   */
  readonly fields: refresh_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refresh_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refresh_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends refresh_token$memberArgs<ExtArgs> = {}>(args?: Subset<T, refresh_token$memberArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the refresh_token model
   */
  interface refresh_tokenFieldRefs {
    readonly auto_login: FieldRef<"refresh_token", 'Boolean'>
    readonly created_at: FieldRef<"refresh_token", 'DateTime'>
    readonly expires_at: FieldRef<"refresh_token", 'DateTime'>
    readonly id: FieldRef<"refresh_token", 'BigInt'>
    readonly issued_at: FieldRef<"refresh_token", 'DateTime'>
    readonly member_id: FieldRef<"refresh_token", 'BigInt'>
    readonly updated_at: FieldRef<"refresh_token", 'DateTime'>
    readonly device_info: FieldRef<"refresh_token", 'String'>
    readonly value: FieldRef<"refresh_token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * refresh_token findUnique
   */
  export type refresh_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_token to fetch.
     */
    where: refresh_tokenWhereUniqueInput
  }

  /**
   * refresh_token findUniqueOrThrow
   */
  export type refresh_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_token to fetch.
     */
    where: refresh_tokenWhereUniqueInput
  }

  /**
   * refresh_token findFirst
   */
  export type refresh_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_token to fetch.
     */
    where?: refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * refresh_token findFirstOrThrow
   */
  export type refresh_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_token to fetch.
     */
    where?: refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * refresh_token findMany
   */
  export type refresh_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refresh_tokens.
     */
    cursor?: refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * refresh_token create
   */
  export type refresh_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a refresh_token.
     */
    data?: XOR<refresh_tokenCreateInput, refresh_tokenUncheckedCreateInput>
  }

  /**
   * refresh_token createMany
   */
  export type refresh_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refresh_tokens.
     */
    data: refresh_tokenCreateManyInput | refresh_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refresh_token update
   */
  export type refresh_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a refresh_token.
     */
    data: XOR<refresh_tokenUpdateInput, refresh_tokenUncheckedUpdateInput>
    /**
     * Choose, which refresh_token to update.
     */
    where: refresh_tokenWhereUniqueInput
  }

  /**
   * refresh_token updateMany
   */
  export type refresh_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refresh_tokens.
     */
    data: XOR<refresh_tokenUpdateManyMutationInput, refresh_tokenUncheckedUpdateManyInput>
    /**
     * Filter which refresh_tokens to update
     */
    where?: refresh_tokenWhereInput
    /**
     * Limit how many refresh_tokens to update.
     */
    limit?: number
  }

  /**
   * refresh_token upsert
   */
  export type refresh_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the refresh_token to update in case it exists.
     */
    where: refresh_tokenWhereUniqueInput
    /**
     * In case the refresh_token found by the `where` argument doesn't exist, create a new refresh_token with this data.
     */
    create: XOR<refresh_tokenCreateInput, refresh_tokenUncheckedCreateInput>
    /**
     * In case the refresh_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refresh_tokenUpdateInput, refresh_tokenUncheckedUpdateInput>
  }

  /**
   * refresh_token delete
   */
  export type refresh_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter which refresh_token to delete.
     */
    where: refresh_tokenWhereUniqueInput
  }

  /**
   * refresh_token deleteMany
   */
  export type refresh_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_tokens to delete
     */
    where?: refresh_tokenWhereInput
    /**
     * Limit how many refresh_tokens to delete.
     */
    limit?: number
  }

  /**
   * refresh_token.member
   */
  export type refresh_token$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    where?: memberWhereInput
  }

  /**
   * refresh_token without action
   */
  export type refresh_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
  }


  /**
   * Model refrigerator
   */

  export type AggregateRefrigerator = {
    _count: RefrigeratorCountAggregateOutputType | null
    _avg: RefrigeratorAvgAggregateOutputType | null
    _sum: RefrigeratorSumAggregateOutputType | null
    _min: RefrigeratorMinAggregateOutputType | null
    _max: RefrigeratorMaxAggregateOutputType | null
  }

  export type RefrigeratorAvgAggregateOutputType = {
    member_id: number | null
    refrigerator_id: number | null
  }

  export type RefrigeratorSumAggregateOutputType = {
    member_id: bigint | null
    refrigerator_id: bigint | null
  }

  export type RefrigeratorMinAggregateOutputType = {
    created_at: Date | null
    member_id: bigint | null
    refrigerator_id: bigint | null
    refrigerator_name: string | null
    description: string | null
    photo_url: string | null
  }

  export type RefrigeratorMaxAggregateOutputType = {
    created_at: Date | null
    member_id: bigint | null
    refrigerator_id: bigint | null
    refrigerator_name: string | null
    description: string | null
    photo_url: string | null
  }

  export type RefrigeratorCountAggregateOutputType = {
    created_at: number
    member_id: number
    refrigerator_id: number
    refrigerator_name: number
    description: number
    photo_url: number
    _all: number
  }


  export type RefrigeratorAvgAggregateInputType = {
    member_id?: true
    refrigerator_id?: true
  }

  export type RefrigeratorSumAggregateInputType = {
    member_id?: true
    refrigerator_id?: true
  }

  export type RefrigeratorMinAggregateInputType = {
    created_at?: true
    member_id?: true
    refrigerator_id?: true
    refrigerator_name?: true
    description?: true
    photo_url?: true
  }

  export type RefrigeratorMaxAggregateInputType = {
    created_at?: true
    member_id?: true
    refrigerator_id?: true
    refrigerator_name?: true
    description?: true
    photo_url?: true
  }

  export type RefrigeratorCountAggregateInputType = {
    created_at?: true
    member_id?: true
    refrigerator_id?: true
    refrigerator_name?: true
    description?: true
    photo_url?: true
    _all?: true
  }

  export type RefrigeratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refrigerator to aggregate.
     */
    where?: refrigeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refrigerators to fetch.
     */
    orderBy?: refrigeratorOrderByWithRelationInput | refrigeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refrigeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refrigerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refrigerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refrigerators
    **/
    _count?: true | RefrigeratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefrigeratorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefrigeratorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefrigeratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefrigeratorMaxAggregateInputType
  }

  export type GetRefrigeratorAggregateType<T extends RefrigeratorAggregateArgs> = {
        [P in keyof T & keyof AggregateRefrigerator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefrigerator[P]>
      : GetScalarType<T[P], AggregateRefrigerator[P]>
  }




  export type refrigeratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refrigeratorWhereInput
    orderBy?: refrigeratorOrderByWithAggregationInput | refrigeratorOrderByWithAggregationInput[]
    by: RefrigeratorScalarFieldEnum[] | RefrigeratorScalarFieldEnum
    having?: refrigeratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefrigeratorCountAggregateInputType | true
    _avg?: RefrigeratorAvgAggregateInputType
    _sum?: RefrigeratorSumAggregateInputType
    _min?: RefrigeratorMinAggregateInputType
    _max?: RefrigeratorMaxAggregateInputType
  }

  export type RefrigeratorGroupByOutputType = {
    created_at: Date | null
    member_id: bigint
    refrigerator_id: bigint
    refrigerator_name: string
    description: string | null
    photo_url: string | null
    _count: RefrigeratorCountAggregateOutputType | null
    _avg: RefrigeratorAvgAggregateOutputType | null
    _sum: RefrigeratorSumAggregateOutputType | null
    _min: RefrigeratorMinAggregateOutputType | null
    _max: RefrigeratorMaxAggregateOutputType | null
  }

  type GetRefrigeratorGroupByPayload<T extends refrigeratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefrigeratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefrigeratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefrigeratorGroupByOutputType[P]>
            : GetScalarType<T[P], RefrigeratorGroupByOutputType[P]>
        }
      >
    >


  export type refrigeratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    member_id?: boolean
    refrigerator_id?: boolean
    refrigerator_name?: boolean
    description?: boolean
    photo_url?: boolean
    ingredient?: boolean | refrigerator$ingredientArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    _count?: boolean | RefrigeratorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refrigerator"]>



  export type refrigeratorSelectScalar = {
    created_at?: boolean
    member_id?: boolean
    refrigerator_id?: boolean
    refrigerator_name?: boolean
    description?: boolean
    photo_url?: boolean
  }

  export type refrigeratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created_at" | "member_id" | "refrigerator_id" | "refrigerator_name" | "description" | "photo_url", ExtArgs["result"]["refrigerator"]>
  export type refrigeratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | refrigerator$ingredientArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    _count?: boolean | RefrigeratorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $refrigeratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refrigerator"
    objects: {
      ingredient: Prisma.$ingredientPayload<ExtArgs>[]
      member: Prisma.$memberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      created_at: Date | null
      member_id: bigint
      refrigerator_id: bigint
      refrigerator_name: string
      description: string | null
      photo_url: string | null
    }, ExtArgs["result"]["refrigerator"]>
    composites: {}
  }

  type refrigeratorGetPayload<S extends boolean | null | undefined | refrigeratorDefaultArgs> = $Result.GetResult<Prisma.$refrigeratorPayload, S>

  type refrigeratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refrigeratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefrigeratorCountAggregateInputType | true
    }

  export interface refrigeratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refrigerator'], meta: { name: 'refrigerator' } }
    /**
     * Find zero or one Refrigerator that matches the filter.
     * @param {refrigeratorFindUniqueArgs} args - Arguments to find a Refrigerator
     * @example
     * // Get one Refrigerator
     * const refrigerator = await prisma.refrigerator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refrigeratorFindUniqueArgs>(args: SelectSubset<T, refrigeratorFindUniqueArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refrigerator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refrigeratorFindUniqueOrThrowArgs} args - Arguments to find a Refrigerator
     * @example
     * // Get one Refrigerator
     * const refrigerator = await prisma.refrigerator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refrigeratorFindUniqueOrThrowArgs>(args: SelectSubset<T, refrigeratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refrigerator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refrigeratorFindFirstArgs} args - Arguments to find a Refrigerator
     * @example
     * // Get one Refrigerator
     * const refrigerator = await prisma.refrigerator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refrigeratorFindFirstArgs>(args?: SelectSubset<T, refrigeratorFindFirstArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refrigerator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refrigeratorFindFirstOrThrowArgs} args - Arguments to find a Refrigerator
     * @example
     * // Get one Refrigerator
     * const refrigerator = await prisma.refrigerator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refrigeratorFindFirstOrThrowArgs>(args?: SelectSubset<T, refrigeratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refrigerators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refrigeratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refrigerators
     * const refrigerators = await prisma.refrigerator.findMany()
     * 
     * // Get first 10 Refrigerators
     * const refrigerators = await prisma.refrigerator.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const refrigeratorWithCreated_atOnly = await prisma.refrigerator.findMany({ select: { created_at: true } })
     * 
     */
    findMany<T extends refrigeratorFindManyArgs>(args?: SelectSubset<T, refrigeratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refrigerator.
     * @param {refrigeratorCreateArgs} args - Arguments to create a Refrigerator.
     * @example
     * // Create one Refrigerator
     * const Refrigerator = await prisma.refrigerator.create({
     *   data: {
     *     // ... data to create a Refrigerator
     *   }
     * })
     * 
     */
    create<T extends refrigeratorCreateArgs>(args: SelectSubset<T, refrigeratorCreateArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refrigerators.
     * @param {refrigeratorCreateManyArgs} args - Arguments to create many Refrigerators.
     * @example
     * // Create many Refrigerators
     * const refrigerator = await prisma.refrigerator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refrigeratorCreateManyArgs>(args?: SelectSubset<T, refrigeratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refrigerator.
     * @param {refrigeratorDeleteArgs} args - Arguments to delete one Refrigerator.
     * @example
     * // Delete one Refrigerator
     * const Refrigerator = await prisma.refrigerator.delete({
     *   where: {
     *     // ... filter to delete one Refrigerator
     *   }
     * })
     * 
     */
    delete<T extends refrigeratorDeleteArgs>(args: SelectSubset<T, refrigeratorDeleteArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refrigerator.
     * @param {refrigeratorUpdateArgs} args - Arguments to update one Refrigerator.
     * @example
     * // Update one Refrigerator
     * const refrigerator = await prisma.refrigerator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refrigeratorUpdateArgs>(args: SelectSubset<T, refrigeratorUpdateArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refrigerators.
     * @param {refrigeratorDeleteManyArgs} args - Arguments to filter Refrigerators to delete.
     * @example
     * // Delete a few Refrigerators
     * const { count } = await prisma.refrigerator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refrigeratorDeleteManyArgs>(args?: SelectSubset<T, refrigeratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refrigerators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refrigeratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refrigerators
     * const refrigerator = await prisma.refrigerator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refrigeratorUpdateManyArgs>(args: SelectSubset<T, refrigeratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refrigerator.
     * @param {refrigeratorUpsertArgs} args - Arguments to update or create a Refrigerator.
     * @example
     * // Update or create a Refrigerator
     * const refrigerator = await prisma.refrigerator.upsert({
     *   create: {
     *     // ... data to create a Refrigerator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refrigerator we want to update
     *   }
     * })
     */
    upsert<T extends refrigeratorUpsertArgs>(args: SelectSubset<T, refrigeratorUpsertArgs<ExtArgs>>): Prisma__refrigeratorClient<$Result.GetResult<Prisma.$refrigeratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refrigerators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refrigeratorCountArgs} args - Arguments to filter Refrigerators to count.
     * @example
     * // Count the number of Refrigerators
     * const count = await prisma.refrigerator.count({
     *   where: {
     *     // ... the filter for the Refrigerators we want to count
     *   }
     * })
    **/
    count<T extends refrigeratorCountArgs>(
      args?: Subset<T, refrigeratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefrigeratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refrigerator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefrigeratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefrigeratorAggregateArgs>(args: Subset<T, RefrigeratorAggregateArgs>): Prisma.PrismaPromise<GetRefrigeratorAggregateType<T>>

    /**
     * Group by Refrigerator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refrigeratorGroupByArgs} args - Group by arguments.
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
      T extends refrigeratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refrigeratorGroupByArgs['orderBy'] }
        : { orderBy?: refrigeratorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, refrigeratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefrigeratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refrigerator model
   */
  readonly fields: refrigeratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refrigerator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refrigeratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredient<T extends refrigerator$ingredientArgs<ExtArgs> = {}>(args?: Subset<T, refrigerator$ingredientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member<T extends memberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, memberDefaultArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the refrigerator model
   */
  interface refrigeratorFieldRefs {
    readonly created_at: FieldRef<"refrigerator", 'DateTime'>
    readonly member_id: FieldRef<"refrigerator", 'BigInt'>
    readonly refrigerator_id: FieldRef<"refrigerator", 'BigInt'>
    readonly refrigerator_name: FieldRef<"refrigerator", 'String'>
    readonly description: FieldRef<"refrigerator", 'String'>
    readonly photo_url: FieldRef<"refrigerator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * refrigerator findUnique
   */
  export type refrigeratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * Filter, which refrigerator to fetch.
     */
    where: refrigeratorWhereUniqueInput
  }

  /**
   * refrigerator findUniqueOrThrow
   */
  export type refrigeratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * Filter, which refrigerator to fetch.
     */
    where: refrigeratorWhereUniqueInput
  }

  /**
   * refrigerator findFirst
   */
  export type refrigeratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * Filter, which refrigerator to fetch.
     */
    where?: refrigeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refrigerators to fetch.
     */
    orderBy?: refrigeratorOrderByWithRelationInput | refrigeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refrigerators.
     */
    cursor?: refrigeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refrigerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refrigerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refrigerators.
     */
    distinct?: RefrigeratorScalarFieldEnum | RefrigeratorScalarFieldEnum[]
  }

  /**
   * refrigerator findFirstOrThrow
   */
  export type refrigeratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * Filter, which refrigerator to fetch.
     */
    where?: refrigeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refrigerators to fetch.
     */
    orderBy?: refrigeratorOrderByWithRelationInput | refrigeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refrigerators.
     */
    cursor?: refrigeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refrigerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refrigerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refrigerators.
     */
    distinct?: RefrigeratorScalarFieldEnum | RefrigeratorScalarFieldEnum[]
  }

  /**
   * refrigerator findMany
   */
  export type refrigeratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * Filter, which refrigerators to fetch.
     */
    where?: refrigeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refrigerators to fetch.
     */
    orderBy?: refrigeratorOrderByWithRelationInput | refrigeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refrigerators.
     */
    cursor?: refrigeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refrigerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refrigerators.
     */
    skip?: number
    distinct?: RefrigeratorScalarFieldEnum | RefrigeratorScalarFieldEnum[]
  }

  /**
   * refrigerator create
   */
  export type refrigeratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * The data needed to create a refrigerator.
     */
    data: XOR<refrigeratorCreateInput, refrigeratorUncheckedCreateInput>
  }

  /**
   * refrigerator createMany
   */
  export type refrigeratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refrigerators.
     */
    data: refrigeratorCreateManyInput | refrigeratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refrigerator update
   */
  export type refrigeratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * The data needed to update a refrigerator.
     */
    data: XOR<refrigeratorUpdateInput, refrigeratorUncheckedUpdateInput>
    /**
     * Choose, which refrigerator to update.
     */
    where: refrigeratorWhereUniqueInput
  }

  /**
   * refrigerator updateMany
   */
  export type refrigeratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refrigerators.
     */
    data: XOR<refrigeratorUpdateManyMutationInput, refrigeratorUncheckedUpdateManyInput>
    /**
     * Filter which refrigerators to update
     */
    where?: refrigeratorWhereInput
    /**
     * Limit how many refrigerators to update.
     */
    limit?: number
  }

  /**
   * refrigerator upsert
   */
  export type refrigeratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * The filter to search for the refrigerator to update in case it exists.
     */
    where: refrigeratorWhereUniqueInput
    /**
     * In case the refrigerator found by the `where` argument doesn't exist, create a new refrigerator with this data.
     */
    create: XOR<refrigeratorCreateInput, refrigeratorUncheckedCreateInput>
    /**
     * In case the refrigerator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refrigeratorUpdateInput, refrigeratorUncheckedUpdateInput>
  }

  /**
   * refrigerator delete
   */
  export type refrigeratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
    /**
     * Filter which refrigerator to delete.
     */
    where: refrigeratorWhereUniqueInput
  }

  /**
   * refrigerator deleteMany
   */
  export type refrigeratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refrigerators to delete
     */
    where?: refrigeratorWhereInput
    /**
     * Limit how many refrigerators to delete.
     */
    limit?: number
  }

  /**
   * refrigerator.ingredient
   */
  export type refrigerator$ingredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    where?: ingredientWhereInput
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    cursor?: ingredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * refrigerator without action
   */
  export type refrigeratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refrigerator
     */
    select?: refrigeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refrigerator
     */
    omit?: refrigeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refrigeratorInclude<ExtArgs> | null
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


  export const ImageListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl'
  };

  export type ImageListScalarFieldEnum = (typeof ImageListScalarFieldEnum)[keyof typeof ImageListScalarFieldEnum]


  export const Activation_tokenScalarFieldEnum: {
    created_at: 'created_at',
    expired_at: 'expired_at',
    id: 'id',
    member_id: 'member_id',
    token: 'token'
  };

  export type Activation_tokenScalarFieldEnum = (typeof Activation_tokenScalarFieldEnum)[keyof typeof Activation_tokenScalarFieldEnum]


  export const Ai_api_usageScalarFieldEnum: {
    call_count: 'call_count',
    usage_date: 'usage_date',
    created_at: 'created_at',
    id: 'id',
    member_id: 'member_id',
    updated_at: 'updated_at'
  };

  export type Ai_api_usageScalarFieldEnum = (typeof Ai_api_usageScalarFieldEnum)[keyof typeof Ai_api_usageScalarFieldEnum]


  export const AuthorityScalarFieldEnum: {
    authority_name: 'authority_name'
  };

  export type AuthorityScalarFieldEnum = (typeof AuthorityScalarFieldEnum)[keyof typeof AuthorityScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    expiration_date: 'expiration_date',
    quantity: 'quantity',
    category_id: 'category_id',
    ingredient_id: 'ingredient_id',
    member_id: 'member_id',
    refrigerator_id: 'refrigerator_id',
    registration_date: 'registration_date',
    ingredient_name: 'ingredient_name',
    photo_url: 'photo_url'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    activated: 'activated',
    created_at: 'created_at',
    member_id: 'member_id',
    updated_at: 'updated_at',
    email: 'email',
    nickname: 'nickname',
    password: 'password',
    fcm_token: 'fcm_token',
    role: 'role',
    join_type: 'join_type'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const Refresh_tokenScalarFieldEnum: {
    auto_login: 'auto_login',
    created_at: 'created_at',
    expires_at: 'expires_at',
    id: 'id',
    issued_at: 'issued_at',
    member_id: 'member_id',
    updated_at: 'updated_at',
    device_info: 'device_info',
    value: 'value'
  };

  export type Refresh_tokenScalarFieldEnum = (typeof Refresh_tokenScalarFieldEnum)[keyof typeof Refresh_tokenScalarFieldEnum]


  export const RefrigeratorScalarFieldEnum: {
    created_at: 'created_at',
    member_id: 'member_id',
    refrigerator_id: 'refrigerator_id',
    refrigerator_name: 'refrigerator_name',
    description: 'description',
    photo_url: 'photo_url'
  };

  export type RefrigeratorScalarFieldEnum = (typeof RefrigeratorScalarFieldEnum)[keyof typeof RefrigeratorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ImageListOrderByRelevanceFieldEnum: {
    name: 'name',
    imageUrl: 'imageUrl'
  };

  export type ImageListOrderByRelevanceFieldEnum = (typeof ImageListOrderByRelevanceFieldEnum)[keyof typeof ImageListOrderByRelevanceFieldEnum]


  export const activation_tokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type activation_tokenOrderByRelevanceFieldEnum = (typeof activation_tokenOrderByRelevanceFieldEnum)[keyof typeof activation_tokenOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const authorityOrderByRelevanceFieldEnum: {
    authority_name: 'authority_name'
  };

  export type authorityOrderByRelevanceFieldEnum = (typeof authorityOrderByRelevanceFieldEnum)[keyof typeof authorityOrderByRelevanceFieldEnum]


  export const categoryOrderByRelevanceFieldEnum: {
    category_name: 'category_name'
  };

  export type categoryOrderByRelevanceFieldEnum = (typeof categoryOrderByRelevanceFieldEnum)[keyof typeof categoryOrderByRelevanceFieldEnum]


  export const ingredientOrderByRelevanceFieldEnum: {
    ingredient_name: 'ingredient_name',
    photo_url: 'photo_url'
  };

  export type ingredientOrderByRelevanceFieldEnum = (typeof ingredientOrderByRelevanceFieldEnum)[keyof typeof ingredientOrderByRelevanceFieldEnum]


  export const memberOrderByRelevanceFieldEnum: {
    email: 'email',
    nickname: 'nickname',
    password: 'password',
    fcm_token: 'fcm_token',
    role: 'role'
  };

  export type memberOrderByRelevanceFieldEnum = (typeof memberOrderByRelevanceFieldEnum)[keyof typeof memberOrderByRelevanceFieldEnum]


  export const refresh_tokenOrderByRelevanceFieldEnum: {
    device_info: 'device_info',
    value: 'value'
  };

  export type refresh_tokenOrderByRelevanceFieldEnum = (typeof refresh_tokenOrderByRelevanceFieldEnum)[keyof typeof refresh_tokenOrderByRelevanceFieldEnum]


  export const refrigeratorOrderByRelevanceFieldEnum: {
    refrigerator_name: 'refrigerator_name',
    description: 'description',
    photo_url: 'photo_url'
  };

  export type refrigeratorOrderByRelevanceFieldEnum = (typeof refrigeratorOrderByRelevanceFieldEnum)[keyof typeof refrigeratorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'member_join_type'
   */
  export type Enummember_join_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'member_join_type'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ImageListWhereInput = {
    AND?: ImageListWhereInput | ImageListWhereInput[]
    OR?: ImageListWhereInput[]
    NOT?: ImageListWhereInput | ImageListWhereInput[]
    id?: IntFilter<"ImageList"> | number
    name?: StringFilter<"ImageList"> | string
    imageUrl?: StringFilter<"ImageList"> | string
  }

  export type ImageListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    _relevance?: ImageListOrderByRelevanceInput
  }

  export type ImageListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageListWhereInput | ImageListWhereInput[]
    OR?: ImageListWhereInput[]
    NOT?: ImageListWhereInput | ImageListWhereInput[]
    name?: StringFilter<"ImageList"> | string
    imageUrl?: StringFilter<"ImageList"> | string
  }, "id">

  export type ImageListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    _count?: ImageListCountOrderByAggregateInput
    _avg?: ImageListAvgOrderByAggregateInput
    _max?: ImageListMaxOrderByAggregateInput
    _min?: ImageListMinOrderByAggregateInput
    _sum?: ImageListSumOrderByAggregateInput
  }

  export type ImageListScalarWhereWithAggregatesInput = {
    AND?: ImageListScalarWhereWithAggregatesInput | ImageListScalarWhereWithAggregatesInput[]
    OR?: ImageListScalarWhereWithAggregatesInput[]
    NOT?: ImageListScalarWhereWithAggregatesInput | ImageListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImageList"> | number
    name?: StringWithAggregatesFilter<"ImageList"> | string
    imageUrl?: StringWithAggregatesFilter<"ImageList"> | string
  }

  export type activation_tokenWhereInput = {
    AND?: activation_tokenWhereInput | activation_tokenWhereInput[]
    OR?: activation_tokenWhereInput[]
    NOT?: activation_tokenWhereInput | activation_tokenWhereInput[]
    created_at?: DateTimeFilter<"activation_token"> | Date | string
    expired_at?: DateTimeFilter<"activation_token"> | Date | string
    id?: BigIntFilter<"activation_token"> | bigint | number
    member_id?: BigIntFilter<"activation_token"> | bigint | number
    token?: StringFilter<"activation_token"> | string
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
  }

  export type activation_tokenOrderByWithRelationInput = {
    created_at?: SortOrder
    expired_at?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
    token?: SortOrder
    member?: memberOrderByWithRelationInput
    _relevance?: activation_tokenOrderByRelevanceInput
  }

  export type activation_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    member_id?: bigint | number
    token?: string
    AND?: activation_tokenWhereInput | activation_tokenWhereInput[]
    OR?: activation_tokenWhereInput[]
    NOT?: activation_tokenWhereInput | activation_tokenWhereInput[]
    created_at?: DateTimeFilter<"activation_token"> | Date | string
    expired_at?: DateTimeFilter<"activation_token"> | Date | string
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
  }, "id" | "member_id" | "token">

  export type activation_tokenOrderByWithAggregationInput = {
    created_at?: SortOrder
    expired_at?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
    token?: SortOrder
    _count?: activation_tokenCountOrderByAggregateInput
    _avg?: activation_tokenAvgOrderByAggregateInput
    _max?: activation_tokenMaxOrderByAggregateInput
    _min?: activation_tokenMinOrderByAggregateInput
    _sum?: activation_tokenSumOrderByAggregateInput
  }

  export type activation_tokenScalarWhereWithAggregatesInput = {
    AND?: activation_tokenScalarWhereWithAggregatesInput | activation_tokenScalarWhereWithAggregatesInput[]
    OR?: activation_tokenScalarWhereWithAggregatesInput[]
    NOT?: activation_tokenScalarWhereWithAggregatesInput | activation_tokenScalarWhereWithAggregatesInput[]
    created_at?: DateTimeWithAggregatesFilter<"activation_token"> | Date | string
    expired_at?: DateTimeWithAggregatesFilter<"activation_token"> | Date | string
    id?: BigIntWithAggregatesFilter<"activation_token"> | bigint | number
    member_id?: BigIntWithAggregatesFilter<"activation_token"> | bigint | number
    token?: StringWithAggregatesFilter<"activation_token"> | string
  }

  export type ai_api_usageWhereInput = {
    AND?: ai_api_usageWhereInput | ai_api_usageWhereInput[]
    OR?: ai_api_usageWhereInput[]
    NOT?: ai_api_usageWhereInput | ai_api_usageWhereInput[]
    call_count?: IntNullableFilter<"ai_api_usage"> | number | null
    usage_date?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
    id?: BigIntFilter<"ai_api_usage"> | bigint | number
    member_id?: BigIntNullableFilter<"ai_api_usage"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
    member?: XOR<MemberNullableScalarRelationFilter, memberWhereInput> | null
  }

  export type ai_api_usageOrderByWithRelationInput = {
    call_count?: SortOrderInput | SortOrder
    usage_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    id?: SortOrder
    member_id?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    member?: memberOrderByWithRelationInput
  }

  export type ai_api_usageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ai_api_usageWhereInput | ai_api_usageWhereInput[]
    OR?: ai_api_usageWhereInput[]
    NOT?: ai_api_usageWhereInput | ai_api_usageWhereInput[]
    call_count?: IntNullableFilter<"ai_api_usage"> | number | null
    usage_date?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
    member_id?: BigIntNullableFilter<"ai_api_usage"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
    member?: XOR<MemberNullableScalarRelationFilter, memberWhereInput> | null
  }, "id">

  export type ai_api_usageOrderByWithAggregationInput = {
    call_count?: SortOrderInput | SortOrder
    usage_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    id?: SortOrder
    member_id?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ai_api_usageCountOrderByAggregateInput
    _avg?: ai_api_usageAvgOrderByAggregateInput
    _max?: ai_api_usageMaxOrderByAggregateInput
    _min?: ai_api_usageMinOrderByAggregateInput
    _sum?: ai_api_usageSumOrderByAggregateInput
  }

  export type ai_api_usageScalarWhereWithAggregatesInput = {
    AND?: ai_api_usageScalarWhereWithAggregatesInput | ai_api_usageScalarWhereWithAggregatesInput[]
    OR?: ai_api_usageScalarWhereWithAggregatesInput[]
    NOT?: ai_api_usageScalarWhereWithAggregatesInput | ai_api_usageScalarWhereWithAggregatesInput[]
    call_count?: IntNullableWithAggregatesFilter<"ai_api_usage"> | number | null
    usage_date?: DateTimeNullableWithAggregatesFilter<"ai_api_usage"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ai_api_usage"> | Date | string | null
    id?: BigIntWithAggregatesFilter<"ai_api_usage"> | bigint | number
    member_id?: BigIntNullableWithAggregatesFilter<"ai_api_usage"> | bigint | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ai_api_usage"> | Date | string | null
  }

  export type authorityWhereInput = {
    AND?: authorityWhereInput | authorityWhereInput[]
    OR?: authorityWhereInput[]
    NOT?: authorityWhereInput | authorityWhereInput[]
    authority_name?: StringFilter<"authority"> | string
  }

  export type authorityOrderByWithRelationInput = {
    authority_name?: SortOrder
    _relevance?: authorityOrderByRelevanceInput
  }

  export type authorityWhereUniqueInput = Prisma.AtLeast<{
    authority_name?: string
    AND?: authorityWhereInput | authorityWhereInput[]
    OR?: authorityWhereInput[]
    NOT?: authorityWhereInput | authorityWhereInput[]
  }, "authority_name">

  export type authorityOrderByWithAggregationInput = {
    authority_name?: SortOrder
    _count?: authorityCountOrderByAggregateInput
    _max?: authorityMaxOrderByAggregateInput
    _min?: authorityMinOrderByAggregateInput
  }

  export type authorityScalarWhereWithAggregatesInput = {
    AND?: authorityScalarWhereWithAggregatesInput | authorityScalarWhereWithAggregatesInput[]
    OR?: authorityScalarWhereWithAggregatesInput[]
    NOT?: authorityScalarWhereWithAggregatesInput | authorityScalarWhereWithAggregatesInput[]
    authority_name?: StringWithAggregatesFilter<"authority"> | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    category_id?: BigIntFilter<"category"> | bigint | number
    category_name?: StringFilter<"category"> | string
    ingredient?: IngredientListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    ingredient?: ingredientOrderByRelationAggregateInput
    _relevance?: categoryOrderByRelevanceInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: bigint | number
    category_name?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    ingredient?: IngredientListRelationFilter
  }, "category_id" | "category_name">

  export type categoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    category_id?: BigIntWithAggregatesFilter<"category"> | bigint | number
    category_name?: StringWithAggregatesFilter<"category"> | string
  }

  export type ingredientWhereInput = {
    AND?: ingredientWhereInput | ingredientWhereInput[]
    OR?: ingredientWhereInput[]
    NOT?: ingredientWhereInput | ingredientWhereInput[]
    expiration_date?: DateTimeFilter<"ingredient"> | Date | string
    quantity?: IntFilter<"ingredient"> | number
    category_id?: BigIntFilter<"ingredient"> | bigint | number
    ingredient_id?: BigIntFilter<"ingredient"> | bigint | number
    member_id?: BigIntFilter<"ingredient"> | bigint | number
    refrigerator_id?: BigIntFilter<"ingredient"> | bigint | number
    registration_date?: DateTimeNullableFilter<"ingredient"> | Date | string | null
    ingredient_name?: StringFilter<"ingredient"> | string
    photo_url?: StringNullableFilter<"ingredient"> | string | null
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
    refrigerator?: XOR<RefrigeratorScalarRelationFilter, refrigeratorWhereInput>
  }

  export type ingredientOrderByWithRelationInput = {
    expiration_date?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
    ingredient_id?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    registration_date?: SortOrderInput | SortOrder
    ingredient_name?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    category?: categoryOrderByWithRelationInput
    member?: memberOrderByWithRelationInput
    refrigerator?: refrigeratorOrderByWithRelationInput
    _relevance?: ingredientOrderByRelevanceInput
  }

  export type ingredientWhereUniqueInput = Prisma.AtLeast<{
    ingredient_id?: bigint | number
    AND?: ingredientWhereInput | ingredientWhereInput[]
    OR?: ingredientWhereInput[]
    NOT?: ingredientWhereInput | ingredientWhereInput[]
    expiration_date?: DateTimeFilter<"ingredient"> | Date | string
    quantity?: IntFilter<"ingredient"> | number
    category_id?: BigIntFilter<"ingredient"> | bigint | number
    member_id?: BigIntFilter<"ingredient"> | bigint | number
    refrigerator_id?: BigIntFilter<"ingredient"> | bigint | number
    registration_date?: DateTimeNullableFilter<"ingredient"> | Date | string | null
    ingredient_name?: StringFilter<"ingredient"> | string
    photo_url?: StringNullableFilter<"ingredient"> | string | null
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
    refrigerator?: XOR<RefrigeratorScalarRelationFilter, refrigeratorWhereInput>
  }, "ingredient_id">

  export type ingredientOrderByWithAggregationInput = {
    expiration_date?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
    ingredient_id?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    registration_date?: SortOrderInput | SortOrder
    ingredient_name?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    _count?: ingredientCountOrderByAggregateInput
    _avg?: ingredientAvgOrderByAggregateInput
    _max?: ingredientMaxOrderByAggregateInput
    _min?: ingredientMinOrderByAggregateInput
    _sum?: ingredientSumOrderByAggregateInput
  }

  export type ingredientScalarWhereWithAggregatesInput = {
    AND?: ingredientScalarWhereWithAggregatesInput | ingredientScalarWhereWithAggregatesInput[]
    OR?: ingredientScalarWhereWithAggregatesInput[]
    NOT?: ingredientScalarWhereWithAggregatesInput | ingredientScalarWhereWithAggregatesInput[]
    expiration_date?: DateTimeWithAggregatesFilter<"ingredient"> | Date | string
    quantity?: IntWithAggregatesFilter<"ingredient"> | number
    category_id?: BigIntWithAggregatesFilter<"ingredient"> | bigint | number
    ingredient_id?: BigIntWithAggregatesFilter<"ingredient"> | bigint | number
    member_id?: BigIntWithAggregatesFilter<"ingredient"> | bigint | number
    refrigerator_id?: BigIntWithAggregatesFilter<"ingredient"> | bigint | number
    registration_date?: DateTimeNullableWithAggregatesFilter<"ingredient"> | Date | string | null
    ingredient_name?: StringWithAggregatesFilter<"ingredient"> | string
    photo_url?: StringNullableWithAggregatesFilter<"ingredient"> | string | null
  }

  export type memberWhereInput = {
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    activated?: BoolFilter<"member"> | boolean
    created_at?: DateTimeNullableFilter<"member"> | Date | string | null
    member_id?: BigIntFilter<"member"> | bigint | number
    updated_at?: DateTimeNullableFilter<"member"> | Date | string | null
    email?: StringFilter<"member"> | string
    nickname?: StringNullableFilter<"member"> | string | null
    password?: StringNullableFilter<"member"> | string | null
    fcm_token?: StringNullableFilter<"member"> | string | null
    role?: StringNullableFilter<"member"> | string | null
    join_type?: Enummember_join_typeNullableFilter<"member"> | $Enums.member_join_type | null
    activation_token?: XOR<Activation_tokenNullableScalarRelationFilter, activation_tokenWhereInput> | null
    ai_api_usage?: Ai_api_usageListRelationFilter
    ingredient?: IngredientListRelationFilter
    refresh_token?: Refresh_tokenListRelationFilter
    refrigerator?: RefrigeratorListRelationFilter
  }

  export type memberOrderByWithRelationInput = {
    activated?: SortOrder
    created_at?: SortOrderInput | SortOrder
    member_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    email?: SortOrder
    nickname?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    fcm_token?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    join_type?: SortOrderInput | SortOrder
    activation_token?: activation_tokenOrderByWithRelationInput
    ai_api_usage?: ai_api_usageOrderByRelationAggregateInput
    ingredient?: ingredientOrderByRelationAggregateInput
    refresh_token?: refresh_tokenOrderByRelationAggregateInput
    refrigerator?: refrigeratorOrderByRelationAggregateInput
    _relevance?: memberOrderByRelevanceInput
  }

  export type memberWhereUniqueInput = Prisma.AtLeast<{
    member_id?: bigint | number
    email?: string
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    activated?: BoolFilter<"member"> | boolean
    created_at?: DateTimeNullableFilter<"member"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"member"> | Date | string | null
    nickname?: StringNullableFilter<"member"> | string | null
    password?: StringNullableFilter<"member"> | string | null
    fcm_token?: StringNullableFilter<"member"> | string | null
    role?: StringNullableFilter<"member"> | string | null
    join_type?: Enummember_join_typeNullableFilter<"member"> | $Enums.member_join_type | null
    activation_token?: XOR<Activation_tokenNullableScalarRelationFilter, activation_tokenWhereInput> | null
    ai_api_usage?: Ai_api_usageListRelationFilter
    ingredient?: IngredientListRelationFilter
    refresh_token?: Refresh_tokenListRelationFilter
    refrigerator?: RefrigeratorListRelationFilter
  }, "member_id" | "email">

  export type memberOrderByWithAggregationInput = {
    activated?: SortOrder
    created_at?: SortOrderInput | SortOrder
    member_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    email?: SortOrder
    nickname?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    fcm_token?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    join_type?: SortOrderInput | SortOrder
    _count?: memberCountOrderByAggregateInput
    _avg?: memberAvgOrderByAggregateInput
    _max?: memberMaxOrderByAggregateInput
    _min?: memberMinOrderByAggregateInput
    _sum?: memberSumOrderByAggregateInput
  }

  export type memberScalarWhereWithAggregatesInput = {
    AND?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    OR?: memberScalarWhereWithAggregatesInput[]
    NOT?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    activated?: BoolWithAggregatesFilter<"member"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"member"> | Date | string | null
    member_id?: BigIntWithAggregatesFilter<"member"> | bigint | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"member"> | Date | string | null
    email?: StringWithAggregatesFilter<"member"> | string
    nickname?: StringNullableWithAggregatesFilter<"member"> | string | null
    password?: StringNullableWithAggregatesFilter<"member"> | string | null
    fcm_token?: StringNullableWithAggregatesFilter<"member"> | string | null
    role?: StringNullableWithAggregatesFilter<"member"> | string | null
    join_type?: Enummember_join_typeNullableWithAggregatesFilter<"member"> | $Enums.member_join_type | null
  }

  export type refresh_tokenWhereInput = {
    AND?: refresh_tokenWhereInput | refresh_tokenWhereInput[]
    OR?: refresh_tokenWhereInput[]
    NOT?: refresh_tokenWhereInput | refresh_tokenWhereInput[]
    auto_login?: BoolNullableFilter<"refresh_token"> | boolean | null
    created_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    id?: BigIntFilter<"refresh_token"> | bigint | number
    issued_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    member_id?: BigIntNullableFilter<"refresh_token"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    device_info?: StringNullableFilter<"refresh_token"> | string | null
    value?: StringNullableFilter<"refresh_token"> | string | null
    member?: XOR<MemberNullableScalarRelationFilter, memberWhereInput> | null
  }

  export type refresh_tokenOrderByWithRelationInput = {
    auto_login?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    id?: SortOrder
    issued_at?: SortOrderInput | SortOrder
    member_id?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    device_info?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    member?: memberOrderByWithRelationInput
    _relevance?: refresh_tokenOrderByRelevanceInput
  }

  export type refresh_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: refresh_tokenWhereInput | refresh_tokenWhereInput[]
    OR?: refresh_tokenWhereInput[]
    NOT?: refresh_tokenWhereInput | refresh_tokenWhereInput[]
    auto_login?: BoolNullableFilter<"refresh_token"> | boolean | null
    created_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    issued_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    member_id?: BigIntNullableFilter<"refresh_token"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    device_info?: StringNullableFilter<"refresh_token"> | string | null
    value?: StringNullableFilter<"refresh_token"> | string | null
    member?: XOR<MemberNullableScalarRelationFilter, memberWhereInput> | null
  }, "id">

  export type refresh_tokenOrderByWithAggregationInput = {
    auto_login?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    id?: SortOrder
    issued_at?: SortOrderInput | SortOrder
    member_id?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    device_info?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    _count?: refresh_tokenCountOrderByAggregateInput
    _avg?: refresh_tokenAvgOrderByAggregateInput
    _max?: refresh_tokenMaxOrderByAggregateInput
    _min?: refresh_tokenMinOrderByAggregateInput
    _sum?: refresh_tokenSumOrderByAggregateInput
  }

  export type refresh_tokenScalarWhereWithAggregatesInput = {
    AND?: refresh_tokenScalarWhereWithAggregatesInput | refresh_tokenScalarWhereWithAggregatesInput[]
    OR?: refresh_tokenScalarWhereWithAggregatesInput[]
    NOT?: refresh_tokenScalarWhereWithAggregatesInput | refresh_tokenScalarWhereWithAggregatesInput[]
    auto_login?: BoolNullableWithAggregatesFilter<"refresh_token"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"refresh_token"> | Date | string | null
    expires_at?: DateTimeNullableWithAggregatesFilter<"refresh_token"> | Date | string | null
    id?: BigIntWithAggregatesFilter<"refresh_token"> | bigint | number
    issued_at?: DateTimeNullableWithAggregatesFilter<"refresh_token"> | Date | string | null
    member_id?: BigIntNullableWithAggregatesFilter<"refresh_token"> | bigint | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"refresh_token"> | Date | string | null
    device_info?: StringNullableWithAggregatesFilter<"refresh_token"> | string | null
    value?: StringNullableWithAggregatesFilter<"refresh_token"> | string | null
  }

  export type refrigeratorWhereInput = {
    AND?: refrigeratorWhereInput | refrigeratorWhereInput[]
    OR?: refrigeratorWhereInput[]
    NOT?: refrigeratorWhereInput | refrigeratorWhereInput[]
    created_at?: DateTimeNullableFilter<"refrigerator"> | Date | string | null
    member_id?: BigIntFilter<"refrigerator"> | bigint | number
    refrigerator_id?: BigIntFilter<"refrigerator"> | bigint | number
    refrigerator_name?: StringFilter<"refrigerator"> | string
    description?: StringNullableFilter<"refrigerator"> | string | null
    photo_url?: StringNullableFilter<"refrigerator"> | string | null
    ingredient?: IngredientListRelationFilter
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
  }

  export type refrigeratorOrderByWithRelationInput = {
    created_at?: SortOrderInput | SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    refrigerator_name?: SortOrder
    description?: SortOrderInput | SortOrder
    photo_url?: SortOrderInput | SortOrder
    ingredient?: ingredientOrderByRelationAggregateInput
    member?: memberOrderByWithRelationInput
    _relevance?: refrigeratorOrderByRelevanceInput
  }

  export type refrigeratorWhereUniqueInput = Prisma.AtLeast<{
    refrigerator_id?: bigint | number
    AND?: refrigeratorWhereInput | refrigeratorWhereInput[]
    OR?: refrigeratorWhereInput[]
    NOT?: refrigeratorWhereInput | refrigeratorWhereInput[]
    created_at?: DateTimeNullableFilter<"refrigerator"> | Date | string | null
    member_id?: BigIntFilter<"refrigerator"> | bigint | number
    refrigerator_name?: StringFilter<"refrigerator"> | string
    description?: StringNullableFilter<"refrigerator"> | string | null
    photo_url?: StringNullableFilter<"refrigerator"> | string | null
    ingredient?: IngredientListRelationFilter
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
  }, "refrigerator_id">

  export type refrigeratorOrderByWithAggregationInput = {
    created_at?: SortOrderInput | SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    refrigerator_name?: SortOrder
    description?: SortOrderInput | SortOrder
    photo_url?: SortOrderInput | SortOrder
    _count?: refrigeratorCountOrderByAggregateInput
    _avg?: refrigeratorAvgOrderByAggregateInput
    _max?: refrigeratorMaxOrderByAggregateInput
    _min?: refrigeratorMinOrderByAggregateInput
    _sum?: refrigeratorSumOrderByAggregateInput
  }

  export type refrigeratorScalarWhereWithAggregatesInput = {
    AND?: refrigeratorScalarWhereWithAggregatesInput | refrigeratorScalarWhereWithAggregatesInput[]
    OR?: refrigeratorScalarWhereWithAggregatesInput[]
    NOT?: refrigeratorScalarWhereWithAggregatesInput | refrigeratorScalarWhereWithAggregatesInput[]
    created_at?: DateTimeNullableWithAggregatesFilter<"refrigerator"> | Date | string | null
    member_id?: BigIntWithAggregatesFilter<"refrigerator"> | bigint | number
    refrigerator_id?: BigIntWithAggregatesFilter<"refrigerator"> | bigint | number
    refrigerator_name?: StringWithAggregatesFilter<"refrigerator"> | string
    description?: StringNullableWithAggregatesFilter<"refrigerator"> | string | null
    photo_url?: StringNullableWithAggregatesFilter<"refrigerator"> | string | null
  }

  export type ImageListCreateInput = {
    name: string
    imageUrl: string
  }

  export type ImageListUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl: string
  }

  export type ImageListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ImageListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ImageListCreateManyInput = {
    id?: number
    name: string
    imageUrl: string
  }

  export type ImageListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ImageListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type activation_tokenCreateInput = {
    created_at: Date | string
    expired_at: Date | string
    id?: bigint | number
    token: string
    member: memberCreateNestedOneWithoutActivation_tokenInput
  }

  export type activation_tokenUncheckedCreateInput = {
    created_at: Date | string
    expired_at: Date | string
    id?: bigint | number
    member_id: bigint | number
    token: string
  }

  export type activation_tokenUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
    member?: memberUpdateOneRequiredWithoutActivation_tokenNestedInput
  }

  export type activation_tokenUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type activation_tokenCreateManyInput = {
    created_at: Date | string
    expired_at: Date | string
    id?: bigint | number
    member_id: bigint | number
    token: string
  }

  export type activation_tokenUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type activation_tokenUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ai_api_usageCreateInput = {
    call_count?: number | null
    usage_date?: Date | string | null
    created_at?: Date | string | null
    id?: bigint | number
    updated_at?: Date | string | null
    member?: memberCreateNestedOneWithoutAi_api_usageInput
  }

  export type ai_api_usageUncheckedCreateInput = {
    call_count?: number | null
    usage_date?: Date | string | null
    created_at?: Date | string | null
    id?: bigint | number
    member_id?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_api_usageUpdateInput = {
    call_count?: NullableIntFieldUpdateOperationsInput | number | null
    usage_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUpdateOneWithoutAi_api_usageNestedInput
  }

  export type ai_api_usageUncheckedUpdateInput = {
    call_count?: NullableIntFieldUpdateOperationsInput | number | null
    usage_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_api_usageCreateManyInput = {
    call_count?: number | null
    usage_date?: Date | string | null
    created_at?: Date | string | null
    id?: bigint | number
    member_id?: bigint | number | null
    updated_at?: Date | string | null
  }

  export type ai_api_usageUpdateManyMutationInput = {
    call_count?: NullableIntFieldUpdateOperationsInput | number | null
    usage_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_api_usageUncheckedUpdateManyInput = {
    call_count?: NullableIntFieldUpdateOperationsInput | number | null
    usage_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authorityCreateInput = {
    authority_name: string
  }

  export type authorityUncheckedCreateInput = {
    authority_name: string
  }

  export type authorityUpdateInput = {
    authority_name?: StringFieldUpdateOperationsInput | string
  }

  export type authorityUncheckedUpdateInput = {
    authority_name?: StringFieldUpdateOperationsInput | string
  }

  export type authorityCreateManyInput = {
    authority_name: string
  }

  export type authorityUpdateManyMutationInput = {
    authority_name?: StringFieldUpdateOperationsInput | string
  }

  export type authorityUncheckedUpdateManyInput = {
    authority_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryCreateInput = {
    category_id?: bigint | number
    category_name: string
    ingredient?: ingredientCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    category_id?: bigint | number
    category_name: string
    ingredient?: ingredientUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_name?: StringFieldUpdateOperationsInput | string
    ingredient?: ingredientUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_name?: StringFieldUpdateOperationsInput | string
    ingredient?: ingredientUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    category_id?: bigint | number
    category_name: string
  }

  export type categoryUpdateManyMutationInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type ingredientCreateInput = {
    expiration_date: Date | string
    quantity: number
    ingredient_id?: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
    category: categoryCreateNestedOneWithoutIngredientInput
    member: memberCreateNestedOneWithoutIngredientInput
    refrigerator: refrigeratorCreateNestedOneWithoutIngredientInput
  }

  export type ingredientUncheckedCreateInput = {
    expiration_date: Date | string
    quantity: number
    category_id: bigint | number
    ingredient_id?: bigint | number
    member_id: bigint | number
    refrigerator_id: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
  }

  export type ingredientUpdateInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneRequiredWithoutIngredientNestedInput
    member?: memberUpdateOneRequiredWithoutIngredientNestedInput
    refrigerator?: refrigeratorUpdateOneRequiredWithoutIngredientNestedInput
  }

  export type ingredientUncheckedUpdateInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredientCreateManyInput = {
    expiration_date: Date | string
    quantity: number
    category_id: bigint | number
    ingredient_id?: bigint | number
    member_id: bigint | number
    refrigerator_id: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
  }

  export type ingredientUpdateManyMutationInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredientUncheckedUpdateManyInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memberCreateInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenCreateNestedOneWithoutMemberInput
    ai_api_usage?: ai_api_usageCreateNestedManyWithoutMemberInput
    ingredient?: ingredientCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedCreateNestedOneWithoutMemberInput
    ai_api_usage?: ai_api_usageUncheckedCreateNestedManyWithoutMemberInput
    ingredient?: ingredientUncheckedCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberUpdateInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUpdateOneWithoutMemberNestedInput
    ai_api_usage?: ai_api_usageUpdateManyWithoutMemberNestedInput
    ingredient?: ingredientUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedUpdateOneWithoutMemberNestedInput
    ai_api_usage?: ai_api_usageUncheckedUpdateManyWithoutMemberNestedInput
    ingredient?: ingredientUncheckedUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type memberCreateManyInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
  }

  export type memberUpdateManyMutationInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
  }

  export type memberUncheckedUpdateManyInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
  }

  export type refresh_tokenCreateInput = {
    auto_login?: boolean | null
    created_at?: Date | string | null
    expires_at?: Date | string | null
    id?: bigint | number
    issued_at?: Date | string | null
    updated_at?: Date | string | null
    device_info?: string | null
    value?: string | null
    member?: memberCreateNestedOneWithoutRefresh_tokenInput
  }

  export type refresh_tokenUncheckedCreateInput = {
    auto_login?: boolean | null
    created_at?: Date | string | null
    expires_at?: Date | string | null
    id?: bigint | number
    issued_at?: Date | string | null
    member_id?: bigint | number | null
    updated_at?: Date | string | null
    device_info?: string | null
    value?: string | null
  }

  export type refresh_tokenUpdateInput = {
    auto_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    member?: memberUpdateOneWithoutRefresh_tokenNestedInput
  }

  export type refresh_tokenUncheckedUpdateInput = {
    auto_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokenCreateManyInput = {
    auto_login?: boolean | null
    created_at?: Date | string | null
    expires_at?: Date | string | null
    id?: bigint | number
    issued_at?: Date | string | null
    member_id?: bigint | number | null
    updated_at?: Date | string | null
    device_info?: string | null
    value?: string | null
  }

  export type refresh_tokenUpdateManyMutationInput = {
    auto_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokenUncheckedUpdateManyInput = {
    auto_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refrigeratorCreateInput = {
    created_at?: Date | string | null
    refrigerator_id?: bigint | number
    refrigerator_name: string
    description?: string | null
    photo_url?: string | null
    ingredient?: ingredientCreateNestedManyWithoutRefrigeratorInput
    member: memberCreateNestedOneWithoutRefrigeratorInput
  }

  export type refrigeratorUncheckedCreateInput = {
    created_at?: Date | string | null
    member_id: bigint | number
    refrigerator_id?: bigint | number
    refrigerator_name: string
    description?: string | null
    photo_url?: string | null
    ingredient?: ingredientUncheckedCreateNestedManyWithoutRefrigeratorInput
  }

  export type refrigeratorUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredient?: ingredientUpdateManyWithoutRefrigeratorNestedInput
    member?: memberUpdateOneRequiredWithoutRefrigeratorNestedInput
  }

  export type refrigeratorUncheckedUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredient?: ingredientUncheckedUpdateManyWithoutRefrigeratorNestedInput
  }

  export type refrigeratorCreateManyInput = {
    created_at?: Date | string | null
    member_id: bigint | number
    refrigerator_id?: bigint | number
    refrigerator_name: string
    description?: string | null
    photo_url?: string | null
  }

  export type refrigeratorUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refrigeratorUncheckedUpdateManyInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ImageListOrderByRelevanceInput = {
    fields: ImageListOrderByRelevanceFieldEnum | ImageListOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type ImageListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type ImageListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type ImageListSumOrderByAggregateInput = {
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type MemberScalarRelationFilter = {
    is?: memberWhereInput
    isNot?: memberWhereInput
  }

  export type activation_tokenOrderByRelevanceInput = {
    fields: activation_tokenOrderByRelevanceFieldEnum | activation_tokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type activation_tokenCountOrderByAggregateInput = {
    created_at?: SortOrder
    expired_at?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
    token?: SortOrder
  }

  export type activation_tokenAvgOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
  }

  export type activation_tokenMaxOrderByAggregateInput = {
    created_at?: SortOrder
    expired_at?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
    token?: SortOrder
  }

  export type activation_tokenMinOrderByAggregateInput = {
    created_at?: SortOrder
    expired_at?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
    token?: SortOrder
  }

  export type activation_tokenSumOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type MemberNullableScalarRelationFilter = {
    is?: memberWhereInput | null
    isNot?: memberWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ai_api_usageCountOrderByAggregateInput = {
    call_count?: SortOrder
    usage_date?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_api_usageAvgOrderByAggregateInput = {
    call_count?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
  }

  export type ai_api_usageMaxOrderByAggregateInput = {
    call_count?: SortOrder
    usage_date?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_api_usageMinOrderByAggregateInput = {
    call_count?: SortOrder
    usage_date?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
  }

  export type ai_api_usageSumOrderByAggregateInput = {
    call_count?: SortOrder
    id?: SortOrder
    member_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type authorityOrderByRelevanceInput = {
    fields: authorityOrderByRelevanceFieldEnum | authorityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type authorityCountOrderByAggregateInput = {
    authority_name?: SortOrder
  }

  export type authorityMaxOrderByAggregateInput = {
    authority_name?: SortOrder
  }

  export type authorityMinOrderByAggregateInput = {
    authority_name?: SortOrder
  }

  export type IngredientListRelationFilter = {
    every?: ingredientWhereInput
    some?: ingredientWhereInput
    none?: ingredientWhereInput
  }

  export type ingredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryOrderByRelevanceInput = {
    fields: categoryOrderByRelevanceFieldEnum | categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type RefrigeratorScalarRelationFilter = {
    is?: refrigeratorWhereInput
    isNot?: refrigeratorWhereInput
  }

  export type ingredientOrderByRelevanceInput = {
    fields: ingredientOrderByRelevanceFieldEnum | ingredientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ingredientCountOrderByAggregateInput = {
    expiration_date?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
    ingredient_id?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    registration_date?: SortOrder
    ingredient_name?: SortOrder
    photo_url?: SortOrder
  }

  export type ingredientAvgOrderByAggregateInput = {
    quantity?: SortOrder
    category_id?: SortOrder
    ingredient_id?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
  }

  export type ingredientMaxOrderByAggregateInput = {
    expiration_date?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
    ingredient_id?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    registration_date?: SortOrder
    ingredient_name?: SortOrder
    photo_url?: SortOrder
  }

  export type ingredientMinOrderByAggregateInput = {
    expiration_date?: SortOrder
    quantity?: SortOrder
    category_id?: SortOrder
    ingredient_id?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    registration_date?: SortOrder
    ingredient_name?: SortOrder
    photo_url?: SortOrder
  }

  export type ingredientSumOrderByAggregateInput = {
    quantity?: SortOrder
    category_id?: SortOrder
    ingredient_id?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Enummember_join_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.member_join_type | Enummember_join_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_join_type[] | null
    notIn?: $Enums.member_join_type[] | null
    not?: NestedEnummember_join_typeNullableFilter<$PrismaModel> | $Enums.member_join_type | null
  }

  export type Activation_tokenNullableScalarRelationFilter = {
    is?: activation_tokenWhereInput | null
    isNot?: activation_tokenWhereInput | null
  }

  export type Ai_api_usageListRelationFilter = {
    every?: ai_api_usageWhereInput
    some?: ai_api_usageWhereInput
    none?: ai_api_usageWhereInput
  }

  export type Refresh_tokenListRelationFilter = {
    every?: refresh_tokenWhereInput
    some?: refresh_tokenWhereInput
    none?: refresh_tokenWhereInput
  }

  export type RefrigeratorListRelationFilter = {
    every?: refrigeratorWhereInput
    some?: refrigeratorWhereInput
    none?: refrigeratorWhereInput
  }

  export type ai_api_usageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type refresh_tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type refrigeratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type memberOrderByRelevanceInput = {
    fields: memberOrderByRelevanceFieldEnum | memberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type memberCountOrderByAggregateInput = {
    activated?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    fcm_token?: SortOrder
    role?: SortOrder
    join_type?: SortOrder
  }

  export type memberAvgOrderByAggregateInput = {
    member_id?: SortOrder
  }

  export type memberMaxOrderByAggregateInput = {
    activated?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    fcm_token?: SortOrder
    role?: SortOrder
    join_type?: SortOrder
  }

  export type memberMinOrderByAggregateInput = {
    activated?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    fcm_token?: SortOrder
    role?: SortOrder
    join_type?: SortOrder
  }

  export type memberSumOrderByAggregateInput = {
    member_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enummember_join_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_join_type | Enummember_join_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_join_type[] | null
    notIn?: $Enums.member_join_type[] | null
    not?: NestedEnummember_join_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.member_join_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummember_join_typeNullableFilter<$PrismaModel>
    _max?: NestedEnummember_join_typeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type refresh_tokenOrderByRelevanceInput = {
    fields: refresh_tokenOrderByRelevanceFieldEnum | refresh_tokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type refresh_tokenCountOrderByAggregateInput = {
    auto_login?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    id?: SortOrder
    issued_at?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
    device_info?: SortOrder
    value?: SortOrder
  }

  export type refresh_tokenAvgOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
  }

  export type refresh_tokenMaxOrderByAggregateInput = {
    auto_login?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    id?: SortOrder
    issued_at?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
    device_info?: SortOrder
    value?: SortOrder
  }

  export type refresh_tokenMinOrderByAggregateInput = {
    auto_login?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    id?: SortOrder
    issued_at?: SortOrder
    member_id?: SortOrder
    updated_at?: SortOrder
    device_info?: SortOrder
    value?: SortOrder
  }

  export type refresh_tokenSumOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type refrigeratorOrderByRelevanceInput = {
    fields: refrigeratorOrderByRelevanceFieldEnum | refrigeratorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type refrigeratorCountOrderByAggregateInput = {
    created_at?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    refrigerator_name?: SortOrder
    description?: SortOrder
    photo_url?: SortOrder
  }

  export type refrigeratorAvgOrderByAggregateInput = {
    member_id?: SortOrder
    refrigerator_id?: SortOrder
  }

  export type refrigeratorMaxOrderByAggregateInput = {
    created_at?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    refrigerator_name?: SortOrder
    description?: SortOrder
    photo_url?: SortOrder
  }

  export type refrigeratorMinOrderByAggregateInput = {
    created_at?: SortOrder
    member_id?: SortOrder
    refrigerator_id?: SortOrder
    refrigerator_name?: SortOrder
    description?: SortOrder
    photo_url?: SortOrder
  }

  export type refrigeratorSumOrderByAggregateInput = {
    member_id?: SortOrder
    refrigerator_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type memberCreateNestedOneWithoutActivation_tokenInput = {
    create?: XOR<memberCreateWithoutActivation_tokenInput, memberUncheckedCreateWithoutActivation_tokenInput>
    connectOrCreate?: memberCreateOrConnectWithoutActivation_tokenInput
    connect?: memberWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type memberUpdateOneRequiredWithoutActivation_tokenNestedInput = {
    create?: XOR<memberCreateWithoutActivation_tokenInput, memberUncheckedCreateWithoutActivation_tokenInput>
    connectOrCreate?: memberCreateOrConnectWithoutActivation_tokenInput
    upsert?: memberUpsertWithoutActivation_tokenInput
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutActivation_tokenInput, memberUpdateWithoutActivation_tokenInput>, memberUncheckedUpdateWithoutActivation_tokenInput>
  }

  export type memberCreateNestedOneWithoutAi_api_usageInput = {
    create?: XOR<memberCreateWithoutAi_api_usageInput, memberUncheckedCreateWithoutAi_api_usageInput>
    connectOrCreate?: memberCreateOrConnectWithoutAi_api_usageInput
    connect?: memberWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type memberUpdateOneWithoutAi_api_usageNestedInput = {
    create?: XOR<memberCreateWithoutAi_api_usageInput, memberUncheckedCreateWithoutAi_api_usageInput>
    connectOrCreate?: memberCreateOrConnectWithoutAi_api_usageInput
    upsert?: memberUpsertWithoutAi_api_usageInput
    disconnect?: memberWhereInput | boolean
    delete?: memberWhereInput | boolean
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutAi_api_usageInput, memberUpdateWithoutAi_api_usageInput>, memberUncheckedUpdateWithoutAi_api_usageInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ingredientCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ingredientCreateWithoutCategoryInput, ingredientUncheckedCreateWithoutCategoryInput> | ingredientCreateWithoutCategoryInput[] | ingredientUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutCategoryInput | ingredientCreateOrConnectWithoutCategoryInput[]
    createMany?: ingredientCreateManyCategoryInputEnvelope
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
  }

  export type ingredientUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ingredientCreateWithoutCategoryInput, ingredientUncheckedCreateWithoutCategoryInput> | ingredientCreateWithoutCategoryInput[] | ingredientUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutCategoryInput | ingredientCreateOrConnectWithoutCategoryInput[]
    createMany?: ingredientCreateManyCategoryInputEnvelope
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
  }

  export type ingredientUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ingredientCreateWithoutCategoryInput, ingredientUncheckedCreateWithoutCategoryInput> | ingredientCreateWithoutCategoryInput[] | ingredientUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutCategoryInput | ingredientCreateOrConnectWithoutCategoryInput[]
    upsert?: ingredientUpsertWithWhereUniqueWithoutCategoryInput | ingredientUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ingredientCreateManyCategoryInputEnvelope
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    update?: ingredientUpdateWithWhereUniqueWithoutCategoryInput | ingredientUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ingredientUpdateManyWithWhereWithoutCategoryInput | ingredientUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
  }

  export type ingredientUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ingredientCreateWithoutCategoryInput, ingredientUncheckedCreateWithoutCategoryInput> | ingredientCreateWithoutCategoryInput[] | ingredientUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutCategoryInput | ingredientCreateOrConnectWithoutCategoryInput[]
    upsert?: ingredientUpsertWithWhereUniqueWithoutCategoryInput | ingredientUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ingredientCreateManyCategoryInputEnvelope
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    update?: ingredientUpdateWithWhereUniqueWithoutCategoryInput | ingredientUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ingredientUpdateManyWithWhereWithoutCategoryInput | ingredientUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutIngredientInput = {
    create?: XOR<categoryCreateWithoutIngredientInput, categoryUncheckedCreateWithoutIngredientInput>
    connectOrCreate?: categoryCreateOrConnectWithoutIngredientInput
    connect?: categoryWhereUniqueInput
  }

  export type memberCreateNestedOneWithoutIngredientInput = {
    create?: XOR<memberCreateWithoutIngredientInput, memberUncheckedCreateWithoutIngredientInput>
    connectOrCreate?: memberCreateOrConnectWithoutIngredientInput
    connect?: memberWhereUniqueInput
  }

  export type refrigeratorCreateNestedOneWithoutIngredientInput = {
    create?: XOR<refrigeratorCreateWithoutIngredientInput, refrigeratorUncheckedCreateWithoutIngredientInput>
    connectOrCreate?: refrigeratorCreateOrConnectWithoutIngredientInput
    connect?: refrigeratorWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type categoryUpdateOneRequiredWithoutIngredientNestedInput = {
    create?: XOR<categoryCreateWithoutIngredientInput, categoryUncheckedCreateWithoutIngredientInput>
    connectOrCreate?: categoryCreateOrConnectWithoutIngredientInput
    upsert?: categoryUpsertWithoutIngredientInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutIngredientInput, categoryUpdateWithoutIngredientInput>, categoryUncheckedUpdateWithoutIngredientInput>
  }

  export type memberUpdateOneRequiredWithoutIngredientNestedInput = {
    create?: XOR<memberCreateWithoutIngredientInput, memberUncheckedCreateWithoutIngredientInput>
    connectOrCreate?: memberCreateOrConnectWithoutIngredientInput
    upsert?: memberUpsertWithoutIngredientInput
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutIngredientInput, memberUpdateWithoutIngredientInput>, memberUncheckedUpdateWithoutIngredientInput>
  }

  export type refrigeratorUpdateOneRequiredWithoutIngredientNestedInput = {
    create?: XOR<refrigeratorCreateWithoutIngredientInput, refrigeratorUncheckedCreateWithoutIngredientInput>
    connectOrCreate?: refrigeratorCreateOrConnectWithoutIngredientInput
    upsert?: refrigeratorUpsertWithoutIngredientInput
    connect?: refrigeratorWhereUniqueInput
    update?: XOR<XOR<refrigeratorUpdateToOneWithWhereWithoutIngredientInput, refrigeratorUpdateWithoutIngredientInput>, refrigeratorUncheckedUpdateWithoutIngredientInput>
  }

  export type activation_tokenCreateNestedOneWithoutMemberInput = {
    create?: XOR<activation_tokenCreateWithoutMemberInput, activation_tokenUncheckedCreateWithoutMemberInput>
    connectOrCreate?: activation_tokenCreateOrConnectWithoutMemberInput
    connect?: activation_tokenWhereUniqueInput
  }

  export type ai_api_usageCreateNestedManyWithoutMemberInput = {
    create?: XOR<ai_api_usageCreateWithoutMemberInput, ai_api_usageUncheckedCreateWithoutMemberInput> | ai_api_usageCreateWithoutMemberInput[] | ai_api_usageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ai_api_usageCreateOrConnectWithoutMemberInput | ai_api_usageCreateOrConnectWithoutMemberInput[]
    createMany?: ai_api_usageCreateManyMemberInputEnvelope
    connect?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
  }

  export type ingredientCreateNestedManyWithoutMemberInput = {
    create?: XOR<ingredientCreateWithoutMemberInput, ingredientUncheckedCreateWithoutMemberInput> | ingredientCreateWithoutMemberInput[] | ingredientUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutMemberInput | ingredientCreateOrConnectWithoutMemberInput[]
    createMany?: ingredientCreateManyMemberInputEnvelope
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
  }

  export type refresh_tokenCreateNestedManyWithoutMemberInput = {
    create?: XOR<refresh_tokenCreateWithoutMemberInput, refresh_tokenUncheckedCreateWithoutMemberInput> | refresh_tokenCreateWithoutMemberInput[] | refresh_tokenUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutMemberInput | refresh_tokenCreateOrConnectWithoutMemberInput[]
    createMany?: refresh_tokenCreateManyMemberInputEnvelope
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
  }

  export type refrigeratorCreateNestedManyWithoutMemberInput = {
    create?: XOR<refrigeratorCreateWithoutMemberInput, refrigeratorUncheckedCreateWithoutMemberInput> | refrigeratorCreateWithoutMemberInput[] | refrigeratorUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: refrigeratorCreateOrConnectWithoutMemberInput | refrigeratorCreateOrConnectWithoutMemberInput[]
    createMany?: refrigeratorCreateManyMemberInputEnvelope
    connect?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
  }

  export type activation_tokenUncheckedCreateNestedOneWithoutMemberInput = {
    create?: XOR<activation_tokenCreateWithoutMemberInput, activation_tokenUncheckedCreateWithoutMemberInput>
    connectOrCreate?: activation_tokenCreateOrConnectWithoutMemberInput
    connect?: activation_tokenWhereUniqueInput
  }

  export type ai_api_usageUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<ai_api_usageCreateWithoutMemberInput, ai_api_usageUncheckedCreateWithoutMemberInput> | ai_api_usageCreateWithoutMemberInput[] | ai_api_usageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ai_api_usageCreateOrConnectWithoutMemberInput | ai_api_usageCreateOrConnectWithoutMemberInput[]
    createMany?: ai_api_usageCreateManyMemberInputEnvelope
    connect?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
  }

  export type ingredientUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<ingredientCreateWithoutMemberInput, ingredientUncheckedCreateWithoutMemberInput> | ingredientCreateWithoutMemberInput[] | ingredientUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutMemberInput | ingredientCreateOrConnectWithoutMemberInput[]
    createMany?: ingredientCreateManyMemberInputEnvelope
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
  }

  export type refresh_tokenUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<refresh_tokenCreateWithoutMemberInput, refresh_tokenUncheckedCreateWithoutMemberInput> | refresh_tokenCreateWithoutMemberInput[] | refresh_tokenUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutMemberInput | refresh_tokenCreateOrConnectWithoutMemberInput[]
    createMany?: refresh_tokenCreateManyMemberInputEnvelope
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
  }

  export type refrigeratorUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<refrigeratorCreateWithoutMemberInput, refrigeratorUncheckedCreateWithoutMemberInput> | refrigeratorCreateWithoutMemberInput[] | refrigeratorUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: refrigeratorCreateOrConnectWithoutMemberInput | refrigeratorCreateOrConnectWithoutMemberInput[]
    createMany?: refrigeratorCreateManyMemberInputEnvelope
    connect?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnummember_join_typeFieldUpdateOperationsInput = {
    set?: $Enums.member_join_type | null
  }

  export type activation_tokenUpdateOneWithoutMemberNestedInput = {
    create?: XOR<activation_tokenCreateWithoutMemberInput, activation_tokenUncheckedCreateWithoutMemberInput>
    connectOrCreate?: activation_tokenCreateOrConnectWithoutMemberInput
    upsert?: activation_tokenUpsertWithoutMemberInput
    disconnect?: activation_tokenWhereInput | boolean
    delete?: activation_tokenWhereInput | boolean
    connect?: activation_tokenWhereUniqueInput
    update?: XOR<XOR<activation_tokenUpdateToOneWithWhereWithoutMemberInput, activation_tokenUpdateWithoutMemberInput>, activation_tokenUncheckedUpdateWithoutMemberInput>
  }

  export type ai_api_usageUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ai_api_usageCreateWithoutMemberInput, ai_api_usageUncheckedCreateWithoutMemberInput> | ai_api_usageCreateWithoutMemberInput[] | ai_api_usageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ai_api_usageCreateOrConnectWithoutMemberInput | ai_api_usageCreateOrConnectWithoutMemberInput[]
    upsert?: ai_api_usageUpsertWithWhereUniqueWithoutMemberInput | ai_api_usageUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ai_api_usageCreateManyMemberInputEnvelope
    set?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
    disconnect?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
    delete?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
    connect?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
    update?: ai_api_usageUpdateWithWhereUniqueWithoutMemberInput | ai_api_usageUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ai_api_usageUpdateManyWithWhereWithoutMemberInput | ai_api_usageUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ai_api_usageScalarWhereInput | ai_api_usageScalarWhereInput[]
  }

  export type ingredientUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ingredientCreateWithoutMemberInput, ingredientUncheckedCreateWithoutMemberInput> | ingredientCreateWithoutMemberInput[] | ingredientUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutMemberInput | ingredientCreateOrConnectWithoutMemberInput[]
    upsert?: ingredientUpsertWithWhereUniqueWithoutMemberInput | ingredientUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ingredientCreateManyMemberInputEnvelope
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    update?: ingredientUpdateWithWhereUniqueWithoutMemberInput | ingredientUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ingredientUpdateManyWithWhereWithoutMemberInput | ingredientUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
  }

  export type refresh_tokenUpdateManyWithoutMemberNestedInput = {
    create?: XOR<refresh_tokenCreateWithoutMemberInput, refresh_tokenUncheckedCreateWithoutMemberInput> | refresh_tokenCreateWithoutMemberInput[] | refresh_tokenUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutMemberInput | refresh_tokenCreateOrConnectWithoutMemberInput[]
    upsert?: refresh_tokenUpsertWithWhereUniqueWithoutMemberInput | refresh_tokenUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: refresh_tokenCreateManyMemberInputEnvelope
    set?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    disconnect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    delete?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    update?: refresh_tokenUpdateWithWhereUniqueWithoutMemberInput | refresh_tokenUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: refresh_tokenUpdateManyWithWhereWithoutMemberInput | refresh_tokenUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
  }

  export type refrigeratorUpdateManyWithoutMemberNestedInput = {
    create?: XOR<refrigeratorCreateWithoutMemberInput, refrigeratorUncheckedCreateWithoutMemberInput> | refrigeratorCreateWithoutMemberInput[] | refrigeratorUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: refrigeratorCreateOrConnectWithoutMemberInput | refrigeratorCreateOrConnectWithoutMemberInput[]
    upsert?: refrigeratorUpsertWithWhereUniqueWithoutMemberInput | refrigeratorUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: refrigeratorCreateManyMemberInputEnvelope
    set?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
    disconnect?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
    delete?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
    connect?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
    update?: refrigeratorUpdateWithWhereUniqueWithoutMemberInput | refrigeratorUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: refrigeratorUpdateManyWithWhereWithoutMemberInput | refrigeratorUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: refrigeratorScalarWhereInput | refrigeratorScalarWhereInput[]
  }

  export type activation_tokenUncheckedUpdateOneWithoutMemberNestedInput = {
    create?: XOR<activation_tokenCreateWithoutMemberInput, activation_tokenUncheckedCreateWithoutMemberInput>
    connectOrCreate?: activation_tokenCreateOrConnectWithoutMemberInput
    upsert?: activation_tokenUpsertWithoutMemberInput
    disconnect?: activation_tokenWhereInput | boolean
    delete?: activation_tokenWhereInput | boolean
    connect?: activation_tokenWhereUniqueInput
    update?: XOR<XOR<activation_tokenUpdateToOneWithWhereWithoutMemberInput, activation_tokenUpdateWithoutMemberInput>, activation_tokenUncheckedUpdateWithoutMemberInput>
  }

  export type ai_api_usageUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ai_api_usageCreateWithoutMemberInput, ai_api_usageUncheckedCreateWithoutMemberInput> | ai_api_usageCreateWithoutMemberInput[] | ai_api_usageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ai_api_usageCreateOrConnectWithoutMemberInput | ai_api_usageCreateOrConnectWithoutMemberInput[]
    upsert?: ai_api_usageUpsertWithWhereUniqueWithoutMemberInput | ai_api_usageUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ai_api_usageCreateManyMemberInputEnvelope
    set?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
    disconnect?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
    delete?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
    connect?: ai_api_usageWhereUniqueInput | ai_api_usageWhereUniqueInput[]
    update?: ai_api_usageUpdateWithWhereUniqueWithoutMemberInput | ai_api_usageUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ai_api_usageUpdateManyWithWhereWithoutMemberInput | ai_api_usageUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ai_api_usageScalarWhereInput | ai_api_usageScalarWhereInput[]
  }

  export type ingredientUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ingredientCreateWithoutMemberInput, ingredientUncheckedCreateWithoutMemberInput> | ingredientCreateWithoutMemberInput[] | ingredientUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutMemberInput | ingredientCreateOrConnectWithoutMemberInput[]
    upsert?: ingredientUpsertWithWhereUniqueWithoutMemberInput | ingredientUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ingredientCreateManyMemberInputEnvelope
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    update?: ingredientUpdateWithWhereUniqueWithoutMemberInput | ingredientUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ingredientUpdateManyWithWhereWithoutMemberInput | ingredientUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
  }

  export type refresh_tokenUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<refresh_tokenCreateWithoutMemberInput, refresh_tokenUncheckedCreateWithoutMemberInput> | refresh_tokenCreateWithoutMemberInput[] | refresh_tokenUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutMemberInput | refresh_tokenCreateOrConnectWithoutMemberInput[]
    upsert?: refresh_tokenUpsertWithWhereUniqueWithoutMemberInput | refresh_tokenUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: refresh_tokenCreateManyMemberInputEnvelope
    set?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    disconnect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    delete?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    update?: refresh_tokenUpdateWithWhereUniqueWithoutMemberInput | refresh_tokenUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: refresh_tokenUpdateManyWithWhereWithoutMemberInput | refresh_tokenUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
  }

  export type refrigeratorUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<refrigeratorCreateWithoutMemberInput, refrigeratorUncheckedCreateWithoutMemberInput> | refrigeratorCreateWithoutMemberInput[] | refrigeratorUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: refrigeratorCreateOrConnectWithoutMemberInput | refrigeratorCreateOrConnectWithoutMemberInput[]
    upsert?: refrigeratorUpsertWithWhereUniqueWithoutMemberInput | refrigeratorUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: refrigeratorCreateManyMemberInputEnvelope
    set?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
    disconnect?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
    delete?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
    connect?: refrigeratorWhereUniqueInput | refrigeratorWhereUniqueInput[]
    update?: refrigeratorUpdateWithWhereUniqueWithoutMemberInput | refrigeratorUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: refrigeratorUpdateManyWithWhereWithoutMemberInput | refrigeratorUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: refrigeratorScalarWhereInput | refrigeratorScalarWhereInput[]
  }

  export type memberCreateNestedOneWithoutRefresh_tokenInput = {
    create?: XOR<memberCreateWithoutRefresh_tokenInput, memberUncheckedCreateWithoutRefresh_tokenInput>
    connectOrCreate?: memberCreateOrConnectWithoutRefresh_tokenInput
    connect?: memberWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type memberUpdateOneWithoutRefresh_tokenNestedInput = {
    create?: XOR<memberCreateWithoutRefresh_tokenInput, memberUncheckedCreateWithoutRefresh_tokenInput>
    connectOrCreate?: memberCreateOrConnectWithoutRefresh_tokenInput
    upsert?: memberUpsertWithoutRefresh_tokenInput
    disconnect?: memberWhereInput | boolean
    delete?: memberWhereInput | boolean
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutRefresh_tokenInput, memberUpdateWithoutRefresh_tokenInput>, memberUncheckedUpdateWithoutRefresh_tokenInput>
  }

  export type ingredientCreateNestedManyWithoutRefrigeratorInput = {
    create?: XOR<ingredientCreateWithoutRefrigeratorInput, ingredientUncheckedCreateWithoutRefrigeratorInput> | ingredientCreateWithoutRefrigeratorInput[] | ingredientUncheckedCreateWithoutRefrigeratorInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutRefrigeratorInput | ingredientCreateOrConnectWithoutRefrigeratorInput[]
    createMany?: ingredientCreateManyRefrigeratorInputEnvelope
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
  }

  export type memberCreateNestedOneWithoutRefrigeratorInput = {
    create?: XOR<memberCreateWithoutRefrigeratorInput, memberUncheckedCreateWithoutRefrigeratorInput>
    connectOrCreate?: memberCreateOrConnectWithoutRefrigeratorInput
    connect?: memberWhereUniqueInput
  }

  export type ingredientUncheckedCreateNestedManyWithoutRefrigeratorInput = {
    create?: XOR<ingredientCreateWithoutRefrigeratorInput, ingredientUncheckedCreateWithoutRefrigeratorInput> | ingredientCreateWithoutRefrigeratorInput[] | ingredientUncheckedCreateWithoutRefrigeratorInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutRefrigeratorInput | ingredientCreateOrConnectWithoutRefrigeratorInput[]
    createMany?: ingredientCreateManyRefrigeratorInputEnvelope
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
  }

  export type ingredientUpdateManyWithoutRefrigeratorNestedInput = {
    create?: XOR<ingredientCreateWithoutRefrigeratorInput, ingredientUncheckedCreateWithoutRefrigeratorInput> | ingredientCreateWithoutRefrigeratorInput[] | ingredientUncheckedCreateWithoutRefrigeratorInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutRefrigeratorInput | ingredientCreateOrConnectWithoutRefrigeratorInput[]
    upsert?: ingredientUpsertWithWhereUniqueWithoutRefrigeratorInput | ingredientUpsertWithWhereUniqueWithoutRefrigeratorInput[]
    createMany?: ingredientCreateManyRefrigeratorInputEnvelope
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    update?: ingredientUpdateWithWhereUniqueWithoutRefrigeratorInput | ingredientUpdateWithWhereUniqueWithoutRefrigeratorInput[]
    updateMany?: ingredientUpdateManyWithWhereWithoutRefrigeratorInput | ingredientUpdateManyWithWhereWithoutRefrigeratorInput[]
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
  }

  export type memberUpdateOneRequiredWithoutRefrigeratorNestedInput = {
    create?: XOR<memberCreateWithoutRefrigeratorInput, memberUncheckedCreateWithoutRefrigeratorInput>
    connectOrCreate?: memberCreateOrConnectWithoutRefrigeratorInput
    upsert?: memberUpsertWithoutRefrigeratorInput
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutRefrigeratorInput, memberUpdateWithoutRefrigeratorInput>, memberUncheckedUpdateWithoutRefrigeratorInput>
  }

  export type ingredientUncheckedUpdateManyWithoutRefrigeratorNestedInput = {
    create?: XOR<ingredientCreateWithoutRefrigeratorInput, ingredientUncheckedCreateWithoutRefrigeratorInput> | ingredientCreateWithoutRefrigeratorInput[] | ingredientUncheckedCreateWithoutRefrigeratorInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutRefrigeratorInput | ingredientCreateOrConnectWithoutRefrigeratorInput[]
    upsert?: ingredientUpsertWithWhereUniqueWithoutRefrigeratorInput | ingredientUpsertWithWhereUniqueWithoutRefrigeratorInput[]
    createMany?: ingredientCreateManyRefrigeratorInputEnvelope
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    update?: ingredientUpdateWithWhereUniqueWithoutRefrigeratorInput | ingredientUpdateWithWhereUniqueWithoutRefrigeratorInput[]
    updateMany?: ingredientUpdateManyWithWhereWithoutRefrigeratorInput | ingredientUpdateManyWithWhereWithoutRefrigeratorInput[]
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnummember_join_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.member_join_type | Enummember_join_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_join_type[] | null
    notIn?: $Enums.member_join_type[] | null
    not?: NestedEnummember_join_typeNullableFilter<$PrismaModel> | $Enums.member_join_type | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnummember_join_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_join_type | Enummember_join_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_join_type[] | null
    notIn?: $Enums.member_join_type[] | null
    not?: NestedEnummember_join_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.member_join_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummember_join_typeNullableFilter<$PrismaModel>
    _max?: NestedEnummember_join_typeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type memberCreateWithoutActivation_tokenInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    ai_api_usage?: ai_api_usageCreateNestedManyWithoutMemberInput
    ingredient?: ingredientCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutActivation_tokenInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    ai_api_usage?: ai_api_usageUncheckedCreateNestedManyWithoutMemberInput
    ingredient?: ingredientUncheckedCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutActivation_tokenInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutActivation_tokenInput, memberUncheckedCreateWithoutActivation_tokenInput>
  }

  export type memberUpsertWithoutActivation_tokenInput = {
    update: XOR<memberUpdateWithoutActivation_tokenInput, memberUncheckedUpdateWithoutActivation_tokenInput>
    create: XOR<memberCreateWithoutActivation_tokenInput, memberUncheckedCreateWithoutActivation_tokenInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutActivation_tokenInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutActivation_tokenInput, memberUncheckedUpdateWithoutActivation_tokenInput>
  }

  export type memberUpdateWithoutActivation_tokenInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    ai_api_usage?: ai_api_usageUpdateManyWithoutMemberNestedInput
    ingredient?: ingredientUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutActivation_tokenInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    ai_api_usage?: ai_api_usageUncheckedUpdateManyWithoutMemberNestedInput
    ingredient?: ingredientUncheckedUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type memberCreateWithoutAi_api_usageInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenCreateNestedOneWithoutMemberInput
    ingredient?: ingredientCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutAi_api_usageInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedCreateNestedOneWithoutMemberInput
    ingredient?: ingredientUncheckedCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutAi_api_usageInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutAi_api_usageInput, memberUncheckedCreateWithoutAi_api_usageInput>
  }

  export type memberUpsertWithoutAi_api_usageInput = {
    update: XOR<memberUpdateWithoutAi_api_usageInput, memberUncheckedUpdateWithoutAi_api_usageInput>
    create: XOR<memberCreateWithoutAi_api_usageInput, memberUncheckedCreateWithoutAi_api_usageInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutAi_api_usageInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutAi_api_usageInput, memberUncheckedUpdateWithoutAi_api_usageInput>
  }

  export type memberUpdateWithoutAi_api_usageInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUpdateOneWithoutMemberNestedInput
    ingredient?: ingredientUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutAi_api_usageInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedUpdateOneWithoutMemberNestedInput
    ingredient?: ingredientUncheckedUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type ingredientCreateWithoutCategoryInput = {
    expiration_date: Date | string
    quantity: number
    ingredient_id?: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
    member: memberCreateNestedOneWithoutIngredientInput
    refrigerator: refrigeratorCreateNestedOneWithoutIngredientInput
  }

  export type ingredientUncheckedCreateWithoutCategoryInput = {
    expiration_date: Date | string
    quantity: number
    ingredient_id?: bigint | number
    member_id: bigint | number
    refrigerator_id: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
  }

  export type ingredientCreateOrConnectWithoutCategoryInput = {
    where: ingredientWhereUniqueInput
    create: XOR<ingredientCreateWithoutCategoryInput, ingredientUncheckedCreateWithoutCategoryInput>
  }

  export type ingredientCreateManyCategoryInputEnvelope = {
    data: ingredientCreateManyCategoryInput | ingredientCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ingredientUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ingredientWhereUniqueInput
    update: XOR<ingredientUpdateWithoutCategoryInput, ingredientUncheckedUpdateWithoutCategoryInput>
    create: XOR<ingredientCreateWithoutCategoryInput, ingredientUncheckedCreateWithoutCategoryInput>
  }

  export type ingredientUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ingredientWhereUniqueInput
    data: XOR<ingredientUpdateWithoutCategoryInput, ingredientUncheckedUpdateWithoutCategoryInput>
  }

  export type ingredientUpdateManyWithWhereWithoutCategoryInput = {
    where: ingredientScalarWhereInput
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ingredientScalarWhereInput = {
    AND?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
    OR?: ingredientScalarWhereInput[]
    NOT?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
    expiration_date?: DateTimeFilter<"ingredient"> | Date | string
    quantity?: IntFilter<"ingredient"> | number
    category_id?: BigIntFilter<"ingredient"> | bigint | number
    ingredient_id?: BigIntFilter<"ingredient"> | bigint | number
    member_id?: BigIntFilter<"ingredient"> | bigint | number
    refrigerator_id?: BigIntFilter<"ingredient"> | bigint | number
    registration_date?: DateTimeNullableFilter<"ingredient"> | Date | string | null
    ingredient_name?: StringFilter<"ingredient"> | string
    photo_url?: StringNullableFilter<"ingredient"> | string | null
  }

  export type categoryCreateWithoutIngredientInput = {
    category_id?: bigint | number
    category_name: string
  }

  export type categoryUncheckedCreateWithoutIngredientInput = {
    category_id?: bigint | number
    category_name: string
  }

  export type categoryCreateOrConnectWithoutIngredientInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutIngredientInput, categoryUncheckedCreateWithoutIngredientInput>
  }

  export type memberCreateWithoutIngredientInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenCreateNestedOneWithoutMemberInput
    ai_api_usage?: ai_api_usageCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutIngredientInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedCreateNestedOneWithoutMemberInput
    ai_api_usage?: ai_api_usageUncheckedCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutIngredientInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutIngredientInput, memberUncheckedCreateWithoutIngredientInput>
  }

  export type refrigeratorCreateWithoutIngredientInput = {
    created_at?: Date | string | null
    refrigerator_id?: bigint | number
    refrigerator_name: string
    description?: string | null
    photo_url?: string | null
    member: memberCreateNestedOneWithoutRefrigeratorInput
  }

  export type refrigeratorUncheckedCreateWithoutIngredientInput = {
    created_at?: Date | string | null
    member_id: bigint | number
    refrigerator_id?: bigint | number
    refrigerator_name: string
    description?: string | null
    photo_url?: string | null
  }

  export type refrigeratorCreateOrConnectWithoutIngredientInput = {
    where: refrigeratorWhereUniqueInput
    create: XOR<refrigeratorCreateWithoutIngredientInput, refrigeratorUncheckedCreateWithoutIngredientInput>
  }

  export type categoryUpsertWithoutIngredientInput = {
    update: XOR<categoryUpdateWithoutIngredientInput, categoryUncheckedUpdateWithoutIngredientInput>
    create: XOR<categoryCreateWithoutIngredientInput, categoryUncheckedCreateWithoutIngredientInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutIngredientInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutIngredientInput, categoryUncheckedUpdateWithoutIngredientInput>
  }

  export type categoryUpdateWithoutIngredientInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutIngredientInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type memberUpsertWithoutIngredientInput = {
    update: XOR<memberUpdateWithoutIngredientInput, memberUncheckedUpdateWithoutIngredientInput>
    create: XOR<memberCreateWithoutIngredientInput, memberUncheckedCreateWithoutIngredientInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutIngredientInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutIngredientInput, memberUncheckedUpdateWithoutIngredientInput>
  }

  export type memberUpdateWithoutIngredientInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUpdateOneWithoutMemberNestedInput
    ai_api_usage?: ai_api_usageUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutIngredientInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedUpdateOneWithoutMemberNestedInput
    ai_api_usage?: ai_api_usageUncheckedUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type refrigeratorUpsertWithoutIngredientInput = {
    update: XOR<refrigeratorUpdateWithoutIngredientInput, refrigeratorUncheckedUpdateWithoutIngredientInput>
    create: XOR<refrigeratorCreateWithoutIngredientInput, refrigeratorUncheckedCreateWithoutIngredientInput>
    where?: refrigeratorWhereInput
  }

  export type refrigeratorUpdateToOneWithWhereWithoutIngredientInput = {
    where?: refrigeratorWhereInput
    data: XOR<refrigeratorUpdateWithoutIngredientInput, refrigeratorUncheckedUpdateWithoutIngredientInput>
  }

  export type refrigeratorUpdateWithoutIngredientInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    member?: memberUpdateOneRequiredWithoutRefrigeratorNestedInput
  }

  export type refrigeratorUncheckedUpdateWithoutIngredientInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type activation_tokenCreateWithoutMemberInput = {
    created_at: Date | string
    expired_at: Date | string
    id?: bigint | number
    token: string
  }

  export type activation_tokenUncheckedCreateWithoutMemberInput = {
    created_at: Date | string
    expired_at: Date | string
    id?: bigint | number
    token: string
  }

  export type activation_tokenCreateOrConnectWithoutMemberInput = {
    where: activation_tokenWhereUniqueInput
    create: XOR<activation_tokenCreateWithoutMemberInput, activation_tokenUncheckedCreateWithoutMemberInput>
  }

  export type ai_api_usageCreateWithoutMemberInput = {
    call_count?: number | null
    usage_date?: Date | string | null
    created_at?: Date | string | null
    id?: bigint | number
    updated_at?: Date | string | null
  }

  export type ai_api_usageUncheckedCreateWithoutMemberInput = {
    call_count?: number | null
    usage_date?: Date | string | null
    created_at?: Date | string | null
    id?: bigint | number
    updated_at?: Date | string | null
  }

  export type ai_api_usageCreateOrConnectWithoutMemberInput = {
    where: ai_api_usageWhereUniqueInput
    create: XOR<ai_api_usageCreateWithoutMemberInput, ai_api_usageUncheckedCreateWithoutMemberInput>
  }

  export type ai_api_usageCreateManyMemberInputEnvelope = {
    data: ai_api_usageCreateManyMemberInput | ai_api_usageCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type ingredientCreateWithoutMemberInput = {
    expiration_date: Date | string
    quantity: number
    ingredient_id?: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
    category: categoryCreateNestedOneWithoutIngredientInput
    refrigerator: refrigeratorCreateNestedOneWithoutIngredientInput
  }

  export type ingredientUncheckedCreateWithoutMemberInput = {
    expiration_date: Date | string
    quantity: number
    category_id: bigint | number
    ingredient_id?: bigint | number
    refrigerator_id: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
  }

  export type ingredientCreateOrConnectWithoutMemberInput = {
    where: ingredientWhereUniqueInput
    create: XOR<ingredientCreateWithoutMemberInput, ingredientUncheckedCreateWithoutMemberInput>
  }

  export type ingredientCreateManyMemberInputEnvelope = {
    data: ingredientCreateManyMemberInput | ingredientCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type refresh_tokenCreateWithoutMemberInput = {
    auto_login?: boolean | null
    created_at?: Date | string | null
    expires_at?: Date | string | null
    id?: bigint | number
    issued_at?: Date | string | null
    updated_at?: Date | string | null
    device_info?: string | null
    value?: string | null
  }

  export type refresh_tokenUncheckedCreateWithoutMemberInput = {
    auto_login?: boolean | null
    created_at?: Date | string | null
    expires_at?: Date | string | null
    id?: bigint | number
    issued_at?: Date | string | null
    updated_at?: Date | string | null
    device_info?: string | null
    value?: string | null
  }

  export type refresh_tokenCreateOrConnectWithoutMemberInput = {
    where: refresh_tokenWhereUniqueInput
    create: XOR<refresh_tokenCreateWithoutMemberInput, refresh_tokenUncheckedCreateWithoutMemberInput>
  }

  export type refresh_tokenCreateManyMemberInputEnvelope = {
    data: refresh_tokenCreateManyMemberInput | refresh_tokenCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type refrigeratorCreateWithoutMemberInput = {
    created_at?: Date | string | null
    refrigerator_id?: bigint | number
    refrigerator_name: string
    description?: string | null
    photo_url?: string | null
    ingredient?: ingredientCreateNestedManyWithoutRefrigeratorInput
  }

  export type refrigeratorUncheckedCreateWithoutMemberInput = {
    created_at?: Date | string | null
    refrigerator_id?: bigint | number
    refrigerator_name: string
    description?: string | null
    photo_url?: string | null
    ingredient?: ingredientUncheckedCreateNestedManyWithoutRefrigeratorInput
  }

  export type refrigeratorCreateOrConnectWithoutMemberInput = {
    where: refrigeratorWhereUniqueInput
    create: XOR<refrigeratorCreateWithoutMemberInput, refrigeratorUncheckedCreateWithoutMemberInput>
  }

  export type refrigeratorCreateManyMemberInputEnvelope = {
    data: refrigeratorCreateManyMemberInput | refrigeratorCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type activation_tokenUpsertWithoutMemberInput = {
    update: XOR<activation_tokenUpdateWithoutMemberInput, activation_tokenUncheckedUpdateWithoutMemberInput>
    create: XOR<activation_tokenCreateWithoutMemberInput, activation_tokenUncheckedCreateWithoutMemberInput>
    where?: activation_tokenWhereInput
  }

  export type activation_tokenUpdateToOneWithWhereWithoutMemberInput = {
    where?: activation_tokenWhereInput
    data: XOR<activation_tokenUpdateWithoutMemberInput, activation_tokenUncheckedUpdateWithoutMemberInput>
  }

  export type activation_tokenUpdateWithoutMemberInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type activation_tokenUncheckedUpdateWithoutMemberInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ai_api_usageUpsertWithWhereUniqueWithoutMemberInput = {
    where: ai_api_usageWhereUniqueInput
    update: XOR<ai_api_usageUpdateWithoutMemberInput, ai_api_usageUncheckedUpdateWithoutMemberInput>
    create: XOR<ai_api_usageCreateWithoutMemberInput, ai_api_usageUncheckedCreateWithoutMemberInput>
  }

  export type ai_api_usageUpdateWithWhereUniqueWithoutMemberInput = {
    where: ai_api_usageWhereUniqueInput
    data: XOR<ai_api_usageUpdateWithoutMemberInput, ai_api_usageUncheckedUpdateWithoutMemberInput>
  }

  export type ai_api_usageUpdateManyWithWhereWithoutMemberInput = {
    where: ai_api_usageScalarWhereInput
    data: XOR<ai_api_usageUpdateManyMutationInput, ai_api_usageUncheckedUpdateManyWithoutMemberInput>
  }

  export type ai_api_usageScalarWhereInput = {
    AND?: ai_api_usageScalarWhereInput | ai_api_usageScalarWhereInput[]
    OR?: ai_api_usageScalarWhereInput[]
    NOT?: ai_api_usageScalarWhereInput | ai_api_usageScalarWhereInput[]
    call_count?: IntNullableFilter<"ai_api_usage"> | number | null
    usage_date?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
    id?: BigIntFilter<"ai_api_usage"> | bigint | number
    member_id?: BigIntNullableFilter<"ai_api_usage"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"ai_api_usage"> | Date | string | null
  }

  export type ingredientUpsertWithWhereUniqueWithoutMemberInput = {
    where: ingredientWhereUniqueInput
    update: XOR<ingredientUpdateWithoutMemberInput, ingredientUncheckedUpdateWithoutMemberInput>
    create: XOR<ingredientCreateWithoutMemberInput, ingredientUncheckedCreateWithoutMemberInput>
  }

  export type ingredientUpdateWithWhereUniqueWithoutMemberInput = {
    where: ingredientWhereUniqueInput
    data: XOR<ingredientUpdateWithoutMemberInput, ingredientUncheckedUpdateWithoutMemberInput>
  }

  export type ingredientUpdateManyWithWhereWithoutMemberInput = {
    where: ingredientScalarWhereInput
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyWithoutMemberInput>
  }

  export type refresh_tokenUpsertWithWhereUniqueWithoutMemberInput = {
    where: refresh_tokenWhereUniqueInput
    update: XOR<refresh_tokenUpdateWithoutMemberInput, refresh_tokenUncheckedUpdateWithoutMemberInput>
    create: XOR<refresh_tokenCreateWithoutMemberInput, refresh_tokenUncheckedCreateWithoutMemberInput>
  }

  export type refresh_tokenUpdateWithWhereUniqueWithoutMemberInput = {
    where: refresh_tokenWhereUniqueInput
    data: XOR<refresh_tokenUpdateWithoutMemberInput, refresh_tokenUncheckedUpdateWithoutMemberInput>
  }

  export type refresh_tokenUpdateManyWithWhereWithoutMemberInput = {
    where: refresh_tokenScalarWhereInput
    data: XOR<refresh_tokenUpdateManyMutationInput, refresh_tokenUncheckedUpdateManyWithoutMemberInput>
  }

  export type refresh_tokenScalarWhereInput = {
    AND?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
    OR?: refresh_tokenScalarWhereInput[]
    NOT?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
    auto_login?: BoolNullableFilter<"refresh_token"> | boolean | null
    created_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    id?: BigIntFilter<"refresh_token"> | bigint | number
    issued_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    member_id?: BigIntNullableFilter<"refresh_token"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    device_info?: StringNullableFilter<"refresh_token"> | string | null
    value?: StringNullableFilter<"refresh_token"> | string | null
  }

  export type refrigeratorUpsertWithWhereUniqueWithoutMemberInput = {
    where: refrigeratorWhereUniqueInput
    update: XOR<refrigeratorUpdateWithoutMemberInput, refrigeratorUncheckedUpdateWithoutMemberInput>
    create: XOR<refrigeratorCreateWithoutMemberInput, refrigeratorUncheckedCreateWithoutMemberInput>
  }

  export type refrigeratorUpdateWithWhereUniqueWithoutMemberInput = {
    where: refrigeratorWhereUniqueInput
    data: XOR<refrigeratorUpdateWithoutMemberInput, refrigeratorUncheckedUpdateWithoutMemberInput>
  }

  export type refrigeratorUpdateManyWithWhereWithoutMemberInput = {
    where: refrigeratorScalarWhereInput
    data: XOR<refrigeratorUpdateManyMutationInput, refrigeratorUncheckedUpdateManyWithoutMemberInput>
  }

  export type refrigeratorScalarWhereInput = {
    AND?: refrigeratorScalarWhereInput | refrigeratorScalarWhereInput[]
    OR?: refrigeratorScalarWhereInput[]
    NOT?: refrigeratorScalarWhereInput | refrigeratorScalarWhereInput[]
    created_at?: DateTimeNullableFilter<"refrigerator"> | Date | string | null
    member_id?: BigIntFilter<"refrigerator"> | bigint | number
    refrigerator_id?: BigIntFilter<"refrigerator"> | bigint | number
    refrigerator_name?: StringFilter<"refrigerator"> | string
    description?: StringNullableFilter<"refrigerator"> | string | null
    photo_url?: StringNullableFilter<"refrigerator"> | string | null
  }

  export type memberCreateWithoutRefresh_tokenInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenCreateNestedOneWithoutMemberInput
    ai_api_usage?: ai_api_usageCreateNestedManyWithoutMemberInput
    ingredient?: ingredientCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutRefresh_tokenInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedCreateNestedOneWithoutMemberInput
    ai_api_usage?: ai_api_usageUncheckedCreateNestedManyWithoutMemberInput
    ingredient?: ingredientUncheckedCreateNestedManyWithoutMemberInput
    refrigerator?: refrigeratorUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutRefresh_tokenInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutRefresh_tokenInput, memberUncheckedCreateWithoutRefresh_tokenInput>
  }

  export type memberUpsertWithoutRefresh_tokenInput = {
    update: XOR<memberUpdateWithoutRefresh_tokenInput, memberUncheckedUpdateWithoutRefresh_tokenInput>
    create: XOR<memberCreateWithoutRefresh_tokenInput, memberUncheckedCreateWithoutRefresh_tokenInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutRefresh_tokenInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutRefresh_tokenInput, memberUncheckedUpdateWithoutRefresh_tokenInput>
  }

  export type memberUpdateWithoutRefresh_tokenInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUpdateOneWithoutMemberNestedInput
    ai_api_usage?: ai_api_usageUpdateManyWithoutMemberNestedInput
    ingredient?: ingredientUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutRefresh_tokenInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedUpdateOneWithoutMemberNestedInput
    ai_api_usage?: ai_api_usageUncheckedUpdateManyWithoutMemberNestedInput
    ingredient?: ingredientUncheckedUpdateManyWithoutMemberNestedInput
    refrigerator?: refrigeratorUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type ingredientCreateWithoutRefrigeratorInput = {
    expiration_date: Date | string
    quantity: number
    ingredient_id?: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
    category: categoryCreateNestedOneWithoutIngredientInput
    member: memberCreateNestedOneWithoutIngredientInput
  }

  export type ingredientUncheckedCreateWithoutRefrigeratorInput = {
    expiration_date: Date | string
    quantity: number
    category_id: bigint | number
    ingredient_id?: bigint | number
    member_id: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
  }

  export type ingredientCreateOrConnectWithoutRefrigeratorInput = {
    where: ingredientWhereUniqueInput
    create: XOR<ingredientCreateWithoutRefrigeratorInput, ingredientUncheckedCreateWithoutRefrigeratorInput>
  }

  export type ingredientCreateManyRefrigeratorInputEnvelope = {
    data: ingredientCreateManyRefrigeratorInput | ingredientCreateManyRefrigeratorInput[]
    skipDuplicates?: boolean
  }

  export type memberCreateWithoutRefrigeratorInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenCreateNestedOneWithoutMemberInput
    ai_api_usage?: ai_api_usageCreateNestedManyWithoutMemberInput
    ingredient?: ingredientCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutRefrigeratorInput = {
    activated: boolean
    created_at?: Date | string | null
    member_id?: bigint | number
    updated_at?: Date | string | null
    email: string
    nickname?: string | null
    password?: string | null
    fcm_token?: string | null
    role?: string | null
    join_type?: $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedCreateNestedOneWithoutMemberInput
    ai_api_usage?: ai_api_usageUncheckedCreateNestedManyWithoutMemberInput
    ingredient?: ingredientUncheckedCreateNestedManyWithoutMemberInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutRefrigeratorInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutRefrigeratorInput, memberUncheckedCreateWithoutRefrigeratorInput>
  }

  export type ingredientUpsertWithWhereUniqueWithoutRefrigeratorInput = {
    where: ingredientWhereUniqueInput
    update: XOR<ingredientUpdateWithoutRefrigeratorInput, ingredientUncheckedUpdateWithoutRefrigeratorInput>
    create: XOR<ingredientCreateWithoutRefrigeratorInput, ingredientUncheckedCreateWithoutRefrigeratorInput>
  }

  export type ingredientUpdateWithWhereUniqueWithoutRefrigeratorInput = {
    where: ingredientWhereUniqueInput
    data: XOR<ingredientUpdateWithoutRefrigeratorInput, ingredientUncheckedUpdateWithoutRefrigeratorInput>
  }

  export type ingredientUpdateManyWithWhereWithoutRefrigeratorInput = {
    where: ingredientScalarWhereInput
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyWithoutRefrigeratorInput>
  }

  export type memberUpsertWithoutRefrigeratorInput = {
    update: XOR<memberUpdateWithoutRefrigeratorInput, memberUncheckedUpdateWithoutRefrigeratorInput>
    create: XOR<memberCreateWithoutRefrigeratorInput, memberUncheckedCreateWithoutRefrigeratorInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutRefrigeratorInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutRefrigeratorInput, memberUncheckedUpdateWithoutRefrigeratorInput>
  }

  export type memberUpdateWithoutRefrigeratorInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUpdateOneWithoutMemberNestedInput
    ai_api_usage?: ai_api_usageUpdateManyWithoutMemberNestedInput
    ingredient?: ingredientUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutRefrigeratorInput = {
    activated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    join_type?: NullableEnummember_join_typeFieldUpdateOperationsInput | $Enums.member_join_type | null
    activation_token?: activation_tokenUncheckedUpdateOneWithoutMemberNestedInput
    ai_api_usage?: ai_api_usageUncheckedUpdateManyWithoutMemberNestedInput
    ingredient?: ingredientUncheckedUpdateManyWithoutMemberNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type ingredientCreateManyCategoryInput = {
    expiration_date: Date | string
    quantity: number
    ingredient_id?: bigint | number
    member_id: bigint | number
    refrigerator_id: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
  }

  export type ingredientUpdateWithoutCategoryInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    member?: memberUpdateOneRequiredWithoutIngredientNestedInput
    refrigerator?: refrigeratorUpdateOneRequiredWithoutIngredientNestedInput
  }

  export type ingredientUncheckedUpdateWithoutCategoryInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredientUncheckedUpdateManyWithoutCategoryInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ai_api_usageCreateManyMemberInput = {
    call_count?: number | null
    usage_date?: Date | string | null
    created_at?: Date | string | null
    id?: bigint | number
    updated_at?: Date | string | null
  }

  export type ingredientCreateManyMemberInput = {
    expiration_date: Date | string
    quantity: number
    category_id: bigint | number
    ingredient_id?: bigint | number
    refrigerator_id: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
  }

  export type refresh_tokenCreateManyMemberInput = {
    auto_login?: boolean | null
    created_at?: Date | string | null
    expires_at?: Date | string | null
    id?: bigint | number
    issued_at?: Date | string | null
    updated_at?: Date | string | null
    device_info?: string | null
    value?: string | null
  }

  export type refrigeratorCreateManyMemberInput = {
    created_at?: Date | string | null
    refrigerator_id?: bigint | number
    refrigerator_name: string
    description?: string | null
    photo_url?: string | null
  }

  export type ai_api_usageUpdateWithoutMemberInput = {
    call_count?: NullableIntFieldUpdateOperationsInput | number | null
    usage_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_api_usageUncheckedUpdateWithoutMemberInput = {
    call_count?: NullableIntFieldUpdateOperationsInput | number | null
    usage_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ai_api_usageUncheckedUpdateManyWithoutMemberInput = {
    call_count?: NullableIntFieldUpdateOperationsInput | number | null
    usage_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ingredientUpdateWithoutMemberInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneRequiredWithoutIngredientNestedInput
    refrigerator?: refrigeratorUpdateOneRequiredWithoutIngredientNestedInput
  }

  export type ingredientUncheckedUpdateWithoutMemberInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredientUncheckedUpdateManyWithoutMemberInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokenUpdateWithoutMemberInput = {
    auto_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokenUncheckedUpdateWithoutMemberInput = {
    auto_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokenUncheckedUpdateManyWithoutMemberInput = {
    auto_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refrigeratorUpdateWithoutMemberInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredient?: ingredientUpdateManyWithoutRefrigeratorNestedInput
  }

  export type refrigeratorUncheckedUpdateWithoutMemberInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredient?: ingredientUncheckedUpdateManyWithoutRefrigeratorNestedInput
  }

  export type refrigeratorUncheckedUpdateManyWithoutMemberInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refrigerator_id?: BigIntFieldUpdateOperationsInput | bigint | number
    refrigerator_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredientCreateManyRefrigeratorInput = {
    expiration_date: Date | string
    quantity: number
    category_id: bigint | number
    ingredient_id?: bigint | number
    member_id: bigint | number
    registration_date?: Date | string | null
    ingredient_name: string
    photo_url?: string | null
  }

  export type ingredientUpdateWithoutRefrigeratorInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneRequiredWithoutIngredientNestedInput
    member?: memberUpdateOneRequiredWithoutIngredientNestedInput
  }

  export type ingredientUncheckedUpdateWithoutRefrigeratorInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingredientUncheckedUpdateManyWithoutRefrigeratorInput = {
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ingredient_id?: BigIntFieldUpdateOperationsInput | bigint | number
    member_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredient_name?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }



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