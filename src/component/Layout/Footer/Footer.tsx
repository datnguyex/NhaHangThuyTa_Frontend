import { LocationWhite } from '~/component/Icon';
import { TelephoneWhite } from '~/component/Icon/Icon';
import { FooterFrame, MainLogo } from '~/Images';

const Footer = () => {
    return (
        <div className="w-full h-[auto] min-h-[334px] absolute bottom-0">
            <img src={FooterFrame} alt="Footer background" className="w-full h-full object-right" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center z-10">
                <div className="w-[80%] h-[80%] flex items-start justify-center gap-[60px]">
                    <img className="w-auto h-[60%] object-cover" src={MainLogo} alt="" />
                    <div className="flex flex-col gap-[25px]">
                        <div className="text-white text-[32px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                            Liên hệ
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <div className="justify-start items-start gap-2 inline-flex text-white">
                                <div className="py-0.5 min-w-[25px] justify-center items-center flex">
                                    <LocationWhite />
                                </div>
                                03 Hòa Bình, Phường 3, Quận 11, TP. Hồ Chí Minh
                                <br />
                                (Cổng số 2 Công viên Văn hóa Đầm Sen)
                            </div>
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="py-0.5 min-w-[25px] justify-center items-center flex">
                                    <TelephoneWhite />
                                </div>
                                <div className="text-white text-[18px] font-normal font-['Manrope']">
                                    028 3961 2082 - 028 3858 6763
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <div>
                            <span className="text-white text-[32px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                Các đơn vị cùn
                            </span>
                            <span className="text-white text-[32px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                g
                            </span>
                            <span className="text-white text-[32px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                {' '}
                                hệ thốn
                            </span>
                            <span className="text-white text-[32px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                g<br />
                            </span>
                            <span className="text-white text-[32px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                Phuthotourist
                            </span>
                        </div>
                        <div className="flex-col justify-start items-start gap-[6px] inline-flex">
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className="w-[218px] h-[31px] relative  overflow-hidden">
                                    <div className="left-0 top-[2px]  text-white text-[19px] font-normal font-['Manrope'] leading-[27px]">
                                        Công ty CP DVDL Phú Thọ
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px]  opacity-0 bg-white" />
                                </div>
                            </div>
                            <div className=" justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className=" relative  overflow-hidden">
                                    <div className="left-0 top-[2px]  text-white text-[19px] font-normal font-['Manrope'] leading-[27px]">
                                        Khu du lịch sinh thái Vàm Sát
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px] opacity-0 bg-white" />
                                </div>
                            </div>
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className="relative  overflow-hidden">
                                    <div className="left-0 top-[2px]  text-white text-[19px] font-normal font-['Manrope'] leading-[27px]">
                                        Khách sạn Ngọc Lan
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px]  opacity-0 bg-white" />
                                </div>
                            </div>
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className="relative  overflow-hidden">
                                    <div className="left-0 top-[2px]  text-white text-[19px] font-normal font-['Manrope'] leading-[27px]">
                                        Khách sạn Phú Thọ
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px]  opacity-0 bg-white" />
                                </div>
                            </div>
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className="relative  overflow-hidden">
                                    <div className="left-0 top-[2px]  text-white text-[19px] font-normal font-['Manrope'] leading-[27px]">
                                        Trung tâm Du lịch Đầm Sen
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px] absolute opacity-0 bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
