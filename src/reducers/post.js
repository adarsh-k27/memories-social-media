import {
    createSlice
} from '@reduxjs/toolkit'


const initialState = {
    page: 1,
    posts: [],
    loading: false
}

const PostReducer = createSlice({
    name: 'POSTS',
    initialState,
    reducers: {
        NextPage: (state) => {
            return {
                ...state,
                page:state.page + 1
            }
        },
        PreviosPage: (state) => {
            return {
                ...state,
               page:state.page -1
            }
        },
        Post_Fetch:(state,action)=>{
           return{
            ...state,
            posts:action.payload
           }
        },
        setPrevious:(state,action)=>{
           
        }
    }
})

export const {
    Post_Fetch,
    NextPage,PreviosPage
} = PostReducer.actions;
export default PostReducer.reducer