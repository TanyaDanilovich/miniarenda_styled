import styled from "styled-components";
import {Swiper} from '../../../shared/ui/Swiper/Swiper';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';


export const S_ClientsSwiper = styled(Swiper)<{}>`
  ${S_ImageContainer} {
    aspect-ratio: 9/6;
    display: grid;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    object-position: center;
    background: none;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`


