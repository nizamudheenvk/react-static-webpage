import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './Landing'
import Home from './Home'


function App() {
  return (
   <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
  
<Footer/>

</>
  )
}

export default App
