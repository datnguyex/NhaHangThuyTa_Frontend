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
export interface TypeItemKimSen {
    imageSrc: string;
    title: string;
    date: string;
}

export interface TypeSliderKimSen {
    sliderData: TypeItemKimSen[];
    settings: any;
}
export interface TypeItemNganSen {
    imageSrc: string;
    title: string;
    date: string;
}

export interface TypeSliderNganSen {
    sliderData: TypeItemNganSen[];
    settings: Record<string, any>;
}
export interface TypeItemThanhSen {
    imageSrc: string;
    title: string;
    date: string;
}

export interface TypeSliderThanhSen {
    sliderData: TypeItemThanhSen[];
    settings: Record<string, any>;
}
export interface TypeItemThuyenRong {
    imageSrc: string;
    title: string;
    date: string;
}

export interface TypeSliderThuyenRong {
    sliderData: TypeItemThuyenRong[];
    settings: object;
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
    displayMenuMb: boolean;
    handleCurrentMenu: (e: string) => void;
    currentMenu: TypeDish[];
};
