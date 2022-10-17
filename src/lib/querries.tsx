import { gql } from '@apollo/client';

const GET_CARDS = gql`
query Feed {
  feed {
    id
    description
    question
    answer
  }
}
`

const GET_CARD = gql`
  query oneCard ($id: Int!) {
    oneCard(id: $id) {
      id
      question
      description
      answer
    }
  }
`

export {
  GET_CARDS,
  GET_CARD
}