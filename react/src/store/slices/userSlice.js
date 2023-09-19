import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createUser = createAsyncThunk("user/createUser", async (data) => {
  axios
    .post("http://localhost:8000/register", data)
    .then((response) => {
      console.log(response)
    })
    .catch((res) => console.log(res))
})

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, { dispatch }) => {
    axios.defaults.withCredentials = true
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios.post("http://localhost:8000/login", data).then(() => {
        axios.get("http://localhost:8000/api/user").then((response) => {
          dispatch(setUser(response.data))
        })
      })
    })
  }
)

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { dispatch }) => {
    axios.defaults.withCredentials = true
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios.get("http://localhost:8000/api/user").then((response) => {
        dispatch(setUser(response.data))
      })
    })
  }
)

export const getLogout = createAsyncThunk("user/logout", (_, { dispatch }) => {
  const response = axios.post("http://localhost:8000/logout").then(() => {
    dispatch(setUser(""))
    console.log("Logout")
  })
  console.log(response)
})

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
