import {Category, RentalSubcategory, RoutesPathData, ServiceSubcategory} from '../types/common.types';
import {MAIN_DATA} from '../data/MAIN_DATA';

export function getRoutePath(category: Category,
                             subcategory?: ServiceSubcategory | RentalSubcategory): RoutesPathData {
    const normalize = (path: string): string =>
        path.replace(/^\//, ""); // удаляет ведущий слэш, если он есть

    const categoryData: RoutesPathData = {
        url: normalize(MAIN_DATA.categories[category].url),
        title: MAIN_DATA.categories[category].title,
    };

    if (subcategory) {
        return {
            url: normalize(MAIN_DATA.subcategoryItems[subcategory].subcategoryUrl),
            title: MAIN_DATA.subcategoryItems[subcategory].subcategoryTitle,
        }
    }
    return categoryData;
}