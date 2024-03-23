import React from 'react'
import './styles/TodoApp.css';
import { Route, Routes } from 'react-router-dom';
import Todos from './components/todos/Todos.jsx';
import SignUp from './components/auth/SignUp.jsx';
import Login from './components/auth/Login.jsx';

function TodoAppRoutes() {
   
  return (

    <div className="TodoApp-container">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>

    </div >
  );
}
export default TodoAppRoutes;
