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
import PromotionWeddingParty from './Page/PromotionWeddingParty/PromotionWeddingParty';
import ConferenceRoom from './Page/ConferenceRoom/ConferenceRoom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="hall/thuyen-rong" element={<ThuyenRong />} />
                <Route path="hall/ngan-sen" element={<NganSen />} />
                <Route path="hall/kim-sen" element={<KimSen />} />
                <Route path="hall/thanh-sen" element={<ThanhSen />} />
                <Route path="wedding-party-promotion" element={<PromotionWeddingParty />} />
                <Route path="room/conference" element={<ConferenceRoom />} />
            </Routes>
        </Router>
    );
}
