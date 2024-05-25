import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import "./styles/app.scss"
import Home from './components/home/Home'
import Contact from './components/contact/Contact.jsx'
import Footer from "./components/layout/Footer"
import Header from './components/layout/Header'
import Cart from './components/cart/Cart.jsx'
import Shipping from "./components/shipping/Shipping.jsx"
import ConfirmOrder from "./components/shipping/ConfirmOrder.jsx"
import PaymentSuccess from "./components/cart/PaymentSuccess.jsx"
import Login from "./components/login/Login.jsx"
import Profile from "./components/profile/Profile.jsx"
import MyOrders from "./components/orders/MyOrders.jsx"
import OrderDetails from "./components/orders/OrderDetails.jsx"
import Dashboard from "./components/admin/Dashboard.jsx"
import Users from "./components/admin/Users.jsx"
import Orders from "./components/admin/Orders.jsx"
import About from "./components/about/About.jsx"
import NotFound from "./components/layout/NotFound.jsx"








import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/menu.scss"
import "./styles/founder.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confirmOrder.scss"
import "./styles/paymentSuccess.scss"
import "./styles/login.scss"
import "./styles/profile.scss"
import "./styles/table.scss"
import "./styles/orderDetails.scss"
import "./styles/dashboard.scss"
import "./styles/about.scss"















function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>  
        <Route path="/cart" element={<Cart/>}/>      
        <Route path="/shipping" element={<Shipping/>}/> 
        <Route path="/confirmorder" element={<ConfirmOrder/>}/>  
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/> 
        <Route path="/login" element={<Login/>}/>   
        <Route path="/me" element={<Profile/>}/> 
        <Route path="/myorders" element={<MyOrders/>}/> 
        <Route path="/order/:id" element={<OrderDetails/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/> 
        <Route path="/admin/users" element={<Users/>}/> 
        <Route path="/admin/orders" element={<Orders/>}/> 
        <Route path="/about" element={<About/>}/> 


        <Route path="*" element={<NotFound/>} />


        </Routes>
    <Footer/>

    </Router>
  )
}

export default App
