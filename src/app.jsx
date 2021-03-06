
import React, { useState, useContext } from 'react'
import Header from './components/Header'
import { Routes, Route, Navigate } from "react-router-dom";
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
import AuthContext from './store/authContext';
import Error404 from './pages/Error404';
import Head from './components/Head';
import Rodal from 'rodal';
import Cart from './components/Cart';
import VerifyEmail from './pages/VerifyEmail';




function App() {

    var authCtx = useContext(AuthContext)
    var isLoggedIn = authCtx.isLoggedIn
    const cartCtx = useContext(CartContext);

    const [cartOpen, setCartOpen] = useState(false)
    const [data, setData] = useState({})

    const cartHandler = () => {
        setCartOpen(cartOpen => !cartOpen)
    }

    const closeCart = () => {
        setCartOpen(false)
    }

    const addData = (data) => {
        setData(data)
    }

    return <CartContext.Provider value={{
        cartOpen: cartOpen,
        cartFunc: cartHandler,
        filteredData: data,
        dataHandler: addData

    }}>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
            {!isLoggedIn && <Route path="/signup" element={<SignUp />} />}

            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path='/verify' element={<VerifyEmail/>} />
            <Route path='/search' element={<SearchResult />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        <Rodal
            className="modals"
            visible={cartOpen}
            onClose={closeCart}
            closeOnEsc="true"
            animation="slideLeft"
            showMax="true"
        >
            <Cart />
        </Rodal>

    </CartContext.Provider>

}



export default App