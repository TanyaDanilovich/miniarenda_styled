import styled from "styled-components";
import {outline, plainTransition} from '../../../app/styles/mixins';
import {BurgerButton} from '../BurgerButton';
import React from 'react';
import {S_NavItem} from './S_NavItem';
import {S_NavLink} from './S_NavLink';
import {DropdownMenu} from '../../../features/dropdownMenu/DropdownMenu';

type props = {
    isOpen: boolean,
    isOpenToggle: () => void,
    setClose: () => void
};
export const Navigation = ({isOpen, isOpenToggle, setClose}: props) => {
    return (


        <S_MobileNavigation $isOpen = {isOpen}>

            <nav onClick = {setClose}>
                <ul>
                    <S_NavItem>
                        <S_NavLink to = "/"> Главная </S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {setClose}>
                        {/*<S_NavLink href = "#machineries">Техника</S_NavLink>*/}
                    </S_NavItem>
<DropdownMenu/>
                    <S_NavItem onClick = {setClose}>
                        <S_NavLink to = "uslugi">Услуги</S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {setClose}>
                        <S_NavLink to = "price">Цены</S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {setClose}>
                        <S_NavLink to = "projects">Наши работы</S_NavLink>
                    </S_NavItem>

                    <S_NavItem onClick = {setClose}>
                        <S_NavLink to = "contacts">Контакты</S_NavLink>
                    </S_NavItem>

                </ul>

            </nav>
            <BurgerButton isOpen = {isOpen} callback = {isOpenToggle}/>
        </S_MobileNavigation>


    );
};


export const S_MobileNavigation = styled.div<{ $isOpen: boolean }>`
  display: block;
  z-index: ${({theme}) => theme.zIndices.header};

  nav {
      // ${outline(10)}
    width: calc(80dvw + 15px);
    height: 80dvh;
    min-height: min-content;
    padding-top: 10dvh;
    background-color: ${({theme}) => theme.colors.bg_primary};
    position: absolute;
    top: 0;
    left: ${({$isOpen}) => $isOpen ? "-20px" : "-150%"};
    ${({theme}) => plainTransition(theme.duration.middle)};

  }

  ul {
    width: 100%;
    list-style: none;
  }

  @media ${({theme}) => theme.media.tablet} {
    width: 100%;
    flex-grow: 1;
    nav {
      position: static;
      width: auto;
      height: 100%;
      padding-top: 0;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: end;
      height: 100%;
    }
  }

  @media ${({theme}) => theme.media.desktop} {
    max-width: min(100%, 1000px);
  }


`;