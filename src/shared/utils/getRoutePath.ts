import {Category, RentalSubcategory, RoutesPathData, ServiceSubcategory} from '../types/common.types';
import {MAIN_DATA} from '../data/MAIN_DATA';

export function getRoutePath(category: Category,
                             subcategory?: ServiceSubcategory | RentalSubcategory): RoutesPathData {
    const normalize = (path: string): string =>
        path.replace(/^\//, ""); // удаляет ведущий слэш, если он есть

    const categoryData: RoutesPathData = {
        url: normalize(MAIN_DATA.categories[category].url),
        i18nKey: MAIN_DATA.categories[category].i18nKey,
    };

    if (subcategory) {
        return {
            url: normalize(MAIN_DATA.subcategories[subcategory].subcategoryUrl),
            i18nKey: MAIN_DATA.subcategories[subcategory].i18nKey,
        }
    }
    //console.log("getRoutePath - ",categoryData);
    return categoryData;
}