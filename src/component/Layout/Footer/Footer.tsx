import { LocationWhite } from '~/component/Icon';
import { TelephoneWhite } from '~/component/Icon/Icon';
import { FooterBackgroundDark, FooterFrame, MainLogo, ProductFooter } from '~/Images';

const Footer = () => {
    return (
        <div className="sticky bg-[#6f6f6f] ">
            <div
                style={{
                    backgroundImage: `url(${FooterBackgroundDark})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="w-[100vw] float-right xs:h-[100vh] lg:h-[334px] justify-between lg:min-h-[334px] relative bottom-[0px] overflow-hidden lg:flex sx:flex-col"
            >
                <div className="xs:w-[100%] lg:w-[80%] lg:mt-[30px] lg:h-auto xs:h-[80%] sx:flex-col lg:flex items-start justify-center gap-[60px]">
                    <div className="xs:w-[130px] lg:w-[150px] lg:h-[150px] xs:h-[130px]">
                        <img className="w-full h-full object-cover" src={MainLogo} alt="" />
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <div className="text-white lg:text-[32px] xs:text-[24px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                            Liên hệ
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <div className="justify-start items-start lg:font-normal xs:text-[14px] gap-2 inline-flex text-white">
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
                                <div className="text-white text-[18px] lg:font-normal xs:text-[14px] font-['Manrope']">
                                    028 3961 2082 - 028 3858 6763
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <div>
                            <span className="text-white lg:text-[32px] xs:text-[24px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                Các đơn vị cùn
                            </span>
                            <span className="text-white lg:text-[32px] xs:text-[24px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                g
                            </span>
                            <span className="text-white lg:text-[32px] xs:text-[24px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                {' '}
                                hệ thốn
                            </span>
                            <span className="text-white lg:text-[32px] xs:text-[24px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                g<br />
                            </span>
                            <span className="text-white lg:text-[32px] xs:text-[24px] font-bold font-['MTD Valky Bold'] leading-[38.40px]">
                                Phuthotourist
                            </span>
                        </div>
                        <div className="flex-col justify-start items-start gap-[6px] inline-flex">
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className="w-[218px] h-[31px] relative ">
                                    <div className="left-0 top-[2px]  text-white lg:text-[19px] xs:text-[14px] font-normal font-['Manrope'] leading-[27px]">
                                        Công ty CP DVDL Phú Thọ
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px]  opacity-0 bg-white" />
                                </div>
                            </div>
                            <div className=" justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className=" relative ">
                                    <div className="left-0 top-[2px]  text-white lg:text-[19px] xs:text-[14px] font-normal font-['Manrope'] leading-[27px]">
                                        Khu du lịch sinh thái Vàm Sát
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px] opacity-0 bg-white" />
                                </div>
                            </div>
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className="relative ">
                                    <div className="left-0 top-[2px]  text-white lg:text-[19px] xs:text-[14px] font-normal font-['Manrope'] leading-[27px]">
                                        Khách sạn Ngọc Lan
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px]  opacity-0 bg-white" />
                                </div>
                            </div>
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className="relative ">
                                    <div className="left-0 top-[2px]  text-white lg:text-[19px] xs:text-[14px] font-normal font-['Manrope'] leading-[27px]">
                                        Khách sạn Phú Thọ
                                    </div>
                                    <div className="w-px h-[1.50px] left-0 top-[27px]  opacity-0 bg-white" />
                                </div>
                            </div>
                            <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-3 h-3  bg-white rounded-full" />
                                <div className="relative ">
                                    <div className="left-0 top-[2px]  text-white lg:text-[19px] xs:text-[14px] font-normal font-['Manrope'] leading-[27px]">
                                        Trung tâm Du lịch Đầm Sen
                                    </div>
                                    {/* <div className="w-px h-[1.50px] left-0 top-[27px] absolute opacity-0 bg-white" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xs:h-[30%] xs:w-[50%] lg:w-[30%] overflow-hidden xs:absolute xs:right-0 xs:bottom-1 float-right">
                    <img
                        className="w-full h-full object-cover 

                    "
                        src={ProductFooter}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
