import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getLogout } from "../../store/slices/userSlice"
import styles from "./header.module.scss"

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  function logoutUser() {
    dispatch(getLogout())
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.content}>
          <Link to={"/"}>Blog</Link>
        </div>
        <div className={styles.user}>
          {user ? (
            <>
              <a>{user.name}</a>
              <Link to={"/profile"}>Profile</Link>
              <a onClick={logoutUser}>Exite</a>
            </>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </div>
        <div className={styles.setting}>
          {user.role_id === 2 && <Link to={"/setting"}>Setting</Link>}
        </div>
      </div>
    </div>
  )
}

export default Header
