export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  deletePost?: Maybe<Post>;
  deleteUser?: Maybe<User>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
};


export type MutationCreatePostArgs = {
  post?: InputMaybe<PostState>;
};


export type MutationCreateUserArgs = {
  user?: InputMaybe<UserState>;
};


export type MutationDeletePostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  post?: InputMaybe<PostState>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user?: InputMaybe<UserState>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostState = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allPosts: Array<Maybe<Post>>;
  allUsers: Array<Maybe<User>>;
  post?: Maybe<Post>;
  user?: Maybe<User>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  nickname?: Maybe<Scalars['String']>;
};

export type UserState = {
  email?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};
