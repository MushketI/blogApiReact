import styles from "./post.module.scss"

function Post({ title, content, author, published_at }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={styles.info}>
          <span>{author}</span>
          <span>{published_at}</span>
        </div>
      </div>
    </div>
  )
}

export default Post
