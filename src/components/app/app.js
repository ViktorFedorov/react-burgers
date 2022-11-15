import React from 'react'
import AppHeader from '../app-header/app-header'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import RegisterPage from '../../pages/register/register'
import LoginPage from '../../pages/login/login'
import LogoutPage from '../../pages/logout/logout'
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password'
import MainPage from '../../pages/main/main'
import ResetPasswordPage from '../../pages/reset-password/reset-password'
import ProfilePage from '../../pages/profile/profile'
import NotFound404 from '../../pages/not-found404/not-found404'
import {DndProvider} from 'react-dnd'
import {useSelector} from 'react-redux'
import ProtectedRoute from '../protected-route/protected-route'
import OrderPage from '../../pages/order/order'
import IngredientItem from '../ingredient-item/ingredient-item'

const App = () => {
  return (
    <Router>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' element={<LogoutPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />

          <Route path='/profile' element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />

          <Route path='/profile/orders' element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          } />

          <Route path='/ingredients/:id' element={<IngredientItem />} />

          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </DndProvider>
    </Router>
  )
}

export default App