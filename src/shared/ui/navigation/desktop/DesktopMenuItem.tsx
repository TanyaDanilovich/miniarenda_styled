import styled from "styled-components";
import React, {useState} from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {DesktopDropdownMenu} from './DesktopDropdownMenu';
import {plainTransition} from '../../../../app/styles/mixins';
import FontAwesomeIcon from '../../icon/FontAwesomeIcon';

type props = {
    menuItem: MenuItemType,
    setClose?: () => void
};
export const DesktopMenuItem = ({menuItem, setClose}: props) => {

    const [isDropdown, setIsDropdown] = useState(false);
    const setDropdown = () => setIsDropdown(true)
    const setCollapsed = () => setIsDropdown(false)

    return (


        <S_DesktopMenuItem onClick = {setCollapsed} onMouseEnter = {setDropdown} onMouseLeave = {setCollapsed}>

                <S_NavLink href = {menuItem.url} onClick = {setClose}>
                    {menuItem.title}
                </S_NavLink>

        </S_DesktopMenuItem>


    );
};


export const S_DesktopMenuItem = styled.li<{}>`
  background-color: ${({theme}) => theme.colors.black};

  &, & > a {
    ${plainTransition()}
  }

  & > a:hover {
    background-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.primary};
  }

`;











