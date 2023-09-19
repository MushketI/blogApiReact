import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPosts } from "../../../store/slices/postSlices"
import styles from "./posts.module.scss"
import Post from "../post/Post"

function Posts() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const posts = useSelector((state) => state.post.posts)

  console.log("aasd", posts)

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {posts?.map((post) => {
          return <Post key={post.id} {...post} />
        })}
      </div>
    </div>
  )
}

export default Posts
