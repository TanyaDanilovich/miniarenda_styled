import {type PropsWithChildren} from '../../types/common.types';

import {SwiperSlide, type SwiperSlideProps} from 'swiper/react';

type props = SwiperSlideProps & {
    id: string,
}

export function AppSwiperSlide({children, ...rest}: PropsWithChildren<props>) {

    return (
        <SwiperSlide {...rest}>
            {children}
        </SwiperSlide>
    );
}