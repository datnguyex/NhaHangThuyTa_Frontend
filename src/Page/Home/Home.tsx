import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Banner1, Banner2, Banner3 } from '~/Images';
import './Home.css'; // Đảm bảo rằng bạn đã tạo các lớp CSS cần thiết trong Home.css
import { ArrowWhiteLeft, ArrowWhiteRight } from '~/component/Icon';
import BannerHome from '~/component/Layout/Banner/BannerHome';
import { handlePrevClick, handleNextClick } from '~/component/Layout/Slider/HandleClick';
import { CustomArrowNextHome, CustomArrowPrevHome } from '~/component/Layout/Slider/CustomArrow/CustomArrow';

const Home = () => {
    const sliderRef = useRef<Slider | null>(null); // Dùng useRef để lưu trữ tham chiếu đến slider

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomArrowPrevHome onClick={() => handlePrevClick(sliderRef)} />,
        prevArrow: <CustomArrowNextHome onClick={() => handleNextClick(sliderRef)} />,
    };

    return (
        <div className="w-[100vw] h-[100vh] home-slider">
            <Slider {...settings} ref={sliderRef}>
                <BannerHome bannerImg={Banner1} />
                <BannerHome bannerImg={Banner2} />
                <BannerHome bannerImg={Banner3} />
            </Slider>
        </div>
    );
};

export default Home;
