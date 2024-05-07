import React from 'react';
import {S_Hero, S_HeroTitle} from './S_Hero';
import heroImage from '../../assets/images/main-slider/1920px/_DSC2623-1920w.jpg'
import {S_Image} from '../../shared/styled/S_Image';

type props = {};
export const Hero = ({}: props) => {

    return (
        <S_Hero>


            <S_HeroTitle>
                <span>Аренда мини-экскаваторов</span>
                <span>с ямобуром и гидромолотом.</span>
                <span>Доставка по Минску</span>
                <span>и Минской области.</span>
            </S_HeroTitle>

            <S_Image src = {heroImage}/>

        </S_Hero>);
};


