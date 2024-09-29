import img from '../../assets/images/servises/servises_1.jpg';
import {ServiceCardData} from '../../widgets/services/serviceCard/ServiceCard';
import {MAIN_DATA} from '../constants/MAIN_DATA';
import {CATEGORY} from '../constants/CATEGORY';
import {v1} from 'uuid';


export function getServicesData(): ServiceCardData[] {
    const rentalKeys = MAIN_DATA.categories[CATEGORY.RENTAL].items;
    const servicesKeys = MAIN_DATA.categories[CATEGORY.SERVICES].items;

    const servicesData = [
        ...rentalKeys.map((rentItem, index) =>
            ({
                //...MAIN_DATA.subcategoryItems[rentItem],
                subcategory: MAIN_DATA.subcategoryItems[rentItem].subcategory,
                subcategoryTitle: MAIN_DATA.subcategoryItems[rentItem].title,
                subcategoryDescription: MAIN_DATA.subcategoryItems[rentItem].description,
                subcategoryUrl: MAIN_DATA.subcategoryItems[rentItem].url,
                image: MAIN_DATA.subcategoryItems[rentItem].images[0] || {src: img, alt: ""},

                //...MAIN_DATA.categories[CATEGORY.RENTAL],
                category: MAIN_DATA.categories[CATEGORY.RENTAL].category,
                categoryTitle: MAIN_DATA.categories[CATEGORY.RENTAL].title,
                categoryUrl: MAIN_DATA.categories[CATEGORY.RENTAL].url,
                id: v1(),
                position: index,
            })),
        ...servicesKeys.map((serviceItem, index) =>
            ({
                //...MAIN_DATA.subcategoryItems[serviceItem],
                subcategory: MAIN_DATA.subcategoryItems[serviceItem].subcategory,
                subcategoryTitle: MAIN_DATA.subcategoryItems[serviceItem].title,
                subcategoryDescription: MAIN_DATA.subcategoryItems[serviceItem].description,
                subcategoryUrl: MAIN_DATA.subcategoryItems[serviceItem].url,
                image: MAIN_DATA.subcategoryItems[serviceItem].images[0] || {src: img, alt: ""},

                //...MAIN_DATA.categories[CATEGORY.SERVICES],
                category: MAIN_DATA.categories[CATEGORY.SERVICES].category,
                categoryTitle: MAIN_DATA.categories[CATEGORY.SERVICES].title,
                categoryUrl: MAIN_DATA.categories[CATEGORY.SERVICES].url,
                id: v1(),
                position: rentalKeys.length + index,
            }))
    ]

    //console.log(servicesData)


    return servicesData.map(item => ({
        ...item,
        url: `${item.categoryUrl}/${item.subcategoryUrl}`,
    }))
        ;
}
