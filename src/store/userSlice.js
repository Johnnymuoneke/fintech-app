import { createSlice } from "@reduxjs/toolkit";

const initialState={
    id:null,
    email:null,
    phoneNumber:null,
    isLoggedIn:false,
};
const usersDetail={
    id:"2xwtairuQ7ycXhXKr7mU",
    password:'123456',
    email: null,
    phoneNumber: null
}

export const orbSlices=createSlice({
    name:'userState',
    initialState,
    reducers:{
        setUser(state, action){
            state.email=null;
            state.isLoggedIn=false
            state.phoneNumber = action.payload.phoneNumber
            state.id = action.payload.id
            state.isLoggedIn=true
        }
    }
})

export const{
    setUser,logout
}= orbSlices.actions;
export default orbSlices.reducer;