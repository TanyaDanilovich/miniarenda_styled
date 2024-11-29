import styled from "styled-components";
import React, {useEffect, useRef, useState} from 'react';
import {outline} from '../../../app/styles/mixins';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';
import {RentalCard} from '../../../widgets/excavatorRentalCard/RentalCard';
import {MachineryCharacteristicKeys} from '../../../shared/types/common.types';
import {S_InnerContainer} from '../../../shared/styled/S_InnerContainer';
import {CardPrice} from '../../../widgets/cardPrice/cardPrice';
import {S_RentalWrapper} from '../styled/S_RentalWrapper';


type props = {};

export const ExcavatorRental = ({}: props) => {
    const keys: MachineryCharacteristicKeys[] = ['weight', 'diggingDepth', 'drillingDepth', 'buckets', 'augers']
    const machineryData = API.getMachineriesData(keys);

    const ref = useRef<HTMLDivElement>(null);
    const [refOffset, setRefOffset] = useState<number>(0);
    const subcategoriesCardsData = API.getRentalSubcategoriesDataShortUrl()
    //console.log(subcategoriesCardsData)
    useEffect(() => {
        if (ref.current) {
            setRefOffset(((ref.current.scrollWidth - ref.current.clientWidth) / 2))
        }
    }, []);
    return (
        <S_RentalWrapper>

            <MappedSubcategoriesCards data = {subcategoriesCardsData}/>

            <h1>Аренда мини-экскаватора в Минске и Минской области</h1>

            {/*<p>Умеем работать в стесненных условиях</p>*/}

            <CardPrice/>

            <S_RentalCardWrapper ref = {ref} $offset = {refOffset}>

                {machineryData.map((machine) => (<RentalCard key = {machine.id}
                                                             id = {machine.id}
                                                             tableTitle = {machine.tableTitle}
                                                             characteristics = {machine.characteristics}
                                                             priceCharacteristics = {machine.priceCharacteristics}
                                                             image = {machine.image}
                    />)
                )}
            </S_RentalCardWrapper>

            <S_InnerContainer>
                <p>
                    Аренда мини-экскаватора – это востребованная услуга для работы на малых площадях и в стесненных
                    условиях. Компактные многозадачные машины подходят для небольших строительных площадок. Это
                    действенный способ ускорить выполнение работ и сэкономить деньги.
                </p>
            </S_InnerContainer>

        </S_RentalWrapper>);
};


export const S_ExcavatorRentalContentWrapper = styled.div<{}>`

`
export const S_RentalCardWrapper = styled.div<{ $offset: number }>`
    //${outline(10)};
  position: relative;
  padding-block: 3rem;
  //overflow-x: hidden;

  &:after {
    //overflow-x: visible;
    content: "";
    width: 100vw;
    height: 100%;
    position: absolute;
    background-color: ${({theme}) => theme.colors.bg_primary};
    top: 0;
    left: ${({$offset}) => `-${$offset}px`};
    right: 0;
    z-index: -100;
  }

`