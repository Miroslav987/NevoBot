import { useProfileStore } from '@entities/profile/model/store'
import { RouterPath } from '@shared/routing/path'
import { Navigate, Outlet } from 'react-router-dom'

export const RequireAuth = () => {
  const { user } = useProfileStore()


  if (!user?.access_token) {
    return <Navigate to={RouterPath.LOGIN} replace />
  }

  return <Outlet />

}
