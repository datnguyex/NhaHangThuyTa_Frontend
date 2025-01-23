import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import ConferenceRoomTable from '~/component/Layout/Table/ConferenceRoomTable/ConferenceRoomTable';
import { BannerTitleThuyenRong, ConferenceRoomImg, PromotionPartyWeddingImg } from '~/Images';

function ConferenceRoom() {
    return (
        <>
            <Header />
            <div className="lg:mb-[50px] xs:mb-[30px]">
                <div className="xs:h-[270px] lg:h-[500px] w-auto relative">
                    <img className="w-full h-full object-cover" src={BannerTitleThuyenRong} alt="" />
                    <div className="xs:w-[90%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] xs:translate-y-[40px] lg:translate-y-[-50%]">
                        <span className="text-white xs:text-[18px] lg:text-[40px] xs:leading-tight lg:leading-[48px] font-bold font-['MTD Valky Bold'] uppercase ">
                            Phòng Hội Nghị
                            <br />
                        </span>
                    </div>
                </div>
                <div className="items-center xs:w-[90%] lg:w-[72%] mx-auto text-left">
                    <img
                        className="w-full bg-cover h-auto xs:mt-[10px] lg:mt-[30px]"
                        src={PromotionPartyWeddingImg}
                        alt=""
                    />
                    <div className="xs:my-[10px] lg:my-[30px]">
                        <div className="text-[#ed7d31] sx:text-[18px] lg:text-[36px] font-bold font-['Manrope']">
                            Giá cho thuê phòng hội nghị
                        </div>
                        <div className="text-[#666666] text-[16px] font-normal font-['Manrope']">
                            (Đã bao gồm 10% thuế VAT)
                        </div>
                    </div>
                    <ConferenceRoomTable />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ConferenceRoom;
