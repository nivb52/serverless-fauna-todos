/* eslint-disable */
import create from 'zustand';
// @todo set store as vanila
const useStore = create((set, get) => ({
  user: {},
  setUser: (user) =>
    set((state) => {
      console.log(user);
      state.user = user;
    }),
  resetUser: () =>
    set(() => {
      user: {
      }
    }),
  getUserFullName: () => {
    return get().user.user_metadata.full_name;
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
