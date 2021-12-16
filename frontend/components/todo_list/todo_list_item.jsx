import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleButton(e) {
        e.preventDefault();

        const todo = Object.assign({}, this.props.todo, {done: !this.props.todo.done});
        this.props.receiveTodo(todo);
    }


    handleDelete(e) {
        e.preventDefault();
        this.props.removeTodo(this.props.todo);
    }

    render() {
        const todo = this.props.todo;
        return(
            <li>
                {todo.title}
                <button onClick={this.handleButton}>
                    {todo.done ? "Undo?" : "Done?"}
                </button>
                <button onClick={this.handleDelete}>
                    Delete
                </button>
            </li>
        );
    }
}

export default TodoListItem;