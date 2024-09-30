import {Category, RentalSubcategory, RoutesPathData, ServiceSubcategory} from '../types/common.types';
import {MAIN_DATA} from '../constants/MAIN_DATA';

export function getRoutePath(category: Category,
                             subcategory?: ServiceSubcategory | RentalSubcategory): RoutesPathData {
    const categoryData: RoutesPathData = {
        url: MAIN_DATA.categories[category].url,
        title: MAIN_DATA.categories[category].title,
    };

    if (subcategory) {
        return {
            url: MAIN_DATA.subcategoryItems[subcategory].subcategoryUrl,
            title: MAIN_DATA.subcategoryItems[subcategory].subcategoryTitle,
        }
    }
    return categoryData;
}