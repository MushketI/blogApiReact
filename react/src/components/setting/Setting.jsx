import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getUserAll, setRoleUser } from "../../store/slices/settingSlice"
import styles from "./setting.module.scss"

function Setting() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.user.user)
  const getUsers = useSelector((state) => state.setting.users)

  useEffect(() => {
    if (user.role_id !== 2) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    dispatch(getUserAll())
  }, [])

  function changeRoleUser(data) {
    dispatch(setRoleUser(data))
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.aside}>
          <h3>SETTING</h3>
        </div>
        <div className={styles.content}>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Posts</th>
            </tr>
            {getUsers?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td>
                    <select
                      onChange={(e) => {
                        const edite = {
                          id: user.id,
                          role_id: e.target.value,
                        }
                        changeRoleUser(edite)
                      }}
                    >
                      <option value={1} selected={user.role_id === 1}>
                        User
                      </option>
                      <option value={2} selected={user.role_id === 2}>
                        Admin
                      </option>
                    </select>
                  </td>
                  <td>{user.countPosts}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Setting
