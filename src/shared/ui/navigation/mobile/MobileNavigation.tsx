import styled, {css} from "styled-components";
import {outline, plainTransition} from '../../../../app/styles/mixins';
import {BurgerButton} from '../../BurgerButton';
import React, {useEffect, useId} from 'react';
import {menuItemsData} from '../menuItemsData';
import {MobileMenuItem} from './MobileMenuItem';
import {StyledMain} from '../../../../widgets/main/Main';

type props = {};
export const MobileNavigation = ({}: props) => {

    const id = useId();

    const [isNavigationOpen, setNavigationOpen] = React.useState<boolean>(false);
    const [dropDownId, setDropDownId] = React.useState<string | null>(null);

    useEffect(() => {
        isNavigationOpen
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = "scroll"
    }, [isNavigationOpen])

    const navToggle = () => {
        setNavigationOpen(prev => !prev)
        if (dropDownId) collapsedDropdown()
    };
    const setNavigationClose = () => setNavigationOpen(false);
    const collapsedDropdown = () => setDropDownId(null);


    const closeAll = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation();
        collapsedDropdown();
        setNavigationClose();
    }

    return (
        <S_MobileNavigation $isOpen = {isNavigationOpen} $isDropdown = {!!dropDownId}>
            <nav onClick = {closeAll}>
                <ul>
                    {menuItemsData.map((menuItem, index) =>
                        <MobileMenuItem key = {`${id}-${index}`}
                                        id = {`mobile-navigation-item-${id}-${index}`}
                                        dropDownId = {dropDownId}
                                        setDropDown = {setDropDownId}
                                        menuItem = {menuItem}
                                        setNavigationClose = {setNavigationClose}
                                        collapsedDropdown = {collapsedDropdown}
                        />
                    )}
                </ul>
            </nav>

            <S_PageBlocker $isOpen = {isNavigationOpen}>

            </S_PageBlocker>

            <BurgerButton isOpen = {isNavigationOpen} callback = {navToggle}/>
        </S_MobileNavigation>


    );
};


export const S_MobileNavigation = styled.div<{ $isOpen: boolean, $isDropdown: boolean }>`
  display: block;
  z-index: ${({theme}) => theme.zIndices.header};
  overscroll-behavior: contain;

  nav {
      //${outline(10)}
    width: calc(80dvw + 15px);
    height: 100dvh;
    min-height: min-content;
    padding-top: 10dvh;
    background-color: ${({theme}) => theme.colors.bg_primary};
    position: absolute;
    z-index: ${({theme}) => theme.zIndices.header};
    top: 0;
    left: ${({$isOpen}) => $isOpen ? "-20px" : "-150%"};
    ${({theme}) => plainTransition(theme.duration.middle)};


  }

  nav > ul {
    width: 100%;
    list-style: none;
  }


  & ~ ${StyledMain} {
    touch-action: ${({$isOpen}) => $isOpen ? "none" : "auto"};
  }



`;

export const S_PageBlocker = styled.div<{ $isOpen: boolean }>`

  display: ${({$isOpen}) => $isOpen ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({theme}) => theme.zIndices.mainContent};


  ${({$isOpen}) => $isOpen && css`
    body {
      ${outline(10)}
    }
  `}
`