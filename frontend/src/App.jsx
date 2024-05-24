import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import "./styles/app.scss"
import Home from './components/home/Home'
import Contact from './components/contact/Contact.jsx'
import Footer from "./components/layout/Footer"
import Header from './components/layout/Header'
import Cart from './components/cart/Cart.jsx'



import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/menu.scss"
import "./styles/founder.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"






function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>  
        <Route path="/cart" element={<Cart/>}/>      

        
        </Routes>
    <Footer/>

    </Router>
  )
}

export default App
