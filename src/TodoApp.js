import React from 'react';
import {TodoList} from "./TodoList";
import {Login} from './component/Login';
import {App} from './App';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
export class TodoApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        localStorage.setItem('user', "david");
        localStorage.setItem('password', "david");
        localStorage.setItem('isLoggedIn', false);
        const usr = localStorage.getItem('user');
        const psswd = localStorage.getItem('password');
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const TodoView = () => (
                <div>
                    <App/>
                </div>
        );
        const LoginView = () => (
            <Login/>
        );


        return (
                    <Router>
                        <div className="App">
                            <header className="App-header">
                                <h1 className="App-title">TODO React App</h1>
                            </header>

                            <br/>
                            <br/>

                            <ul>
                                <li><Link to="/">Login</Link></li>
                                <li><Link to="/todo">Todo</Link></li>
                            </ul>

                            <div>
                                <Route exact path="/" component={LoginView}/>
                                {isLoggedIn && <Route path="/todo" component={TodoView}/>}
                            </div>
                        </div>
                    </Router>
                );
    }

}
export default TodoApp;