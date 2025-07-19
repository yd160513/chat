import styles from './index.module.scss'
import { Input } from 'antd'
import { useState } from 'react'
import ahao from './../../assets/image/ahao.png'

export default function ConversationList() {
  const [conversationList, setConversationList] = useState([
    {
      conversationName: '会话名称',
      conversationId: 1,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2分钟前',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称会话名称会话名称会话名称会话名称会话名称会话名称',
      conversationId: 2,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息会话最后一条消息会话最后一条消息会话最后一条消息会话最后一条消息会话最后一条消息会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 3,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 4,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 5,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 6,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 7,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 8,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 9,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 10,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 11,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 12,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 13,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 14,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 15,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 16,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 17,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 18,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 19,
      conversationType: 1,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
    {
      conversationName: '会话名称',
      conversationId: 20,
      conversationType: 0,
      conversationLastMessage: '会话最后一条消息',
      conversationLastMessageTime: '2023-01-01',
      conversationUnreadMessageCount: 1,
      conversationAvatar: ahao
    },
  ])

  return (
    <div className={styles.conversationList}>
      <div className={styles.conversationHeader}>
        <div className={styles.conversationHeaderContent}>
          <div className={styles.searchArea}>
            <Input placeholder="搜索" />
          </div>
          <div className={`${styles.operationBtn} iconfont icon-xinzeng01`}></div>
        </div>
      </div>
      <div className={styles.conversationBody}>
        {conversationList.map((item) => (
          <div className={styles.conversationItem} key={item.conversationId}>
            <div className={styles.conversationAvatarArea}>
              <img src={item.conversationAvatar}  alt={item.conversationName}/>
            </div>
            <div className={styles.conversationInfo}>
              <div className={styles.infoTopArea}>
                <div className={styles.conversationName}>{item.conversationName}</div>
                <div className={styles.conversationLastMessageTime}>
                  {item.conversationLastMessageTime}
                </div>
              </div>
              <div className={styles.infoBottomArea}>
                <div className={styles.conversationLastMessage}>{item.conversationLastMessage}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
