import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProtectedRoute = ({children}) => {
  const {user} = useSelector(store => store.user)
  const location = useLocation()

  if (!user.name) {
    return <Navigate to='/login' state={{from: location}} />
  }

  return children
}

export default ProtectedRoute