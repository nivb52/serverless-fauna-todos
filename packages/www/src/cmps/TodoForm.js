import React, { useContext, useRef, useReducer } from 'react';
import {
  Container,
  Flex,
  Heading,
  Button,
  Input,
  Label,
  NavLink,
  Checkbox,
} from 'theme-ui';
import { gql, useMutation, useQuery } from '@apollo/client';
import { ADD_TODO, UPDATE_TODO_DONE, GET_TODOS } from '../services/todos';

export default ({ user }) => {
  const inputRef = useRef();
  const [addTodo] = useMutation(ADD_TODO);
  const [updateTodoDone] = useMutation(UPDATE_TODO_DONE);
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  return (
    <Container>
      <Flex
        as="form"
        onSubmit={async (e) => {
          e.preventDefault();
          await addTodo({ variables: { text: inputRef.current.value } });
          inputRef.current.value = '';
          await refetch();
        }}>
        <Label sx={{ display: 'flex' }}>
          <span>Add&nbsp;Todo</span>
          <Input ref={inputRef} sx={{ marginLeft: 1 }} />
        </Label>
        <Button sx={{ marginLeft: 1 }}>Submit</Button>
      </Flex>

      <Flex sx={{ flexDirection: 'column' }}>
        {loading ? <div>loading...</div> : null}
        {error ? <div>{error.message}</div> : null}
        {!loading && !error && (
          <ul sx={{ listStyleType: 'none' }}>
            {data.todos.map((todo) => (
              <Flex
                key={todo.id}
                as="li"
                onClick={async () => {
                  console.log('updateTodoDone');
                  await updateTodoDone({ variables: { id: todo.id } });
                  console.log('refetching');
                  await refetch();
                }}>
                <Checkbox checked={todo.done} readOnly />
                <span>{todo.text}</span>
              </Flex>
            ))}
          </ul>
        )}
      </Flex>
    </Container>
  );
};
