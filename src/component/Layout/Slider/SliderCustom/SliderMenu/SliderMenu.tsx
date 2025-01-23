import React from 'react';
import Slider from 'react-slick';

// Props cho CustomSlider component
interface CustomSliderProps {
    settings: any;
    currentMenu: any[];
    sliderRef: React.RefObject<Slider | null>;
}

const SliderMenu: React.FC<CustomSliderProps> = ({ settings, currentMenu, sliderRef }) => {
    return (
        <Slider {...settings} ref={sliderRef}>
            {currentMenu.map((item: any, index: number) => (
                <div
                    key={index}
                    className="flex lg:h-[270px] xs:[80px] flex-col mx-[10px] px-[9px] pb-[10px] rounded-2xl slick-current-child"
                >
                    <img className="w-auto mx-auto max-h-[84%] object-fit" src={item.img} alt={item.title} />
                    <div className="text-center flex justify-center items-center h-[20%] text-[#3f3f41] xs:text-[17px] lg:text-[21px] font-normal font-['MJ Satoshi']">
                        {item.title}
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default SliderMenu;
