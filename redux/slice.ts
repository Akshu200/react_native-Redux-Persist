import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    isLogged: 'false',
    userEmail: '',
    employeeDetails: [],
  },
  reducers: {
    updateIsLogIn: (state, {payload}) => {
      state.isLogged = payload;
    },
    addEmpDetails: (state, {payload}) => {
      console.log('the emp deatisl payload', payload);
      state.employeeDetails.push(payload);
    },
    addEmail: (state, paylaod) => {
      state.userEmail = paylaod.payload.email;
    },
  },
});

export const {updateIsLogIn, addEmpDetails, addEmail} = todosSlice.actions;
export default todosSlice.reducer;
