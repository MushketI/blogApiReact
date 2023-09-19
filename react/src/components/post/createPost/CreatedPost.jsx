import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createPost, setResponse } from "../../../store/slices/postSlices"
import styles from "./createdPost.module.scss"

function CreatedPost() {
  const [title, setTitle] = useState("Mushket")
  const [content, setContent] = useState(
    "Laravel is a web application framework with expressive, elegant syntax."
  )
  const [published, setPublished] = useState(true)

  const dispatch = useDispatch()
  const response = useSelector((state) => state.post.response)

  function onSubmitPost(e) {
    e.preventDefault()

    const data = {
      title,
      content,
      active: published,
    }

    dispatch(createPost(data))
  }

  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(setResponse(null))
    }, 8000)

    return () => {
      clearTimeout(time)
    }
  }, [response])

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {response && (
          <div className={styles.alert}>
            <span>{response.message}</span>
          </div>
        )}

        <h3>Created new Post</h3>

        <form onSubmit={onSubmitPost}>
          <label>Title</label>
          <input
            type="text"
            name={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Content</label>
          <textarea
            type="text"
            name={content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className={styles.published}>
            <input
              type="checkbox"
              checked={published}
              onChange={() => setPublished(!published)}
            />
            <span>I have a published</span>
          </div>
          <button>Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreatedPost
