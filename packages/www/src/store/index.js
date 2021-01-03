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
    let is_user = get().user;
    let user = isuser ? get().user.getCurrentUser() : null;
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

export default useStore;
