import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getUser } from "./store/slices/userSlice"
import "./App.css"
import Header from "./components/header/Header"
import Register from "./components/auth/register/Register"
import Login from "./components/auth/login/Login"
import Setting from "./components/setting/Setting"
import Main from "./components/main/Main"
import CreatedPost from "./components/post/createPost/CreatedPost"
import Profile from "./components/auth/profile/Profile"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/setting"} element={<Setting />} />
        <Route path={"/create"} element={<CreatedPost />} />
        <Route path={"/profile"} element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
