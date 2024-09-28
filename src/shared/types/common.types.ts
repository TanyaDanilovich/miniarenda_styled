import {ReactNode} from 'react';
import {CATEGORIES, RENTAL_SUBCATEGORIES, SERVICE_GROUP, SERVICE_SUBCATEGORIES} from '../constants';

export type PropsWithChildren<P> = P & { children?: ReactNode };

export type ImageProps = { src: string, alt: string }

export type MenuItemType = { title: string, url: string, subMenuItems?: MenuItemType[] }


export type Categories =
    typeof CATEGORIES[keyof typeof CATEGORIES];

export type RentalSubcategories =
    typeof RENTAL_SUBCATEGORIES[keyof typeof RENTAL_SUBCATEGORIES];

export type ServiceSubcategories =
    typeof SERVICE_SUBCATEGORIES[keyof typeof SERVICE_SUBCATEGORIES];

export type ServiceGroup =
    typeof SERVICE_GROUP[keyof typeof SERVICE_GROUP];

export type CategoryItem<T extends Categories> = {
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

export type SubcategoriesType<T extends Categories> =
    T extends typeof CATEGORIES.RENTAL
        ? RentalSubcategories
        : T extends typeof CATEGORIES.SERVICES
            ? ServiceSubcategories
            : never;

export type SubcategoryItem<T extends RentalSubcategories| ServiceSubcategories> = {
    id: string;
    subcategory: T;
    url: string;
    title: string;
    description: string;
    content?: string;
    images: ImageProps[];
    seo: Seo;
    group?: ServiceGroup;
    position: number
}


export type Seo = {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
}

export type MainData = {
    categories: {
        [key in Categories]: CategoryItem<key>
    },
    subcategoryItems: {
        [key in RentalSubcategories | ServiceSubcategories]: SubcategoryItem<key>
    }
}