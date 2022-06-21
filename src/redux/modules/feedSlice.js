import { BucketAlreadyOwnedByYou } from "@aws-sdk/client-s3";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://13.209.35.101:3000/api";

//GET POSTINGS
export const getAllLists = createAsyncThunk("GET/getAllLists", async () => {
  return await axios
  .get(`${SERVER_URL}/postings`,{})
  .then((response) => response.data);
})

//CREATE JOB POSTING
export const createJob = createAsyncThunk("POST/postings", async (Job) => { 
  const jobData = {
    title: Job.title,
    thumbnail: Job.thumbnail,
    maincontent: Job.maincontent,
    subcontent: Job.subcontent,
    position: Job.position,
  }
  console.log(jobData);
  console.log(Job.token);
  await axios
  .post(`${SERVER_URL}/postings`,jobData, {
    headers: {Authorization: `Bearer ${Job.token}`},
  })
  .then((response) => {
    console.log(response);
  });

  return jobData;
})
 

const FeedSlice = createSlice({
  name: 'Feed',
  initialState:{
  joblist: [{}],
  companylist: [{}],
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
    state.joblist = [...action.payload.posts];
    state.companylist = [...action.payload.companyinfo];
  },
  [getAllLists.rejected]: (state, action) => {
    console.log("GET REJECTED");
  },

  [createJob.fulfilled]: (state, action) => {
    console.log("POST FULFILLED");
    console.log(action.payload);
    console.log(state.joblist);
  },
  [createJob.rejected]: (state, action) => {
    console.log("POST REJECTED");
  },


  }
});

export default FeedSlice.reducer;

