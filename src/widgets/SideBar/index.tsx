import NavMenu from '@entities/sidebar/ui/NavMenu'

import AppLogo from '@shared/ui/AppLogo'

import styles from './styles.module.scss'

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.logo}>
        <AppLogo />
      </div>
      <nav className={styles.nav}>
        <NavMenu />
      </nav>
    </div>
  )
}

export default SideBar
