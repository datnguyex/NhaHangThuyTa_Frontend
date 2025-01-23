import Slider from 'react-slick';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';

import {
    ThanhSenImg1,
    ThanhSenImg2,
    ThanhSenImg3,
    ThanhSenImg4,
    ThanhSenImg5,
    ThanhSenImg6,
    ThanhSenImg7,
    ThanhSenImg8,
    BannerTitleThanhSen,
    ThanhSenImg10,
    ThanhSenImg11,
    ThanhSenImg12,
    ThanhSenImg13,
    ThanhSenImg14,
    ThanhSenImg15,
    NganSenImg1,
} from '~/Images';
import { ref, get } from 'firebase/database';
import { Databasez } from '~/firebase';
import { useEffect, useState } from 'react';
import SliderHall from '~/component/Layout/Slider/SliderCustom/SliderHall/SliderHall';
import { fetchHallDataExcludingThanhSen } from '~/API/HallAPI';
function ThanhSen() {
    const [DataSliderThanhSen, setDataSliderThanhSen] = useState<any>({});
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHallDataExcludingThanhSen();
            setDataSliderThanhSen(data || {});
        };

        fetchData();
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <>
            <Header />
            <div className="mx-auto relative">
                <div className="xs:h-[270px] lg:h-[500px] w-auto relative">
                    <img className="w-full h-full object-cover" src={BannerTitleThanhSen} alt="" />
                    <div className="xs:w-[90%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] xs:translate-y-[20px] lg:translate-y-[-50%]">
                        <span className="text-white xs:text-[18px] lg:text-[40px] xs:leading-tight lg:leading-[48px] font-bold font-['MTD Valky Bold'] uppercase ">
                            Sảnh
                            <br />
                        </span>
                        <span className=" text-white xs:text-[18px] lg:text-[26px] xs:leading-loose lg:leading-[76.80px]  font-bold font-['MTD Valky Bold'] uppercase leading-[76.80px]">
                            Thanh Sen
                        </span>
                    </div>
                </div>
                <div className="xs:w-[90%] lg:w-[72%] mx-auto xs:mt-[20px] lg:mt-[50px] flex flex-col xs:gap-[12px]">
                    <img className="w-full bg-cover h-auto" src={ThanhSenImg1} alt="" />
                    <div
                        className="text-[#3f3f41] lg:my-[20px] xs:[15px]
                   xs:text-[16px] lg:text-[22px] font-semibold font-['Manrope'] xs:leading-[21px] lg:leading-[30px]"
                    >
                        Là sảnh đẹp nhất với không gian mở hướng ra hồ bán nguyệt của CVVH Đầm Sen. Với diện tích 862m2,
                        sảnh Thanh Sen có thể tiếp 62 bàn (khoảng 750 khách)
                    </div>

                    <div className="text-[#3f3f41] xs:mb-[8px] lg:mb-[15px] xs:text-[16px] xs:leading-[21px] lg:leading-normal text-[18px] font-normal font-['Manrope'] leading-normal">
                        Khác với các sảnh khác, sảnh Thanh Sen có hình cánh cung. Nếu như sảnh Ngân Sen được ví như đài
                        sen, thì sảnh Thanh Sen lại xem như cánh sen hướng ra mặt hồ. Và điểm tô cho “cánh sen” là hai
                        thuyền rồng tượng trưng những búp sen nhô lên lao. Với kiến trúc hình cong, nên không gian bên
                        trong sảnh cũng được thiết kế theo hình cong từ cầu thang cho đến lối vào. Và cả sân khấu cũng
                        được thiết kế hoành tráng bằng hình cong.
                    </div>
                    <div className="flex xs:gap-[5px] lg:gap-[12px] xs:mb-[-5px] lg:mb-[20px]">
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={ThanhSenImg3} alt="" />
                        </div>
                        <div className="w-[40%] gap-[12px] flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={ThanhSenImg4} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={ThanhSenImg5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <img className="w-full h-full" src={ThanhSenImg6} alt="" />
                    </div>
                    <div className="text-[#c75d15] xs:my-[10px] lg:my-[20px] text-[32px] font-bold font-['MTD Valky Bold'] uppercase">
                        Rước dâu bằng thuyền hoa
                    </div>
                    <div className="text-[#3f3f41] xs:mb-[5px] lg:mb-[10px] xs:text-[16px] xs:leading-[21px] lg:leading-normal text-[18px] font-normal font-['Manrope'] leading-normal">
                        Khác với các sảnh khác, sảnh Thanh Sen có hình cánh cung. Nếu như sảnh Ngân Sen được ví như đài
                        sen, thì sảnh Thanh Sen lại xem như cánh sen hướng ra mặt hồ. Và điểm tô cho “cánh sen” là hai
                        thuyền rồng tượng trưng những búp sen nhô lên lao. Với kiến trúc hình cong, nên không gian bên
                        trong sảnh cũng được thiết kế theo hình cong từ cầu thang cho đến lối vào. Và cả sân khấu cũng
                        được thiết kế hoành tráng bằng hình cong.
                    </div>
                    <div className="flex xs:gap-[5px] lg:gap-[12px] xs:mb-[-5px] lg:mb-[20px]">
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={ThanhSenImg7} alt="" />
                        </div>
                        <div className="w-[40%] gap-[12px] flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={ThanhSenImg10} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={ThanhSenImg8} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-full xs:gap-[5px] lg:gap-[10px]">
                        <div className="w-full h-full">
                            <img className="object-cover w-full h-full" src={ThanhSenImg11} alt="" />
                        </div>
                        <div className="w-full h-full">
                            <img className="object-cover w-full h-full" src={ThanhSenImg12} alt="" />
                        </div>
                    </div>
                    <div className="text-[#c75d15] xs:my-[10px] lg:my-[20px] text-[32px] font-bold font-['MTD Valky Bold'] uppercase">
                        Rước dâu bằng thuyền hoa
                    </div>
                    <div className="text-[#3f3f41] xs:mb-[5px] lg:mb-[10px] xs:text-[16px] xs:leading-[21px] lg:leading-normal text-[18px] font-normal font-['Manrope'] leading-normal">
                        Khác với các sảnh khác, sảnh Thanh Sen có hình cánh cung. Nếu như sảnh Ngân Sen được ví như đài
                        sen, thì sảnh Thanh Sen lại xem như cánh sen hướng ra mặt hồ. Và điểm tô cho “cánh sen” là hai
                        thuyền rồng tượng trưng những búp sen nhô lên lao. Với kiến trúc hình cong, nên không gian bên
                        trong sảnh cũng được thiết kế theo hình cong từ cầu thang cho đến lối vào. Và cả sân khấu cũng
                        được thiết kế hoành tráng bằng hình cong.
                    </div>
                    <div className="flex  xs:gap-[5px] lg:gap-[12px] mb-[20px]">
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={ThanhSenImg13} alt="" />
                        </div>
                        <div className="w-[40%] xs:gap-[5px] lg:gap-[12px]  flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={ThanhSenImg14} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={ThanhSenImg15} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="xs:mt-[-20px] lg:mb-[30px]">
                        <div className="text-[#ed7d31] xs:text-[20px] lg:text-[32px] font-bold font-['Manrope']">
                            Các sảnh tiệc khác
                        </div>
                    </div>

                    <div className="w-full h-auto xs:mb-[-30px]">
                        <SliderHall sliderData={DataSliderThanhSen} settings={settings} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ThanhSen;
