import {ReactNode} from 'react';
import {SITE_DATA} from '../constants';

export type PropsWithChildren<P> = P & { children?: ReactNode };

export type ImageProps = { src: string, alt: string }

export type MenuItemType = { title: string, url: string, subMenuItems?: MenuItemType[] }

export type mainDataItemType = { id: string, url: string, title: string }


export type ServicesSubcategoriesType = 'digging-trench' | 'digging-foundation'
    | 'stump-removal' | 'drilling' | 'ground-movement' | 'other-groundworks' | 'dismantling'

export type RentalSubcategoriesType = 'rental-exavator' | 'rentals-hammer' | 'rentals-drill'

export type ServicesDataType = {
    categories: Categories;
};


export type Categories = {
    rental: CategoriesItem<RentalSubcategoriesType>,
    services: CategoriesItem<ServicesSubcategoriesType>
}

export type CategoriesItem<T extends RentalSubcategoriesType | ServicesSubcategoriesType> = {
    type: string;
    url: string;
    title: string;
    description: string;
    content?: string;
    images: ImageProps[];
    seo: Seo;
    items: Subcategories<T> ;
}

export type SubcategoriesItem = {
    id: string;
    subtype?: string;
    url: string;
    title: string;
    description: string;
    content?: string;
    images: ImageProps[];
    seo: Seo;
}

export type Subcategories<T extends RentalSubcategoriesType | ServicesSubcategoriesType> = {
    [key in T]: SubcategoriesItem;
}

export type Seo = {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
}