import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Banner1, Banner2, Banner3 } from '~/Images';
import './Home.css'; // Đảm bảo rằng bạn đã tạo các lớp CSS cần thiết trong Home.css
import { ArrowWhiteLeft, ArrowWhiteRight } from '~/component/Icon';
import BannerHome from '~/component/Layout/Banner/BannerHome';

const Home = () => {
    const sliderRef = useRef<Slider | null>(null); // Dùng useRef để lưu trữ tham chiếu đến slider

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const CustomArrowNext = (props: any) => {
        return (
            <div
                {...props}
                className="customNextBtn"
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '60px',
                    color: 'red',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={handleNextClick}
            >
                <ArrowWhiteRight />
            </div>
        );
    };

    const CustomArrowPrev = (props: any) => {
        return (
            <div
                {...props}
                className="customPrevBtn"
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '60px',
                    color: 'red',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={handlePrevClick}
            >
                <ArrowWhiteLeft />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomArrowNext />,
        prevArrow: <CustomArrowPrev />,
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
