import styled, {useTheme} from 'styled-components';
import React, {useId} from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {S_NavLink} from '../../shared/ui/navigation/S_NavLink';
import {S_NavItem} from '../../shared/ui/navigation/S_NavItem';
import {plainTransition} from '../../app/styles/mixins';
import {MenuItemType} from '../../shared/types/common.types';


type props = {
    subMenuItems: MenuItemType[],
    onClickCallback?: () => void
};
export const DropdownMenuItem = ({subMenuItems, onClickCallback}: props) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const theme = useTheme()
    const id = useId();


    return (
        <S_DropdownMenu onClick = {onClickCallback}>
            <ul>
                {subMenuItems.map((item, index) =>
                    <S_NavItem onClick = {onClickCallback}>
                        <S_NavLink key = {`${id}-${index}`} to = {item.url}>{item.title}</S_NavLink>
                    </S_NavItem>)}
            </ul>


        </S_DropdownMenu>);
};


export const S_DropdownMenu = styled(S_NavItem)<{}>`
  & > ul {
    height: auto;
    overflow: hidden;
    position: absolute;
    background-color: ${({theme}) => theme.colors.bg_primary};
  }



`;