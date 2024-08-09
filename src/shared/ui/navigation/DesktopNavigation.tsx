import styled from "styled-components";
import {outline, plainTransition} from '../../../app/styles/mixins';
import {BurgerButton} from '../BurgerButton';
import React, {useId} from 'react';
import {S_NavItem} from './S_NavItem';
import {S_NavLink} from './S_NavLink';
import {DropdownMenuItem} from '../../../features/dropdownMenu/DropdownMenu';
import {dropDownMenuContentData} from '../../../features/dropdownMenu/dropDownMenuContentData';
import {menuItemsData} from './menuItemsData';

type props = {
    isOpen: boolean,
    isOpenToggle: () => void,
    setClose: () => void
};
export const DesktopNavigation = ({isOpen, isOpenToggle, setClose}: props) => {
    const id = useId();
    return (


        <S_DesctopNavigation $isOpen = {isOpen}>

            <nav onClick = {setClose}>
                <ul>
                    {menuItemsData.map((menuItem, index) =>
                        <S_NavItem key = {`${id}-${index}`}>
                            <S_NavLink to = {menuItem.url}> {menuItem.title} </S_NavLink>
                        </S_NavItem>
                    )}


                </ul>

            </nav>
            <BurgerButton isOpen = {isOpen} callback = {isOpenToggle}/>
        </S_DesctopNavigation>


    );
};


export const S_DesctopNavigation = styled.div<{ $isOpen: boolean }>`
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

  nav > ul {
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

    nav > ul {
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