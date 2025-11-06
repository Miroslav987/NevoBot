
import { useProfileStore } from '@entities/profile/model/store'
import { LoginType } from '@entities/profile/model/type'
import { SubmitHandler, useForm,  } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
  const navigate = useNavigate()
  const { Login } = useProfileStore()
  const { register, handleSubmit } = useForm<any>()

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    if (typeof Login === 'function') {
      Login(data,navigate)
    }
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        {' '}
        <span>Username</span> <input {...register('username')} />
      </label>
      <label>
        {' '}
        <span>Password</span> <input {...register('password')} />
      </label>
      <button type="submit">Отправить</button>
    </form>
  )
}

export default LoginForm
