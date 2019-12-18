import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} makeComplete={this.props.makeComplete} delTodo={this.props.delTodo} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    makeComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
