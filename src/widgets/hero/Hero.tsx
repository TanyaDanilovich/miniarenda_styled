import React, {useId} from 'react';
import {HeroSwiper} from './HeroSwiper';
import styled from 'styled-components';

type props = {};
export const Hero = ({}: props) => {
    const id = useId()

    return (
        <S_Hero>
            <h1>
                <span>Аренда мини-экскаваторов</span>
                <span>с ямобуром и гидромолотом.</span>
                <span>Доставка по Минску</span>
                <span>и Минской области.</span>
                <span> От 80 руб в час</span>
                <span>Работаем без выходных</span>
            </h1>
            <HeroSwiper id = {id}/>


        </S_Hero>);
};

export const S_Hero = styled.section<{}>`
  aspect-ratio: 4/3;
  width: 100%;

  & > h1 {
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  @media ${({theme}) => theme.media.computer} {
    height: calc(100svh - 110px);
    aspect-ratio: initial;
  }

`
