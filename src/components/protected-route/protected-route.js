import React from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'

const ProtectedRoute = ({children, ...rest}) => {
  return (
    <Routes>
        <Route
          {...rest}
          render={() => (
            <Outlet />
          )}
        />
    </Routes>
  )
}

export default ProtectedRoute