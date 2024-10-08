import styled from "styled-components";
import React, {useState} from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {DesktopDropdownMenu} from './DesktopDropdownMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {plainTransition} from '../../../../app/styles/mixins';

type props = {
    menuItem: MenuItemType,
    setClose?: () => void
};
export const DesktopMenuItem = ({menuItem, setClose}: props) => {

    const [isDropdown, setIsDropdown] = useState(false);
    const setDropdown = () => setIsDropdown(true)
    const setCollapsed = () => setIsDropdown(false)

    return (


        <S_DesktopMenuItem onClick={setCollapsed} onMouseEnter={setDropdown} onMouseLeave = {setCollapsed}>
            {menuItem.subMenuItems
                ? (
                    <>
                        <S_NavLink to = {menuItem.url} onClick = {setClose}
                                   onMouseEnter = {setDropdown}
                                   onMouseLeave = {setCollapsed}>
                            {menuItem.title}
                            <FontAwesomeIcon icon = {faAngleDown}
                                             size = {'1x'}
                                             transform = {"right-6"}/>
                        </S_NavLink>
                        <DesktopDropdownMenu mainUrl = {menuItem.url}
                                             subMenuItems = {menuItem.subMenuItems}
                                             isDropdown = {isDropdown}
                                             setDropdown = {setDropdown}
                                             setCollapsed = {setCollapsed}/>
                    </>
                )
                :

                <S_NavLink to = {menuItem.url} onClick = {setClose}>
                    {menuItem.title}
                </S_NavLink>
            }
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











