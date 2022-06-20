import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://13.209.35.101:3000/api";

//GET POSTING
export const getAllLists = createAsyncThunk("GET/getAllLists", async () => {
  return await axios
  .get(`${SERVER_URL}/posting`,{})
  .then((response) => 
  console.log(response.data));
})

const FeedSlice = createSlice({
  name: 'Feed',
  initialState:{
  list: [{}],
},


reducers:{

  changeLoginState: (state, action) => {


  }
},
extraReducers: {
// middlewares

//GET ALL LISTS
  [getAllLists.fulfilled]: (state, action) => {
    console.log("GET FULFILLED");
    console.log(action.payload);
    console.log()
  },
  [getAllLists.rejected]: (state, action) => {
    console.log("GET REJECTED");
  },




  }
});

export default FeedSlice.reducer;

