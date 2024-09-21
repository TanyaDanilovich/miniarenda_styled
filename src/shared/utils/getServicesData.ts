import {SITE_DATA} from '../constants';
import img from '../../assets/images/servises/servises_1.jpg';

export type rentalKeysType = keyof typeof SITE_DATA.categories.rental.items;
export type servicesKeysType = keyof typeof SITE_DATA.categories.services.items;

export function getServicesData() {
    const rentalKeys = Object.keys(SITE_DATA.categories.rental.items);
    const servicesKeys = Object.keys(SITE_DATA.categories.services.items);

    const servicesData = [
        ...rentalKeys.map(rentItem =>
            ({
                ...SITE_DATA.categories.rental.items[rentItem as rentalKeysType],
                type: SITE_DATA.categories.rental.type,
                typeTitle: SITE_DATA.categories.rental.title,
                typeUrl:SITE_DATA.categories.rental.url,
            })),
        ...servicesKeys.map(serviceItem => ({
            ...SITE_DATA.categories.services.items[serviceItem as servicesKeysType],
            type: SITE_DATA.categories.services.type,
            typeTitle: SITE_DATA.categories.services.title,
            typeUrl:SITE_DATA.categories.services.url,
        }))
    ]

    console.log(servicesData)


    return servicesData.map(item => ({
        id: item.id,
        title: item.title,
        text: item.description,
        image: item.images[0] || {src: img, alt: ""},
        type: item.type,
        typeTitle: item.typeTitle,
        typeUrl: item.typeUrl,
    }));
}
