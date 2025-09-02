import React, { useState } from 'react'
import { Button, Input, Modal, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '@renderer/store/mainSlice'
import styles from './index.module.scss'

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const switchMode = () => {
    setIsLogin(!isLogin)
  }

  const onFinish = (values: any) => {
    console.log('Received values:', values)
    if (!isLogin) {
      // 注册逻辑
      setIsModalVisible(true)
    } else {
      // 登录逻辑
      // 这里应该有实际的认证逻辑，现在我们简单地设置认证状态
      dispatch(setAuthenticated({
        isAuthenticated: true,
        user: { username: values.username }
      }))
      navigate('/chat')
    }
  }

  const handleOk = () => {
    setIsModalVisible(false)
    setIsLogin(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <h2 className={styles.title}>{isLogin ? '用户登录' : '用户注册'}</h2>
        <Form
          form={form}
          name="auth_form"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              rules={[
                { required: true, message: '请确认密码!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('两次输入的密码不一致!'))
                  },
                }),
              ]}
            >
              <Input.Password placeholder="确认密码" />
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isLogin ? '登录' : '注册'}
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.link} onClick={switchMode}>
          {isLogin ? '没有账号？去注册' : '已有账号？去登录'}
        </div>
      </div>

      <Modal
        title="注册成功"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        closable={false}
      >
        <p>恭喜您注册成功！点击确定跳转到登录页面。</p>
      </Modal>
    </div>
  )
}

export default AuthPage
