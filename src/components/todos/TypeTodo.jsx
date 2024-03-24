import React, { useState } from "react";


function TypeTodo({ fetchTerm, todo, term, createTodo }) {

    const [val, setVal] = useState(todo || '');
    return (
        <div className="create-todo-cont">
            <input
                type="text"
                placeholder="Type your Todos"
                value={term?.length === 0 ? '' : val}
                onChange={({ target: { value } }) => {
                    setVal(value)
                    fetchTerm(value.toString())
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        createTodo()
                    }
                }}
            />
        </div>
    );

}

export default TypeTodo;