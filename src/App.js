import React from 'react';
import {
    BrowserRouter as Router ,
    Routes ,
    Route
}
from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginComponent from './components/auth/LoginComponent';
import SignUpComponent from './components/auth/SignUpComponent';


function App() {
    return (
        <>
        <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginComponent/>} />
                <Route exact path='/auth/signup' element={<SignUpComponent/>} />

            </Routes>
        </Router>
        </>
    );
}

export default App;