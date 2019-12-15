import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'HO MGOC HAI',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'HO MGOC HIEN',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'HO MGOC HA',
				completed: true
			}
		]
	}

	makeComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	}

	delTodo = (id) => {
		this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
	}

	addToDo = (title) => {
		const newTodo = {
			id : uuid.v4(),
			title,
			completed: false
		};

		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<AddTodo addToDo={this.addToDo} />
					<Todos todos={this.state.todos} delTodo={this.delTodo} makeComplete={this.makeComplete} />
				</div>
			</div>
		);
	};
}

export default App;
