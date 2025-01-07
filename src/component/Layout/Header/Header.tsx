import { MagnifyingGlassGrey } from '~/component/Icon';
import { MainLogo } from '~/Images';

const Header = () => {
    return (
        <>
            <div className="min-w-100vw w-[100vw] max-h-[110px] bg-blue-100 h-[110px]">
                <div className="flex items-center justify-around h-full ">
                    {/* logo */}
                    <div className="flex items-center justify-center h-full">
                        <div className="h-full px-4 flex items-center">
                            <img className="h-90% w-auto object-cover" src={MainLogo} alt="" />
                        </div>
                        <div>
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
                    <div className="flex items-center gap-[60px]">
                        <div className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <div className="text-[#C75D15] text-[21px] font-bold font-['Manrope']">Thực đơn</div>
                        </div>
                        <div className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <div className="text-[#434146] text-[21px] font-bold font-['Manrope']">Sảnh tiệc</div>
                        </div>
                        <div className="justify-start items-start gap-2.5 inline-flex cursor-pointer">
                            <div className="text-[#434146] text-[21px] font-bold font-['Manrope']">Phòng hội nghị</div>
                        </div>
                        <div className="text-[#434146] text-[21px] font-bold font-['Manrope'] cursor-pointer">
                            Khuyến mãi tiệc cưới
                        </div>
                    </div>

                    <div className="w-[16%] h-[50px] px-[18px] py-[13px] bg-white rounded-xl border flex items-center justify-between">
                        <input
                            placeholder="Tìm kiếm"
                            className="text-[#666666] flex-1 h-full outline-none bg-transparent text-[17px] font-normal font-['Manrope']"
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
