import styled from "styled-components";
import React, {useState} from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {DesktopDropdownMenu} from './DesktopDropdownMenu';
import {plainTransition} from '../../../../app/styles/mixins';
import { useTranslation } from 'react-i18next';
import FontAwesomeIcon from '../../icon/FontAwesomeIcon';

type props = {
    menuItem: MenuItemType,
    setClose?: () => void
};
export const DesktopMenuItem = ({menuItem, setClose}: props) => {
    const { t } = useTranslation();
    const [isDropdown, setIsDropdown] = useState(false);
    const setDropdown = () => setIsDropdown(true)
    const setCollapsed = () => setIsDropdown(false)

    return (


        <S_DesktopMenuItem onClick={setCollapsed} onMouseEnter={setDropdown} onMouseLeave = {setCollapsed}>
            {menuItem.subMenuItems
                ? (
                    <>
                        <S_NavLink href = {menuItem.url} onClick = {setClose}
                                   onMouseEnter = {setDropdown}
                                   onMouseLeave = {setCollapsed}>
                            {t(menuItem.i18nKey)}
                            <FontAwesomeIcon icon = {'icon-angle-down'}
                                             size = {'1x'}
                                             transform = {"translate(6,0)"}/>
                        </S_NavLink>
                        <DesktopDropdownMenu mainUrl = {menuItem.url}
                                             subMenuItems = {menuItem.subMenuItems}
                                             isDropdown = {isDropdown}
                                             setDropdown = {setDropdown}
                                             setCollapsed = {setCollapsed}/>
                    </>
                )
                :

                <S_NavLink href = {menuItem.url} onClick = {setClose}>
                    {t(menuItem.i18nKey)}
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











