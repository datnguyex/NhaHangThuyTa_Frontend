import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import { BannerTitleThuyenRong, ConferenceRoomImg } from '~/Images';

function PromotionWeddingParty() {
    return (
        <>
            <Header />
            <div className="min-h-[500px] w">
                <div className="xs:h-[270px] lg:h-[500px] w-auto relative">
                    <img className="w-full h-full object-cover" src={BannerTitleThuyenRong} alt="" />
                    <div className="xs:w-[90%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] xs:translate-y-[20px] lg:translate-y-[-50%]">
                        <span className="text-white xs:text-[18px] lg:text-[40px] xs:leading-tight lg:leading-[48px] font-bold font-['MTD Valky Bold'] uppercase ">
                            Khuyễn Mãi Tiệc Cưới
                            <br />
                        </span>
                    </div>
                </div>
                {/* Bảng thông tin */}
                <div className="flex justify-center flex-col items-center xs:w-[90%] lg:w-[72%] mx-auto">
                    <img className="w-full bg-cover h-auto mt-[30px]" src={ConferenceRoomImg} alt="" />
                    <div className="w-full min-h-[1149px] justify-start items-start inline-flex mt-[30px]">
                        <div className="w-[100%] flex-col justify-start items-start inline-flex">
                            <div className="self-stretch h-[195px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                <div className="text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
                                    Quà tặng
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Liễn hồng, bút ký tên, kệ ảnh, thúng hỷ
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Tháp ly, 2 chai Champagne, đá khói
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Khăn ăn, hoa tươi để bàn, khăn lạnh
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Ban nhạc hòa tấu (2 nhạc công)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Thức ăn nhẹ đầu giờ Cô Dâu Chú Rể
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Đậu phộng đầu giờ
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Nước ngọt, nước suối suốt tiệc
                                    <br />
                                    (phục vụ rót bình)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    MC tiếng Việt đầu giờ
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Thiệp cưới theo mẫu (chưa in nội dung)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Pháo kim tuyến (4 viên)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Bánh cưới 4 giả 1 thật
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Thiệp cưới theo mẫu (có in nội dung)
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Saxo + 2 Ca sĩ
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Máy chiếu Album hoặc màn hình Led
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Đội múa khai tiệc
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Máy quay trực tiếp
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Bàn ăn gia đình
                                </div>
                            </div>
                            <div className="self-stretch h-[53px] px-2 py-3 border border-[#c2c2c2] justify-start items-center gap-2 inline-flex">
                                <div className="text-[#4d4d4d] text-[19px] font-normal font-['Manrope'] leading-normal">
                                    Giảm giá chương trình nghi lễ đặc biệt
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <div className="self-stretch w-full h-[54px] px-2 py-3 bg-[#ffd9a6] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                <div className="text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
                                    Số bàn đặt chính thức
                                </div>
                            </div>
                            <div className="justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[141px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
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
                                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[141px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            21-26
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
                                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[141px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            27-32
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
                                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[141px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            33-42
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
                                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[141px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            43-50
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
                                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch h-[141px] px-2 py-3 bg-[#ffeed7] border border-[#c2c2c2] justify-center items-center gap-2 inline-flex">
                                        <div className="w-[145px] text-center text-[#c75d15] text-[19px] font-bold font-['Manrope'] leading-normal">
                                            51-65
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PromotionWeddingParty;
