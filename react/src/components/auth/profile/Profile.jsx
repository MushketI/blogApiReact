import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getUserPosts,
  postRemove,
  setPostActive,
  setPostEdit,
  setResponse,
} from "../../../store/slices/postSlices"
import styles from "./profile.module.scss"

function Profile() {
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.userPosts)
  const response = useSelector((state) => state.post.response)

  useEffect(() => {
    dispatch(getUserPosts())
  }, [status])

  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(setResponse(null))
    }, 8000)

    return () => {
      clearTimeout(time)
    }
  }, [response])

  function changePostActive(data) {
    dispatch(setPostActive(data))
    setStatus(!status)
  }

  function changePostEdit(data) {
    dispatch(setPostEdit(data))
    setStatus(!status)
  }

  function postDelete(data) {
    dispatch(postRemove(data))
    setStatus(!status)
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h3>Profile</h3>
        <div className={styles.response}>
          {response && <h3>{response.message}</h3>}
        </div>
        <div className={styles.info}>
          <h4>My posts:</h4>
          <table>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Content</th>
              <th>Published</th>
              <th>Delete</th>
              <th>Active</th>
            </tr>
            {posts?.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>
                    <input
                      type="text"
                      defaultValue={post.title}
                      onBlur={(e) => {
                        const data = {
                          id: post.id,
                          title: e.target.value,
                          content: post.content,
                        }
                        changePostEdit(data)
                      }}
                    />
                  </td>
                  <td>
                    <textarea
                      type="text"
                      defaultValue={post.content}
                      onBlur={(e) => {
                        const data = {
                          id: post.id,
                          title: post.title,
                          content: e.target.value,
                        }
                        changePostEdit(data)
                      }}
                    />
                  </td>
                  <td>{post.published_at}</td>
                  <td>
                    <button
                      onClick={() => {
                        postDelete(post.id)
                      }}
                    >
                      x
                    </button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={Boolean(post.active)}
                      onChange={() => {
                        const data = {
                          id: post.id,
                          active: !post.active,
                        }
                        changePostActive(data)
                      }}
                    />
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Profile
