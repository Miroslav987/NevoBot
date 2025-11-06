import Icon from '../Icon'

import styles from './AppLogo.module.scss'

const AppLogo = () => {
  return (
    <div className={styles.appLogo}>
      <Icon name="logo" width={100} height={50} />
    </div>
  )
}

export default AppLogo
