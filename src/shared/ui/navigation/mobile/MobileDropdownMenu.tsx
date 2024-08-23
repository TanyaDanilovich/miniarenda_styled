import styled, {css} from 'styled-components';
import React, {useId} from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {S_DesktopMenuItem} from '../desktop/DesktopMenuItem';
import {S_MobileMenuItem} from './MobileMenuItem';
import {outline} from '../../../../app/styles/mixins';


type props = {
    subMenuItems: MenuItemType[],
    mainUrl: string
    isDropdown: boolean,
    onClickCallback?: () => void,
    setCollapsed: () => void,
    setDropdown: () => void
};
export const MobileDropdownMenu = ({
                                       subMenuItems,
                                       onClickCallback,
                                       isDropdown,
                                       setCollapsed,
                                       setDropdown
                                   }: props) => {

    const id = useId();


    return (
        <S_MobileDropdownMenu onClick = {onClickCallback}
                              $isDropdown = {isDropdown}
                              onMouseEnter = {setDropdown}
                              onMouseLeave = {setCollapsed}>


            {subMenuItems.map((item, index) =>
                <S_MobileMenuItem key = {`${id}-${index}`} onClick = {onClickCallback}>
                    <S_NavLink to = {item.url}>{item.title}</S_NavLink>
                </S_MobileMenuItem>)}

        </S_MobileDropdownMenu>);
};


export const S_MobileDropdownMenu = styled.ul<{ $isDropdown: boolean }>`
  max-height: 0;
  overflow: hidden;
  //position: absolute;
  background-color: ${({theme}) => theme.colors.bg_primary};


  ${({$isDropdown}) => $isDropdown && css`

    max-height: min-content;
    //${outline(3, "red")}
  `}

`;