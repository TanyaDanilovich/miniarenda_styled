import styled, {css} from 'styled-components';
import React, {useId} from 'react';
import {S_NavLink} from '../../shared/ui/navigation/S_NavLink';
import {MenuItemType} from '../../shared/types/common.types';
import {outline, plainTransition} from '../../app/styles/mixins';
import {S_MenuItem} from '../../shared/ui/navigation/MenuItem';


type props = {
    subMenuItems: MenuItemType[],
    mainUrl: string
    isDropdown: boolean,
    onClickCallback?: () => void,
    setCollapsed: () => void,
    setDropdown: () => void
};
export const DropdownMenuItem = ({
                                     subMenuItems,
                                     onClickCallback,
                                     isDropdown,
                                     setCollapsed,
                                     setDropdown
                                 }: props) => {

    const id = useId();


    return (
        <S_DropdownMenu onClick = {onClickCallback}
                        $isDropdown = {isDropdown}
                        onMouseEnter = {setDropdown}
                        onMouseLeave = {setCollapsed}>

            <ul>
                {subMenuItems.map((item, index) =>
                    <S_MenuItem key = {`${id}-${index}`} onClick = {onClickCallback}>
                        <S_NavLink to = {item.url}>{item.title}</S_NavLink>
                    </S_MenuItem>)}
            </ul>
        </S_DropdownMenu>);
};


export const S_DropdownMenu = styled.div<{ $isDropdown: boolean }>`
  a {
    text-wrap: nowrap;
  }

  & > ul {
    height: auto;
    max-width: 0;
    overflow: hidden;
    position: absolute;
    background-color: ${({theme}) => theme.colors.bg_primary};
  }

  ${({$isDropdown}) => $isDropdown && css`
    & > ul {
      max-width: min-content;
    }
  `})


`;