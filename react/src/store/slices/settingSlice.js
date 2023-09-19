import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getUserAll = createAsyncThunk(
  "setting/getUserAll",
  async (_, { dispatch }) => {
    axios.get("http://localhost:8000/api/getUserAll").then((response) => {
      dispatch(setUserAll(response.data))
    })
  }
)

export const setRoleUser = createAsyncThunk(
  "setting/getRoleUser",
  async (data) => {
    axios.post("http://localhost:8000/api/setRoleUser/" + data.id, data)
  }
)

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    users: [],
  },
  reducers: {
    setUserAll(state, action) {
      state.users = action.payload
    },
  },
})

export const { setUserAll } = settingSlice.actions

export default settingSlice.reducer
