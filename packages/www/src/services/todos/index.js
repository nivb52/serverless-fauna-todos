import { gql } from '@apollo/client';

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
    }
  }
`;

export const UPDATE_TODO_DONE = gql`
  mutation UpdateTodoDone($id: ID!) {
    updateTodoDone(id: $id) {
      text
      done
    }
  }
`;

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      done
    }
  }
`;
