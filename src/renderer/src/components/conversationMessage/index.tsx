import styles from './index.module.scss'
import MessageItem from '@renderer/components/messageItem'
import ahao from './../../assets/image/ahao.png'

export default function ConversationMessage({ conversationId }: { conversationId: number }) {
  console.log('conversationId', conversationId)
  const messageList = [
    {
      id: 1,
      content: '你好',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: true
    },
    {
      id: 2,
      content: '你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: false
    },
    {
      id: 3,
      content: '你好',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: true
    },
    {
      id: 4,
      content: '你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: false
    },
    {
      id: 5,
      content: '你好',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: true
    },
    {
      id: 6,
      content: '你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: false
    },
    {
      id: 7,
      content: '你好',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: true
    },
    {
      id: 8,
      content: '你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: false
    },
    {
      id: 9,
      content: '你好',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: true
    },
    {
      id: 10,
      content: '你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx你好xxxx',
      conversationId: 1,
      userAvatar: ahao,
      userNickname: '张三',
      isSelf: false
    },
  ]

  return (
    <div className={styles.conversationMessage}>
      {messageList.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  )
}
