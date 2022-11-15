import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {logoutUserThunk} from '../../services/actions/user'
import {Navigate} from 'react-router-dom'

const LogoutPage = () => {
  const {user} = useSelector(store => store.user)
  const dispatch = useDispatch()
  const refreshToken = useSelector(store => store.user.refreshToken)

  useEffect(() => {
    dispatch(logoutUserThunk(refreshToken))
  }, [dispatch])

  if (!user.name) {
    return <Navigate to='/' />
  }
}

export default LogoutPage