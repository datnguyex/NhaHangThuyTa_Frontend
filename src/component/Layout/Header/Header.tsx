import { ListThreeDash, MagnifyingGlassGrey } from '~/component/Icon';
import { MainLogo } from '~/Images';
import MobileSubHeader from '../MobileSubHeader/MobileSubHeader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    //get name url
    const location = useLocation();
    const [site, setSite] = useState<any>(location);
    useEffect(() => {
        const pathParts = location.pathname.split('/');
        if (location.pathname.startsWith('/hall') || location.pathname.startsWith('/room')) {
            setSite(pathParts[2]);
        } else {
            setSite(pathParts[1]);
        }
    }, [location]);

    //display mobile submenu
    const [visibleSubMenu, setVisibleSubMenu] = useState(false);
    const handleVisible = (e: boolean) => {
        setVisibleSubMenu(e);
    };

    //display list hall
    const [visibleHall, setVisibleHall] = useState(false);
    const handleVisibleHall = (e: boolean) => {
        setVisibleHall(e);
    };
    return (
        <>
            <div className="lg:hidden">
                <MobileSubHeader visibleSubMenu={visibleSubMenu} handleVisible={handleVisible} site={site} />
            </div>

            <div className="xs:shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)] lg:w-[97vw] xs:w-[100vw] max-h-[110px] h-[110px] xs:bg-[white] lg:bg-transparent absolute z-[99]">
                <div className="flex items-center justify-around h-full relative">
                    {/* logo */}
                    <div className="flex items-center justify-center h-full cursor-pointer">
                        <div onClick={(e) => handleVisible(true)} className="lg:hidden absolute left-5">
                            <ListThreeDash />
                        </div>
                        <Link to={'/'} className="xs:w-[50px] xs:h-[50px] h-full mx-4 flex items-center">
                            <img className="w-full h-full object-cover" src={MainLogo} alt="" />
                        </Link>
                        <Link to={'/'} className="xs:hidden">
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] leading-[28.80px]">
                                Nhà hàn
                            </span>
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] leading-[28.80px]">
                                g<br />
                            </span>
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                Thủy
                            </span>
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                {' '}
                            </span>
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                Tạ
                            </span>
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                {' '}
                            </span>
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                Đầm
                            </span>
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                {' '}
                            </span>
                            <span className="text-[#fff] text-[25px] font-bold font-['MTD Valky Bold'] uppercase">
                                Sen
                            </span>
                        </Link>
                    </div>
                    {/* //content */}
                    <div className="flex items-center gap-[60px] xs:hidden">
                        <Link to={'/menu'} className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <div
                                className={`text-[21px] font-bold font-['Manrope'] py-[10px] 
                                ${site == 'menu' ? 'text-[#C75D15]' : 'text-[#ffff] '}`}
                            >
                                Thực đơn
                            </div>
                        </Link>
                        <div className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <div
                                onMouseLeave={() => handleVisibleHall(false)}
                                onMouseEnter={() => handleVisibleHall(true)}
                                className={`text-[21px] font-bold font-['Manrope'] py-[10px] 
                                 ${site == 'kim-sen' || site == 'ngan-sen' || site == 'thanh-sen' || site == 'thuyen-rong' ? 'text-[#C75D15]' : 'text-[#fff] '}`}
                            >
                                Sảnh tiệc
                            </div>
                            {visibleHall == true ? (
                                <div
                                    onMouseLeave={() => handleVisibleHall(false)}
                                    onMouseEnter={() => handleVisibleHall(true)}
                                    className="absolute top-[80px] h-64 bg-white rounded-lg shadow-[3px_4px_9px_0px_rgba(0,0,0,0.11)] flex-col justify-center items-start inline-flex transition-opacity duration-300 ease-in-out opacity-100"
                                >
                                    <Link
                                        to={'/hall/thuyen-rong'}
                                        className="hover:bg-[#f0f0f0] active:bg-[#d0d0d0] pl-4 pr-[120px] py-[12px] border-b border-[#e0e0e0] justify-center items-center flex overflow-hidden"
                                    >
                                        <div className="text-[#4f4f4f] text-[17px] font-normal font-['Manrope'] py-[10px]">
                                            Thuyền rồng Kim Long - Hoàng Long
                                        </div>
                                    </Link>
                                    <Link
                                        to={'/hall/ngan-sen'}
                                        className="hover:bg-[#f0f0f0] w-[100%] active:bg-[#d0d0d0] pl-4 pr-[272px] py-[12px] border-b border-[#e0e0e0] justify-start items-center inline-flex overflow-hidden"
                                    >
                                        <div className="text-[#4f4f4f] text-[17px] font-normal font-['Manrope'] py-[10px]">
                                            Sảnh Ngân Sen
                                        </div>
                                    </Link>
                                    <Link
                                        to={'/hall/kim-sen'}
                                        className="hover:bg-[#f0f0f0] w-[100%] active:bg-[#d0d0d0] pl-4 pr-[191px] py-[12px] border-b border-[#e0e0e0] justify-start items-center inline-flex overflow-hidden"
                                    >
                                        <div className="text-[#4f4f4f] text-[17px] font-normal font-['Manrope'] py-[10px]">
                                            Sảnh Hoàng Sen - Kim Sen
                                        </div>
                                    </Link>
                                    <Link
                                        to={'/hall/thanh-sen'}
                                        className="hover:bg-[#f0f0f0] w-[100%] active:bg-[#d0d0d0] pl-4 pr-[264px] py-[12px] border-b justify-start items-center inline-flex overflow-hidden"
                                    >
                                        <div className="text-[#4f4f4f] text-[17px] font-normal font-['Manrope'] py-[10px]">
                                            Sảnh Thanh Sen
                                        </div>
                                    </Link>
                                </div>
                            ) : (
                                <div className="absolute top-[80px] h-64 bg-white rounded-lg shadow-[3px_4px_9px_0px_rgba(0,0,0,0.11)] flex-col justify-center items-start inline-flex transition-opacity duration-300 ease-in-out opacity-0" />
                            )}
                        </div>
                        <div className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <Link
                                to={'/room/conference'}
                                className={`text-[21px] font-bold font-['Manrope'] py-[10px] 
                                    ${site == 'conference' ? 'text-[#C75D15]' : 'text-[#fff] '}`}
                            >
                                Phòng hội nghị
                            </Link>
                        </div>
                        <Link
                            to={'/wedding-party-promotion'}
                            className={`text-[21px] font-bold font-['Manrope'] py-[10px] 
                                ${site == 'wedding-party-promotion' ? 'text-[#C75D15]' : 'text-[#fff] '}`}
                        >
                            Khuyến mãi tiệc cưới
                        </Link>
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
