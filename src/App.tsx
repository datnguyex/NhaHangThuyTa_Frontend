import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from 'antd/es/layout/layout';
import Footer from './component/Layout/Footer/Footer';
import Home from './Page/Home/Home';
import Menu from './Page/Menu/Menu';
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Menu />} />
            </Routes>
        </Router>
    );
}
