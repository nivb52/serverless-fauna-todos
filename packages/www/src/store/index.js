/* eslint-disable */
import create from 'zustand/vanilla';

const store = create((set, get) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: state.todos.push(todo) })),
  resetTodos: () => set({ todos: [] }),
  checkTodo: (todo) =>
    set((state) => {
      const todo_idx = state.todos.findIndex((t) => t.id === todo.id);
      state.todos[todo_idx] = todo;
    }),
}));

export default store;
