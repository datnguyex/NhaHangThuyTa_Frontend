import Slider from 'react-slick';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import {
    NganSenImg1,
    NganSenImg2,
    NganSenImg3,
    NganSenImg4,
    NganSenImg5,
    NganSenImg6,
    NganSenImg7,
    BannerTitleNganSen,
    NganSenImg8,
    NganSenImg9,
} from '~/Images';
import { useEffect, useState } from 'react';
import SliderHall from '~/component/Layout/Slider/SliderCustom/SliderHall/SliderHall';
import { fetchHallDataExcludingNganSen } from '~/API/HallAPI';
import { TypeItem } from '~/component/Type';
function NganSen() {
    const [DataSliderNganSen, setDataSliderNganSen] = useState<TypeItem | object>({});
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHallDataExcludingNganSen();
            setDataSliderNganSen(data);
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
                    <img className="w-full h-full object-cover" src={BannerTitleNganSen} alt="" />
                    <div className="xs:w-[90%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] xs:translate-y-[20px] lg:translate-y-[-50%]">
                        <span className="text-white xs:text-[18px] lg:text-[40px] xs:leading-tight lg:leading-[48px] font-bold   font-mtd-valky uppercase ">
                            Sảnh
                            <br />
                        </span>
                        <span className=" text-white xs:text-[18px] lg:text-[26px] xs:leading-loose lg:leading-[76.80px]  font-bold   font-mtd-valky uppercase leading-[76.80px]">
                            Ngân Sen
                        </span>
                    </div>
                </div>
                <div className="xs:w-[90%] lg:w-[72%] mx-auto xs:mt-[20px] lg:mt-[50px] flex flex-col xs:gap-[12px]">
                    <img className="w-full bg-cover h-auto" src={NganSenImg1} alt="" />
                    <div
                        className="text-[#3f3f41] 
                   xs:text-[16px] lg:text-[22px] font-semibold font-manrope xs:leading-[21px] lg:leading-[30px]"
                    >
                        Nếu bạn có nhu cầu tiếp 500 khách, thì sảnh Ngân Sen là lựa chọn hợp lý. Sức chứa của sảnh có
                        thể xếp 37 bàn cho một sự kiện.
                    </div>

                    <div className="text-[#3f3f41] xs:text-[16px] xs:leading-[21px] lg:leading-normal text-[18px] font-normal font-manrope leading-normal">
                        Ngân Sen là một khu tiệc của nhà hàng Thủy Tạ thuộc Công viên văn hóa Đầm Sen (do Phuthotourist
                        quản lý). Đa số thực khách bước vào nhà hàng đều cho rằng đây là sảnh chính. Bởi vị trí của nó
                        nằm trực diện cổng số 2 CVVH Đầm Sen. Điều này không sai, bởi theo kiến trúc, thì sảnh này là vị
                        trí của đài sen nếu nhìn từ trên cao. Còn sảnh Thanh Sen sẽ là cánh hoa tỏa ra trên mặt hồ. Với
                        kiến trúc hình tròn, rộng 402m2, sảnh được trang trí theo phong cách cung đình. Sảnh có một tầng
                        lửng, giúp cho việc ghi hình sự kiện có thêm nhiều góc cạnh khác nhau.
                    </div>
                    <div className="flex xs:gap-[5px] lg:gap-[12px] xs:mb-[-5px] lg:mb-[20px]">
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={NganSenImg2} alt="" />
                        </div>
                        <div className="w-[40%] xs:gap-[5px] lg:gap-[12px] flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={NganSenImg3} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={NganSenImg4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex xs:gap-[5px] lg:gap-[12px] xs:mb-[-5px] lg:mb-[20px]">
                        <div className="w-[40%] xs:gap-[5px] lg:gap-[12px] flex flex-col">
                            <div>
                                <img className="object-cover w-full h-full" src={NganSenImg6} alt="" />
                            </div>
                            <div>
                                <img className="object-cover w-full h-full" src={NganSenImg7} alt="" />
                            </div>
                        </div>
                        <div className="w-[60%]">
                            <img className="object-cover w-full h-full" src={NganSenImg5} alt="" />
                        </div>
                    </div>
                    <div className="flex xs:flex-col items-stretch w-full gap-[10px] xs:mb-[20px] lg:mb-[50px]">
                        <div className="w-full">
                            <img className="object-cover w-auto h-full" src={NganSenImg8} alt="" />
                        </div>
                        <div className="w-full">
                            <img className="object-cover w-auto h-full" src={NganSenImg9} alt="" />
                        </div>
                        <div className="w-full">
                            <img className="object-cover w-auto h-full" src={NganSenImg7} alt="" />
                        </div>
                    </div>

                    <div className="xs:mt-[-20px] lg:mb-[30px]">
                        <div className="text-[#ed7d31] xs:text-[20px] lg:text-[32px] font-bold font-manrope">
                            Các sảnh tiệc khác
                        </div>
                    </div>

                    <div className="w-full h-auto xs:mb-[-30px]">
                        <SliderHall sliderData={DataSliderNganSen} settings={settings} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NganSen;
