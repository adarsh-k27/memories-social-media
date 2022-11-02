import {createSlice} from '@reduxjs/toolkit'


const initialState={
    auth:false,
    auth_details:{},
    loading:false
}

const AuthReducer=createSlice({
    name:'AUTH',
    initialState,
    reducers:{
      Auth_Success:(state,action)=>{
        window.localStorage.setItem('auth',true)
        window.localStorage.setItem('user',JSON.stringify(action.payload))
         return{
            ...state,
            auth:true,
            auth_details:action.payload
         }
      },
      Auth_Restore:(state,action)=>{
        return {
          ...state,
          auth: true,
          auth_details: action.payload
        }
      }
    }
})

export const {Auth_Success,Auth_Restore}=AuthReducer.actions;
export default AuthReducer.reducer