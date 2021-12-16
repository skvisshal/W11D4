const allTodos = (state) => {
    return Object.values(state.todos);
}

export default allTodos;

// export const allTodos = ({ todos }) => (
//     Object.keys(todos).map(id => todos[id])
// );