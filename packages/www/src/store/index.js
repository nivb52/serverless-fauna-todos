/* eslint-disable */
import create from 'zustand/vanilla';

const useStore = create((set, get) => ({
  user: {},
  setUser: (user) =>
    set((state) => {
      state.user = user;
    }),
  resetUser: () =>
    set(() => {
      user: {
      }
    }),
  getUserFullName: () => {
    console.log('getUserFullName Store');
    // return get().user.getCurrentUser();
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

export default useStore;
