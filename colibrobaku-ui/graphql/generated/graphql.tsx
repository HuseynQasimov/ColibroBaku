import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Basket = {
  __typename?: 'Basket';
  additions?: Maybe<Scalars['String']>;
  creationDate: Scalars['DateTime'];
  id: Scalars['ID'];
  products: Array<Product>;
  totalPrice: Scalars['Int'];
  updateDate?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct: ProductResponse;
  createOrder: Order;
  deleteProduct: Scalars['Boolean'];
  forgotPassword: UserResponse;
  login: UserResponse;
  resetPassword: UserResponse;
  shootBasket: Basket;
  signUp: UserResponse;
  updateOrder: Order;
  updateProduct: ProductResponse;
  updateUserBasket: Basket;
};

export type MutationAddProductArgs = {
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  model: Scalars['String'];
  price: Scalars['Int'];
  productCode: Scalars['String'];
  title: Scalars['String'];
};

export type MutationCreateOrderArgs = {
  additions?: InputMaybe<Scalars['String']>;
  delivered?: InputMaybe<Scalars['Boolean']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  productId: Array<Scalars['ID']>;
  status?: InputMaybe<OrderStatus>;
  userId: Scalars['ID'];
};

export type MutationDeleteProductArgs = {
  id: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type MutationShootBasketArgs = {
  additions?: InputMaybe<Scalars['String']>;
  productId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type MutationSignUpArgs = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type MutationUpdateOrderArgs = {
  id: Scalars['String'];
  status: Scalars['Float'];
};

export type MutationUpdateProductArgs = {
  description: Scalars['String'];
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  model: Scalars['String'];
  price: Scalars['Int'];
  productCode: Scalars['String'];
  title: Scalars['String'];
};

export type MutationUpdateUserBasketArgs = {
  additions?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  productId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type Order = {
  __typename?: 'Order';
  additions?: Maybe<Scalars['String']>;
  completedDate?: Maybe<Scalars['DateTime']>;
  createdDate: Scalars['DateTime'];
  deliveredDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  products: Array<Product>;
  status: Scalars['Float'];
  totalPrice: Scalars['Int'];
  user: User;
};

export enum OrderStatus {
  Completed = 'COMPLETED',
  Delivered = 'DELIVERED',
  InProgress = 'InProgress',
  Waiting = 'WAITING'
}

export type Product = {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  model: Scalars['String'];
  price: Scalars['Int'];
  productCode: Scalars['String'];
  title: Scalars['String'];
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  errorMessage?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Product>>;
};

export type Query = {
  __typename?: 'Query';
  getAllOrders: Array<Order>;
  getAllProducts?: Maybe<ProductResponse>;
  getAllUsers?: Maybe<Array<User>>;
  getProductById?: Maybe<ProductResponse>;
  getUserAndOrders: User;
  getUserBasket: Basket;
  getUserById: User;
  getUserOrders: Array<Order>;
  logout: Scalars['Boolean'];
  removeOrderById: Scalars['Boolean'];
  userId: UserResponse;
};

export type QueryGetProductByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetUserAndOrdersArgs = {
  id: Scalars['String'];
};

export type QueryGetUserBasketArgs = {
  id: Scalars['String'];
};

export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetUserOrdersArgs = {
  id: Scalars['String'];
};

export type QueryRemoveOrderByIdArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  lastname: Scalars['String'];
  orders: Array<Order>;
  phone: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errorMessage?: Maybe<Scalars['String']>;
  userData?: Maybe<User>;
};

export type AddProductMutationVariables = Exact<{
  model: Scalars['String'];
  productCode: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  imageUrl: Scalars['String'];
}>;

export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'ProductResponse', errorMessage?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: string }> | null | undefined } };

export type CreateOrderMutationVariables = Exact<{
  userId: Scalars['ID'];
  productId: Array<Scalars['ID']> | Scalars['ID'];
  additinos?: InputMaybe<Scalars['String']>;
}>;

export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, completedDate?: any | null | undefined, deliveredDate?: any | null | undefined, additions?: string | null | undefined, createdDate: any, totalPrice: number, status: number } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'UserResponse', errorMessage?: string | null | undefined, userData?: { __typename?: 'User', email: string } | null | undefined } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errorMessage?: string | null | undefined, userData?: { __typename?: 'User', firstname: string } | null | undefined } };

export type SignUpMutationVariables = Exact<{
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
}>;

export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'UserResponse', errorMessage?: string | null | undefined, userData?: { __typename?: 'User', firstname: string, lastname: string, email: string, phone: string } | null | undefined } };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'UserResponse', errorMessage?: string | null | undefined, userData?: { __typename?: 'User', email: string } | null | undefined } };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['String'];
  model: Scalars['String'];
  title: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  productCode: Scalars['String'];
}>;

export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'ProductResponse', errorMessage?: string | null | undefined, products?: Array<{ __typename?: 'Product', model: string, title: string, price: number, description: string, imageUrl: string, productCode: string }> | null | undefined } };

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetProductByIdQuery = { __typename?: 'Query', getProductById?: { __typename?: 'ProductResponse', errorMessage?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: string, title: string, model: string, productCode: string, description: string, price: number, imageUrl: string }> | null | undefined } | null | undefined };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetProductsQuery = { __typename?: 'Query', getAllProducts?: { __typename?: 'ProductResponse', errorMessage?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: string, title: string, price: number, model: string, productCode: string, description: string, imageUrl: string }> | null | undefined } | null | undefined };

export type UserIdQueryVariables = Exact<{ [key: string]: never; }>;

export type UserIdQuery = { __typename?: 'Query', userId: { __typename?: 'UserResponse', errorMessage?: string | null | undefined, userData?: { __typename?: 'User', id: string } | null | undefined } };

export type GetUserOrdersQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserOrdersQuery = { __typename?: 'Query', getUserOrders: Array<{ __typename?: 'Order', id: string, totalPrice: number, completedDate?: any | null | undefined, deliveredDate?: any | null | undefined, createdDate: any, additions?: string | null | undefined, status: number, products: Array<{ __typename?: 'Product', id: string, model: string, productCode: string, price: number, title: string, imageUrl: string }> }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers?: Array<{ __typename?: 'User', firstname: string, lastname: string, phone: string, email: string }> | null | undefined };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;

export type LogoutQuery = { __typename?: 'Query', logout: boolean };

export type RemoveOrderByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type RemoveOrderByIdQuery = { __typename?: 'Query', removeOrderById: boolean };

export type GetUserAndOrdersQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserAndOrdersQuery = { __typename?: 'Query', getUserAndOrders: { __typename?: 'User', id: string, firstname: string, lastname: string, phone: string, email: string, isAdmin: boolean, orders: Array<{ __typename?: 'Order', totalPrice: number, createdDate: any, additions?: string | null | undefined, status: number, products: Array<{ __typename?: 'Product', id: string }> }> } };

export type GetAllOrdersQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAllOrdersQuery = { __typename?: 'Query', getAllOrders: Array<{ __typename?: 'Order', id: string, totalPrice: number, completedDate?: any | null | undefined, deliveredDate?: any | null | undefined, status: number, additions?: string | null | undefined, createdDate: any, user: { __typename?: 'User', firstname: string, lastname: string, phone: string }, products: Array<{ __typename?: 'Product', id: string }> }> };

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['String'];
  status: Scalars['Float'];
}>;

export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: { __typename?: 'Order', id: string, totalPrice: number, completedDate?: any | null | undefined, deliveredDate?: any | null | undefined, status: number, additions?: string | null | undefined, createdDate: any } };

export const AddProductDocument = gql`
    mutation AddProduct($model: String!, $productCode: String!, $title: String!, $description: String!, $price: Int!, $imageUrl: String!) {
  addProduct(
    model: $model
    productCode: $productCode
    title: $title
    description: $description
    price: $price
    imageUrl: $imageUrl
  ) {
    errorMessage
    products {
      id
    }
  }
}
    `
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      model: // value for 'model'
 *      productCode: // value for 'productCode'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useAddProductMutation (baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, options)
}
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($userId: ID!, $productId: [ID!]!, $additinos: String) {
  createOrder(userId: $userId, productId: $productId, additions: $additinos) {
    id
    completedDate
    deliveredDate
    additions
    createdDate
    totalPrice
    status
  }
}
    `
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      productId: // value for 'productId'
 *      additinos: // value for 'additinos'
 *   },
 * });
 */
export function useCreateOrderMutation (baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options)
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: String!) {
  deleteProduct(id: $id)
}
    `
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation (baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options)
}
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    errorMessage
    userData {
      email
    }
  }
}
    `
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation (baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options)
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errorMessage
    userData {
      firstname
    }
  }
}
    `
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation (baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($firstname: String!, $lastname: String!, $email: String!, $password: String!, $phone: String!) {
  signUp(
    firstname: $firstname
    lastname: $lastname
    email: $email
    password: $password
    phone: $phone
  ) {
    errorMessage
    userData {
      firstname
      lastname
      email
      phone
    }
  }
}
    `
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useSignUpMutation (baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options)
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($token: String!, $newPassword: String!) {
  resetPassword(token: $token, newPassword: $newPassword) {
    errorMessage
    userData {
      email
    }
  }
}
    `
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useResetPasswordMutation (baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options)
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: String!, $model: String!, $title: String!, $price: Int!, $description: String!, $imageUrl: String!, $productCode: String!) {
  updateProduct(
    id: $id
    model: $model
    title: $title
    price: $price
    description: $description
    imageUrl: $imageUrl
    productCode: $productCode
  ) {
    errorMessage
    products {
      model
      title
      price
      description
      imageUrl
      productCode
    }
  }
}
    `
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      model: // value for 'model'
 *      title: // value for 'title'
 *      price: // value for 'price'
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *      productCode: // value for 'productCode'
 *   },
 * });
 */
export function useUpdateProductMutation (baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options)
}
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const GetProductByIdDocument = gql`
    query GetProductById($id: String!) {
  getProductById(id: $id) {
    errorMessage
    products {
      id
      title
      model
      productCode
      description
      price
      imageUrl
    }
  }
}
    `

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery (baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options)
}
export function useGetProductByIdLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options)
}
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  getAllProducts {
    errorMessage
    products {
      id
      title
      price
      model
      productCode
      description
      imageUrl
    }
  }
}
    `

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery (baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options)
}
export function useGetProductsLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options)
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const UserIdDocument = gql`
    query UserId {
  userId {
    errorMessage
    userData {
      id
    }
  }
}
    `

/**
 * __useUserIdQuery__
 *
 * To run a query within a React component, call `useUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserIdQuery (baseOptions?: Apollo.QueryHookOptions<UserIdQuery, UserIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserIdQuery, UserIdQueryVariables>(UserIdDocument, options)
}
export function useUserIdLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<UserIdQuery, UserIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserIdQuery, UserIdQueryVariables>(UserIdDocument, options)
}
export type UserIdQueryHookResult = ReturnType<typeof useUserIdQuery>;
export type UserIdLazyQueryHookResult = ReturnType<typeof useUserIdLazyQuery>;
export type UserIdQueryResult = Apollo.QueryResult<UserIdQuery, UserIdQueryVariables>;
export const GetUserOrdersDocument = gql`
    query GetUserOrders($id: String!) {
  getUserOrders(id: $id) {
    id
    totalPrice
    completedDate
    deliveredDate
    createdDate
    additions
    status
    products {
      id
      model
      productCode
      price
      title
      imageUrl
    }
  }
}
    `

/**
 * __useGetUserOrdersQuery__
 *
 * To run a query within a React component, call `useGetUserOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserOrdersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserOrdersQuery (baseOptions: Apollo.QueryHookOptions<GetUserOrdersQuery, GetUserOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserOrdersQuery, GetUserOrdersQueryVariables>(GetUserOrdersDocument, options)
}
export function useGetUserOrdersLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<GetUserOrdersQuery, GetUserOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserOrdersQuery, GetUserOrdersQueryVariables>(GetUserOrdersDocument, options)
}
export type GetUserOrdersQueryHookResult = ReturnType<typeof useGetUserOrdersQuery>;
export type GetUserOrdersLazyQueryHookResult = ReturnType<typeof useGetUserOrdersLazyQuery>;
export type GetUserOrdersQueryResult = Apollo.QueryResult<GetUserOrdersQuery, GetUserOrdersQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    firstname
    lastname
    phone
    email
  }
}
    `

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery (baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options)
}
export function useGetAllUsersLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options)
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const LogoutDocument = gql`
    query Logout {
  logout
}
    `

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery (baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options)
}
export function useLogoutLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options)
}
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const RemoveOrderByIdDocument = gql`
    query RemoveOrderById($id: String!) {
  removeOrderById(id: $id)
}
    `

/**
 * __useRemoveOrderByIdQuery__
 *
 * To run a query within a React component, call `useRemoveOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRemoveOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemoveOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveOrderByIdQuery (baseOptions: Apollo.QueryHookOptions<RemoveOrderByIdQuery, RemoveOrderByIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<RemoveOrderByIdQuery, RemoveOrderByIdQueryVariables>(RemoveOrderByIdDocument, options)
}
export function useRemoveOrderByIdLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<RemoveOrderByIdQuery, RemoveOrderByIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<RemoveOrderByIdQuery, RemoveOrderByIdQueryVariables>(RemoveOrderByIdDocument, options)
}
export type RemoveOrderByIdQueryHookResult = ReturnType<typeof useRemoveOrderByIdQuery>;
export type RemoveOrderByIdLazyQueryHookResult = ReturnType<typeof useRemoveOrderByIdLazyQuery>;
export type RemoveOrderByIdQueryResult = Apollo.QueryResult<RemoveOrderByIdQuery, RemoveOrderByIdQueryVariables>;
export const GetUserAndOrdersDocument = gql`
    query getUserAndOrders($id: String!) {
  getUserAndOrders(id: $id) {
    id
    firstname
    lastname
    phone
    email
    isAdmin
    orders {
      totalPrice
      createdDate
      additions
      status
      products {
        id
      }
    }
  }
}
    `

/**
 * __useGetUserAndOrdersQuery__
 *
 * To run a query within a React component, call `useGetUserAndOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAndOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAndOrdersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserAndOrdersQuery (baseOptions: Apollo.QueryHookOptions<GetUserAndOrdersQuery, GetUserAndOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserAndOrdersQuery, GetUserAndOrdersQueryVariables>(GetUserAndOrdersDocument, options)
}
export function useGetUserAndOrdersLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<GetUserAndOrdersQuery, GetUserAndOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserAndOrdersQuery, GetUserAndOrdersQueryVariables>(GetUserAndOrdersDocument, options)
}
export type GetUserAndOrdersQueryHookResult = ReturnType<typeof useGetUserAndOrdersQuery>;
export type GetUserAndOrdersLazyQueryHookResult = ReturnType<typeof useGetUserAndOrdersLazyQuery>;
export type GetUserAndOrdersQueryResult = Apollo.QueryResult<GetUserAndOrdersQuery, GetUserAndOrdersQueryVariables>;
export const GetAllOrdersDocument = gql`
    query GetAllOrders {
  getAllOrders {
    id
    totalPrice
    completedDate
    deliveredDate
    status
    additions
    createdDate
    user {
      firstname
      lastname
      phone
    }
    products {
      id
    }
  }
}
    `

/**
 * __useGetAllOrdersQuery__
 *
 * To run a query within a React component, call `useGetAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOrdersQuery (baseOptions?: Apollo.QueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options)
}
export function useGetAllOrdersLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options)
}
export type GetAllOrdersQueryHookResult = ReturnType<typeof useGetAllOrdersQuery>;
export type GetAllOrdersLazyQueryHookResult = ReturnType<typeof useGetAllOrdersLazyQuery>;
export type GetAllOrdersQueryResult = Apollo.QueryResult<GetAllOrdersQuery, GetAllOrdersQueryVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($id: String!, $status: Float!) {
  updateOrder(id: $id, status: $status) {
    id
    totalPrice
    completedDate
    deliveredDate
    status
    additions
    createdDate
  }
}
    `
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateOrderMutation (baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options)
}
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
