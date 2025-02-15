import Slider from 'react-slick';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import { fetchHallDataExcludingKimSen } from '~/API/HallAPI';
import {
    KimSenImg1,
    KimSenImg2,
    KimSenImg3,
    KimSenImg4,
    KimSenImg5,
    KimSenImg6,
    KimSenImg7,
    KimSenImg10,
    KimSenImg8,
    KimSenImg9,
    BannerTitleKimSen,
    KimSenImg11,
} from '~/Images';

import { useEffect, useState } from 'react';
import SliderHall from '~/component/Layout/Slider/SliderCustom/SliderHall/SliderHall';
import { TypeItem } from '~/component/Type';
function KimSen() {
    const [DataSliderKimSen, setDataSliderKimSen] = useState<TypeItem | object>({});
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHallDataExcludingKimSen();
            setDataSliderKimSen(data);
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
                    <img className="w-full h-full object-cover" src={BannerTitleKimSen} alt="" />
                    <div className="xs:w-[90%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] xs:translate-y-[20px] lg:translate-y-[-50%]">
                        <span className="text-white xs:text-[18px] lg:text-[40px] xs:leading-tight lg:leading-[48px] font-bold   font-mtd-valky uppercase ">
                            Sảnh
                            <br />
                        </span>
                        <span className=" text-white xs:text-[18px] lg:text-[26px] xs:leading-loose lg:leading-[76.80px]  font-bold   font-mtd-valky uppercase leading-[76.80px]">
                            hoàng sen - kim sen
                        </span>
                    </div>
                </div>

                <div className="xs:w-[90%] lg:w-[72%] mx-auto xs:mt-[20px] lg:mt-[50px] flex flex-col xs:gap-[12px]">
                    <img className="w-full bg-cover h-auto" src={KimSenImg1} alt="" />
                    <div
                        className="text-[#3f3f41] 
                     xs:text-[16px] lg:text-[22px] font-semibold font-manrope xs:leading-[21px] lg:leading-[30px]"
                    >
                        Là sảnh kết hợp của 2 sảnh nhỏ là Hoàng Sen và Kim Sen. Với sảnh Kim Sen có thể tổ chức 28 bàn
                        (trên dưới 250 khách). Còn với sảnh Hoàng Sen có thể đáp ứng 50 bàn (trên dưới 500 người).
                    </div>
                    <div className="flex items-center w-full  xs:gap-[5px] lg:gap-[12px] ">
                        <div className="w-full h-full">
                            <img className="object-cover w-full h-full" src={KimSenImg2} alt="" />
                        </div>
                        <div className="w-full h-full">
                            <img className="object-cover w-full h-full" src={KimSenImg3} alt="" />
                        </div>
                    </div>
                    <div className="text-[#3f3f41] xs:text-[16px] xs:leading-[21px] lg:leading-normal text-[18px] font-normal font-manrope leading-normal">
                        Sảnh nằm ngay lối vào của cổng số 2 Đầm Sen, có thiết kế Châu Âu sang trọng đẳng cấp. Khi gộp cả
                        Hoàng Sen và Kim Sen để thành Hoàng Kim sen, có thể đáp ứng lượng khách trên dưới 750 người.
                        tương đương 78 bàn.
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-1.5 h-[33px] bg-[#ed7d31]" />
                        <div className="grow shrink basis-0 text-[#c75d15] lg:text-[18px] xs:text-[16px] xs:leading-[21px] lg:leading-normal font-normal font-manrope ">
                            Nếu bạn cần tiếp khoảng 78 bàn (750), hãy chọn sảnh Hoàng Kim Sen nhà hàng Thủy Tạ Đầm Sen.
                            Đồng thời có thể chia thành 2 sảnh nhỏ là Hoàng Sen và Kim Sen.
                        </div>
                    </div>
                    <div className="text-[#3f3f41] xs:text-[16px] xs:leading-[21px] lg:leading-normal text-[18px] font-normal font-manrope leading-normal">
                        Mặc dù diện tích lớn, nhưng thiết kế của sảnh Hoàng Kim Sen hoàn toàn không có cột nhà giữa
                        sảnh. (Điều mà nhiều kiến trúc khác thường mắc phải, hạn chế quan sát, chụp ảnh và ghi hình sự
                        kiện). Đồng thời các kỹ sư của Phuthotourist đã khéo léo thiết kế khung trần sang trọng. Đèn
                        trang trí màu vàng, khiến thực khách luôn cảm thấy không gian ấm cúng. Đồng thời, sân khấu được
                        thiết kế phong cách La Mã, lung linh với đèn led hiện đại phù hợp cho những đôi uyên ương ra mắt
                        hai họ.
                    </div>
                    <div className="flex xs:gap-[5px] lg:gap-[12px] xs:mb-[0px] lg:mb-[20px]">
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={KimSenImg4} alt="" />
                        </div>
                        <div className="w-[40%] xs:gap-[5px] lg:gap-[12px] flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={KimSenImg5} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={KimSenImg6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <img className="w-full h-full" src={KimSenImg7} alt="" />
                    </div>
                    <div className="text-center text-[#ed7d31] text-[22px] font-semibold font-manrope leading-[30px]">
                        Sảnh Hoàng Sen
                    </div>
                    <div className="flex xs:gap-[5px] lg:gap-[12px] xs:mb-[0px] lg:mb-[20px]">
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={KimSenImg8} alt="" />
                        </div>
                        <div className="w-[40%]  xs:gap-[5px] lg:gap-[12px] flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={KimSenImg9} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={KimSenImg10} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto xs:mb-[20px] lg:mb-[50px]">
                        <img className="w-full h-full" src={KimSenImg11} alt="" />
                    </div>

                    <div className="xs:mt-[-20px] lg:mb-[30px]">
                        <div className="text-[#ed7d31] xs:text-[20px] lg:text-[32px] font-bold font-manrope">
                            Các sảnh tiệc khác
                        </div>
                    </div>

                    <div className="w-full h-auto">
                        <SliderHall sliderData={DataSliderKimSen} settings={settings} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default KimSen;
