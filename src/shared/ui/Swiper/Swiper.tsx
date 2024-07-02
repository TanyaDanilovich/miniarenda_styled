import {useEffect, useRef} from 'react';
import {SwiperContainer} from 'swiper/element/bundle';
import "swiper/swiper-bundle.css";
import {PropsWithChildren} from '../../types/common.types';
import {SwiperOptions} from 'swiper/types';

type props = SwiperOptions & {
    id: string,
    name: string,
    // onSwiperSlideChange?: () => void
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

            // onSwiperSlideChange && swiperRef.current.addEventListener('swiperslidechange', (e) => {
            //     onSwiperSlideChange()
            // });
        }


    }, []);


    return (
        <swiper-container init = {false} ref = {swiperRef}>
            {children}
        </swiper-container>
    );
};


