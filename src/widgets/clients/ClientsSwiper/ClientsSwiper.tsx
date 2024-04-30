import React from 'react';

import {S_ClientsSwiper} from './S_ClientsSwiper';
import {useTheme} from 'styled-components';
import {SwiperProps} from 'swiper/swiper-react';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import img1 from '../../../assets/images/clients/aquapark.png'
import img2 from '../../../assets/images/clients/gavan.webp'
import img3 from '../../../assets/images/clients/stroytrest.webp'
import img4 from '../../../assets/images/clients/world.webp'
import {SwiperSlide} from '../../../shared/ui/Swiper/SwiperSlide';
import {v4 as uuidv4} from 'uuid';
import {BASE} from '../../../shared/constants';


type props = {
    id: string,
};
export const ClientsSwiper = ({id}: props) => {
    const theme = useTheme()

    const css = `

    
`

    const params: SwiperProps = {
        slidesPerView: 3, spaceBetween: BASE * 2,
        injectStyles: [css], loop: true, speed: 3000,
        autoplay: {delay: 5000},
    }


    return (
        <S_ClientsSwiper name = {"reviewSwiper"}
                         id = {id}
                         {...params}
        >
            <SwiperSlide id = {uuidv4()}>
                <S_ImageContainer>
                    <img src = {img1} alt = {"alt"}/>
                </S_ImageContainer>
            </SwiperSlide>
            <SwiperSlide id = {uuidv4()}>
                <S_ImageContainer>
                    <img src = {img2} alt = {"alt"}/>
                </S_ImageContainer>
            </SwiperSlide>
            <SwiperSlide id = {uuidv4()}>
                <S_ImageContainer>
                    <img src = {img3} alt = {"alt"}/>
                </S_ImageContainer>
            </SwiperSlide>
            <SwiperSlide id = {uuidv4()}>
                <S_ImageContainer>
                    <img src = {img4} alt = {"alt"}/>
                </S_ImageContainer>
            </SwiperSlide>


        </S_ClientsSwiper>);
};


