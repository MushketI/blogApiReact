import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../../../store/slices/userSlice"
import styles from "./register.module.scss"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  async function onSubmitForm(e) {
    e.preventDefault()

    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password,
    }

    dispatch(createUser(data))
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <form className={styles.form} onSubmit={onSubmitForm}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
