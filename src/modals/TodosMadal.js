import axiosApi from "../axiosApi/axiosApi"


class TodosModal {

    getTodos = async () => {
        let { data } = await axiosApi.get('/getTodos')
        return data
    }


    postTodos = async (val) => {

        let { data } = await axiosApi.post("/createTodo", {
            todo: val,
            done: false,

        })
        return [data]

    }


    deleteTodos = async (id) => {
        let { data } = await axiosApi.delete(`/deleteTodo/${id}`)
        return data
    }


    eiditTodos = async (id, editedVal, isDone) => {
        let { data } = await axiosApi.patch(`/editTodo/${id}`,
            {
                todo: editedVal,
                done: isDone,
                _id: id

            }
        )

        return data
    }

}

export default TodosModal;