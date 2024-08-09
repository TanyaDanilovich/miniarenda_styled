import styled from "styled-components";
import {BurgerButton} from '../BurgerButton';
import React, {useId} from 'react';
import {S_NavItem} from './S_NavItem';
import {S_NavLink} from './S_NavLink';
import {menuItemsData} from './menuItemsData';
import {MenuItem} from './MenuItem';

type props = {
    isOpen: boolean,
    isOpenToggle: () => void,
    setClose: () => void
};
export const DesktopNavigation = ({isOpen, isOpenToggle, setClose}: props) => {
    const id = useId();
    
    return (


        <S_DesktopNavigation $isOpen = {isOpen}>
            <nav onClick = {setClose}>
                <ul>
                    {menuItemsData.map((menuItem, index) =>
                        <MenuItem key = {`${id}-${index}`} menuItem = {menuItem}/>
                    )}
                </ul>
            </nav>
            <BurgerButton isOpen = {isOpen} callback = {isOpenToggle}/>
        </S_DesktopNavigation>


    );
};


export const S_DesktopNavigation = styled.div<{ $isOpen: boolean }>`

  z-index: ${({theme}) => theme.zIndices.header};
  width: 100%;


  nav > ul {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
  }


  @media ${({theme}) => theme.media.desktop} {
    max-width: min(100%, 1000px);
  }


`;