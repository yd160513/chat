import { useSelector } from 'react-redux'
import { selectValue } from '@renderer/store/mainSlice'
import styles from './index.module.scss'
import MessageItem from '@renderer/components/messageItem'
import Navbar from '@renderer/components/navbar'
import ConversationList from '@renderer/components/conversationList'

export default function Layout() {
  const value: string = useSelector(selectValue)

  return (
    <div className={styles.layout}>
      <div className={styles.navbarArea}>
        <Navbar />
      </div>
      <div className={styles.main}>
        <div className={styles.conversationListArea}>
          <ConversationList />
        </div>
        <div className={styles.conversation}>
          <div className={styles.conversationHeader}></div>
          <div className={styles.conversationBottom}>
            <div className={styles.conversationMessageContent}>
              <div className={styles.conversationMessageListArea}>
                <div className={styles.conversationMessageList}>
                  <MessageItem message={value}></MessageItem>
                </div>
              </div>
              <div className={styles.conversationMessageInput}>
                <input type="text" placeholder="请输入消息" />
                <button>发送</button>
              </div>
            </div>
            <div className={styles.conversationInfo}>会话信息</div>
          </div>
        </div>
      </div>
    </div>
  )
}
