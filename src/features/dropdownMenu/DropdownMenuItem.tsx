import styled, {css} from 'styled-components';
import React, {useId} from 'react';
import {S_NavLink} from '../../shared/ui/navigation/S_NavLink';
import {S_NavItem} from '../../shared/ui/navigation/S_NavItem';
import {MenuItemType} from '../../shared/types/common.types';


type props = {
    subMenuItems: MenuItemType[],
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
                                     setDropdown,
                                     ...rest
                                 }: props) => {

    const id = useId();


    return (
        <S_DropdownMenu onClick = {onClickCallback}
                        $isDropdown = {isDropdown}
                        onMouseEnter = {setDropdown}
                        onMouseLeave = {setCollapsed}>
            <ul>
                {subMenuItems.map((item, index) =>
                    <S_NavItem onClick = {onClickCallback}>
                        <S_NavLink key = {`${id}-${index}`} to = {item.url}>{item.title}</S_NavLink>
                    </S_NavItem>)}
            </ul>


        </S_DropdownMenu>);
};


export const S_DropdownMenu = styled(S_NavItem)<{ $isDropdown: boolean }>`
  & > ul {
    height: 0;
    width: 0;
    overflow: hidden;
    position: absolute;
    background-color: ${({theme}) => theme.colors.bg_primary};
  }

  ${({$isDropdown}) => $isDropdown && css`
    & > ul {
      height: auto;
      width: fit-content;
    }
  `})


`;