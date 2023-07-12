import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Animation from './components/animation/Animation'
import NoutFound from './components/pages/NoutFound'
import Header from './components/pages/Header';
import Sobre from './components/pages/Sobre';
import Produto from './components/pages/Produto';

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='sobre' element={<Sobre />} />
                <Route path='animation' element={<Animation />} />
                <Route path='produto/:id' element={<Produto />} />
                <Route path='*' element={<NoutFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
