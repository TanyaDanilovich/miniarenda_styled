import React from 'react';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import styled, {useTheme} from 'styled-components';
import {outline, sectionMargin, sectionPadding} from '../../app/styles/mixins';
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import image from '../../assets/images/servises/exavator/IMG_20190608_115344.jpg';
import {S_Image} from '../../shared/styled/S_Image';
import {S_Flex} from '../../shared/styled/S_Flex';
import {S_P} from '../../shared/styled/S_P';
import {S_Span} from '../../shared/styled/S_Span';

type props = {};
export const Prices = ({}: props) => {

    const theme = useTheme();
    return (
        <S_Prices id = {"prices"}>

            <S_OuterContainer>
                <SectionTitle title = {"Стоимость"}/>
                <S_PriceContentWrapper>
                    <S_PriceContent $direction = {"column"} $rowGap = {"1rem"}>
                        <S_P>

                            <S_Span $color = {theme.colors.primary} $fontWeight = {theme.fonts.weight.bold}>
                                Техника предоставляется в аренду только с экипажем.</S_Span>
                        </S_P>

                        <S_P>
                            Минимальный срок аренды — <S_Span $fontWeight = {theme.fonts.weight.bold}> 4 часа. </S_Span>
                        </S_P>

                        <S_P>Стоимость аренды с ковшами — <S_Span $fontWeight = {theme.fonts.weight.bold}> от 85 руб. / за 1
                                                                                                 час. </S_Span> </S_P>

                        <S_P>Стоимость аренды мини-экскаватора с гидромолотом —
                            <S_Span $fontWeight = {theme.fonts.weight.bold}> 120 руб. / за 1 час.
                            </S_Span>
                        </S_P>

                        <S_P>Стоимость аренды мини-экскаватора с
                             гидробуром —
                            <S_Span $fontWeight = {theme.fonts.weight.bold}> от 12 руб. / за 1 отв.
                            </S_Span>
                        </S_P>

                        <S_P>
                            Доставка техники до объекта осуществляется
                            <S_Span $fontWeight = {theme.fonts.weight.bold}>нашим транспортом.</S_Span>
                        </S_P>

                        <S_P>
                            <S_Span $fontWeight = {theme.fonts.weight.bold}>Стоимость доставки </S_Span>
                            рассчитывается для каждого заказчика <S_Span
                            $fontWeight = {theme.fonts.weight.bold}>индивидуально. </S_Span>
                        </S_P>

                        <S_P>
                            Техника доставляется на объект полностью готовой к работе.
                        </S_P>
                    </S_PriceContent>

                    <S_ImageContainer $width = {"50%"}>
                        <S_Image src = {image}/>
                    </S_ImageContainer>
                </S_PriceContentWrapper>
            </S_OuterContainer>
        </S_Prices>);
};


const S_Prices = styled.section<{}>`
  background-color: ${({theme}) => theme.colors.white};
  ${sectionMargin};
  ${sectionPadding};
`

const S_PriceContentWrapper = styled(S_Flex)`


  ${S_ImageContainer} {
    width: 0;
    @media ${({theme}) => theme.mediaMinWidth.computer} {
      width: 50%;
    }
  }
`
const S_PriceContent = styled(S_Flex)<{}>`

`