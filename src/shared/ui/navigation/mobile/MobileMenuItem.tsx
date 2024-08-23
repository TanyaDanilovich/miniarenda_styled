import styled from "styled-components";
import React, {useState} from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {outline, plainTransition} from '../../../../app/styles/mixins';
import {MobileDropdownMenu} from './MobileDropdownMenu';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons/faAngleRight';

type props = {
    menuItem: MenuItemType,
    setClose?: () => void
};
export const MobileMenuItem = ({menuItem, setClose}: props) => {

    const [isDropdown, setIsDropdown] = useState(false);
    const setDropdown = () => setIsDropdown(true)
    const setCollapsed = () => setIsDropdown(false)

    return (


        <S_MobileMenuItem
            // onMouseEnter = {setDropdown}
            // onMouseLeave = {setCollapsed}
            onTouchStart = {
                (e) => {
                    console.log(e.type)
                    setDropdown()
                }
            }
        >
            {menuItem.subMenuItems
                ? (
                    <>
                        <S_MobileDropdownNavLink>
                            <S_NavLink to = {menuItem.url}
                                       onClick = {e => e.stopPropagation()}
                                       onTouchStart = {setDropdown}>
                                {menuItem.title}
                            </S_NavLink>

                            <button onClick = {e => e.stopPropagation()}
                                    onTouchStart = {setDropdown}>
                                <FontAwesomeIcon icon = {faAngleRight}
                                                 size = {'1x'} color = {"white"}/>
                            </button>
                        </S_MobileDropdownNavLink>

                        <MobileDropdownMenu mainUrl = {menuItem.url}
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
        </S_MobileMenuItem>


    );
};


export const S_MobileMenuItem = styled.li<{}>`
  background-color: ${({theme}) => theme.colors.black};

    //${outline(3, "green")}
  &, & > a {
    ${plainTransition()}
  }

  & > a:hover {
    background-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.primary};
  }

  border-bottom: 2px solid ${({theme}) => theme.colors.darkSlateGray};

  &:first-child {
    border-top: 2px solid ${({theme}) => theme.colors.darkSlateGray};
  }
`;

export const S_MobileDropdownNavLink = styled.div<{}>`
  max-width: 100%;
  display: grid;
  grid-template-columns:auto 3.5rem;

  button {
    border-left: 2px solid ${({theme}) => theme.colors.darkSlateGray};;
    outline: none;
    cursor: pointer;
`;





