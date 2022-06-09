
import React, {useState } from 'react'
import Header from './components/Header'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import 'rodal/lib/rodal.css';
import LoginPage from './pages/Login';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import CartContext from './store/cartContext';
import SearchResult from './components/SearchResult';
import Footer from './components/Footer';
import PaymentForm from './pages/PaymentForm';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
    const [cartOpen, setCartOpen] = useState(false)
    const [data, setData] = useState({})

    const cartHandler = () => {
        setCartOpen(cartOpen=>!cartOpen)
    }

    const addData = (data) => {
        setData(data)
    }

    // const addData = useCallback((filteredData) => {
    //      setData(filteredData)
    // },[data])

    return <CartContext.Provider value={{
        cartOpen: cartOpen,
        cartFunc: cartHandler,
        filteredData: data,
        dataHandler:addData
        
    }}>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<PaymentForm />} />
            
       
            <Route path = '/search' element={<SearchResult />} />

        </Routes>
        <Footer />


    </CartContext.Provider>

}



export default App