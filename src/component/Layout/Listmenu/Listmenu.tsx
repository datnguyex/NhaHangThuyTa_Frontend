import { TitleListDishMenu } from '~/component/Icon';
import { BoArgentinaSotTieuDen, ChaGioListMenu, ChimBoCauListMenu, DoiTruongListMenu, GoiListMenu } from '~/Images';
import { useEffect, useState } from 'react';
import { fetchMealListData } from '~/API/MenuAPI';

interface Dish {
    type: string;
    img: string;
    title: string;
    name: string;
    subName: string;
    quantity: string;
    description: string;
    categories: string[];
    priceStart: string;
    priceEnd: string;
}

type ListMenuProps = {
    displayMenuMb: boolean;
    handleCurrentMenu: (e: string) => void;
    currentMenu: Dish[];
};

const ListMenu: React.FC<ListMenuProps> = ({ displayMenuMb, handleCurrentMenu, currentMenu }) => {
    const [menuData, setMenuData] = useState<Dish[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMealListData();
            if (data) {
                setMenuData(data);
            }
        };

        fetchData();
    }, []);
    console.log('mealList', menuData);
    return (
        <div className="overflow-hidden xs:max-h-[65vh] lg:max-h-[100vh] h-[92vh] lg:relative bg-[#fff9eb] rounded-[32px] ">
            <div className="flex justify-center mt-[30px]">
                <TitleListDishMenu />
            </div>

            <div className="w-[84.5%] flex-col justify-start h-full items-center flex mx-auto">
                {Object.keys(menuData).map((key: any) => {
                    const dish = menuData[key];
                    return (
                        <div
                            key={dish.type}
                            onClick={() => handleCurrentMenu(dish.type)}
                            className="cursor-pointer mt-[10px] w-full relative xs:h-[70px] lg:h-[15%] rounded-2xl mx-auto flex justify-center"
                            style={{
                                boxShadow: '2px 3px 2px 0px rgba(0, 0, 0, 0.25)',
                            }}
                        >
                            <div className="w-full relative">
                                <div
                                    className={`w-[88%] xs:h-[70px] lg:h-full left-[58px] top-0 absolute rounded-lg ${currentMenu[0]?.type == dish.type ? 'bg-[#fcbb62]' : 'bg-[#fff]'}`}
                                >
                                    <div className="w-full h-full flex flex-col justify-center">
                                        <div
                                            className={`xs:text-[16px] ml-[15%] lg:text-[31px] font-bold font-[MTD Valky Bold] ${currentMenu[0]?.type == dish.type ? 'text-white' : 'text-[#3F3F41]'}`}
                                        >
                                            {dish.name}
                                        </div>
                                        <div
                                            className={`text-[18px] ml-[15%] font-bold font-[MTD Valky Bold] ${currentMenu[0]?.type == dish.type ? 'text-white' : 'text-[#9E9E9E]'}`}
                                        >
                                            {dish.quantity} món
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[20%] left-0 top-[50%] translate-y-[-50%] absolute flex justify-center items-center">
                                    <img className="object-cover" src={dish.img} alt={dish.name} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListMenu;
