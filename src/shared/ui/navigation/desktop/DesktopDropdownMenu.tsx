import styled, {css} from 'styled-components';
import React, {useId} from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {S_DesktopMenuItem} from './DesktopMenuItem';


type props = {
    subMenuItems: MenuItemType[],
    mainUrl: string
    isDropdown: boolean,
    onClickCallback?: () => void,
    setCollapsed: () => void,
    setDropdown: () => void
};
export const DesktopDropdownMenu = ({
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


                {subMenuItems.map((item, index) =>
                    <S_DesktopMenuItem key = {`${id}-${index}`} onClick = {onClickCallback}>
                        <S_NavLink to = {item.url}>{item.title}</S_NavLink>
                    </S_DesktopMenuItem>)}

        </S_DropdownMenu>);
};


export const S_DropdownMenu = styled.ul<{ $isDropdown: boolean }>`
  a {
    text-wrap: nowrap;
  }

  &  {
    height: auto;
    max-width: 0;
    overflow: hidden;
    position: absolute;
    background-color: ${({theme}) => theme.colors.bg_primary};
  }

  ${({$isDropdown}) => $isDropdown && css`
    & {
      max-width: min-content;
    }
  `})


`;