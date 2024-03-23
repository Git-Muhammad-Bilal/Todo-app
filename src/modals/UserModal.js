import axiosApi from "../axiosApi/axiosApi"


class UserModal{

    createUser = async (user) => {
        let { data } = await axiosApi.post('/createUser', {
            ...user
        })
        return data
    }
    getUser = async (user) => {
        let { data } = await axiosApi.post('/getUser', {
            ...user
        })
        return data
    }
  
}

export default UserModal;