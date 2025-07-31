import {MAIN_DATA} from '../../shared/data/MAIN_DATA';
import {CATEGORY} from '../../shared/constants/CATEGORY';

import {
    Category,
    Equipment,
    EquipmentSubcategory,
    MachineryCharacteristicKeys,
    MachineryData,
    SubcategoryItemData
} from '../../shared/types/common.types';
import {machineriesData} from '../../shared/data/machineriesData';
import {EQUIPMENT_SUBCATEGORY} from '../../shared/constants/EQUIPMENT_SUBCATEGORY';

export const API = {

    getFullSubcategoriesData: (): SubcategoryItemData<Category>[] => {
        const rentalKeys = MAIN_DATA.categories[CATEGORY.RENTAL].items;
        const servicesKeys = MAIN_DATA.categories[CATEGORY.SERVICES].items;
        return [...rentalKeys,...servicesKeys]
            .map((item, index) =>
                ({
                    ...MAIN_DATA.subcategories[item], position: index,
                    image:MAIN_DATA.subcategories[item].images[0]
                }))
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

    getAdditionEquipmentSubcategoriesData: (): Equipment[] => {
        const equipments: EquipmentSubcategory[] = Object.values(EQUIPMENT_SUBCATEGORY);
        return equipments.map(equipment =>
            MAIN_DATA.equipments[equipment])
            .sort((a, b) => a.position - b.position);
    }

}