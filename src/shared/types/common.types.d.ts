import type { ReactNode } from 'react';
import { CATEGORY } from '../constants/CATEGORY';
import { SUBCATEGORY } from '../constants/SUBCATEGORY.ts';
import { MACHINERY_CHARACTERISTICS } from '../constants/MACHINERY_CHARACTERISTICS';
import { MACHINERY_PRICE_CHARACTERISTICS } from '../constants/MACHINERY_PRICE_CHARACTERISTICS';
import { EQUIPMENT_SUBCATEGORY } from '../constants/EQUIPMENT_SUBCATEGORY';
export type PropsWithChildren<P> = P & {
    children?: ReactNode;
};
export type SchemaOrgData = {
    itemType?: string;
    itemProp?: string;
    itemScope?: boolean;
};
export type ImageProps = {
    src: string;
    srcSet?: {
        480?: string;
        768?: string;
        1200?: string;
    };
    alt: string;
};
export type MenuItemType = {
    title: string;
    url: string;
};
export type MeasurementUnits = 'час' | 'отв.';
export type Category = typeof CATEGORY[keyof typeof CATEGORY];
export type SubcategoryValue = typeof SUBCATEGORY[keyof typeof SUBCATEGORY];
export type Subcategory = keyof typeof SUBCATEGORY;
export type EquipmentSubcategory = typeof EQUIPMENT_SUBCATEGORY[keyof typeof EQUIPMENT_SUBCATEGORY];
export type CategoryItem<T extends Category> = {
    id: string;
    category: T;
    url: string;
    i18nKey: string;
    content?: string;
    images: ImageProps[];
    seo: Seo;
    items: Subcategory[];
};
export type SubcategoryItem = {
    id: string;
    subcategoryUrl: string;
    i18nKey: string;
    title: string;
    descriptionUser: string[];
    descriptionGoogle?: string;
    content?: string;
    images: ImageProps[];
    position: number;
    icon?: string;
    seo: Seo;
};
export type Seo = {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
};
export type MainData = {
    categories?: {
        [key in Category]: CategoryItem<key>;
    };
    subcategories: {
        [key in SubcategoryValue]: SubcategoryItem;
    };
    equipments: {
        [key in EquipmentSubcategory]: Equipment;
    };
};
export type Equipment = {
    id: string;
    title: string;
    description: string;
    i18nKey: string;
    image: ImageProps;
    position: number;
    characteristicList: string[];
};
export type RoutesPathData = {
    url: string;
    i18nKey: string;
};
export type MachineryCharacteristicKeys = typeof MACHINERY_CHARACTERISTICS[keyof typeof MACHINERY_CHARACTERISTICS];
export type Characteristic<T extends MachineryCharacteristicKeys | MachineryPriceCharacteristicKeys> = {
    id: T;
    title: string;
    value: string;
};
export type MachineryData = {
    id: string;
    title?: string;
    tableTitle?: string | undefined;
    image?: ImageProps;
    characteristics: Characteristic<MachineryCharacteristicKeys>[];
    priceCharacteristics: Characteristic<MachineryPriceCharacteristicKeys>[];
};
export type MachineryPriceCharacteristicKeys = typeof MACHINERY_PRICE_CHARACTERISTICS[keyof typeof MACHINERY_PRICE_CHARACTERISTICS];
export type IconSizeProp = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";
export type IconId = 'icon-angle-down' | 'icon-angle-right' | 'icon-award' | 'icon-calendar' | 'icon-check-circle' | 'icon-check-double' | 'icon-handshake' | 'icon-link' | 'icon-long-arrow-left' | 'icon-minus' | 'icon-phone' | 'icon-phone-volume' | 'icon-plus-circle' | 'icon-search' | 'icon-star' | 'icon-suitcase' | 'icon-table' | 'icon-arrow-left';
export type IconSize = '0.5x' | '1x' | '1.5x' | '2x' | '3x' | '4x' | '5x';
