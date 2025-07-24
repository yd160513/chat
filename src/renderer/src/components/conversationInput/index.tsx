import styles from './index.module.scss'
import { Input } from 'antd'

const { TextArea } = Input

export default function ConversationInput() {
  return (
    <div className={styles.conversationInput}>
      <div className={styles.moreOperationArea}>
        <div className={styles.leftArea}>
          <div className={`${styles.operationItem} iconfont icon-a-biaoqing21`}></div>
        </div>
        <div className={styles.rightArea}>
          <div className={`${styles.operationItem} iconfont icon-a-weituo4`}></div>
        </div>
      </div>
      <div className={styles.inputContentArea}>
        <TextArea />
      </div>
    </div>
  )
}
