import { ListThreeDash, MagnifyingGlassGrey } from '~/component/Icon';
import { MainLogo } from '~/Images';
import MobileSubHeader from '../MobileSubHeader/MobileSubHeader';
import { useState } from 'react';

const Header = () => {
    const [visibleSubMenu, setVisibleSubMenu] = useState(false);

    const handleVisible = (e: boolean) => {
        setVisibleSubMenu(e);
    };

    const [visibleHall, setVisibleHall] = useState(false);
    const handleVisibleHall = (e: boolean) => {
        setVisibleHall(e);
    };
    return (
        <>
            <div className="lg:hidden">
                <MobileSubHeader visibleSubMenu={visibleSubMenu} handleVisible={handleVisible} />
            </div>

            <div className="xs:shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)] min-w-100vw w-[100vw] max-h-[110px] h-[110px] xs:bg-[white] lg:bg-transparent fixed">
                <div className="flex items-center justify-around h-full relative">
                    {/* logo */}
                    <div className="flex items-center justify-center h-full cursor-pointer">
                        <div onClick={(e) => handleVisible(true)} className="lg:hidden absolute left-5">
                            <ListThreeDash />
                        </div>
                        <div className="xs:w-[50px] xs:h-[50px] h-full mx-4 flex items-center">
                            <img className="w-full h-full object-cover" src={MainLogo} alt="" />
                        </div>
                        <div className="xs:hidden">
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] leading-[28.80px]">
                                Nhà hàn
                            </span>
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] leading-[28.80px]">
                                g<br />
                            </span>
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                Thủy
                            </span>
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                Tạ
                            </span>
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                Đầm
                            </span>
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                {' '}
                            </span>
                            <span className="text-[#434146] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                Sen
                            </span>
                        </div>
                    </div>
                    {/* //content */}
                    <div className="flex items-center gap-[60px] xs:hidden">
                        <div className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <div className="text-[#C75D15] text-[21px] font-bold font-['Manrope'] py-[10px]">
                                Thực đơn
                            </div>
                        </div>
                        <div className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <div
                                onMouseLeave={() => handleVisibleHall(false)}
                                onMouseEnter={() => handleVisibleHall(true)}
                                className="text-[#434146] text-[21px] font-bold font-['Manrope'] py-[10px]"
                            >
                                Sảnh tiệc
                            </div>
                            {visibleHall == true ? (
                                <div
                                    onMouseLeave={() => handleVisibleHall(false)}
                                    onMouseEnter={() => handleVisibleHall(true)}
                                    className="absolute top-[80px] h-64 bg-white rounded-lg shadow-[3px_4px_9px_0px_rgba(0,0,0,0.11)] flex-col justify-center items-start inline-flex transition-opacity duration-300 ease-in-out opacity-100"
                                >
                                    <div className="hover:bg-[#f0f0f0] active:bg-[#d0d0d0] pl-4 pr-[120px] py-[12px] border-b border-[#e0e0e0] justify-center items-center flex overflow-hidden">
                                        <div className="text-[#4f4f4f] text-[17px] font-normal font-['Manrope'] py-[10px]">
                                            Thuyền rồng Kim Long - Hoàng Long
                                        </div>
                                    </div>
                                    <div className="hover:bg-[#f0f0f0] w-[100%] active:bg-[#d0d0d0] pl-4 pr-[272px] py-[12px] border-b border-[#e0e0e0] justify-start items-center inline-flex overflow-hidden">
                                        <div className="text-[#4f4f4f] text-[17px] font-normal font-['Manrope'] py-[10px]">
                                            Sảnh Ngân Sen
                                        </div>
                                    </div>
                                    <div className="hover:bg-[#f0f0f0] w-[100%] active:bg-[#d0d0d0] pl-4 pr-[191px] py-[12px] border-b border-[#e0e0e0] justify-start items-center inline-flex overflow-hidden">
                                        <div className="text-[#4f4f4f] text-[17px] font-normal font-['Manrope'] py-[10px]">
                                            Sảnh Hoàng Sen - Kim Sen
                                        </div>
                                    </div>
                                    <div className="hover:bg-[#f0f0f0] w-[100%] active:bg-[#d0d0d0] pl-4 pr-[264px] py-[12px] border-b justify-start items-center inline-flex overflow-hidden">
                                        <div className="text-[#4f4f4f] text-[17px] font-normal font-['Manrope'] py-[10px]">
                                            Sảnh Thanh Sen
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="absolute top-[80px] h-64 bg-white rounded-lg shadow-[3px_4px_9px_0px_rgba(0,0,0,0.11)] flex-col justify-center items-start inline-flex transition-opacity duration-300 ease-in-out opacity-0" />
                            )}
                        </div>
                        <div className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <div className="text-[#434146] text-[21px] font-bold font-['Manrope']">Phòng hội nghị</div>
                        </div>
                        <div className="text-[#434146] text-[21px] font-bold font-['Manrope'] cursor-pointer">
                            Khuyến mãi tiệc cưới
                        </div>
                    </div>

                    <div className="xs:hidden w-[16%] h-[50px] px-[18px] py-[13px] bg-white rounded-xl border flex items-center justify-between">
                        <input
                            placeholder="Tìm kiếm"
                            className="text-[#666666] w-[90%] h-full outline-none bg-transparent text-[17px] font-normal font-['Manrope']"
                        />
                        <div className="cursor-pointer">
                            <MagnifyingGlassGrey />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
