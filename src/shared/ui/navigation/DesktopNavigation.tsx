import styled from "styled-components";
import {BurgerButton} from '../BurgerButton';
import React, {useId} from 'react';
import {menuItemsData} from './menuItemsData';
import {MenuItem} from './MenuItem';

type props = {
  };
export const DesktopNavigation = ({}: props) => {
    const id = useId();
    
    return (


        <S_DesktopNavigation>
            <nav>
                <ul>
                    {menuItemsData.map((menuItem, index) =>
                        <MenuItem key = {`${id}-${index}`} menuItem = {menuItem}/>
                    )}
                </ul>
            </nav>
        </S_DesktopNavigation>


    );
};


export const S_DesktopNavigation = styled.div<{ }>`

  z-index: ${({theme}) => theme.zIndices.header};
  width: 100%;
  max-width: min(100%, 1000px);

  nav > ul {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
  }
`;