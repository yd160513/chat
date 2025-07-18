import styles from './index.module.scss'
import { Ref, useRef, useState } from 'react'

interface NavbarItem {
  name: string
  icon: string
  value: number
}

export default function Navbar() {
  const navbarItems = useRef<NavbarItem[]>([
    {
      name: '消息',
      icon: 'message-icon',
      value: 0
    },
    {
      name: '邮件',
      icon: 'email-icon',
      value: 0
    },
    {
      name: '文档',
      icon: 'document-icon',
      value: 0
    },
    {
      name: '工作台',
      icon: 'workbench-icon',
      value: 0
    }
  ])

  const activeItem: Ref<NavbarItem> = useRef({
    name: '消息',
    icon: 'message-icon',
    value: 0
  })

  const otherItems = useRef([
    {
      name: '管理后台',
      icon: 'management-icon',
      value: 0
    },
    {
      name: '更多',
      icon: 'more-icon',
      value: 0
    }
  ])

  console.log('activeItem: ', activeItem.current)

  const [userName, setUserName] = useState('阿豪阿卡阿甘')

  return (
    <div className={styles.navbar}>
      <div className={styles.userAvatar}>
        <div className={styles.avatar}></div>
        <div className={styles.userName}>{userName}</div>
      </div>

      <div className={styles.navbarItemArea}>
        {navbarItems.current.map((item) => (
          <div
            className={`${styles.navbarItem} ${item.name === activeItem.current?.name ? styles.active : ''}`}
            key={item.name}
          >
            <div className={styles.navbarItemIcon}></div>
            <div className={styles.navbarItemName}>{item.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.otherOperationArea}>
        {otherItems.current.map((item) => (
          <div className={styles.otherOperationItem} key={item.name}>
            <div className={styles.otherOperationItemIcon}></div>
            <div className={styles.otherOperationItemName}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
