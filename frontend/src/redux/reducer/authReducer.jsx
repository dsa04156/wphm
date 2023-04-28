import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from 'jwt-decode'


let initialState = {
  isLogined: false,

}

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLogined = true
      

    },
    logOut(state) {
      state.isLogined = false
      state.email = ''
      localStorage.setItem('accessToken','')
      localStorage.setItem('refreshToken','')
      // api 요청 필요
    },
    

    
    checkAccessToken(state) {
      console.log(state)
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        return;
      }
      
      try {
        const data_ = jwtDecode(localStorage.getItem('accessToken') ?? '') ;
        state.isLogined = true;
        state.email = data_.sub;


      } catch (error) {
        // 에러 처리
        console.log(error);
      }
    }
    
    

  }
});

export const authActions = authReducer.actions
export default authReducer.reducer;