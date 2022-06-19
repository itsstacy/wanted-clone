import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

// const SERVER_URL = "http://13.209.35.101:3000/api";


const FeedSlice = createSlice({
  name: 'Feed',
  initialState:{
  list: [{}],
},


reducers:{

  changeLoginState: (state, action) => {


  }
},
extraReducers: {}
// middlewares

});

export default FeedSlice.reducer;

