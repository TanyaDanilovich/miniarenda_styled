import {MAIN_DATA} from '../../shared/data/MAIN_DATA';
import {
    type Equipment,
    type EquipmentSubcategory,
    type MachineryCharacteristicKeys,
    type MachineryData,
    type SubcategoryItem
} from '../../shared/types/common.types';
import {machineriesData} from '../../shared/data/machineriesData';
import {EQUIPMENT_SUBCATEGORY} from '../../shared/constants/EQUIPMENT_SUBCATEGORY';

export const API = {

    getFullSubcategoriesData: (): SubcategoryItem[] => {
        const subcategoriesKeys = Object.keys(MAIN_DATA.subcategories) as Array<
            keyof typeof MAIN_DATA.subcategories
        >;
        //console.log(subcategoriesKeys)

        return subcategoriesKeys.map((key) => {
            const subcategoryItem = MAIN_DATA.subcategories[key];
            if (!subcategoryItem) {
                throw new Error(`Подкатегория ${key} не найдена`);
            }

            return {
                ...subcategoryItem,
                image: subcategoryItem.images[0],
            };
        });
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