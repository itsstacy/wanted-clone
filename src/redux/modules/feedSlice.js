import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

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


});

export default FeedSlice.reducer;

