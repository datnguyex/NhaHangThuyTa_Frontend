import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from 'antd/es/layout/layout';
import Footer from './component/Layout/Footer/Footer';
import Home from './Page/Home/Home';
import Menu from './Page/Menu/Menu';
import ThuyenRong from './Page/BanquestHall/ThuyenRong/ThuyenRong';
import NganSen from './Page/BanquestHall/NganSen/NganSen';
import KimSen from './Page/BanquestHall/KimSen/KimSen';
import ThanhSen from './Page/BanquestHall/ThanhSen/ThanhSen';
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="hall-thuyenRong" element={<ThuyenRong />} />
                <Route path="hall-nganSen" element={<NganSen />} />
                <Route path="hall-kimSen" element={<KimSen />} />
                <Route path="hall-ThanhSen" element={<ThanhSen />} />
            </Routes>
        </Router>
    );
}
