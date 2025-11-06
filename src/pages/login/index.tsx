


import AppLogo from '@shared/ui/AppLogo'

import styles from './styles.module.scss'
import { useProfileStore } from '@entities/profile/model/store'
import { Navigate } from 'react-router-dom'
import LoginForm from '@entities/profile/ui/LoginFrom/LoginForm'

const Login = () => {
  const { user } = useProfileStore()
  
  if (user?.access_token) {
    return <Navigate to="/profile" replace />
  }
  return (
    <div className={styles.login}>
      <AppLogo />
      <LoginForm/>
    </div>
  )
}

export default Login
