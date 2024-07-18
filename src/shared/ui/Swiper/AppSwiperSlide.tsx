import {PropsWithChildren} from '../../types/common.types';
import {SwiperSlideProps} from 'swiper/swiper-react';

type props = SwiperSlideProps & {
    id: string,
}

export function SwiperSlide({children, ...rest}: PropsWithChildren<props>) {

    return (
        <swiper-slide {...rest}>
            {children}
        </swiper-slide>
    );
}