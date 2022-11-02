import axios from '../axios'
import Store from '../store'
import {
    Auth_Success
} from '../reducers/auth'
import {
    toast
} from 'react-toastify'
import { Post_Fetch } from '../reducers/post'
export const signUpUser = async (data, setLoading, Navigate) => {
    try {
        const res = await axios.post('user/signup', data)
        if (res.status == 200) {
            console.log("success");
            toast.success("SignUp Succes Fully...")
            Navigate(true)
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.message)

    }
}
export const signInUser = async (data, Navigate) => {
    try {
        console.log(data)
        const res = await axios.post(`/user/signin/${data.method}`, data)
        if (res.status == 200) {
            console.log("success");
            toast.success("Login Successed")
            res.data.user.method = data.method
            Store.dispatch(Auth_Success(res.data.user))
            Navigate('/')
        }

    } catch (error) {
        console.log(error);
        return toast.error(error.response.data.message)
    }
}

export const AddPosts = async (data) => {
    try {
        const res = await axios.post('/posts/create', data)
        if (res.status == 200) {
            toast.success("Ppost Created SuccesFully")
        }
    } catch (error) {
        console.log(error);
        return toast.error(error.response.data.message)
    }
}

export const FetchPosts = async (page) => {
    try {
        const res = await axios.get(`/posts/${page}`)
        if(res.status==200){
            return Store.dispatch(Post_Fetch(res.data.posts))
        }
    } catch (error) {
        console.log(error);
    }
}