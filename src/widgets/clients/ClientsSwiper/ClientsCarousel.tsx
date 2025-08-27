import styled from 'styled-components';
import type {EmblaOptionsType} from 'embla-carousel';
import {AppCarousel} from '../../../shared/ui/slider/AppCarousel';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import img1 from '../../../assets/images/clients/aquapark.png';
import img2 from '../../../assets/images/clients/gavan.webp';
import img3 from '../../../assets/images/clients/stroytrest.webp';
import img4 from '../../../assets/images/clients/world.webp';
import {S_AppCarouselWrapper} from '../../../shared/ui/slider/appCarouselStyle';



export const ClientsCarousel = () => {
    const carouselOptions: EmblaOptionsType = {
        loop: true,
        //align: 'center',
        slidesToScroll: 1  // Явно указываем
    }

    // Настройки автопрокрутки с debounce
    const autoplayConfig = {
        delay: 2000,
        stopOnInteraction: false,
        jump: false  // Плавный переход
    }

    return (
        <S_ClientsCarousel id = "clients-carousel"
                           options = {carouselOptions}
                           autoplay = {autoplayConfig}
                           showDots = {false}
                           showArrows = {false}>

            <S_ImageContainer>
                <img src = {img1} alt = {"alt"}/>
            </S_ImageContainer>

            <S_ImageContainer>
                <img src = {img2} alt = {"alt"}/>
            </S_ImageContainer>

            <S_ImageContainer>
                <img src = {img3} alt = {"alt"}/>
            </S_ImageContainer>

            <S_ImageContainer>
                <img src = {img4} alt = {"alt"}/>
            </S_ImageContainer>

        </S_ClientsCarousel>
    )
}

const S_ClientsCarousel = styled(AppCarousel)`

    height:100%;

    ${S_ImageContainer}{
        aspect-ratio:9/6;
        display:grid;
        justify-content:center;
        align-items:center;
        object-fit:cover;
        object-position:center;
        background:none;

        img{
            max-width:100%;
            max-height:100%;
            object-fit:contain;
        }

        flex:0 0 100%;
        @media ${({theme}) => theme.mediaMinWidth.largeMobile}{
            flex-basis:50%;
        }
        @media ${({theme}) => theme.mediaMinWidth.computer}{
            flex-basis:25%;
        }
    }



`