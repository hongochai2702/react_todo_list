import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyles = () => {
        return {
            background: 'rgb(141, 246, 98)',
            padding: '10px',
            border: '1px solid #000',
            marginBottom: '5px',
            textDecoration: this.props.todo.completed ? 'line-through' : ''
        }
    }

    render() {
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyles()}>
                <input type="checkbox" onChange={this.props.makeComplete.bind(this, id)} /> { ' ' }
                <strong>{title}</strong>
                <button style={btnDelStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
        )
    }
}

const btnDelStyle = {
    background: 'red',
    color: '#fff',
    padding: '5px 9px',
    border: 'none',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
};
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    makeComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
