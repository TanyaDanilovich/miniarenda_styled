import styled from "styled-components";
import React, {useId} from 'react';
import {menuItemsData} from '../menuItemsData';
import {DesktopMenuItem} from './DesktopMenuItem';
import {useTranslation} from 'react-i18next';

type props = {};
export const DesktopNavigation = ({}: props) => {
    const id = useId();
    const {t} = useTranslation();
    //console.log("DesktopNavigation")

    return (


        <S_DesktopNavigation>
            <nav>
                <ul>
                    {menuItemsData.map((menuItem, index) =>
                        <DesktopMenuItem key = {index} menuItem = {{...menuItem, i18nKey: t(menuItem.i18nKey)}}/>
                    )}
                </ul>
            </nav>
        </S_DesktopNavigation>


    );
};


export const S_DesktopNavigation = styled.div<{}>`

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