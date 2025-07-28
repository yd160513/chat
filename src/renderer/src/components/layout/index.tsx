import { useDispatch, useSelector } from 'react-redux'
import { currentConversationId, openConversationInfo } from '@renderer/store/mainSlice'
import styles from './index.module.scss'
import Navbar from '@renderer/components/navbar'
import ConversationList from '@renderer/components/conversationList'
import ConversationHeader from '@renderer/components/conversationHeader'
import ConversationMessage from '@renderer/components/conversationMessage'
import ConversationInput from '@renderer/components/conversationInput'
import ConversationInfo from '@renderer/components/conversationInfo'
import { useEffect } from 'react'
import { initWebsocket } from '@renderer/utils/websocketManager'

export default function Layout() {
  const dispatch = useDispatch()

  const conversationId: number = useSelector(currentConversationId)
  const isOpenConversationInfo = useSelector(openConversationInfo)

  useEffect(() => {
    console.log('初始化 socket 连接')
    // 初始化 socket 连接
    dispatch(initWebsocket())
  }, [dispatch])

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
                <ConversationMessage conversationId={conversationId} />
              </div>
              <div className={styles.conversationInputArea}>
                <ConversationInput />
              </div>
            </div>
            {isOpenConversationInfo && <ConversationInfo />}
          </div>
        </div>
      </div>
    </div>
  )
}
