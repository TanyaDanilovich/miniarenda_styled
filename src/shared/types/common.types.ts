import {ReactElement, ReactNode, SVGProps} from 'react';
import {CATEGORY} from '../constants/CATEGORY';
import {RENTAL_SUBCATEGORY} from '../constants/RENTAL_SUBCATEGORY';
import {SERVICE_SUBCATEGORY} from '../constants/SERVICE_SUBCATEGORY';
import {SERVICE_GROUP} from '../constants/SERVICE_GROUP';

export type PropsWithChildren<P> = P & { children?: ReactNode };

export type ImageProps = { src: string, alt: string }

export type MenuItemType = { title: string, url: string, subMenuItems?: MenuItemType[] }


export type Category =
    typeof CATEGORY[keyof typeof CATEGORY];

export type RentalSubcategory =
    typeof RENTAL_SUBCATEGORY[keyof typeof RENTAL_SUBCATEGORY];

export type ServiceSubcategory =
    typeof SERVICE_SUBCATEGORY[keyof typeof SERVICE_SUBCATEGORY];

export type ServiceGroup =
    typeof SERVICE_GROUP[keyof typeof SERVICE_GROUP];

export type CategoryItem<T extends Category> = {
    id: string;
    category: T;
    url: string;
    title: string;
    description: string;
    content?: string;
    images: ImageProps[];
    seo: Seo;
    items: SubcategoriesType<T>[];
}

export type SubcategoriesType<T extends Category> =
    T extends typeof CATEGORY.RENTAL
        ? RentalSubcategory
        : T extends typeof CATEGORY.SERVICES
            ? ServiceSubcategory
            : never;

export type SubcategoryItem<T extends RentalSubcategory | ServiceSubcategory> = {
    id: string;
    subcategory: T;
    subcategoryUrl: string;
    subcategoryTitle: string;
    description?: string;
    content?: string;
    images: ImageProps[];
    seo?: Seo;
    group?: ServiceGroup;
    position: number;
    icon?: string;
}

export type SubcategoryItemData<T extends Category> = {
    id: string,
    category: T,
    categoryTitle?: string,
    categoryUrl: string,
    subcategory: SubcategoriesType<T>,
    subcategoryTitle: string,
    subcategoryDescription?: string,
    subcategoryUrl: string,
    image?: ImageProps,
    position: number,
    url: string,
    icon?: string;
}

export type Seo = {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
}

export type MainData = {
    categories: {
        [key in Category]: CategoryItem<key>
    },
    subcategoryItems: {
        [key in RentalSubcategory | ServiceSubcategory]: SubcategoryItem<key>
    }
}

export type RoutesPathData = { url: string, title: string }