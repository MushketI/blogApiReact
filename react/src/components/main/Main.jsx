import { Link } from "react-router-dom"
import styles from "./main.module.scss"
import Posts from "../post/posts/Posts"

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.aside}>
          <Link to={"/create"}>
            <button>Created post</button>
          </Link>
        </div>
        <div className={styles.content}>
          <Posts />
        </div>
      </div>
    </div>
  )
}

export default Main
