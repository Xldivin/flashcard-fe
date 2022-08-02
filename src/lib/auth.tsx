import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
mutation Signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        id,
        name
      }
    }
  }
`;
export const LOGIN_MUTATION = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        name
      }
    }
  }
`;