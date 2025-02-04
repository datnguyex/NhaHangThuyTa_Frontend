import Slider from 'react-slick';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import SliderHall from '~/component/Layout/Slider/SliderCustom/SliderHall/SliderHall';
import {
    BannerTitleThuyenRong,
    ThuyenRongImg1,
    ThuyenRongImg2,
    ThuyenRongImg3,
    ThuyenRongImg4,
    ThuyenRongImg5,
    ThuyenRongImg6,
    ThuyenRongImg7,
} from '~/Images';
import { useEffect, useState } from 'react';
import { fetchHallDataExcludingThuyenRong } from '~/API/HallAPI';
import { TypeItem } from '~/component/Type';

function ThuyenRong() {
    const [DataSliderThuyenRong, setDataSliderThuyenRong] = useState<TypeItem | object>({});

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

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHallDataExcludingThuyenRong();
            setDataSliderThuyenRong(data || {}); // Đảm bảo DataSliderThuyenRong là đối tượng hợp lệ
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className="mx-auto relative">
                <div className="xs:h-[270px] lg:h-[500px] w-auto relative">
                    <img className="w-full h-full object-cover" src={BannerTitleThuyenRong} alt="" />
                    <div className="xs:w-[90%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] xs:translate-y-[20px] lg:translate-y-[-50%]">
                        <span className="text-white xs:text-[18px] lg:text-[40px] xs:leading-tight lg:leading-[48px] font-bold   font-mtd-valky uppercase ">
                            thuyền rồng
                            <br />
                        </span>
                        <span className=" text-white xs:text-[18px] lg:text-[26px] xs:leading-loose lg:leading-[76.80px]  font-bold   font-mtd-valky uppercase leading-[76.80px]">
                            kim long - hoàng long
                        </span>
                    </div>
                </div>
                <div className="xs:w-[90%] lg:w-[72%] mx-auto xs:mt-[20px] lg:mt-[50px] flex flex-col xs:gap-[12px]">
                    <img className="w-full bg-cover h-auto" src={ThuyenRongImg1} alt="" />
                    <div className="text-[#3f3f41] xs:text-[16px] lg:text-[22px] font-semibold font-manrope xs:leading-[21px] lg:leading-[30px]">
                        Điểm đập vào mắt du khách khi đến tham công viên văn hóa Đầm Sen, là hai chiếc thuyền rồng ngạo
                        nghễ rướn thân mình hướng ra giữa lòng hồ. Đây là hai sảnh của nhà hàng Thủy Tạ Đầm Sen có tên
                        gọi Kim Long và Hoàng Long.
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-1.5 h-[33px] bg-[#ed7d31]" />
                        <div className="grow shrink basis-0 text-[#c75d15] lg:text-[18px] xs:text-[16px] xs:leading-[21px] lg:leading-normal font-normal font-manrope ">
                            Nếu bạn có nhu cầu tiếp từ 140 đến 180 khách, thì hai sảnh thuyền rồng (Kim Long và Hoàng
                            Long) là lựa chọn số 1 dành cho bạn.
                        </div>
                    </div>
                    <div className="text-[#3f3f41] xs:text-[16px] xs:leading-[21px] lg:leading-normal text-[18px] font-normal font-manrope leading-normal">
                        Ngoài ra, 2 chiếc thuyền rồng cũng tượng trưng cho 2 búp sen điểm tô bên cánh hoa Thanh Sen,
                        hướng ra hồ. Thông thường, các thực khách riêng lẻ và gia đình thường chọn hai sảnh thuyền rồng
                        này làm tiệc sinh nhật gia đình, gặp gỡ bạn bè, hoặc tiếp khách ngoại giao. Đây cũng là vị trí
                        đẹp để du khách có thể xem bắn pháo hoa tại Công viên văn hóa Đầm Sen vào những dịp lễ lớn.
                    </div>
                    <div className="flex gap-[12px]">
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={ThuyenRongImg2} alt="" />
                        </div>
                        <div className="w-[40%] gap-[12px] flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={ThuyenRongImg3} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={ThuyenRongImg4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[12px] xs:mt-[20px] lg:mb-[50px]">
                        <div className="w-[40%] gap-[12px] flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={ThuyenRongImg6} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={ThuyenRongImg7} alt="" />
                            </div>
                        </div>
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={ThuyenRongImg5} alt="" />
                        </div>
                    </div>
                    <div className="xs:mg-[10px] lg:mb-[30px]">
                        <div className="text-[#ed7d31] xs:text-[20px] lg:text-[32px] font-bold font-manrope">
                            Các sảnh tiệc khác
                        </div>
                    </div>

                    <div className="w-full h-auto">
                        <SliderHall sliderData={DataSliderThuyenRong} settings={settings} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ThuyenRong;
