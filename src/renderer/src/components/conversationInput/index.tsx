import styles from './index.module.scss'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { openConversationInfo, setIsOpenConversationInfo } from '@renderer/store/mainSlice'
import { useEffect } from 'react'

const { TextArea } = Input

export default function ConversationInput() {
  const isOpenConversationInfo = useSelector(openConversationInfo)

  const dispatch = useDispatch()

  const openConversationInfoHandle = () => {
    dispatch(setIsOpenConversationInfo(!isOpenConversationInfo))
    window.api.openConversationInfo(isOpenConversationInfo)
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
        <TextArea />
      </div>
    </div>
  )
}
