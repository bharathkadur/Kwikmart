//userSlider.js
import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
 name: 'user',
 initialState: {
   userList: [
     { id: 1, name: "Bharath", email:"bharath@gmail.com", Password:"Admin@1234", phone:9988776655},
     { id: 2, name: "Manjunath", email:'manjunath@gmail.com', Password:"Admin@4321", phone:7788994455}   
   ]
 },
 reducers: {
   addUser: (state, action) => {
     let newUserData = {
       id: action.payload.randomId,
       name: action.payload.newName,
       email: action.payload.newEmail,
       Password: action.payload.newPassword,
       phone: action.payload.newNumber
     }
     state.userList.push(newUserData);
   },
  },
})

export const { addUser } = userReducer.actions
export default userReducer.reducer;
