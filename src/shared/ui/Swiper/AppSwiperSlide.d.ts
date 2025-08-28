import { type PropsWithChildren } from '../../types/common.types';
import { type SwiperSlideProps } from 'swiper/react';
type props = SwiperSlideProps & {
    id: string;
};
export declare function AppSwiperSlide({ children, ...rest }: PropsWithChildren<props>): import("react/jsx-runtime").JSX.Element;
export {};
