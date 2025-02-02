import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import PromotionWeddingPartyTable from '~/component/Layout/Table/PromotionWeddingPartyTable/PromotionWeddingPartyTable';
import { BannerTitleThuyenRong, ConferenceRoomImg } from '~/Images';

function PromotionWeddingParty() {
    return (
        <>
            <Header />
            <div className="min-h-[500px] lg:mb-[50px] xs:mb-[30px]">
                <div className="xs:h-[270px] lg:h-[500px] w-auto relative">
                    <img className="w-full h-full object-cover" src={BannerTitleThuyenRong} alt="" />
                    <div className="xs:w-[90%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] xs:translate-y-[20px] lg:translate-y-[-50%]">
                        <span className="text-white xs:text-[18px] lg:text-[40px] xs:leading-tight lg:leading-[48px] font-bold   font-mtd-valky uppercase ">
                            Khuyễn Mãi Tiệc Cưới
                            <br />
                        </span>
                    </div>
                </div>

                <div className="flex justify-center flex-col items-center xs:w-[90%] lg:w-[72%] mx-auto">
                    <img className="w-full bg-cover h-auto xs:mt-[10px] lg:mt-[30px]" src={ConferenceRoomImg} alt="" />
                    {/* Bảng thông tin */}
                    <PromotionWeddingPartyTable />
                    <div className="text-[#666666] xs:text-[15px] lg:text-[17px] xs:mt-[10px] lg:mt-[30px] w-full font-normal font-manrope">
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
