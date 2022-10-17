import { gql } from '@apollo/client';

const ADD_CARD = gql`
mutation Post($description: String!, $question: String!, $answer: String!) {
  post(description: $description, question: $question, answer: $answer) {
    id
    description
    question
    answer
  }
}
`

const DELETE_CARD = gql`
mutation Delete($deleteId: Int!) {
  delete(id: $deleteId) {
    id
    description
    question
    answer
  }
}
`
const UPDATE_CARD = gql`
mutation Put($description: String!, $question: String!, $answer: String!, $putId: Int!) {
  put(description: $description, question: $question, answer: $answer, id: $putId) {
    id
    description
    question
    answer
  }
}
`

export {
  DELETE_CARD,
  ADD_CARD,
  UPDATE_CARD
}