import {MAIN_DATA} from '../../shared/data/MAIN_DATA';
import {CATEGORY} from '../../shared/constants/CATEGORY';
import img from '../../assets/images/servises/servises_1.jpg';
import {v1} from 'uuid';
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

    getRentalSubcategoriesDataFullUrl: (): SubcategoryItemData<typeof CATEGORY.RENTAL>[] => {
        const rentalSubcategories = MAIN_DATA.categories[CATEGORY.RENTAL].items;
        const rentalSubcategoriesData = rentalSubcategories.map((rentItem, index) => ({
            ...MAIN_DATA.subcategoryItems[rentItem],
            category: MAIN_DATA.categories[CATEGORY.RENTAL].category,
            categoryUrl: MAIN_DATA.categories[CATEGORY.RENTAL].url,
            id: v1(),
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
            ...MAIN_DATA.subcategoryItems[rentItem],
            category: MAIN_DATA.categories[CATEGORY.RENTAL].category,
            categoryUrl: MAIN_DATA.categories[CATEGORY.RENTAL].url,
            id: v1(),
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
            ...MAIN_DATA.subcategoryItems[serviceItem],
            category: MAIN_DATA.categories[CATEGORY.SERVICES].category,
            categoryUrl: MAIN_DATA.categories[CATEGORY.SERVICES].url,
            id: v1(),
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