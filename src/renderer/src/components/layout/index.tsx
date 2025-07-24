import { useSelector } from 'react-redux'
import { selectValue } from '@renderer/store/mainSlice'
import styles from './index.module.scss'
import Navbar from '@renderer/components/navbar'
import ConversationList from '@renderer/components/conversationList'
import ConversationHeader from '@renderer/components/conversationHeader'
import ConversationMessage from '@renderer/components/conversationMessage'
import ConversationInput from '@renderer/components/conversationInput'

export default function Layout() {
  const value: number = useSelector(selectValue)

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
          <div className={styles.conversationHeaderArea}>
            <ConversationHeader />
          </div>
          <div className={styles.conversationBottom}>
            <div className={styles.conversationMessageContent}>
              <div className={styles.conversationMessageList}>
                <ConversationMessage conversationId={value} />
              </div>
              <div className={styles.conversationInputArea}>
                <ConversationInput />
              </div>
            </div>
            <div className={styles.conversationInfo}>会话信息</div>
          </div>
        </div>
      </div>
    </div>
  )
}
