import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import { BannerTitleThuyenRong, ConferenceRoomImg } from '~/Images';

function PromotionWeddingParty() {
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

                <div className="flex justify-center flex-col items-center xs:w-[90%] lg:w-[72%] mx-auto">
                    <img className="w-full bg-cover h-auto xs:mt-[10px] lg:mt-[30px]" src={ConferenceRoomImg} alt="" />
                    {/* Bảng thông tin */}
                    <div className="w-full justify-start items-start inline-flex xs:mt-[10px] lg:mt-[30px]">
                        <div className="w-[30%] flex-col justify-start items-start inline-flex">
                            <div className="self-stretch xs:h-[91px] lg:h-[195px] xs:px-1 lg:px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                <div className="text-center text-[#c75d15]  lg:text-[19px] font-bold font-['Manrope'] leading-normal">
                                    Quà tặng
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[12.5px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Liễn hồng, bút ký tên, kệ ảnh, thúng hỷ
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Tháp ly, 2 chai Champagne, đá khói
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Khăn ăn, hoa tươi để bàn, khăn lạnh
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Ban nhạc hòa tấu (2 nhạc công)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Thức ăn nhẹ đầu giờ Cô Dâu Chú Rể
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Đậu phộng đầu giờ
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Nước ngọt, nước suối suốt tiệc (phục vụ rót bình)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    MC tiếng Việt đầu giờ
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Thiệp cưới theo mẫu (chưa in nội dung)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Pháo kim tuyến (4 viên)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Bánh cưới 4 giả 1 thật
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Thiệp cưới theo mẫu (có in nội dung)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Saxo + 2 Ca sĩ
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Máy chiếu Album hoặc màn hình Led
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Đội múa khai tiệc
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Máy quay trực tiếp
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Bàn ăn gia đình
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] xs:px-1 lg:px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] xs:text-[14px] lg:text-[19px] font-normal font-['Manrope'] xs:leading-0 lg:leading-normal">
                                    Giảm giá chương trình nghi lễ đặc biệt
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%] flex-col justify-start items-start inline-flex">
                            <div className="self-stretch w-full h-[54px] xs:px-1 lg:px-2 py-3 bg-[#ffd9a6] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                <div className="text-center text-[#c75d15] xs:te2.5t-[12px] lg:te9t-[19px] font-bold font-['Manrope'] leading-normal">
                                    Số bàn đặt chính thức
                                </div>
                            </div>
                            <div className="flex justify-start w-full">
                                {[...Array(6)].map((_, index) => (
                                    <div className="justify-start items-start inline-flex w-[20%]">
                                        <div className="flex-col w-full justify-start items-start inline-flex">
                                            <div className="self-stretch xs:h-auto lg:h-[141px] xs:px-1 lg:px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                                <div className="text-center text-[#c75d15] xs:text-[14px] lg:text-[19px] font-bold font-['Manrope'] leading-normal">
                                                    15-20
                                                </div>
                                            </div>
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-[#666666] xs:text-[15px] lg:text-[17px] xs:mt-[10px] lg:mt-[30px] w-full font-normal font-['Manrope']">
                        <ul className="list-disc pl-5">
                            <li>
                                Quý khách vào dự tiệc tại nhà Thuỷ Tạ Đầm Sen được tham quan Công Viên Đầm Sen Miễn Phí
                                trong ngày.
                            </li>
                            <li>
                                Chương trình khuyến mãi chỉ áp dụng trên số bàn tiệc chinh thức đã thoả thuận trong hợp
                                đồng (không áp dụng cho bàn dự phòng và bàn phát sinh trong buổi tiệc).
                            </li>
                            <li>Chương trình khuyến mãi không quy đổi thành tiền hoặc chương trình khác.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PromotionWeddingParty;
