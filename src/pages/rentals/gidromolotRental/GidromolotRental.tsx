import styled from "styled-components";
import {S_OuterContainer} from '../../../shared/styled/S_OuterContainer';
import React, {useEffect, useRef, useState} from 'react';
import {sectionMargin} from '../../../app/styles/mixins';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';
import {MachineryCharacteristicKeys} from '../../../shared/types/common.types';
import {CardPrice} from '../../../widgets/cardPrice/cardPrice';
import {S_RentalCardWrapper} from '../excavatorRental/ExcavatorRental';
import {RentalCard} from '../../../widgets/excavatorRentalCard/RentalCard';
import {S_InnerContainer} from '../../../shared/styled/S_InnerContainer';
import {S_RentalWrapper} from '../styled/S_RentalWrapper';
import {ServiceCard} from '../../../widgets/services/serviceCard/ServiceCard';
import {S_Flex} from '../../../shared/styled/S_Flex';
import {OrderedButton} from '../../../shared/ui/buttons/OrderedButton';


type props = {};

export const GidromolotRental = ({}: props) => {
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
        <S_GidromolotRental>
            <MappedSubcategoriesCards data = {subcategoriesCardsData}/>

            <h1>Аренда гидромолота на базе мини-экскаватора в Минске и Минской области</h1>

            {/*<p>Умеем работать в стесненных условиях</p>*/}

            <CardPrice title = {'Цена аренды гидромолота'}
                       price = {120} measurementUnits = {'час'}
                       minOrderCash = {"4\u00A0машино\u00A0часа"}
                       minOrderNonCash = {"8\u00A0машино\u00A0часов"}
            />

            <OrderedButton title = {"Позвонить"}/>
            и получить быструю консультацию
            <S_RentalCardWrapper ref = {ref} $offset = {refOffset}>

                {machineryData.map((machine) => (<RentalCard key = {machine.id}
                                                             id = {machine.id}
                                                             tableTitle = {`${machine.tableTitle} \nс гидромолотом`}
                                                             characteristics = {machine.characteristics}
                                                             priceCharacteristics = {machine.priceCharacteristics}
                                                             image = {machine.image}
                    />)
                )}
            </S_RentalCardWrapper>

            <S_Flex $direction = {"column"} $gap = {"1rem"} $wrap = {"wrap"}>


                {/*{servicesData.map((card) =>*/}
                {/*    <ServiceCard key = {card.id}*/}
                {/*                 id = {card.id}*/}
                {/*                 category = {card.category}*/}
                {/*                 categoryTitle = {card.categoryTitle}*/}
                {/*                 categoryUrl = {card.categoryUrl}*/}
                {/*                 subcategory = {card.subcategory}*/}
                {/*                 subcategoryTitle = {card.subcategoryTitle}*/}
                {/*                 subcategoryDescription = {card.subcategoryDescription}*/}
                {/*                 subcategoryUrl = {card.subcategoryUrl}*/}
                {/*                 image = {card.image}*/}
                {/*                 url = {card.url}*/}
                {/*                 position = {card.position}*/}
                {/*    />)}*/}
            </S_Flex>


            <S_InnerContainer>
                <p>
                    Аренда мини-экскаватора – это востребованная услуга для работы на малых площадях и в стесненных
                    условиях. Компактные многозадачные машины подходят для небольших строительных площадок. Это
                    действенный способ ускорить выполнение работ и сэкономить деньги.
                </p>
            </S_InnerContainer>
        </S_GidromolotRental>);
};


export const S_GidromolotRental = styled(S_RentalWrapper)<{}>`
  ${sectionMargin};

`




