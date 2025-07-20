import styles from './index.module.scss'

export default function TextMessage({ message }) {
  return <div className={styles.textMessage}>{message.content}</div>
}
