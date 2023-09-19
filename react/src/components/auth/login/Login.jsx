import { useDispatch } from "react-redux"
import { useState } from "react"
import { loginUser } from "../../../store/slices/userSlice"
import styles from "./login.module.scss"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  function onSubmitForm(e) {
    e.preventDefault()
    const data = {
      email,
      password,
    }

    dispatch(loginUser(data))
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <form className={styles.form} onSubmit={onSubmitForm}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
