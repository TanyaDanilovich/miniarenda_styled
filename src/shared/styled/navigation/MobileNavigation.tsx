import styled from "styled-components";
import {outline, plainTransition} from '../../../app/styles/mixins';
import {BurgerButton} from '../BurgerButton';
import React from 'react';
import {S_NavItem} from './S_NavItem';
import {S_NavLink} from './S_NavLink';
import {getResponsiveSize} from '../../utils/getResponsiveSize';
import {BASE} from '../../constants';

type props = {
    isOpen: boolean,
    isOpenToggle: () => void,
    closeToggle: () => void
};
export const MobileNavigation = ({isOpen, isOpenToggle, closeToggle}: props) => {
    return (


        <S_MobileNavigation $isOpen = {isOpen}>

            <nav onClick = {closeToggle}>
                <ul>
                    <S_NavItem>
                        <S_NavLink href = "#">Главная</S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {closeToggle}>
                        <S_NavLink href = "#">Техника</S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {closeToggle}>
                        <S_NavLink href = "#">Услуги</S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {closeToggle}>
                        <S_NavLink href = "#">Цены</S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {closeToggle}>
                        <S_NavLink href = "#">Наши работы</S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {closeToggle}>
                        <S_NavLink href = "#">Контакты</S_NavLink>
                    </S_NavItem>

                </ul>

            </nav>
            <BurgerButton isOpen = {isOpen} callback = {isOpenToggle}/>
        </S_MobileNavigation>


    );
};


export const S_MobileNavigation = styled.div<{ $isOpen: boolean }>`
  display: flex;
  z-index: ${({theme}) => theme.zIndices.header};

  nav {

    display: flex;
    width: 80dvw;
    height: 80dvh;
    min-height: min-content;
    padding-top: 10dvh;
    background-color: ${({theme}) => theme.colors.bg_primary};
    position: absolute;
    top: 0;
    left: ${({$isOpen}) => $isOpen ? 0 : "-150%"};
    ${({theme}) => plainTransition(theme.duration.middle)};
  }

  ul {
    width: 100%;
    list-style: none;
  }



`;