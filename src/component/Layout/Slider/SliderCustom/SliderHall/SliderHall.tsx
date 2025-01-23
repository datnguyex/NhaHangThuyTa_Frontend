import Slider from 'react-slick';
import { TypeSliderThuyenRong } from '~/component/Type';

const SliderHall: React.FC<TypeSliderThuyenRong> = ({ sliderData, settings }) => {
    const dataArray = Array.isArray(sliderData) ? sliderData : Object.values(sliderData);

    return (
        <div className="w-full h-auto mb-[50px]">
            <Slider {...settings}>
                {dataArray.map((item: any, index) => (
                    <div
                        key={index}
                        className="w-full flex justify-center items-center px-[3px] outline-none border-none cursor-pointer"
                    >
                        <img className="object-cover w-[100%] h-[230px]" src={item.imageSrc} alt={item.title} />
                        <div className="justify-between w-full items-start inline-flex">
                            <div className="text-[#c75d15] xs:text-[14px] lg:text-[20px] font-bold font-['Manrope'] leading-[22.86px]">
                                {item.title}
                            </div>
                            <div className="justify-start items-center gap-1 flex">
                                <div className="relative" />
                                <div className="text-right text-[#666666] xs:text-[14px] lg:text-[20px] font-normal font-['Manrope'] leading-normal">
                                    {item.date}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderHall;
