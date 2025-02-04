export interface DishMenu {
    type: string;
    img: string;
    title: string;
    name: string;
    subName: string;
    description: string;
    quantity: string;
    categories: string[];
    priceStart: string;
    priceEnd: string;
}

export interface TypeItem {
    imageSrc: string;
    title: string;
    date: string;
}

export interface TypeSlider {
    sliderData: TypeItem | {};
    settings: object;
}
export interface BannerHomeProps {
    bannerImg: string;
}

export interface TypeDish {
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

export type TypeListMenuProps = {
    handleCurrentMenu: (e: string) => void;
    currentMenu: TypeDish[];
};
