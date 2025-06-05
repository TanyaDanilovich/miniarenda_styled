import {MAIN_DATA} from '../../shared/data/MAIN_DATA';
import {CATEGORY} from '../../shared/constants/CATEGORY';
import img from '../../assets/images/servises/exavator/_DSC1723.jpg';

import {
    Category,
    Equipment, EquipmentSubcategory,
    MachineryCharacteristicKeys,
    MachineryData,
    RentalSubcategory,
    ServiceSubcategory,
    SubcategoryItemCard,
    SubcategoryItemData
} from '../../shared/types/common.types';
import {machineriesData} from '../../shared/data/machineriesData';
import {EQUIPMENT_SUBCATEGORY} from '../../shared/constants/EQUIPMENT_SUBCATEGORY';

export const API = {
    getServiceSubcategories: (): ServiceSubcategory[] => {
        return MAIN_DATA.categories[CATEGORY.SERVICES].items
    },

    getRentalSubcategories: (): RentalSubcategory[] => {
        return MAIN_DATA.categories[CATEGORY.RENTAL].items
    },

    getFullSubcategoriesData: (): SubcategoryItemData<Category>[] => {
        const rentalKeys = MAIN_DATA.categories[CATEGORY.RENTAL].items;
        const servicesKeys = MAIN_DATA.categories[CATEGORY.SERVICES].items;

        const servicesData = [
            ...rentalKeys.map((rentItem, index) =>
                ({
                    subcategory: MAIN_DATA.subcategories[rentItem].subcategory,
                    subcategoryTitle: '',
                    subcategoryDescription: '',
                    subcategoryUrl: MAIN_DATA.subcategories[rentItem].subcategoryUrl,
                    image: MAIN_DATA.subcategories[rentItem].images[0] || {src: img, alt: ""},
                    category: MAIN_DATA.categories[CATEGORY.RENTAL].category,
                    categoryTitle: '',
                    categoryUrl: MAIN_DATA.categories[CATEGORY.RENTAL].url,
                    i18nKey: MAIN_DATA.subcategories[rentItem].i18nKey,
                    id: MAIN_DATA.subcategories[rentItem].id,
                    position: index,
                })),
            ...servicesKeys.map((serviceItem, index) =>
                ({
                    subcategory: MAIN_DATA.subcategories[serviceItem].subcategory,
                    subcategoryTitle: '',
                    subcategoryDescription: '',
                    subcategoryUrl: MAIN_DATA.subcategories[serviceItem].subcategoryUrl,
                    image: MAIN_DATA.subcategories[serviceItem].images[0] || {src: img, alt: ""},
                    category: MAIN_DATA.categories[CATEGORY.SERVICES].category,
                    categoryTitle: '',
                    categoryUrl: MAIN_DATA.categories[CATEGORY.SERVICES].url,
                    id: MAIN_DATA.categories[CATEGORY.SERVICES].id,
                    i18nKey: MAIN_DATA.subcategories[serviceItem].i18nKey,
                    position: rentalKeys.length + index,
                }))
        ]
        return servicesData.map(item => ({
            ...item,
            url: `${item.categoryUrl}/${item.subcategoryUrl}`,
        }))
            ;
    },

    getRentalSubcategoriesDataFullUrl: (): SubcategoryItemData<typeof CATEGORY.RENTAL>[] => {
        const rentalSubcategories = MAIN_DATA.categories[CATEGORY.RENTAL].items;
        const rentalSubcategoriesData = rentalSubcategories.map((rentItem, index) => ({
            ...MAIN_DATA.subcategories[rentItem],
            category: MAIN_DATA.categories[CATEGORY.RENTAL].category,
            categoryUrl: MAIN_DATA.categories[CATEGORY.RENTAL].url,
            id: MAIN_DATA.categories[CATEGORY.RENTAL].id,
            position: index,
        }))
        //console.log(rentalSubcategoriesData);
        return rentalSubcategoriesData.map(item => (
            {
                ...item,
                url: `${item.categoryUrl}/${item.subcategoryUrl}`,
            }
        ))
    },

    getRentalSubcategoriesDataShortUrl: (): SubcategoryItemData<typeof CATEGORY.RENTAL>[] => {
        const rentalSubcategories = MAIN_DATA.categories[CATEGORY.RENTAL].items;
        const rentalSubcategoriesData = rentalSubcategories.map((rentItem, index) => ({
            ...MAIN_DATA.subcategories[rentItem],
            category: MAIN_DATA.categories[CATEGORY.RENTAL].category,
            categoryUrl: MAIN_DATA.categories[CATEGORY.RENTAL].url,
            id: MAIN_DATA.categories[CATEGORY.RENTAL].id,
            position: index,
        }))
        //console.log(rentalSubcategoriesData);
        return rentalSubcategoriesData.map(item => (
            {
                ...item,
                url: `${item.subcategoryUrl}`,
            }
        ))
    },

    getServicesSubcategoriesData: (): SubcategoryItemData<typeof CATEGORY.SERVICES>[] => {
        const serviceSubcategories = MAIN_DATA.categories[CATEGORY.SERVICES].items;
        const serviceSubcategoriesData = serviceSubcategories.map((serviceItem, index) => ({
            ...MAIN_DATA.subcategories[serviceItem],
            category: MAIN_DATA.categories[CATEGORY.SERVICES].category,
            categoryUrl: MAIN_DATA.categories[CATEGORY.SERVICES].url,
            id: MAIN_DATA.categories[CATEGORY.SERVICES].id,
            position: index,
        }))
        //console.dir(rentalSubcategoriesData);
        return serviceSubcategoriesData.map(item => (
            {
                ...item,
                url: `${item.subcategoryUrl}`
            }
        ))
    },

    getMachineriesData: (keys: MachineryCharacteristicKeys[]): MachineryData[] => {
        return machineriesData.map(machine => {
            return ({
                ...machine,
                characteristics: machine.characteristics && machine.characteristics
                    .filter(item => keys.includes(item.id))
            })
        })
    },

    getSubcategoryItemCards: (key: ServiceSubcategory | RentalSubcategory): SubcategoryItemCard[] | undefined => {
        return MAIN_DATA.subcategoryItemCards[key]
    },

    getAdditionEquipmentSubcategoriesData: (): Equipment[] => {
        const equipments: EquipmentSubcategory[] = Object.values(EQUIPMENT_SUBCATEGORY);
        return equipments.map(equipment =>
            MAIN_DATA.equipments[equipment])
            .sort((a, b) => a.position - b.position);
    }

}