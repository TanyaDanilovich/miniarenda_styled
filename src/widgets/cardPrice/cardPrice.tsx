import React from 'react';
import styled, {useTheme} from 'styled-components';
import {S_InnerContainer} from '../../shared/styled/S_InnerContainer';
import {faCalendarCheck, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


type props = {};
export const CardPrice = ({}: props) => {
    const theme = useTheme()

    return (
        <S_CardPrice as = {'article'}>
            <h2>Цена аренды мини-экскаватора</h2>
            <p>от <span>80,00</span> руб/час</p>
            <p>
                <FontAwesomeIcon icon = {faCheckDouble} size = {'1x'} color = {theme.colors.primary}/>
                Минимальный заказ - 4&nbsp;машино&nbsp;часа
            </p>
            <p>
                <FontAwesomeIcon icon = {faCheckDouble} size = {'1x'} color = {theme.colors.primary}/>
                Минимальный заказ (безнал) - 8&nbsp;машино&nbsp;часов</p>
        </S_CardPrice>)
};

export const S_CardPrice = styled(S_InnerContainer)<{}>`
  border: 1px solid ${({theme}) => theme.colors.gray};
  margin-bottom: 3rem;
  position: relative;

  h2 {
    font-size: ${({theme}) => theme.fonts.size.h4};
    font-weight: normal;
    white-space: pre-line;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    text-wrap: none;
    margin: 0;
    padding-block: 0.5rem;
    border: 1px solid ${({theme}) => theme.colors.primary};
  }

  p {
    margin: 0;
    padding-inline: 0.5rem;
    padding-block: 0.75rem;
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
