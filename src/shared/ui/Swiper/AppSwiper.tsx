import {useEffect, useRef} from 'react';
import {SwiperContainer} from 'swiper/element/bundle';
import "swiper/swiper-bundle.css";
import {PropsWithChildren} from '../../types/common.types';
import {SwiperOptions} from 'swiper/types';
import {Swiper} from 'swiper';

type props = SwiperOptions & {
    id: string,
    name: string,
    // onSwiperSlideChange?: () => void
}


export const AppSwiper = ({children, ...rest}: PropsWithChildren<props>) => {

    const swiperRef = useRef<SwiperContainer>(null);


    useEffect(() => {


        // Object with parameters
        const params = {
            ...rest
        };

        if (swiperRef.current) {
            Object.assign(swiperRef.current, params);
            swiperRef.current.initialize();

            swiperRef.current.addEventListener('swiperprogress', (event:CustomEvent<[swiper: Swiper]>|Event) => {
                console.log(event)
               // const [swiper, progress] = event.detail;
            });
            swiperRef.current.addEventListener('swiperslidechange', (e) => {
                //console.log('swiperslidechange')
            });
        }


    }, []);


    return (
        <swiper-container init = {false} ref = {swiperRef}>
            {children}
        </swiper-container>
    );
};


