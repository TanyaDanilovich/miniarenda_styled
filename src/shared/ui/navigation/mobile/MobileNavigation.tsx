import styled, {css} from "styled-components";
import {outline, plainTransition} from '../../../../app/styles/mixins';
import {BurgerButton} from '../../BurgerButton';
import React, {useId} from 'react';
import {menuItemsData} from '../menuItemsData';
import {MobileMenuItem} from './MobileMenuItem';
import {StyledMain} from '../../../../widgets/main/Main';
import {Layout} from '../../../../widgets/layout/Layout';

type props = {};
export const MobileNavigation = ({}: props) => {

    const id = useId();

    const [isNavigationOpen, setNavigationOpen] = React.useState<boolean>(false);
    const [dropDownId, setDropDownId] = React.useState<string | null>(null);
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
        <S_MobileNavigation $isOpen = {isNavigationOpen} $isDropdown={!!dropDownId}>
            <nav onClick = {closeAll}>
                <ul>
                    {menuItemsData.map((menuItem, index) =>
                        <MobileMenuItem key = {`${id}-${index}`}
                                        id = {`mobile-navigation-item-${id}-${index}`}
                                        dropDownId = {dropDownId}
                                        setDropDown={setDropDownId}
                                        menuItem = {menuItem}
                                        setNavigationClose = {setNavigationClose}
                                        collapsedDropdown={collapsedDropdown}
                        />
                    )}
                </ul>
            </nav>
            <BurgerButton isOpen = {isNavigationOpen} callback = {navToggle}/>
        </S_MobileNavigation>


    );
};


export const S_MobileNavigation = styled.div<{ $isOpen: boolean, $isDropdown: boolean}>`
  display: block;
  z-index: ${({theme}) => theme.zIndices.header};
  overscroll-behavior: contain;

  nav {
      //${outline(10)}
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


  & ~ ${StyledMain} {
    touch-action: ${({$isOpen}) => $isOpen ? "none" : "auto"};
  }



`;