import React, { useState } from "react";
import TypeTodo from "./TypeTodo.jsx";
import TodosModal from "../../modals/TodosMadal.js";

function Todo({ td, setTodos }) {

    const [isEdit, setIseEdit] = useState(false);
    const [editedVal, setEditedVal] = useState('')

    let todosModal = new TodosModal()
    const { _id, todo, done } = td

    async function finishTodo() {
        let data = await todosModal.eiditTodos(_id, todo, !done)
        setTodos(data);
    }

    async function deleteTodo() {
        let data = await todosModal.deleteTodos(_id)
        setTodos(data)
    }

    async function editTodo() {
        let data = await todosModal.eiditTodos(_id, (editedVal || todo), done)
        setTodos(data);
        setIseEdit(false);
    }

    function edit() {
        setIseEdit(!isEdit);
    }

    const fetchTerm = (val) => {
        setEditedVal(val)
    }



    return (
        <div className="view-todo">
            {
                !isEdit ? <div className="todo-wd-btns">

                    <div className="todo">
                        <p>{done ? <s>{td?.todo}</s> : td?.todo}</p>
                        <div className="date-time">
                            <span>{td?.date}</span>
                            <span>{td?.time}</span>
                        </div>
                    </div>

                    <div className="todo-btns">
                        <div>
                            <button onClick={finishTodo}>{done ? 'undone' : 'done'}</button>
                        </div>
                        <div>
                            <button onClick={deleteTodo}>X</button>
                        </div>
                        <div>
                            <button onClick={edit}>{isEdit ? "back" : 'edit'}</button>
                        </div>

                    </div>
                </div>
                    :
                    <div className="eidit-field-cont">
                        <div className="edit-field" >
                            <TypeTodo todo={todo} fetchTerm={fetchTerm} />
                        </div>
                        <div className="edit-todo" >
                            <div>
                                <button onClick={editTodo}>Save</button>
                            </div>
                            <div>
                                <button onClick={edit}>back</button>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
}

export default Todo;
