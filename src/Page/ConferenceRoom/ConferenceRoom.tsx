import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import { BannerTitleThuyenRong, ConferenceRoomImg } from '~/Images';

function ConferenceRoom() {
    return (
        <>
            <Header />
            <div className="min-h-[500px]">
                <div className="xs:h-[270px] lg:h-[500px] w-auto relative">
                    <img className="w-full h-full object-cover" src={BannerTitleThuyenRong} alt="" />
                    <div className="xs:w-[90%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] xs:translate-y-[20px] lg:translate-y-[-50%]">
                        <span className="text-white xs:text-[18px] lg:text-[40px] xs:leading-tight lg:leading-[48px] font-bold font-['MTD Valky Bold'] uppercase ">
                            Khuyễn Mãi Tiệc Cưới
                            <br />
                        </span>
                    </div>
                </div>
                <div className="items-center xs:w-[90%] lg:w-[72%] mx-auto text-left">
                    <img className="w-full bg-cover h-auto mt-[30px]" src={ConferenceRoomImg} alt="" />
                    <div className="my-[30px]">
                        <div className="text-[#ed7d31] text-[36px] font-bold font-['Manrope']">
                            Giá cho thuê phòng hội nghị
                        </div>
                        <div className="text-[#666666] text-[20px] font-normal font-['Manrope']">
                            (Đã bao gồm 10% thuế VAT)
                        </div>
                    </div>
                    <div className="min-h-[566px] w-full inline-flex">
                        <div className="w-[15%] flex-col justify-start items-start inline-flex">
                            <div className="self-stretch h-[195px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                <div className="text-center text-[#ed7d31] text-[19px] font-bold font-['Manrope'] leading-normal">
                                    Vị trí
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Hoàng Kim Sen
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Hoàng sen
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Kim sen
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Thanh sen
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Ngàn sen
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Thuyền Kim Long
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Thuyền Hoàng Long
                                </div>
                            </div>
                        </div>
                        <div className="w-[10%] flex-col justify-start items-start inline-flex">
                            <div className="self-stretch h-[195px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                <div className="text-center text-[#ed7d31] text-[19px] font-bold font-['Manrope'] leading-normal">
                                    Diện tích
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div>
                                    <span className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        1.035m
                                    </span>
                                    <sup className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        2
                                    </sup>
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div>
                                    <span className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        667m
                                    </span>
                                    <sup className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        2
                                    </sup>
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div>
                                    <span className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        368m
                                    </span>
                                    <sup className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        2
                                    </sup>
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div>
                                    <span className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        860m
                                    </span>
                                    <sup className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        2
                                    </sup>
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div>
                                    <span className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        402m
                                    </span>
                                    <sup className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        2
                                    </sup>
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div>
                                    <span className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        162m
                                    </span>
                                    <sup className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        2
                                    </sup>
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div>
                                    <span className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        179m
                                    </span>
                                    <sup className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                        2
                                    </sup>
                                </div>
                            </div>
                        </div>
                        <div className="w-[13%] flex-col justify-start items-start inline-flex">
                            <div className="self-stretch h-[195px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                <div className="w-[131px] text-center text-[#ed7d31] text-[19px] font-bold font-['Manrope'] leading-normal">
                                    Xếp theo kiểu rạp hát
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    1.000 khách
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    500 khách
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    250 khách
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    750 khách
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    500 khách
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2]" />
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2]" />
                        </div>
                        <div className="w-[25%] flex-col justify-start items-start inline-flex">
                            <div className="self-stretch h-[54px] px-2 py-3 bg-[#ffd9a6] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                <div className="text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
                                    Công suất phòng
                                </div>
                            </div>
                            <div className="w-full justify-start items-start inline-flex">
                                <div className="w-full flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[141px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#ed7d31] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            Xếp theo kiểu bàn tròn
                                            <br />
                                            (10 khách/bàn)
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            85
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            50
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            28
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            62
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            37
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            16
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[141px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-full text-center text-[#ed7d31] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            Xếp theo kiểu bàn tròn
                                            <br />
                                            (10 khách/bàn)
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            85
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            50
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            28
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            62
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            37
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            16
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <div className="justify-start items-start inline-flex">
                                <div className="w-[136px] flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[195px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#ed7d31] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            Nửa ngày
                                            <br />
                                            (VNĐ)
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            40.000.000
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            25.000.000
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            15.000.000
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            30.000.000
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            20.000.000
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[160px] flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[195px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#ed7d31] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            Nguyên ngày (VNĐ)
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            70.000.000
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            45.000.000
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            30.000.000
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            60.000.000
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                            40.000.000
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[200px] flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[195px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#ed7d31] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            Ghi chú
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[265px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                        <div className="w-[186px] text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-[27px]">
                                            Có đặt ăn menu tiệc được giảm 50% giá mặt bằng (Nếu lượng khách đặt tiệc
                                            tương đương khách tham gia hội nghị)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[106px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-bold font-['Manrope'] leading-normal">
                                    Chỉ phục vụ set menu
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ConferenceRoom;
