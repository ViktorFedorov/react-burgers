import React from 'react'
import AppHeader from '../app-header/app-header'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import RegisterPage from '../../pages/register/register'
import LoginPage from '../../pages/login/login'
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password'
import MainPage from '../../pages/main/main'
import ResetPasswordPage from '../../pages/reset-password/reset-password'
import {DndProvider} from 'react-dnd'

const App = () => {
  return (
    <Router>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
        </Routes>
      </DndProvider>
    </Router>
  )
}

export default App