/* eslint-disable */
import create from 'zustand/vanilla';

const store = create((set, get) => ({
  user: {},
  setUser: (user) => {
    set((state) => (state.user = user));
  },
  resetUser: () => {
    set((state) => (state.user = {}));
  },

  getUserFullName: () => {
    console.log('getUserFullName Store');
    let user = get().user;
    return user && user.user_metadata ? user.user_metadata.full_name : null;
  },

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
