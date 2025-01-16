import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { ArrowLeftBlack, ArrowWhiteRight, EclipseBgContentMenu, TitleListDishMenu } from '~/component/Icon';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import './Menu.css';
import {
    BackgroundContentMenu,
    BoArgentinaSotTieuDen,
    BoBeafSteak,
    BoLucLacKhoaiTay,
    BoSaoCaiRo,
    FurnitureContentMenu,
    BoListMenu,
    DoiTruongListMenu,
    ChaGioListMenu,
    GoiListMenu,
    ChimBoCauListMenu,
    DoiTruongHapHanhGung,
    DoiTruongChienGion,
    DoiTruongRangMuoi,
    ChaGioThatLatThiaLa,
    ChaGioCockTail,
    ChaGioReTomCua,
    ChaGioTom,
} from '~/Images';

function Menu() {
    //menu
    const saladMenu = [
        {
            type: 'salad',
            img: GoiListMenu,
            title: 'Gỏi Cá Thát Lát Thìa Lá',
            name: 'Gỏi Cá Thát Lát',
            subName: 'Thìa Lá',
            description: 'Catfish salad mixed with dill and fresh spices',
            categories: ['Cá Thát Lát', 'Rau Thìa Lá'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
    ];
    const doveMenu = [
        {
            type: 'dove',
            img: ChimBoCauListMenu,
            title: 'Chim Bồ Câu Nướng Xào Lệu',
            name: 'Chim Bồ Câu',
            subName: 'Nướng Xào Lệu',
            description: 'Grilled pigeon with lemongrass and aromatic spices',
            categories: ['Chim Bồ Câu', 'Gia Vị'],
            priceStart: '200.000',
            priceEnd: '400.000',
        },
    ];

    const SpringRollMenu = [
        {
            type: 'springRoll',
            img: ChaGioThatLatThiaLa,
            title: 'Chả Giò Cá Thát Lát Thìa Lá',
            name: 'Chả Giò Cá',
            subName: 'Thát Lát Thìa Lá',
            description: 'Spring rolls Bronze featherback & dills',
            categories: ['Cá Thát Lát', 'Rau Thìa lá'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
        {
            type: 'springRoll',
            img: ChaGioCockTail,
            title: 'Chả Giò CokTail',
            name: 'Chả Giò',
            subName: 'CookTail',
            description: 'Cocktail Spring rolls',
            categories: ['Khoai tây', 'Thịt bò'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
        {
            type: 'springRoll',
            img: ChaGioReTomCua,
            title: 'Chả Giò Rế Tôm Cua',
            name: 'Chả Giò Rế',
            subName: 'Tôm Cua',
            description: 'Shrimp & crab spring rools trivet',
            categories: ['Cua', 'Tôm'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
        {
            type: 'springRoll',
            img: ChaGioTom,
            title: 'Chả Giò Tôm',
            name: 'Chả Giò Tôm',
            subName: 'Tôm Cua',
            description: 'Sauted Beef with Chinese broccoli',
            categories: ['Tôm'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
    ];
    const DoiTruongMenu = [
        {
            type: 'doiTruong',
            img: DoiTruongHapHanhGung,
            title: 'Dồi Trường Hấp Hành Gừng',
            name: 'Hấp Hành Gừng',
            subName: 'SỐT TIÊU ĐEN',
            description: 'Steamed pig’s uterine with ginger & scallions',
            categories: ['Dồi trường', 'Gừng', 'Hành lá'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
        {
            type: 'doiTruong',
            img: DoiTruongChienGion,
            title: 'Dồi Trường Chiên Giòn',
            name: 'Dồi Trường',
            subName: 'Chiên Giòn',
            description: 'Fried hog’s pudding',
            categories: ['Dồi trường'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
        {
            type: 'doiTruong',
            img: DoiTruongRangMuoi,
            title: 'Dồi Trường Rang Muối',
            name: 'Dồi Trường',
            subName: 'Rang Muối',
            description: 'Roasted pig’s uterine with salf',
            categories: ['Dồi trường', 'Muối'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
    ];
    const BeefMenu = [
        {
            type: 'beef',
            img: BoArgentinaSotTieuDen,
            title: 'Bò Argentina sốt tiêu đen',
            name: 'Bò Argentina',
            subName: 'SỐT TIÊU ĐEN',
            description: 'Dipped Argentina beef with black pepper sauce',
            categories: ['Thịt bò', 'Tiêu đen'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
        {
            type: 'beef',
            img: BoBeafSteak,
            title: 'Bò beefsteak',
            name: 'Thịt Bò',
            subName: 'BEEFSTEAK',
            description: 'Beefsteak',
            categories: ['Khoai tây', 'Tiêu đen'],
            priceStart: '150.000',
            priceEnd: '300.000',
        },
        {
            type: 'beef',
            img: BoLucLacKhoaiTay,
            title: 'Bò lúc lắc khoai tây',
            name: 'Bò Lúc Lắc',
            subName: 'KHOAI TÂY',
            description: 'Beef dish served with fried potato',
            categories: ['Hành tây', 'Ớt xanh'],
            priceStart: '180.000',
            priceEnd: '360.000',
        },
        {
            type: 'beef',
            img: BoSaoCaiRo,
            title: 'Bò xào cải rổ',
            name: 'Bò Xào',
            subName: 'CẢI RỔ',
            description: 'Sautéed Beef with Chinese broccoli',
            categories: ['Cải rổ', 'Thịt bò'],
            priceStart: '180.000',
            priceEnd: '360.000',
        },
    ];

    interface Dish {
        type: string;
        img: string;
        title: string;
        name: string;
        subName: string;
        description: string;
        categories: string[];
        priceStart: string;
        priceEnd: string;
    }

    const [currentMenu, setCurrentMenu] = useState<Dish[]>(BeefMenu);
    const [currentDish, setCurrentDish] = useState<Dish>({
        type: 'beef',
        img: BoArgentinaSotTieuDen,
        title: 'Bò Argentina sốt tiêu đen',
        name: 'Bò Argentina',
        subName: 'SỐT TIÊU ĐEN',
        description: 'Dipped Argentina beef with black pepper sauce',
        categories: ['Thịt bò', 'Tiêu đen'],
        priceStart: '150.000',
        priceEnd: '300.000',
    });
    console.log('currentDish', currentDish);

    const handleCurrentMenu = (e: any) => {
        if (e == 'beef') {
            setCurrentMenu(BeefMenu);
            setCurrentDish(BeefMenu[0]);
        } else if (e == 'doiTruong') {
            setCurrentMenu(DoiTruongMenu);
            setCurrentDish(DoiTruongMenu[0]);
        } else if (e == 'springRoll') {
            setCurrentMenu(SpringRollMenu);
            setCurrentDish(SpringRollMenu[0]);
        } else if (e == 'salad') {
            setCurrentMenu(saladMenu);
            setCurrentDish(saladMenu[0]);
        } else if (e == 'dove') {
            setCurrentMenu(doveMenu);
            setCurrentDish(doveMenu[0]);
        }
    };

    //slider
    const sliderRef = useRef<Slider | null>(null);

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const CustomArrowNext = (props: any) => {
        return (
            <div
                {...props}
                className="customNextBtn"
                style={{
                    position: 'absolute',
                    top: '32%',
                    transform: 'rotate(180deg)',
                    right: '-50px',
                    color: 'red',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={handleNextClick}
            >
                <ArrowLeftBlack />
            </div>
        );
    };

    const CustomArrowPrev = (props: any) => {
        return (
            <div
                {...props}
                className="customPrevBtn"
                style={{
                    position: 'absolute',
                    top: '32%',
                    left: '-50px',
                    color: 'red',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={handlePrevClick}
            >
                <ArrowLeftBlack />
            </div>
        );
    };
    const settings = {
        slidesToShow: currentMenu[0].type === 'beef' || currentMenu[0].type === 'springRoll' ? 4 : 3,
        nextArrow: <CustomArrowNext />,
        prevArrow: <CustomArrowPrev />,
        afterChange: (index: any) => {
            setCurrentDish(currentMenu[index]);
        },
    };

    return (
        <>
            <Header />
            <div
                className="h-[1000px] w-[98.8vw] relative mb-[-50px]"
                style={{
                    backgroundImage: `url(${BackgroundContentMenu})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div>
                    <EclipseBgContentMenu />
                </div>
                <div className="float-right">
                    <img src={FurnitureContentMenu} alt="" />
                </div>

                <div className="absolute top-[20%] left-[5%] translate-x-[-5%] translate-y-[-10%] w-[94%]">
                    <div className="flex justify-around items-start w-[100%]">
                        <div className="flex flex-col justify-start items-center w-50%">
                            <div className="flex justify-center items-center">
                                <div className="w-[465px] h-[465px]">
                                    <img className="w-full h-full object-cover" src={currentDish.img} />
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <div className="text-[#3f3f41] text-[49px] font-bold font-['Manrope']">
                                        {currentDish.name}
                                    </div>
                                    <div className="text-[#ed7d31] text-[72px] font-bold font-['MTD Valky Bold']">
                                        {currentDish.subName}
                                    </div>
                                    <div className="text-[#3f3f41] text-[25px] font-normal font-['Manrope']">
                                        {currentDish.description}
                                    </div>
                                    <div className="flex gap-[6px]">
                                        {currentDish.categories.map((category, index) => (
                                            <div
                                                key={index}
                                                className="h-[35px] px-[26px] py-1 bg-[#fcbb62] rounded justify-start items-center gap-1.5 inline-flex overflow-hidden"
                                            >
                                                <div className="text-white text-[21px] font-bold font-['MJ Satoshi']">
                                                    {category}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-[612.95px] text-[#ed7d31] text-[41px] font-bold font-['Manrope']">
                                        {currentDish.priceStart} - {currentDish.priceEnd} VNĐ
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`menu-slider ${currentMenu[0].type === 'beef' || currentMenu[0].type === 'springRoll' ? 'max-w-[900px]' : 'max-w-[700px]'} `}
                            >
                                {currentMenu[0].type !== 'salad' && currentMenu[0].type !== 'dove' ? (
                                    <Slider {...settings} ref={sliderRef}>
                                        {currentMenu.map((item: any, index: number) => (
                                            <div
                                                key={index}
                                                className="min-w-[180px] mx-[10px] min-h-[218px] px-[9px] pt-[18px] pb-[20px] rounded-2xl gap-[21px] inline-flex slick-current-child"
                                            >
                                                <img
                                                    className="w-[100%] h-auto object-cover"
                                                    src={item.img}
                                                    alt={item.title}
                                                />
                                                <div className="text-center text-[#3f3f41] text-[21px] font-normal font-['MJ Satoshi']">
                                                    {item.title}
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className="w-[421px] min-h-[720px] relative bg-[#fff9eb] rounded-[32px] shadow-[0px_0px_64px_0px_rgba(0,0,0,0.10)]">
                            <div className="flex justify-center mt-[30px]">
                                <TitleListDishMenu />
                            </div>

                            <div className="w-[84.5%] h-[500px] flex-col justify-start items-center gap-3 flex mx-auto">
                                {/* // */}
                                <div
                                    onClick={() => handleCurrentMenu('beef')}
                                    className="cursor-pointer w-[100%] h-[111px] rounded-2xl mx-auto flex justify-center"
                                >
                                    <div className="w-[100%] h-[111px] relative">
                                        <div
                                            className={`w-[88%] h-[111px] left-[58px] top-0 absolute rounded-lg ${
                                                currentMenu[0].type == 'beef' ? 'bg-[#fcbb62]' : 'bg-[#fff]'
                                            }`}
                                        />
                                        <div className="w-[90px] h-[111px] left-0 top-0 absolute flex justify-center items-center">
                                            <img
                                                className="w-[90px] h-[111px] object-cover"
                                                src={BoArgentinaSotTieuDen}
                                                alt="Dồi Trường"
                                            />
                                        </div>

                                        <div className="h-[60px] left-[114px] top-[27px] absolute flex flex-col justify-center">
                                            <div
                                                className={`text-[31px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'beef' ? 'text-white' : 'text-[#3F3F41]'}`}
                                            >
                                                Bò
                                            </div>
                                            <div
                                                className={`text-[18px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'beef' ? 'text-white' : 'text-[#9E9E9E]'}`}
                                            >
                                                4 món
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* // */}
                                <div
                                    onClick={() => handleCurrentMenu('doiTruong')}
                                    className="cursor-pointer w-[100%] h-[111px] rounded-2xl mx-auto flex justify-center"
                                >
                                    <div className="w-[100%] h-[111px] relative">
                                        <div
                                            className={`w-[88%] h-[111px] left-[58px] top-0 absolute rounded-lg ${
                                                currentMenu[0].type == 'doiTruong' ? 'bg-[#fcbb62]' : 'bg-[#fff]'
                                            }`}
                                        />
                                        <div className="w-[90px] h-[111px] left-0 top-0 absolute flex justify-center items-center">
                                            <img
                                                className="w-[90px] h-[111px] object-cover"
                                                src={DoiTruongListMenu}
                                                alt="Dồi Trường"
                                            />
                                        </div>

                                        <div className="h-[60px] left-[114px] top-[27px] absolute flex flex-col justify-center">
                                            <div
                                                className={`text-[31px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'doiTruong' ? 'text-white' : 'text-[#3F3F41]'}`}
                                            >
                                                Dồi Trường
                                            </div>
                                            <div
                                                className={`text-[18px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'doiTruong' ? 'text-white' : 'text-[#9E9E9E]'}`}
                                            >
                                                3 món
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // */}
                                <div
                                    onClick={() => handleCurrentMenu('springRoll')}
                                    className="cursor-pointer w-[100%] h-[111px] rounded-2xl mx-auto flex justify-center"
                                >
                                    <div className="w-[100%] h-[111px] relative">
                                        <div
                                            className={`w-[88%] h-[111px] left-[58px] top-0 absolute rounded-lg ${
                                                currentMenu[0].type == 'springRoll' ? 'bg-[#fcbb62]' : 'bg-[#fff]'
                                            }`}
                                        />
                                        <div className="w-[90px] h-[111px] left-0 top-0 absolute flex justify-center items-center">
                                            <img
                                                className="w-[90px] h-[111px] object-contain"
                                                src={ChaGioListMenu}
                                                alt="Dồi Trường"
                                            />
                                        </div>

                                        <div className="h-[60px] left-[114px] top-[27px] absolute flex flex-col justify-center">
                                            <div
                                                className={`text-[31px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'springRoll' ? 'text-white' : 'text-[#3F3F41]'}`}
                                            >
                                                Chả Giò
                                            </div>
                                            <div
                                                className={`text-[18px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'springRoll' ? 'text-white' : 'text-[#9E9E9E]'}`}
                                            >
                                                4 món
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // */}
                                <div
                                    onClick={() => handleCurrentMenu('salad')}
                                    className="cursor-pointer w-[100%] h-[111px] rounded-2xl mx-auto flex justify-center"
                                >
                                    <div className="w-[100%] h-[111px] relative">
                                        <div
                                            className={`w-[88%] h-[111px] left-[58px] top-0 absolute rounded-lg ${
                                                currentMenu[0].type == 'salad' ? 'bg-[#fcbb62]' : 'bg-[#fff]'
                                            }`}
                                        />
                                        <div className="w-[90px] h-[111px] left-0 top-0 absolute flex justify-center items-center">
                                            <img
                                                className="w-[90px] h-[111px] object-contain"
                                                src={GoiListMenu}
                                                alt="Dồi Trường"
                                            />
                                        </div>

                                        <div className="h-[60px] left-[114px] top-[27px] absolute flex flex-col justify-center">
                                            <div
                                                className={`text-[31px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'salad' ? 'text-white' : 'text-[#3F3F41]'}`}
                                            >
                                                Gỏi
                                            </div>
                                            <div
                                                className={`text-[18px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'salad' ? 'text-white' : 'text-[#9E9E9E]'}`}
                                            >
                                                1 món
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // */}
                                <div
                                    onClick={() => handleCurrentMenu('dove')}
                                    className="cursor-pointer w-[100%] h-[111px] rounded-2xl mx-auto flex justify-center"
                                >
                                    <div className="w-[100%] h-[111px] relative">
                                        <div
                                            className={`w-[88%] h-[111px] left-[58px] top-0 absolute rounded-lg ${
                                                currentMenu[0].type == 'dove' ? 'bg-[#fcbb62]' : 'bg-[#fff]'
                                            }`}
                                        />
                                        <div className="w-[90px] h-[111px] left-0 top-0 absolute flex justify-center items-center">
                                            <img
                                                className="w-[90px] h-[111px] object-contain"
                                                src={GoiListMenu}
                                                alt="Dồi Trường"
                                            />
                                        </div>

                                        <div className="h-[60px] left-[114px] top-[27px] absolute flex flex-col justify-center">
                                            <div
                                                className={`text-[31px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'dove' ? 'text-white' : 'text-[#3F3F41]'}`}
                                            >
                                                Chim bồ câu
                                            </div>
                                            <div
                                                className={`text-[18px] font-bold font-[MTD Valky Bold] ${currentMenu[0].type == 'dove' ? 'text-white' : 'text-[#9E9E9E]'}`}
                                            >
                                                1 món
                                            </div>
                                        </div>
                                    </div>
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

export default Menu;
