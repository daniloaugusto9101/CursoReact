import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produto from './components/pages/Produto';
import Produtos from './components/pages/Produtos';
import Contato from './components/pages/Contato';
import NotFound from './components/pages/NotFound';


const App = () => {

    return (
        <div className='max-w-3xl m-auto'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/' element={<Produtos />} />
                    <Route path='produto/:id' element={<Produto />} />
                    <Route path='contato' element={<Contato />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
