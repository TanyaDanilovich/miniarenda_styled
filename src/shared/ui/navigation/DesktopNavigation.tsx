import styled from "styled-components";
import {BurgerButton} from '../BurgerButton';
import React, {useId} from 'react';
import {S_NavItem} from './S_NavItem';
import {S_NavLink} from './S_NavLink';
import {menuItemsData} from './menuItemsData';

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
                        <S_NavItem key = {`${id}-${index}`}>
                            <S_NavLink to = {menuItem.url}> {menuItem.title} </S_NavLink>
                        </S_NavItem>
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