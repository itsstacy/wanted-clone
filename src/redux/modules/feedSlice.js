
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SERVER_URL = "http://hayeon-sum.shop/api";

//GET POSTINGS
export const getAllLists = createAsyncThunk("GET/getAllLists", async () => {
  return await axios
  .get(`${SERVER_URL}/postings`,{})
  .then((response) => response.data);
})

//GET POSTINGS FOR COMPANY PAGE
export const getCompanypageLists = createAsyncThunk("GET/getCompanypageLists", async(token) => {
  return await axios
  .get(`${SERVER_URL}/companies/mypage`, {
    headers: {Authorization: `Bearer ${token}`}
  })
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

//EDIT JOB POSTING (PUT)
export const editJob = createAsyncThunk("PUT/editJob", async(Job)=>{
  const editJobData = {
    title: Job.title,
    thumbnail: Job.thumbnail,
    maincontent: Job.maincontent,
    subcontent: Job.subcontent,
    position: Job.position,
    postingid: Job.postingid
  }
  console.log(editJobData);
  console.log(Job.token);
  console.log(Job.postingid);

  await axios
  .put(`${SERVER_URL}/postings/${Job.postingid}`,editJobData, {
    headers: {Authorization: `Bearer ${Job.token}`},
  })
  .then((response) => {
    console.log(response);
  });

  return editJobData;
})

//EXPIRE JOB POSTING (PATCH)
export const expireJob = createAsyncThunk("PATCH/expireJob", async (data)=>{
  const expireJobData ={
    status: data.status !== false ? false: false,
    postingid:data.postingid
  }

  await axios
  .patch(`${SERVER_URL}/postings/${data.postingid}`,expireJobData, {
    headers: {Authorization: `Bearer ${data.token}`},
  })
  .then((response) => {
    console.log(response);
  });

  return expireJobData;

})

const FeedSlice = createSlice({
  name: 'Feed',
  initialState:{
  trueCount:0,
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

  [getCompanypageLists.fulfilled]: (state, action) => {
    console.log("GET FULFILLED");
    console.log(action.payload);
    state.joblist = [...action.payload.existsPost];
    state.companylist = [...action.payload.companyinfo];

    const thelist = state.joblist;
    const active = thelist.filter(job => job.status == true);
    console.log(active);
    state.trueCount = active.length;

  },
  [getCompanypageLists.rejected]: (state, action) => {
    console.log("GET REJECTED");
  },

  [createJob.fulfilled]: (state, action) => {
    console.log("POST FULFILLED");
    console.log(action.payload);
    state.joblist = [...state.joblist];
  },
  [createJob.rejected]: (state, action) => {
    console.log("POST REJECTED");
    alert("POST REJECTED");
  },

  [editJob.fulfilled]: (state, action) => {
    console.log("EDIT FULFILLED");
    console.log(action.payload);
    console.log(current(state.joblist));
    const new_list = current(state.joblist).filter(
      (job) => job.postingid !== action.payload.postingid
    );
    console.log(new_list);
    state.joblist = [...new_list, action.payload];
  },

  [editJob.rejected]: (state, action) => {
    console.log("EDIT REJECTED");
    alert("EDIT REJECTED");
  },

  [expireJob.fulfilled]: (state, action) => {
    console.log("EXPIREJOB FULFILLED");
    console.log(action.payload);
    console.log(current(state.joblist));
    const new_list = current(state.joblist).map((job,idx)=>{
      if (job.postingid == action.payload.postingid) {
        return {...job, status:false }  
      } else {
        return job;
      }
    });
    console.log(new_list);
    state.joblist = new_list;
  },

  [expireJob.rejected]: (state, action) => {
    console.log("EXPIREJOB REJECTED");
    alert("EXPIREJOB REJECTED");
  },


  }
});

export default FeedSlice.reducer;

