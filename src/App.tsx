
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout Component={HomePage}/>} />
        <Route path='/login' element={<Layout Component={LoginPage}/>} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
