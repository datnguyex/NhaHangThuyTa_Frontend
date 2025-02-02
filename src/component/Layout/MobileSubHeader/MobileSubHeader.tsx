import { ArrowDown, CloseYellow } from '~/component/Icon';
import { MainLogo } from '~/Images';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MobileSubHeaderProps {
    visibleSubMenu: boolean;
    handleVisible: (visible: boolean) => void;
    site: any;
}

const MobileSubHeader: React.FC<MobileSubHeaderProps> = ({ visibleSubMenu, handleVisible, site }) => {
    const [visibleHall, setVisibleHall] = useState(false);
    const handleVisibleHall = () => {
        setVisibleHall(!visibleHall);
    };

    useEffect(() => {
        if (visibleSubMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [visibleSubMenu]);

    return (
        <>
            <div
                className={`w-[100vw] h-[100vh] bg-[#eeeeee] absolute z-[100] pl-4 
                ${visibleSubMenu ? 'translate-x-0' : '-translate-x-full'} 
                transition-transform duration-500 ease-out`}
            >
                <div className="w-full h-[20%] flex flex-col justify-center relative ">
                    <div className="absolute right-5 top-5 z-[100]">
                        <button onClick={() => handleVisible(false)}>
                            <CloseYellow />
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-[80px] h-[75px]">
                            <img className="w-full h-full object-cover" src={MainLogo} alt="Main Logo" />
                        </div>
                        <div>
                            <span className="text-[#434146] text-[19px] font-bold   font-mtd-valky leading-snug">
                                Nhà hàn
                            </span>
                            <span className="text-[#434146] text-[19px] font-bold   font-mtd-valky leading-snug">
                                g<br />
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold   font-mtd-valky uppercase leading-normal">
                                Thủy
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold   font-mtd-valky uppercase leading-normal">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold   font-mtd-valky uppercase leading-normal">
                                Tạ
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold   font-mtd-valky uppercase leading-normal">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold   font-mtd-valky uppercase leading-normal">
                                Đầm
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold   font-mtd-valky uppercase leading-normal">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold   font-mtd-valky uppercase leading-normal">
                                Sen
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full flex-col justify-start items-start gap-10 inline-flex">
                        <Link
                            to={'/menu'}
                            className={`cursor-pointer px-0.5 ${site == 'menu' ? 'border-[#c75d15]' : ''}  border-b-[1.5px] justify-center items-center gap-2.5 inline-flex`}
                        >
                            <div
                                className={`${site == 'menu' ? 'text-[#c75d15]' : 'text-[#434146]'} text-[18px] font-bold font-manrope`}
                            >
                                Thực đơn
                            </div>
                        </Link>
                        <Link
                            to={'/room/conference'}
                            className={`cursor-pointer px-0.5 ${site == 'conference' ? 'border-[#c75d15]' : ''}  border-b-[1.5px] justify-center items-center gap-2.5 inline-flex`}
                        >
                            <div
                                className={`${site == 'conference' ? 'text-[#c75d15]' : 'text-[#434146]'} text-[18px] font-bold font-manrope`}
                            >
                                Phòng hội nghị
                            </div>
                        </Link>
                        <Link
                            to={'/wedding-party-promotion'}
                            className={`cursor-pointer px-0.5 ${site == 'wedding-party-promotion' ? 'border-[#c75d15]' : ''}  border-b-[1.5px] justify-center items-center gap-2.5 inline-flex`}
                        >
                            <div
                                className={`${site == 'wedding-party-promotion' ? 'text-[#c75d15]' : 'text-[#434146]'} text-[18px] font-bold font-manrope`}
                            >
                                Khuyến mãi tiệc cưới
                            </div>
                        </Link>
                        <div
                            onClick={() => handleVisibleHall()}
                            className="justify-center items-center gap-2.5 inline-flex"
                        >
                            <div
                                className={`${site == 'thuyen-rong' || site == 'ngan-sen' || site == 'kin-sen' || site == 'thanh-sen' ? 'text-[#c75d15]' : 'text-[#434146]'} cursor-pointer px-0.5 text-[18px] font-bold font-manrope`}
                            >
                                Sảnh tiệc
                            </div>
                            <div className="cursor-pointer">
                                <ArrowDown />
                            </div>
                        </div>
                        {visibleHall == true ? (
                            <div className="mt-[-3px] w-[272px] h-[164px] pb-[13px] flex-col justify-start items-start gap-[25px] inline-flex transition-all duration-300 ease-in-out opacity-100 transform translate-y-0">
                                <div className="h-7 pr-[39px] pb-[9px] border-b justify-start items-center inline-flex">
                                    <Link
                                        to={'/hall/thuyen-rong'}
                                        className={`cursor-pointer max-w-[284px]  ${site == 'thuyen-rong' ? 'text-[#c75d15]' : 'text-[#4f4f4f]'} text-[15px] font-semibold font-manrope`}
                                    >
                                        Thuyền rồng Kim Long - Hoàng Long
                                    </Link>
                                </div>
                                <div className="h-7 pr-44 pb-[9px] border-b justify-start items-center inline-flex">
                                    <Link
                                        to={'/hall/ngan-sen'}
                                        className={`max-w-[277px] cursor-pointer ${site == 'ngan-sen' ? 'text-[#c75d15]' : 'text-[#4f4f4f]'} text-[15px] font-semibold font-manrope`}
                                    >
                                        Sảnh Ngân Sen
                                    </Link>
                                </div>
                                <div className="w-[277px] h-7 pr-[102px] pb-[9px] border-b justify-start items-center inline-flex">
                                    <Link
                                        to={'/hall/hoang-sen'}
                                        className={`max-w-[277px] cursor-pointer ${site == 'hoang-sen' ? 'text-[#c75d15]' : 'text-[#4f4f4f]'} text-[15px] font-semibold font-manrope`}
                                    >
                                        Sảnh Hoàng Sen
                                    </Link>
                                </div>
                                <div className="w-[277px] h-7 pr-[169px] pb-[9px] border-b justify-start items-center inline-flex">
                                    <Link
                                        to={'/hall/thanh-sen'}
                                        className={`max-w-[277px] cursor-pointer ${site == 'thanh-sen' ? 'text-[#c75d15]' : 'text-[#4f4f4f]'} text-[15px] font-semibold font-manrope`}
                                    >
                                        Sảnh Thanh Sen
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-[-3px] w-[272px] h-[164px] pb-[13px] flex-col justify-start items-start gap-[25px] inline-flex transition-all duration-300 ease-in-out opacity-0 transform" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileSubHeader;
