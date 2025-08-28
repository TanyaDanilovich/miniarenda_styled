import { type Equipment, type MachineryCharacteristicKeys, type MachineryData, type SubcategoryItem } from '../../shared/types/common.types';
export declare const API: {
    getFullSubcategoriesData: () => SubcategoryItem[];
    getMachineriesData: (keys: MachineryCharacteristicKeys[]) => MachineryData[];
    getAdditionEquipmentSubcategoriesData: () => Equipment[];
};
