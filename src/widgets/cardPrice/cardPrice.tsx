import React from 'react';
import styled, {useTheme} from 'styled-components';
import {S_InnerContainer} from '../../shared/styled/S_InnerContainer';
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BREAKPOINTS} from '../../shared/constants/BREAKPOINTS';
import {MeasurementUnits} from '../../shared/types/common.types';


type props = {
    title?: string,
    price?: number,
    measurementUnits?: MeasurementUnits,
    minOrderCash?: string,
    minOrderNonCash?: string,
};
export const CardPrice = ({
                              title = "Цена аренды мини-экскаватора",
                              price = 80,
                              measurementUnits='час',
                              minOrderCash = "4\u00A0машино\u00A0часа",
                              minOrderNonCash = "8\u00A0машино\u00A0часов"
                          }: props) => {
    const theme = useTheme()
    const formattedPrice = price.toFixed(2);

    return (
        <S_CardPrice as = {'article'}>
            <h3>{title}</h3>
            <p>от <span>{formattedPrice}</span>{` руб/${measurementUnits}`}</p>
            <p>
                <FontAwesomeIcon icon = {faCheckDouble} size = {'1x'} color = {theme.colors.primary}/>
                {`Минимальный заказ - ${minOrderCash}`}
            </p>
            <p>
                <FontAwesomeIcon icon = {faCheckDouble} size = {'1x'} color = {theme.colors.primary}/>
                {`Минимальный заказ (безнал) - ${minOrderNonCash}`}
            </p>
        </S_CardPrice>)
};

export const S_CardPrice = styled(S_InnerContainer)<{}>`
  border: 1px solid ${({theme}) => theme.colors.gray};
  margin-bottom: 3rem;
  position: relative;
  max-width: ${BREAKPOINTS.tablet};

  h3 {
    font-size: ${({theme}) => theme.fonts.size.h4};
    font-weight: bold;
    white-space: pre-line;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    text-wrap: pretty;
    margin: 0;
    padding-block: 0.5rem;
    border: 1px solid ${({theme}) => theme.colors.primary};
  }

  p {
    margin: 0;
    padding-inline: 0.5rem;
    padding-block: 0.75rem;
    text-align: center;
  }

  p:not(:last-child) {
    border-bottom: 1px dashed ${({theme}) => theme.colors.gray};
  }

  p:first-of-type span {
    font-weight: bold;
    font-size: 2rem;
    color: ${({theme}) => theme.colors.dark};
    margin-inline: 0.5rem;
  }

  svg {
    margin-right: 0.5rem;
  }


  @media ${({theme}) => theme.media.computer} {

  }

`
