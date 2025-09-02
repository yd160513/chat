import styles from './index.module.scss'
import { Ref, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '@renderer/store/mainSlice'
import { useNavigate } from 'react-router-dom'

interface NavbarItem {
  name: string
  icon: string
  value: number
}

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const navbarItems = useRef<NavbarItem[]>([
    {
      name: '消息',
      icon: 'icon-a-xiaoxi3',
      value: 0
    },
    {
      name: '邮件',
      icon: 'icon-a-youjian2',
      value: 0
    },
    {
      name: '文档',
      icon: 'icon-a-wendang14',
      value: 0
    },
    {
      name: '工作台',
      icon: 'icon-gongzuotai-04',
      value: 0
    }
  ])

  const [activeItem, setActiveItem] = useState({
    name: '消息',
    icon: 'message-icon',
    value: 0
  })

  const otherItems = useRef([
    {
      name: '管理后台',
      icon: 'icon-guanlizhongxin-shezhi-03',
      value: 0
    },
    {
      name: '更多',
      icon: 'icon-guanlizhongxin-shezhi-04',
      value: 0
    }
  ])

  console.log('activeItem: ', activeItem)

  const [userName, setUserName] = useState('阿豪阿卡阿甘')

  const changeNav = (item: NavbarItem) => {
    if (item.name === activeItem.name) return
    setActiveItem(item)
  }

  const handleLogout = () => {
    dispatch(setAuthenticated({
      isAuthenticated: false,
      user: null
    }))
    navigate('/')
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.userAvatar}>
        <div className={styles.avatar}></div>
        <div className={styles.userName}>{userName}</div>
      </div>

      <div className={styles.navbarItemArea}>
        {navbarItems.current.map((item) => (
          <div
            className={`${styles.navbarItem} ${item.name === activeItem.name ? styles.active : ''}`}
            onClick={() => changeNav(item)}
            key={item.name}
          >
            <div className={`${styles.navbarItemIcon} iconfont ${item.icon}`}></div>
            <div className={styles.navbarItemName}>{item.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.otherOperationArea}>
        {otherItems.current.map((item) => (
          <div className={styles.otherOperationItem} key={item.name}>
            <div className={`${styles.otherOperationItemIcon} iconfont ${item.icon}`}></div>
            <div className={styles.otherOperationItemName}>{item.name}</div>
          </div>
        ))}
        <div className={styles.otherOperationItem} onClick={handleLogout}>
          <div className={`${styles.otherOperationItemIcon} iconfont icon-guanlizhongxin-shezhi-01`}></div>
          <div className={styles.otherOperationItemName}>退出登录</div>
        </div>
      </div>
    </div>
  )
}
