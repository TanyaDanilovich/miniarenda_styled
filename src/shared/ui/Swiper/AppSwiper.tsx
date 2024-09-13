import {useEffect, useRef} from 'react';
import {SwiperContainer} from 'swiper/element/bundle';
import "swiper/swiper-bundle.css";
import {PropsWithChildren} from '../../types/common.types';
import {SwiperOptions} from 'swiper/types';
import {Swiper} from 'swiper';

type props = SwiperOptions & {
    id: string,
    name: string,
    listenerType?: string,
    eventCallback?: () => void
}


export const AppSwiper = ({
                              children, eventCallback = () => {
    }, listenerType, ...rest
                          }: PropsWithChildren<props>) => {

    const swiperRef = useRef<SwiperContainer>(null);

    const listener = (event: CustomEvent<[swiper: Swiper]> | Event) => {
        eventCallback()
    };

    useEffect(() => {


        // Object with parameters
        const params = {
            ...rest
        };

        if (swiperRef.current) {
            Object.assign(swiperRef.current, params);
            swiperRef.current.initialize();
//            swiperslidechange
            if (listenerType) {

                swiperRef.current.addEventListener(listenerType, listener)

                //return ()=>swiperRef.current.removeEventListener(listenerType, listener)
            }


        }

    }, []);


    return (
        <swiper-container init = {false} ref = {swiperRef}>
            {children}
        </swiper-container>
    );
};


