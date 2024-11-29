import styled from "styled-components";
import React, {useEffect, useRef, useState} from 'react';
import {sectionMargin} from '../../../app/styles/mixins';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';
import {MachineryCharacteristicKeys} from '../../../shared/types/common.types';
import {CardPrice} from '../../../widgets/cardPrice/cardPrice';
import {RentalCard} from '../../../widgets/excavatorRentalCard/RentalCard';
import {S_InnerContainer} from '../../../shared/styled/S_InnerContainer';
import {S_RentalCardWrapper} from '../excavatorRental/ExcavatorRental';
import {S_RentalWrapper} from '../styled/S_RentalWrapper';


type props = {};

export const YamoburRental = ({}: props) => {

    const keys: MachineryCharacteristicKeys[] = ['weight', 'dimensions', 'drillingDepth', 'augers']
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
        <S_YamoburRental>

            <MappedSubcategoriesCards data = {subcategoriesCardsData}/>

            <h1>Аренда мини-экскаватора c ямобуром в Минске и Минской области</h1>

            {/*<p>Умеем работать в стесненных условиях</p>*/}

            <CardPrice title = {'Цена аренды ямобура'}
                       price = {15} measurementUnits = {'отв.'}
                       minOrderCash = {"30\u00A0отверстий"}
                       minOrderNonCash = {"8\u00A0машино\u00A0часов"}
            />

            <S_RentalCardWrapper ref = {ref} $offset = {refOffset}>

                {machineryData.map((machine) => (<RentalCard key = {machine.id}
                                                             id = {machine.id}
                                                             tableTitle = {`${machine.tableTitle} \nс ямобуром`}
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

        </S_YamoburRental>);


};


export const S_YamoburRental = styled(S_RentalWrapper)<{}>`
  ${sectionMargin};

`



