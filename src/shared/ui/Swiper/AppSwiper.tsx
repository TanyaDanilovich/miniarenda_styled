import {useEffect, useRef} from 'react';
import {SwiperContainer} from 'swiper/element/bundle';
import "swiper/swiper-bundle.css";
import {PropsWithChildren} from '../../types/common.types';
import {AutoplayOptions, SwiperOptions} from 'swiper/types';
import {Swiper} from 'swiper';
import {Autoplay, Navigation} from 'swiper/modules';


type props = SwiperOptions & {
    id: string,
    name: string,
    listenerType?: string,
    eventCallback?: () => void,
    autoplay?: AutoplayOptions;
}


export const AppSwiper = ({
                              children,
                              eventCallback = () => {
                              },
                              listenerType,
                              autoplay,
                              ...rest
                          }: PropsWithChildren<props>) => {

    const swiperRef = useRef<SwiperContainer>(null);

    const listener = (event: CustomEvent<[swiper: Swiper]> | Event) => {
        eventCallback()
    };


    useEffect(() => {
        const params: SwiperOptions = {
            modules: [Autoplay, Navigation],
            autoplay,
            ...rest,
        };

        if (swiperRef.current) {
            Object.assign(swiperRef.current, params);
            swiperRef.current.initialize();

            if (listenerType) {
                swiperRef.current.addEventListener(listenerType, listener);
                // Optional cleanup
                // return () => swiperRef.current?.removeEventListener(listenerType, listener);
            }
        }
    }, []);
    return (
        <swiper-container init = {false} ref = {swiperRef}
                          autoplay-delay = {autoplay?.delay ?? 10000}
                          autoplay-disable-on-interaction = {autoplay?.disableOnInteraction ?? false}
                          autoplay-pause-on-mouse-enter = {autoplay?.pauseOnMouseEnter ?? false}
                          autoplay-reverse-direction = {autoplay?.reverseDirection ?? false}
        >
                          {children}
        </swiper-container>
    );
};


