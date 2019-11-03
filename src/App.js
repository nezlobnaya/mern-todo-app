import React from 'react';
import { Route, Link } from 'react-router-dom'
import TodoList from './components/TodoList/TodoList'
import CreateTodo from './components/CreateTodo/CreateTodo'
import EditTodo from './components/EditTodo/EditTodo'
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (  
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to='/' className='nabvar-brand'>Mern-Stack Todo App</Link>
          <img src={logo} width='30' height='30' alt='coding smart' />
          <div className='collapse nav-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'>
              <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className='navbar-item'>
              <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path='/' component={TodoList} />
        <Route path='/edit/:id' component={EditTodo} />
        <Route path='/create' component={CreateTodo} />
      </div>
  );
}

export default App;
