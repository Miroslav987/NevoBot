// import axios from 'axios'

// export const axiosInstance = axios.create({
//   baseURL: 'http://159.203.173.83:8000/api',
//     headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   }
// })

import axios from 'axios';
import { useProfileStore } from '@entities/profile/model/store';
import { message } from 'antd';

export const axiosInstance = axios.create({
  baseURL: '/api', // оставляем, чтобы фронт делал /api/... и прокси срабатывал
  headers: {
    'Content-Type': 'application/json', // JSON по умолчанию
  },
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const { Logout } = useProfileStore.getState()
      Logout()
      message.info('В целях безопастности пожалуста войдите в систему заново');
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)