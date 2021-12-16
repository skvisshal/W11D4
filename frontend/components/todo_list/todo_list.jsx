import React from 'react';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';


class TodoList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {todos, receiveTodo, removeTodo} = this.props;
        return(
            <div>
                <ul className="todo-list">
                    {todos.map(todo =>(
                        <TodoListItem
                            todo={todo}
                            key={todo.id}
                            receiveTodo={receiveTodo}
                            removeTodo={removeTodo}
                         />
                    ))}
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </div>
        );
    }
}

export default TodoList;