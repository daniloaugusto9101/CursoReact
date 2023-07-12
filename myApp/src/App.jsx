import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Produtos from './components/pages/Produtos';
import Contato from './components/pages/Contato';
import NotFound from './components/pages/NotFound';


const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Produtos />} />
                <Route path='contato' element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
