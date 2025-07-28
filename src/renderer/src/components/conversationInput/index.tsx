import styles from './index.module.scss'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { openConversationInfo, setIsOpenConversationInfo } from '@renderer/store/mainSlice'
import { useState } from 'react'
import { sendMessage } from '@renderer/utils/websocketManager'
import ahao from './../../assets/image/ahao.png'

const { TextArea } = Input

export default function ConversationInput() {
  const isOpenConversationInfo = useSelector(openConversationInfo)

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const openConversationInfoHandle = () => {
    dispatch(setIsOpenConversationInfo(!isOpenConversationInfo))
    window.api.openConversationInfo(isOpenConversationInfo)
  }

  const sendMessageHandle = () => {
    const message = {
      id: Date().valueOf(),
      content: value,
      conversationId: Date().valueOf(),
      userAvatar: ahao,
      userNickname: '张三',
      // isSelf: true
    }
    console.log('message: ', message)
    // dispatch(sendMessage(value))
    dispatch(sendMessage(message))
    setValue('')
  }

  return (
    <div className={styles.conversationInput}>
      <div className={styles.moreOperationArea}>
        <div className={styles.leftArea}>
          <div className={`${styles.operationItem} iconfont icon-a-biaoqing21`}></div>
        </div>
        <div className={styles.rightArea}>
          <div
            onClick={openConversationInfoHandle}
            className={`${styles.operationItem} iconfont icon-a-weituo4`}
          ></div>
        </div>
      </div>
      <div className={styles.inputContentArea}>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="请输入内容"
          onPressEnter={sendMessageHandle}
        />
      </div>
    </div>
  )
}
