import { createSlice } from "@reduxjs/toolkit";

const initialState={
    id:null,
    email:null,
    isLoggedIn:false,
};

export const orbSlices=createSlice({
    name:'userState',
    initialState,
    reducers:{
        setUser(state, action){
            state.email=null;
            state.isLoggedIn=false
        }
    }
})

export const{
    setUser,logout
}= orbSlices.actions;
export default orbSlices.reducer;