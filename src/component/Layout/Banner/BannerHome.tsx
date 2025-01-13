import { Link } from 'react-router-dom';
import { MainLogo } from '~/Images';

interface BannerHomeProps {
    bannerImg: string;
}

function BannerHome({ bannerImg }: BannerHomeProps) {
    return (
        <div className="slider-item relative">
            <img className="object-cover w-full h-full" src={bannerImg} alt="banner" />
            <p
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                    xs:w-[90%] lg:w-[65%] h-[70%] flex flex-col items-center justify-center gap-5"
            >
                <p className="relative">
                    <p className="lg:w-[180px] xs:w-[90px] xs:h-[90px] lg:h-[180px]">
                        <img className="w-full h-full object-contain" src={MainLogo} alt="Main Logo" />
                    </p>
                </p>

                <p className="text-center flex flex-col gap-5">
                    <div>
                        <p className="text-white font-bold font-['MTD Valky Bold'] uppercase xs:text-[22px] lg:text-[40px] xs:leading-[26px] lg:leading-[52px]">
                            Chào mừng đến với
                            <br />
                        </p>
                        <p className="text-white font-bold font-['MTD Valky Bold'] uppercase xs:text-[22px] lg:text-[40px] xs:leading-[26px] lg:leading-[52px]">
                            nhà hàng Thủy Tạ Đầm Sen
                            <br />
                        </p>
                    </div>

                    <p className="xs:text-[17px] lg:text-[24px] text-center text-white font-normal font-['Manrope']">
                        Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh tiệc. Có thể đáp
                        ứng nhu cầu lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc biệt, nhà hàng Thủy Tạ còn có vị trí
                        tổ chức tiệc ngoài trời tại Quảng trường La Mã (CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000.
                        Đây là vị trí lý tưởng để các quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới,
                        sinh nhật...
                    </p>
                </p>
                <Link
                    to={'/menu'}
                    className="cursor-pointer lg:py-[17px]  xs:px-[100px] mt-[100px] lg:px-[117px] bg-white rounded-[9px] flex justify-center items-center"
                >
                    <p className="text-center text-[#c75d15] xs:py-[12px] xs:text-[16px] lg:text-[26px] font-bold font-['Manrope']">
                        Tìm hiểu ngay
                    </p>
                </Link>
            </p>
        </div>
    );
}

export default BannerHome;
