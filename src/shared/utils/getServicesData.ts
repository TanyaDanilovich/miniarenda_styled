import {SITE_DATA} from '../constants';
import img from '../../assets/images/servises/servises_1.jpg';
import {ServiceCardData} from '../../widgets/services/serviceCard/ServiceCard';
import {ServicesDataType} from '../types/common.types';


export type rentalKeysType = keyof typeof SITE_DATA.categories.rental.items;
export type servicesKeysType = keyof typeof SITE_DATA.categories.services.items;

export function getServicesData(data:ServicesDataType): ServiceCardData[] {
    const rentalKeys = Object.keys(data.categories.rental.items);
    const servicesKeys = Object.keys(data.categories.services.items);

    const servicesData = [
        ...rentalKeys.map(rentItem =>
            ({
                ...data.categories.rental.items[rentItem as rentalKeysType],
                type: data.categories.rental.type,
                typeTitle: data.categories.rental.title,
                typeUrl: data.categories.rental.url,
            })),
        ...servicesKeys.map(serviceItem => ({
            ...data.categories.services.items[serviceItem as servicesKeysType],
            type: data.categories.services.type,
            typeTitle: data.categories.services.title,
            typeUrl: data.categories.services.url,
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
        url: `${item.typeUrl}/${item.url}`,
    }));
}
