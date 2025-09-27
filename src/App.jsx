import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Buycredit from './pages/Buycredit'
import  Result  from './pages/Result'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import { AppContext } from './context/AppContext'

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
       <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/buy' element ={<Buycredit/>}/>
        <Route path='/result' element ={<Result/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
