import React, { useState } from "react";


function TypeTodo({ fetchTerm, todo, term }) {

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
            />
        </div>
    );

}

export default TypeTodo;