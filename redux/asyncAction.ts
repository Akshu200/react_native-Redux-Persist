import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {addEmail, updateIsLogIn} from './slice';
export const loginApi = createAsyncThunk(
  'todos/loginApi',
  async (args, {dispatch}) => {
    try {
      const resp = await axios.post(
        'https://reqres.in/api/login Request Body:',
        {
          email: args?.email,
          password: args?.password,
        },
      );

      if (resp.status === 201) {
        console.log('the loginapi resp 201', resp.data);
        dispatch(addEmail({email: resp.data.email}));
        dispatch(updateIsLogIn('true'));
      }
    } catch (error) {
      console.log('error while login api', error);
      //   Alert.alert(error);
    }
  },
);
