import { MenuProps } from 'antd'

import { RouterPath } from '@shared/routing/path'
import Icon from '@shared/ui/Icon'
import { useProfileStore } from '@entities/profile/model/store'

type MenuItem = Required<MenuProps>['items'][number]

export const useNavItems = (): MenuItem[] => {
  const {Logout} = useProfileStore()

  return [
    {
      label: 'Профиль',
      icon: <Icon name="user" />,
      key: RouterPath.ROOT,
    },
    {
      label: 'Пользователи',
      icon: <Icon name="users" />,
      key: RouterPath.USERS,
    },
    {
      label: 'Боты',
      icon: <Icon name="bot" />,
      key: RouterPath.BOTS,
    },
    {
      label: 'Сервера',
      icon: <Icon name="server" />,
      key: RouterPath.SERVERS,
    },
    {
      label: 'Выход',
      icon: <Icon name="exit" />,
      key: 'logout',
      onClick: () => Logout(),
    },
  ]
}
