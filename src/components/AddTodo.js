import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    };

    // Set title on change.
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    // onChange = (e) => this.setState({ title: e.target.value });

    // Submit form.
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title : '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', margin: '5px 0px' }}>
                <input
                    style={{ flex: '10', padding: '9px 12px' }}
                    type="text" 
                    name="title" 
                    placeholder="Add todo..."
                    value={this.state.title}
                    onChange={this.onChange} />
                <input
                    style={{ flex: '1' }}
                    type="submit"
                    className="btn"
                    value="Submit" />
            </form>
        )
    }
}

export default AddTodo;