import styles from './index.module.scss'

export default function MessageItem({ message }: { message: string }) {
  return <div className={styles.messageItem}>
    <div className={styles.senderAvatar}>
      头像
    </div>
    <div className={styles.messageContent}>
      <div className={styles.messageSenderName}>
        张三
      </div>
      <div className={styles.messageContentSelf}>
        {message}
      </div>
    </div>
  </div>
}
