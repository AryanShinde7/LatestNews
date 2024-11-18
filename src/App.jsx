
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import { useState } from 'react'

function App() {

  const [category, setcategory] = useState("general")


  return (
    <>
    <Navbar setcategory={setcategory}/>
    <NewsBoard category={category}/>
    <Footer/>

    </>
  )
}

export default App
