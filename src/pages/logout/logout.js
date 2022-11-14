import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {logoutUserThunk} from '../../services/actions/user'

const LogoutPage = () => {
  const dispatch = useDispatch()
  const refreshToken = useSelector(store => store.user.refreshToken)

  useEffect(() => {
    dispatch(logoutUserThunk(refreshToken))
  }, [dispatch])
}

export default LogoutPage