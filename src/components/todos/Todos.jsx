import React, { useState, useEffect } from "react";
import Todo from "./Todo.jsx";
import TypeTodo from "./TypeTodo.jsx";
import Logout from "../auth/Logout.jsx";
import { Navigate } from "react-router-dom";
import TodosModal from "../../modals/TodosMadal.js";

function Todos({email}) {
    const [val, setVal] = useState('');
    const [todos, setTodos] = useState([])
    let todosModal = new TodosModal()
    
     let token = localStorage.getItem('todoJwtToken')
     let parsedToken = JSON?.parse(token)
    
     useEffect(() => {
        todosModal.getTodos().then((data) => {
            setTodos(data)
        });
    }, [])
    

    if (!token) {
        return <Navigate to='/' />

    }
    async function createTodo() {
        let data = await todosModal.postTodos(val)
        setTodos([...todos, ...data]);
        setVal('');
    }


    const fetchTerm = (val) => {
        setVal(val)
    }

    function renderTodos() {
        return todos?.map((td) => {
            return <Todo key={td._id}
                td={td}
                setTodos={setTodos}
            />

        })
    }


    return (
        <div className="container">
            <div className="header-container">
                <div className="title">
                    <Logout lgednUser = {parsedToken && parsedToken[0]?.email} />
                    <div>
                        <h3>Remember Todo</h3>
                    </div>
                    
                </div>
                <div className="input-add-cont">
                    <TypeTodo fetchTerm={fetchTerm} term={val} createTodo ={createTodo}/>
                    <button
                        className="create-todo-button"
                        onClick={createTodo}>Add
                    </button>
                </div>

            </div>
            <div className="view-todo-cont">
                {renderTodos()}
            </div>
        </div>
    );
}

export default Todos;
