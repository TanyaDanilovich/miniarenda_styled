import React, {useRef, useEffect} from 'react';
import {Swiper as SwiperReact, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import type {SwiperOptions, AutoplayOptions} from 'swiper/types';
import type {PropsWithChildren} from '../../types/common.types';


type Props = SwiperOptions & {
    id: string;
    name: string;
    listenerType?: string;
    eventCallback?: () => void;
    autoplay?: AutoplayOptions;
};

export const AppSwiper = ({
                              children,
                              eventCallback = () => {
                              },
                              listenerType,
                              autoplay,
                              ...rest
                          }: PropsWithChildren<Props>) => {
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current && listenerType) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.on(listenerType, eventCallback);

            return () => {
                swiperInstance.off(listenerType, eventCallback);
            };
        }
    }, [listenerType, eventCallback]);

    return (
        <SwiperReact
            ref = {swiperRef}
            modules = {[Autoplay, Navigation]}
            autoplay = {{
                delay: autoplay?.delay ?? 2000,
                disableOnInteraction: autoplay?.disableOnInteraction ?? false,
                pauseOnMouseEnter: autoplay?.pauseOnMouseEnter ?? false,
                reverseDirection: autoplay?.reverseDirection ?? false,
            }}
            {...rest}
        >
            {React.Children.map(children, (child, index) => (
                <SwiperSlide key = {index}>{child}</SwiperSlide>
            ))}
        </SwiperReact>
    );
};