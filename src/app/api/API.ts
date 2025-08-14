import {MAIN_DATA} from '../../shared/data/MAIN_DATA';
import {
    type Category,
    type Equipment,
    type EquipmentSubcategory,
    type MachineryCharacteristicKeys,
    type MachineryData,
    type SubcategoryItemData
} from '../../shared/types/common.types';
import {machineriesData} from '../../shared/data/machineriesData';
import {EQUIPMENT_SUBCATEGORY} from '../../shared/constants/EQUIPMENT_SUBCATEGORY';

export const API = {

    getFullSubcategoriesData: (): SubcategoryItemData<Category>[] => {
        const subcategoriesKeys = Object.keys(MAIN_DATA.subcategories) as Array<
            keyof typeof MAIN_DATA.subcategories
        >;
        //console.log(subcategoriesKeys)

        return subcategoriesKeys.map((key, index) => {
            const subcategoryItem = MAIN_DATA.subcategories[key];
            if (!subcategoryItem) {
                throw new Error(`Подкатегория ${key} не найдена`);
            }

            return {
                subcategory: key,
                position: index,
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