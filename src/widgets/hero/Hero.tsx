import styled from 'styled-components';
import {HeroCarousel} from '../heroCarousel/HeroCarousel';

type props = {};
export const Hero = ({}: props) => {


    return (
        <S_Hero id={"hero"}>
            <h1>
                <span>Аренда мини-экскаваторов</span>
                <span>с ямобуром и гидромолотом.</span>
                <span>Доставка по Минску</span>
                <span>и Минской области.</span>
                <span> От 80 руб в час</span>
                <span>Работаем без выходных</span>
            </h1>
            <HeroCarousel/>


        </S_Hero>);
};

export const S_Hero = styled.section<{}>`
  //aspect-ratio: 3/4;
  width: 100%;


  & > h1 {
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  @media ${({theme}) => theme.mediaMinWidth.computer} {
    height: calc(100svh - 110px);
    aspect-ratio: initial;
  }

`
