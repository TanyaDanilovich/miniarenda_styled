import styled, {useTheme} from "styled-components";
import {outline} from '../../app/styles/mixins';
import {S_Flex} from '../../shared/styled/S_Flex';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {faPhone, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

type props = {};
export const HeaderTop = ({}: props) => {
    const theme = useTheme();
    return (


        <S_HeaderTop>


            {/*<div>*/}
            {/*    <a href = "mailto:miniarenda@mail.ru">*/}
            {/*        <span>E-mail:</span>*/}
            {/*        <span className = "pl-1">miniarenda@mail.ru</span>*/}
            {/*    </a>*/}
            {/*</div>*/}


            <S_Phone $align = {"center"} $direction = {"column"}>
                <p>Звоните для заказа техники</p>

                <span>
                    <FontAwesomeIcon icon = {faPhoneVolume} size = {'1x'} color = {theme.colors.white}/>
                    <a href = "tel:+375296949698">+375 (29) 694-96-98</a>
                </span>

                <span>
                    <FontAwesomeIcon icon = {faPhoneVolume} size = {'1x'} color = {theme.colors.white}/>
                    <a href = "tel:+375336949698">+375 (33) 694-96-98</a>
                </span>

            </S_Phone>

            <S_WorkingHours>
                <span>Время работы:</span>
                <span>Ежедневно</span>
                <span>с 7-00 до 22-00</span>
            </S_WorkingHours>

        </S_HeaderTop>


    );
};

export const S_HeaderTop = styled.div    <{}>`
  z-index: ${({theme}) => theme.zIndices.modal};
  width: 100%;
  align-content: center;
  background-color: ${({theme}) => theme.colors.bg_primary};
  color: ${({theme}) => theme.colors.white};

  & div {
    align-content: center;
    font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  }

  @media ${({theme}) => theme.media.tablet} {
    position: relative;
    background-color: ${({theme}) => theme.colors.primary};
    padding-block: 0.75rem;
    padding-inline: 3rem 1rem;

    display: flex;
    justify-content: space-around;

    &:before, &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      bottom: 0;
      border: 0 solid transparent;
      border-right-width: 2rem;
      border-left-width: 0;
    }

    &:before {
      left: 0;
      border-bottom: 4rem solid ${({theme}) => theme.colors.bg_primary};
    }

    &:after {
      right: 0;
      background-color: ${({theme}) => theme.colors.bg_primary};
      border-bottom: 4rem solid ${({theme}) => theme.colors.primary};
    }

  }
`;


export const S_Phone = styled(S_Flex)<{}>`
  font-weight: 700;
  width: 100%;
  justify-content: space-around;

  p {
    margin-bottom: 0.5rem;
    font-size: ${getResponsiveSize(10, 19, 320, 768)};
  }

  a {
    font-weight: ${({theme}) => theme.fonts.weight.bold};
    font-size: ${getResponsiveSize(16, 38, 320, 768)};
    color: ${({theme}) => theme.colors.primary};

  }

  & span:last-child {
    display: none;
      //${outline(5)}
  }

  svg {
    margin-right: 0.5rem;
    color: ${({theme}) => theme.colors.primary};
  }

  span:not(:last-child) {
    margin-right: 1rem;
  }

  @media ${({theme}) => theme.media.tablet} {
    flex-direction: row;

    p {
      display: none;
    }

    p, a {
      font-size: 1rem;
      font-weight: ${({theme}) => theme.fonts.weight.semiBold};
      color: ${({theme}) => theme.colors.white};
    }


    & span:nth-child(3) {
      display: inline-block;
    }


    svg {
      margin-right: 0.5rem;
      color: ${({theme}) => theme.colors.white};
    }

  }
  @media ${({theme}) => theme.media.computer} {
    width: auto;
  }
`;

const S_WorkingHours = styled.div<{}>`
  display: none;

  span:first-of-type {
    margin-right: 0.5rem;
  }

  span:last-of-type {
    margin-left: 0.5rem;
    font-weight: ${({theme}) => theme.fonts.weight.bold};
  }

  @media ${({theme}) => theme.media.computer} {
    display: block;
  }
`