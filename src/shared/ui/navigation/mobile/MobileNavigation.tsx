import styled from "styled-components";
import {outline, plainTransition} from '../../../../app/styles/mixins';
import {BurgerButton} from '../../BurgerButton';
import React from 'react';
import {menuItemsData} from '../menuItemsData';
import {MobileMenuItem} from './MobileMenuItem';
import {StyledMain} from '../../../../widgets/main/Main';

type props = {};
export const MobileNavigation = ({}: props) => {

    const id = 'mobile-navigation';

    const [isOpen, setOpen] = React.useState<boolean>(false);
    const openToggle = () => setOpen(!isOpen);
    const setClose = () => setOpen(false);



    return (
        <S_MobileNavigation $isOpen = {isOpen}>

            <nav onClick = {setClose}>
                <ul>
                    {menuItemsData.map((menuItem, index) =>
                        <MobileMenuItem key = {`${id}-${index}`} menuItem = {menuItem}/>
                    )}
                </ul>

            </nav>
            <BurgerButton isOpen = {isOpen} callback = {openToggle}/>
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

  nav > ul {
    width: 100%;
    list-style: none;
  }


  & ~ ${StyledMain} {
    touch-action: ${({$isOpen}) => $isOpen ? "none" : "auto"};
  }

`;