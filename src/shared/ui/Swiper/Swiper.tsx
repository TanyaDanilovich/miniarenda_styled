import {useEffect, useRef} from 'react';
import {SwiperContainer} from 'swiper/element/bundle';
import "swiper/swiper-bundle.css";
import {PropsWithChildren} from '../../types/common.types';
import {SwiperOptions} from 'swiper/types';

type props = SwiperOptions & {
    id: string,
    name: string
}


export const Swiper = ({children, ...rest}: PropsWithChildren<props>) => {

    const swiperRef = useRef<SwiperContainer>(null);


    useEffect(() => {


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
        <>
            <swiper-container init = {false} ref = {swiperRef}>
                {children}
            </swiper-container>
        </>
    );
};


