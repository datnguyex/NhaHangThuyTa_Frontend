import { ArrowDown, CloseYellow } from '~/component/Icon';
import { MainLogo } from '~/Images';
import { useState, useEffect } from 'react';

interface MobileSubHeaderProps {
    visibleSubMenu: boolean;
    handleVisible: (visible: boolean) => void;
}

const MobileSubHeader: React.FC<MobileSubHeaderProps> = ({ visibleSubMenu, handleVisible }) => {
    const [visibleHall, setVisibleHall] = useState(false);
    const handleVisibleHall = () => {
        setVisibleHall(!visibleHall);
    };
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
                            <span className="text-[#434146] text-[19px] font-bold font-['MTD Valky Bold'] leading-snug">
                                Nhà hàn
                            </span>
                            <span className="text-[#434146] text-[19px] font-bold font-['MTD Valky Bold'] leading-snug">
                                g<br />
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold font-['MTD Valky Bold'] uppercase leading-normal">
                                Thủy
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold font-['MTD Valky Bold'] uppercase leading-normal">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold font-['MTD Valky Bold'] uppercase leading-normal">
                                Tạ
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold font-['MTD Valky Bold'] uppercase leading-normal">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold font-['MTD Valky Bold'] uppercase leading-normal">
                                Đầm
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold font-['MTD Valky Bold'] uppercase leading-normal">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[21px] font-bold font-['MTD Valky Bold'] uppercase leading-normal">
                                Sen
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full flex-col justify-start items-start gap-10 inline-flex">
                        <div className="cursor-pointer px-0.5 border-[#c75d15] border-b-[1.5px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-[#c75d15] text-[18px] font-bold font-['Manrope']">Thực đơn</div>
                        </div>
                        <div className="cursor-pointer px-0.5 h-[22px] pr-1 justify-start items-center inline-flex">
                            <div className="text-[#434146] text-[18px] font-bold font-['Manrope']">Phòng hội nghị</div>
                        </div>
                        <div className="cursor-pointer px-0.5 h-[22px] pr-[5px] justify-start items-center inline-flex">
                            <div className="text-[#434146] text-[18px] font-bold font-['Manrope']">
                                Khuyến mãi tiệc cưới
                            </div>
                        </div>
                        <div
                            onClick={() => handleVisibleHall()}
                            className="justify-center items-center gap-2.5 inline-flex"
                        >
                            <div className="cursor-pointer px-0.5 text-[#434146] text-[18px] font-bold font-['Manrope']">
                                Sảnh tiệc
                            </div>
                            <div className="cursor-pointer">
                                <ArrowDown />
                            </div>
                        </div>
                        {visibleHall == true ? (
                            <div className="mt-[-3px] w-[272px] h-[164px] pb-[13px] flex-col justify-start items-start gap-[25px] inline-flex transition-all duration-300 ease-in-out opacity-100 transform translate-y-0">
                                <div className="h-7 pr-[39px] pb-[9px] border-b justify-start items-center inline-flex">
                                    <div className="cursor-pointer max-w-[284px]  text-[#4f4f4f] text-[15px] font-semibold font-['Manrope']">
                                        Thuyền rồng Kim Long - Hoàng Long
                                    </div>
                                </div>
                                <div className="h-7 pr-44 pb-[9px] border-b justify-start items-center inline-flex">
                                    <div className="max-w-[277px]  cursor-pointer text-[#4f4f4f] text-[15px] font-semibold font-['Manrope']">
                                        Sảnh Ngân Sen
                                    </div>
                                </div>
                                <div className="w-[277px] h-7 pr-[102px] pb-[9px] border-b justify-start items-center inline-flex">
                                    <div className="cursor-pointer max-w-[277px]  text-[#4f4f4f] text-[15px] font-semibold font-['Manrope']">
                                        Sảnh Hoàng Sen - Kim Sen
                                    </div>
                                </div>
                                <div className="w-[277px] h-7 pr-[169px] pb-[9px] border-b justify-start items-center inline-flex">
                                    <div className="cursor-pointer max-w-[277px]  text-[#4f4f4f] text-[15px] font-semibold font-['Manrope']">
                                        Sảnh Thanh Sen
                                    </div>
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
