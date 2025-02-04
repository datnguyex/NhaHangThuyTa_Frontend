import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { EclipseBgContentMenu, MenuOrderIcon } from '~/component/Icon';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import ListMenu from '~/component/Layout/Listmenu/Listmenu';
import { CustomArrowNextMenu, CustomArrowPrevMenu } from '~/component/Layout/Slider/CustomArrow/CustomArrow';
import { handleNextClick, handlePrevClick } from '~/component/Layout/Slider/HandleClick';
import SliderMenu from '~/component/Layout/Slider/SliderCustom/SliderMenu/SliderMenu';
import { DishMenu } from '~/component/Type';
import { BackgroundContentMenu, BoArgentinaSotTieuDen, FurnitureContentMenu } from '~/Images';
import { fetchMenuData } from '~/API/MenuAPI';
import './Menu.css';

function Menu() {
    const [screenSize, setScreenSize] = useState('xs');
    const [currentMenu, setCurrentMenu] = useState<DishMenu[]>([]);

    const [currentDish, setCurrentDish] = useState<DishMenu | object>({});
    useEffect(() => {
        fetchMenuData().then((menuData: any) => {
            if (menuData && menuData.Salad) {
                setCurrentMenu(menuData.Salad);
                setCurrentDish(menuData.Salad[0]);
                console.log(menuData.Salad);
            } else {
                console.error('Beef menu data is undefined or not available.');
            }
        });
    }, []);
    const sliderRef = useRef<Slider | null>(null);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setScreenSize('lg');
            } else {
                setScreenSize('xs');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const settings = {
        focusOnSelect: true,
        slidesToShow:
            screenSize === 'xs'
                ? 3
                : currentMenu.length > 0 && (currentMenu[0]?.type === 'beef' || currentMenu[0]?.type === 'springRoll')
                  ? 4
                  : 3,
        afterChange: (index: number) => {
            setCurrentDish(currentMenu[index]);
        },
        prevArrow: screenSize === 'xs' ? undefined : <CustomArrowPrevMenu onClick={() => handlePrevClick(sliderRef)} />,
        nextArrow: screenSize === 'xs' ? undefined : <CustomArrowNextMenu onClick={() => handleNextClick(sliderRef)} />,
    };

    const [displayMenuMb, setDisplayMenuMb] = useState(false);
    const handleCurrentMenu = async (e: string) => {
        const menuData = await fetchMenuData();

        if (menuData) {
            let selectedMenu: DishMenu[] = [];
            let selectedDish: DishMenu = {
                type: '',
                img: '',
                title: '',
                name: '',
                subName: '',
                description: '',
                quantity: '',
                categories: [],
                priceStart: '0',
                priceEnd: '0',
            };

            if (e === 'beef') {
                selectedMenu = menuData.Salad;
                selectedDish = selectedMenu[0];
            } else if (e === 'doiTruong') {
                selectedMenu = menuData.DoiTruong;
                selectedDish = selectedMenu[0];
            } else if (e === 'springRoll') {
                selectedMenu = menuData.SpringRoll;
                selectedDish = selectedMenu[0];
            } else if (e === 'salad') {
                selectedMenu = menuData.Beef;
                selectedDish = selectedMenu[0];
            } else if (e === 'dove') {
                selectedMenu = menuData.Dove;
                selectedDish = selectedMenu[0];
            }
            setCurrentMenu(selectedMenu);
            setCurrentDish(selectedDish);
        } else {
            console.log('Menu data not available');
        }

        // Toggle display menu (if needed)
        setDisplayMenuMb(!displayMenuMb);
    };

    const handleDisplayMenuDB = () => {
        setDisplayMenuMb(!displayMenuMb);
    };

    return (
        <>
            <Header />
            <div
                className="xs:max-h-[880px] lg:max-h-[1000px] h-[1000px] relative overflow-hidden"
                style={{
                    backgroundImage: `url(${BackgroundContentMenu})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {displayMenuMb == true ? (
                    <div className="lg:hidden absolute inset-0 bg-black opacity-40" style={{ zIndex: 1 }}></div>
                ) : (
                    <></>
                )}
                <div
                    onClick={() => handleDisplayMenuDB()}
                    className={`cursor-pointer lg:hidden xs:absolute z-[10] top-[13%] right-[3%] ${displayMenuMb ? 'hidden' : 'block'}`}
                >
                    <MenuOrderIcon />
                </div>
                <div className="absolute top-[0] left-[0] overflow-hidden">
                    <EclipseBgContentMenu
                        width={screenSize === 'lg' ? 927 : 375}
                        height={screenSize === 'lg' ? 556 : 254}
                    />
                </div>
                <div className="absolute right-0 bottom-0 flex justify-end">
                    <img
                        className="lg:w-full lg:h-full xs:w-[50%] xs:h-auto object-cover"
                        src={FurnitureContentMenu}
                        alt=""
                    />
                </div>

                <div className="lg:w-[82%] xs:w-[90%] h-full mx-auto flex justify-centter items-center">
                    <div className="lg:w-[70%] xs:w-[100%] h-full justify-center flex flex-col">
                        <div className="flex xs:flex-col xs:items-start xs:justify-center lg:items-center lg:justify-start max-h-[45%] ">
                            <div className="xs:w-[60%] xs:h-[60%] lg:w-full lg:h-full ">
                                <img
                                    className="object-cover"
                                    src={currentDish && 'img' in currentDish ? (currentDish as DishMenu).img : ''}
                                />
                            </div>
                            <div className="flex flex-col gap-[10px] w-full auto">
                                <div className="text-[#3f3f41] text-[32px] lg:text-[49px] font-bold font-manrope">
                                    {currentDish && 'name' in currentDish ? (currentDish as DishMenu).name : ''}
                                </div>
                                <div className="text-[#ed7d31]  xs:text-[42px] lg:text-[72px] font-bold font-mtd-valky">
                                    {currentDish && 'subName' in currentDish ? (currentDish as DishMenu).subName : ''}
                                </div>
                                <div className="text-[#3f3f41] xs:text-[18px] lg:text-[25px] font-normal font-manrope">
                                    {currentDish && 'description' in currentDish
                                        ? (currentDish as DishMenu).description
                                        : ''}{' '}
                                    -{' '}
                                </div>
                                <div className="flex gap-[6px]">
                                    {currentDish && 'categories' in currentDish && currentDish.categories ? (
                                        Object.entries(currentDish.categories).map(([key, category], index) => (
                                            <div
                                                key={index}
                                                className="xs:h-[25px] lg:h-[35px] xs:px-[10px] lg:px-[26px] xs:py-0.5 lg:py-1 bg-[#fcbb62] rounded justify-start items-center gap-1.5 inline-flex overflow-hidden"
                                            >
                                                <div className="text-white xs:text-[15px] lg:text-[21px] font-bold font-['MJ Satoshi']">
                                                    {category}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <div className="w-[612.95px] text-[#ed7d31] xs:text-[20px] lg:text-[41px] font-bold font-manrope">
                                    {currentDish && 'priceStart' in currentDish
                                        ? (currentDish as DishMenu).priceStart
                                        : ''}{' '}
                                    -{' '}
                                    {currentDish && 'priceEnd' in currentDish ? (currentDish as DishMenu).priceEnd : ''}
                                </div>
                            </div>
                        </div>
                        <div
                            className={`mt-[30px] xs:max-w-[100%] menu-slider ${
                                currentMenu.length > 0 &&
                                (currentMenu[0].type === 'beef' || currentMenu[0].type === 'springRoll')
                                    ? 'max-w-[81%]'
                                    : 'max-w-[70%]'
                            }`}
                        >
                            {currentMenu.length > 0 &&
                            currentMenu[0].type !== 'salad' &&
                            currentMenu[0].type !== 'dove' ? (
                                <SliderMenu settings={settings} currentMenu={currentMenu} sliderRef={sliderRef} />
                            ) : null}
                        </div>
                    </div>
                    <div
                        className={`lg:w-[30%] bg-opacity-50 xs:w-[88%] xs:absolute xs:z-[100] xs:top-[55%] xs:translate-y-[-50%] ${displayMenuMb ? 'xs:block' : 'xs:hidden'}`}
                    >
                        <ListMenu handleCurrentMenu={handleCurrentMenu} currentMenu={currentMenu} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Menu;
