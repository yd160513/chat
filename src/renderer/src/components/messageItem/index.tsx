import styles from './index.module.scss'
import TextMessage from '@renderer/components/messageType/textMessage/index'

export default function MessageItem({ message }) {
  return (
    <div className={`${styles.messageItem} ${message.isSelf ? styles.messageOneself : ''}`}>
        <div className={styles.senderAvatar}>
          <img src={message.userAvatar} alt="" />
        </div>
      <div className={styles.messageContent}>
        <div className={styles.messageSenderName}>{message.userNickname}</div>
        <div className={styles.messageContentSelf}>
          <TextMessage message={message} />
        </div>
      </div>
    </div>
  )
}
