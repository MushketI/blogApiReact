import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createPost = createAsyncThunk(
  "post/createPost",
  async (data, { dispatch }) => {
    axios
      .post("http://localhost:8000/api/createdPost", data)
      .then((res) => dispatch(setResponse(res.data)))
      .catch((res) => dispatch(setResponse(res.response.data)))
  }
)

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (_, { dispatch }) => {
    axios.get("http://localhost:8000/api/getPosts").then((res) => {
      dispatch(setPosts(res.data))
    })
  }
)

export const getUserPosts = createAsyncThunk(
  "post/getUserPosts",
  async (_, { dispatch }) => {
    axios.get("http://localhost:8000/api/getUserPosts").then((res) => {
      dispatch(setUserPosts(res.data))
    })
  }
)

export const setPostActive = createAsyncThunk(
  "post/setPostActive",
  async (data) => {
    axios
      .post("http://localhost:8000/api/setPostActive/" + data.id, data)
      .then((res) => console.log(res.data))
  }
)

export const setPostEdit = createAsyncThunk(
  "post/setPostActive",
  async (data, { dispatch }) => {
    axios
      .post("http://localhost:8000/api/setPostEdit/" + data.id, data)
      .then((res) => dispatch(setResponse(res.data)))
      .catch((res) => console.log(res))
  }
)

export const postRemove = createAsyncThunk(
  "post/postRemove",
  async (data, { dispatch }) => {
    axios
      .post("http://localhost:8000/api/postDelete/" + data)
      .then((res) => dispatch(setResponse(res.data)))
  }
)

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    userPosts: [],
    response: null,
  },
  reducers: {
    setPosts(state, actions) {
      state.posts = actions.payload
    },
    setResponse(state, actions) {
      state.response = actions.payload
    },
    setUserPosts(state, actions) {
      state.userPosts = actions.payload
    },
  },
})

export const { setResponse, setPosts, setUserPosts } = postSlice.actions

export default postSlice.reducer
