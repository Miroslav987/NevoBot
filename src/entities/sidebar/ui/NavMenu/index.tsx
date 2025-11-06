import { useLocation, useNavigate } from 'react-router-dom'

import { Menu } from 'antd'


import styles from './NavNenu.module.scss'
import { useNavItems } from '@entities/sidebar/model/useNavItems'

const NavMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()

  function handleClick({ key }: { key: string }) {
    navigate(key)
  }
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[location.pathname]}
      className={styles.navMenu}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={useNavItems()}
    />
  )
}

export default NavMenu
