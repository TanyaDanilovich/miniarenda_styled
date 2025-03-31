import styled, {useTheme} from "styled-components";
import React, {useEffect, useRef, useState} from 'react';
import {sectionMargin} from '../../../app/styles/mixins';
import {MappedSubcategoriesCards} from '../../../widgets/mappedSubcategoriesCards/MappedSubcategoriesCards';
import {API} from '../../../app/api/API';
import {MachineryCharacteristicKeys} from '../../../shared/types/common.types';
import {CardPrice} from '../../../widgets/cardPrice/cardPrice';
import {RentalCard} from '../../../widgets/excavatorRentalCard/RentalCard';
import {S_InnerContainer} from '../../../shared/styled/S_InnerContainer';
import {S_RentalWrapper} from '../styled/S_RentalWrapper';
import {SubcategoryItemCards} from '../../../widgets/subcategoryItemCards/SubcategoryItemCards';
import {S_BackgroundWrapper} from '../../../shared/styled/S_BackgroundWrapper';
import {S_SectionTitle, SectionTitle} from '../../../shared/ui/sectionTitle/SectionTitle';


type props = {};

export const HammerRental = ({}: props) => {
    const theme = useTheme();
    const keys: MachineryCharacteristicKeys[] = [
        'weight',
        'dimensions',
        'hammerPower',
        'strikeFrequency',
        'speed',
        'country',
    ]
    const machineryData = API.getMachineriesData(keys);

    const ref = useRef<HTMLDivElement>(null);
    const [refOffset, setRefOffset] = useState<number>(0);
    //const subcategoriesCardsData = API.getRentalSubcategoriesDataShortUrl()
    const subcategoriesCardsData = API.getRentalSubcategoriesDataFullUrl()
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

            <S_BackgroundWrapper ref = {ref} $offset = {refOffset} $backgroundColor = {theme.colors.white_smoke}>
                <SubcategoryItemCards/>
            </S_BackgroundWrapper>

            <S_BackgroundWrapper ref = {ref} $offset = {refOffset}>

                <SectionTitle title = {'Техника в наличии'} color = {theme.colors.white}/>
                {machineryData.map((machine) => (<RentalCard key = {machine.id}
                                                             id = {machine.id}
                                                             isWithButton = {false}
                                                             tableTitle = {`${machine.tableTitle} \nс гидромолотом`}
                                                             characteristics = {machine.characteristics}
                                                             priceCharacteristics = {machine.priceCharacteristics}
                                                             image = {machine.image}
                    />)
                )}
            </S_BackgroundWrapper>

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

  ${S_SectionTitle} {
    ${({theme}) => theme.fonts.weight.medium};
  }
 
}
`




