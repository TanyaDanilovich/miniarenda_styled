import {useEffect, useRef} from 'react';
import {register, SwiperContainer} from 'swiper/element/bundle';
import {PropsWithChildren} from '../../types/common.types';
import {SwiperProps} from 'swiper/swiper-react';
import {SwiperOptions} from 'swiper/types';

type props = SwiperOptions & SwiperProps & {
    id: string,
    name: string
}


export const Swiper = ({children, ...rest}: PropsWithChildren<props>) => {

    const swiperRef = useRef<SwiperContainer>(null);

    useEffect(() => {
        // Register Swiper web component
        register();

        // Object with parameters
        const params = {
            ...rest
        };

        if (swiperRef.current) {
            Object.assign(swiperRef.current, params);
            swiperRef.current.initialize();
        }
    }, []);


    return (

        <swiper-container init = {false} ref = {swiperRef}

            // navigation-next-el="#my-next-button"
            // navigation-prev-el="#my-prev-button"
        >
            {children}
        </swiper-container>

    );
};


