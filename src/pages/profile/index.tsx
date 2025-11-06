import ListPromtBlock from '@entities/bot/ui/ListPromtBlock/ListPromtBlock'
import QRBot from '@entities/bot/ui/QRBot/QRBot'
import SettingsForm from '@entities/bot/ui/SettingsForm/SettingsForm'
import { useProfileStore } from '@entities/profile/model/store'
import StatusLead from '@entities/users/ui/StatusLead/StatusLead'

import styles from './styles.module.scss'
import TableProducts from '@entities/products/ui/TableProducts/TableProducts'

const Profile = () => {
  const { user } = useProfileStore()

  return (
    <div className={styles.user}>
      <div className={styles.userBlock}>
        <p className={styles.name}>{user?.username}</p>
        <QRBot />
      </div>
      <br />
      <ListPromtBlock />
      <SettingsForm />
      <br />

      <h2>Продукты</h2>
      <br />
      <TableProducts/>
      <br />
      <h2>Заказы</h2>
      <br />
      {/* <TableOrders /> */}
      {/* <br /> */}
      <StatusLead />
    </div>
  )
}

export default Profile
