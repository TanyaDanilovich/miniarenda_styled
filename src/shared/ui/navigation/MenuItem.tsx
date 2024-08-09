import styled, {useTheme} from "styled-components";
import React from 'react';
import {S_NavLink} from './S_NavLink';
import {MenuItemType} from '../../types/common.types';
import {DropdownMenuItem, S_DropdownMenu} from '../../../features/dropdownMenu/DropdownMenuItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {S_NavItem} from './S_NavItem';

type props = {
    menuItem: MenuItemType,
    isOpen?: boolean,
    isOpenToggle?: () => void,
    setClose?: () => void
};
export const MenuItem = ({menuItem, isOpen, isOpenToggle, setClose}: props) => {
    const theme = useTheme()
    return (


        <S_MenuItem>
            {menuItem.subMenuItems
                ? (
                    <>
                        <S_NavItem onClick = {setClose}>
                            <S_NavLink to = {menuItem.url}>
                                {menuItem.title}
                                <FontAwesomeIcon icon = {faAngleDown}
                                                 size = {'1x'}
                                                 transform = {"right-6"}/>
                            </S_NavLink>
                        </S_NavItem>
                        <DropdownMenuItem subMenuItems = {menuItem.subMenuItems}/>
                    </>
                )
                : <S_NavItem onClick = {setClose}>
                    <S_NavLink to = {menuItem.url}>
                        {menuItem.title}
                    </S_NavLink>
                </S_NavItem>}

        </S_MenuItem>


    );
};


export const S_MenuItem = styled.li<{}>`

`;