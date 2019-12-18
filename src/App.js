import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
// import uuid from 'uuid';

import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		todos: []
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => this.setState({ todos: res.data }));
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

	// Delete
	delTodo = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
		// this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
	}

	// Add
	addToDo = (title) => {
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed : false
		}).then(res => this.setState({ todos: [...this.state.todos, res.data] }));

		// this.setState({ todos: [...this.state.todos, newTodo] });
	}

	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route exact path="/" render={props => (
							<React.Fragment>
								<AddTodo addToDo={this.addToDo} />
								<Todos todos={this.state.todos} delTodo={this.delTodo} makeComplete={this.makeComplete} />
							</React.Fragment>
						)} />

						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
					</div>
				</div>
			</Router>
		);
	};
}

export default App;
