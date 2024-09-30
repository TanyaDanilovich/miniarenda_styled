import {MAIN_DATA} from '../../shared/constants/MAIN_DATA';
import {CATEGORY} from '../../shared/constants/CATEGORY';
import img from '../../assets/images/servises/servises_1.jpg';
import {v1} from 'uuid';
import {Category, RentalSubcategory, ServiceSubcategory, SubcategoryItemData} from '../../shared/types/common.types';

export const API = {
    getFullSubcategoriesData: (): SubcategoryItemData<Category>[] => {
        const rentalKeys = MAIN_DATA.categories[CATEGORY.RENTAL].items;
        const servicesKeys = MAIN_DATA.categories[CATEGORY.SERVICES].items;

        const servicesData = [
            ...rentalKeys.map((rentItem, index) =>
                ({
                    subcategory: MAIN_DATA.subcategoryItems[rentItem].subcategory,
                    subcategoryTitle: MAIN_DATA.subcategoryItems[rentItem].subcategoryTitle,
                    subcategoryDescription: MAIN_DATA.subcategoryItems[rentItem].description,
                    subcategoryUrl: MAIN_DATA.subcategoryItems[rentItem].subcategoryUrl,
                    image: MAIN_DATA.subcategoryItems[rentItem].images[0] || {src: img, alt: ""},

                    category: MAIN_DATA.categories[CATEGORY.RENTAL].category,
                    categoryTitle: MAIN_DATA.categories[CATEGORY.RENTAL].title,
                    categoryUrl: MAIN_DATA.categories[CATEGORY.RENTAL].url,
                    id: v1(),
                    position: index,
                })),
            ...servicesKeys.map((serviceItem, index) =>
                ({
                    subcategory: MAIN_DATA.subcategoryItems[serviceItem].subcategory,
                    subcategoryTitle: MAIN_DATA.subcategoryItems[serviceItem].subcategoryTitle,
                    subcategoryDescription: MAIN_DATA.subcategoryItems[serviceItem].description,
                    subcategoryUrl: MAIN_DATA.subcategoryItems[serviceItem].subcategoryUrl,
                    image: MAIN_DATA.subcategoryItems[serviceItem].images[0] || {src: img, alt: ""},

                    category: MAIN_DATA.categories[CATEGORY.SERVICES].category,
                    categoryTitle: MAIN_DATA.categories[CATEGORY.SERVICES].title,
                    categoryUrl: MAIN_DATA.categories[CATEGORY.SERVICES].url,
                    id: v1(),
                    position: rentalKeys.length + index,
                }))
        ]
        return servicesData.map(item => ({
            ...item,
            url: `${item.categoryUrl}/${item.subcategoryUrl}`,
        }))
            ;
    },
    getRentalSubcategories: (): RentalSubcategory[] => {
        return MAIN_DATA.categories[CATEGORY.RENTAL].items
    },
    getRentalSubcategoriesData: (): SubcategoryItemData<typeof CATEGORY.RENTAL>[] => {
        const rentalSubcategories = MAIN_DATA.categories[CATEGORY.RENTAL].items;
        const rentalSubcategoriesData = rentalSubcategories.map((rentItem, index) => ({
            ...MAIN_DATA.subcategoryItems[rentItem],
            category: MAIN_DATA.categories[CATEGORY.RENTAL].category,
            categoryUrl: MAIN_DATA.categories[CATEGORY.RENTAL].url,
            id: v1(),
            position: index,
        }))
        console.dir(rentalSubcategoriesData);
        return rentalSubcategoriesData.map(item => (
            {
                ...item,
                url: `${item.categoryUrl}/${item.subcategoryUrl}`
            }
        ))
    },
    getServiceSubcategories: (): ServiceSubcategory[] => {
        return MAIN_DATA.categories[CATEGORY.SERVICES].items
    },
}