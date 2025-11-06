import { Outlet } from 'react-router-dom'

import SideBar from '@widgets/SideBar'
import { useProfileStore } from '@entities/profile/model/store'

import Loading from '@shared/ui/Loading/Loading'
import ModalProvider from '@shared/context/ModalProvider'
import Cookies from 'js-cookie'
import { settingCook } from '@shared/config/cookies/cookies'


const App = () => {
      Cookies.set('access_token', 'erferferferf', settingCook)
      Cookies.set('user_id',  'ererr', settingCook)
      Cookies.set('username',  'Nevo Devs', settingCook)
      Cookies.set('email', 'Mouyyufufyy', settingCook)
  const { user, isLoading, isError } = useProfileStore()
  
  if (isLoading) return <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}><Loading/></div> 
  if (isError) return <div>Ошибка при загрузке данных</div>



  return (
    <ModalProvider>
    <div className="container" style={{ display: 'flex', gap: '40px' }}>
      {user?.access_token && <SideBar />}
      <main>
        <Outlet />
      </main>
    </div>
    </ModalProvider>
  )
}

export default App
