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
                !isEdit ?
                    <DelDoneBtns
                        todo={td}
                        done={done}
                        completed={finishTodo}
                        deleteTodo={deleteTodo}

                    /> :
                    <span>
                        <TypeTodo todo={todo} fetchTerm={fetchTerm} />
                        <div className="edit-todo">
                            <button onClick={editTodo}>Save</button>
                        </div>
                    </span>
            }
            <div className="edit-todo">
                <button onClick={edit}>{isEdit?"back":'edit'}</button>
            </div>

        </div>
    );
}

export default Todo;










export function DelDoneBtns({ todo, done, completed, deleteTodo }) {
    return (
        <React.Fragment>
            <div className="todo">
                <p>{done ? <s>{todo.todo}</s> : todo.todo}</p>
                <div className="date-time">
                    <span>{todo.date}</span>
                    <span>{todo.time}</span>
                </div>
            </div>
            <div className="delete-todo">
                <button onClick={completed}>{done ? 'undone' : 'done'}</button>
            </div>
            <div className="edit-todo">
                <button onClick={deleteTodo}>X</button>
            </div>
        </React.Fragment>
    );

}