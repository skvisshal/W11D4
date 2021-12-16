import React from 'react';
import uniqueId from '../../util/id'

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: "", body: "", done: false};
        this.update = this.update.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    };


    update(event) {
    this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const todo = Object.assign({},this.state, {id: uniqueId()});
        this.props.receiveTodo(todo);
        this.setState ({ title: "", body: "", done: false });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input onChange={this.update} type="text" value={this.state.title} name="title" />
                </label>
                <br></br>
                <label>Body
                    <textarea onChange={this.update} value={this.state.body} name="body"></textarea>
                </label>
                <br></br>
                <label>Done
                    <label> Yes
                        <input onChange={this.update} type="radio" name="Done" value="true" />
                    </label>
                    <label> No
                        <input onChange={this.update} type="radio" name="Done" value="false" checked />
                    </label>
                </label>
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default TodoForm;