import styled from "styled-components";
import {Swiper} from '../../../shared/ui/Swiper/Swiper';


export const S_ReviewSwiper = styled(Swiper)<{}>`
  --swiper-theme-color: ${({theme}) => theme.colors.primary};
  --swiper-pagination-bullet-size: 1rem;
  --swiper-pagination-bullet-width: 1rem;
  --swiper-pagination-bullet-height: 1rem;
  --swiper-pagination-bullet-inactive-opacity: 0.75;
`


