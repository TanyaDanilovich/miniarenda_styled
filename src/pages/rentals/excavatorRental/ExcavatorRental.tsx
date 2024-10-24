import styled from "styled-components";
import React, {useEffect, useRef, useState} from 'react';
import {outline, outlinedNestedEverything, sectionMargin} from '../../../app/styles/mixins';
import {
    MappedSubcategoriesCards,
    S_MappedSubcategoriesCards
} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';
import {ExcavatorRentalCard} from '../../../widgets/excavatorRentalCard/ExcavatorRentalCard';
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import {MachineryCharacteristicKeys} from '../../../shared/types/common.types';
import {S_InnerContainer} from '../../../shared/styled/S_InnerContainer';
import {getResponsiveSize} from '../../../shared/utils/getResponsiveSize';
import {BASE} from '../../../shared/constants/constants';
import {CardPrice} from '../../../widgets/cardPrice/cardPrice';


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
        <S_ExcavatorRental>

            <MappedSubcategoriesCards data = {subcategoriesCardsData}/>
            <h1>Аренда мини-экскаватора в Минске и Минской области</h1>

            {/*<p>Умеем работать в стесненных условиях</p>*/}

            <CardPrice/>


            <S_ExcavatorRentalCardWrapper ref = {ref} $offset = {refOffset}>
                {machineryData.map((machine) => (<ExcavatorRentalCard key = {machine.id}
                                                                      id = {machine.id}
                                                                      tableTitle = {machine.tableTitle}
                                                                      characteristics = {machine.characteristics}
                                                                      priceCharacteristics = {machine.priceCharacteristics}
                                                                      image = {machine.image}
                    />)
                )}
            </S_ExcavatorRentalCardWrapper>

            <S_InnerContainer>
                <p>
                    Аренда мини-экскаватора – это востребованная услуга для работы на малых площадях и в стесненных
                    условиях. Компактные многозадачные машины подходят для небольших строительных площадок. Это
                    действенный способ ускорить выполнение работ и сэкономить деньги.
                </p>
            </S_InnerContainer>

        </S_ExcavatorRental>);
};


export const S_ExcavatorRental = styled(S_OuterContainer)<{}>`
  ${sectionMargin};
  //padding: 0;


  & h1 {
    text-wrap: none;
  }

    //${outlinedNestedEverything}
  ${S_MappedSubcategoriesCards} {
  }

  h1, h2 {
    font-size: ${({theme}) => theme.fonts.size.h1};
    text-align: center;
    color: ${({theme}) => theme.colors.dark};
    font-weight: normal;
    white-space: pre-line;
    margin-block: 2rem;
  }

  ${S_InnerContainer}:first-child {
      //${outlinedNestedEverything}
      //padding-inline: ${getResponsiveSize(0, BASE, 320, 425)};
      //background-color: ${({theme}) => theme.colors.bg_primary};

  }



`


export const S_ExcavatorRentalContentWrapper = styled.div<{}>`

`
export const S_ExcavatorRentalCardWrapper = styled.div<{ $offset: number }>`
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