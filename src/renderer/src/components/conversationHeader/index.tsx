import styles from './index.module.scss'
import { useState } from 'react'

export default function () {

  const [conversationInfo, setConversationInfo] = useState({
    conversationTitle: '丁税研习社-浙江分社 1',
    conversationDesc: '由企业微信用户创建的外部群，含 215 位外部联系人|群主：小麦由企业微信用户创建的外部群，含 215 位外部联系人|群主：小麦由企业微信用户创建的外部群，含 215 位外部联系人|群主：小麦由企业微信用户创建的外部群，含 215 位外部联系人|群主：小麦由企业微信用户创建的外部群，含 215 位外部联系人|群主：小麦',
  })

  return <div className={styles.conversationHeader}>
    <div className={styles.conversationTitleArea}>
      <div className={styles.conversationTitle}>{conversationInfo.conversationTitle}</div>
      <div className={styles.conversationDesc}>{conversationInfo.conversationDesc}</div>
    </div>
    <div className={styles.conversationOperationArea}>
      <div className={`${styles.conversationOperationMore} iconfont icon-guanlizhongxin-shezhi-01`}></div>
      <div className={`${styles.conversationOperationAdd} iconfont icon-a-zhanghao1`}></div>
    </div>
  </div>
}
