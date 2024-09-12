import styled, {css} from "styled-components";
import React from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {outline, plainTransition} from '../../../../app/styles/mixins';
import {MobileDropdownMenu} from './MobileDropdownMenu';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons/faAngleRight';

type props = {
    id: string,
    dropDownId: string | null,
    menuItem: MenuItemType,
    setNavigationClose: () => void,
    setDropDown: (id: string) => void,
    collapsedDropdown: () => void
};
export const MobileMenuItem = ({
                                   id,
                                   menuItem,
                                   setNavigationClose,
                                   dropDownId,
                                   setDropDown,
                                   collapsedDropdown
                               }: props) => {
    //const ref = useRef(null)
    const setAsDropDown = () => setDropDown(id)
    const toggleDropdown = () => {
        if (dropDownId === id) {
            collapsedDropdown()
        } else {
            setAsDropDown()
        }
    }

    return (


        <S_MobileMenuItem $isThereDropDown = {!!dropDownId}>
            {menuItem.subMenuItems
                ? (
                    <>
                        <S_MobileDropdownNavLink
                            //ref = {ref}
                        >
                            <S_NavLink to = {menuItem.url}
                                       onClick = {setNavigationClose}
                            >
                                {menuItem.title}
                            </S_NavLink>

                            <button onClick = {(e) => {
                                e.stopPropagation();
                                toggleDropdown();
                            }}>
                                <FontAwesomeIcon icon = {faAngleRight}
                                                 size = {'1x'} color = {"white"}/>
                            </button>
                        </S_MobileDropdownNavLink>

                        <MobileDropdownMenu mainUrl = {menuItem.url}
                                            mainTitle = {menuItem.title}
                                            subMenuItems = {menuItem.subMenuItems}
                                            isDropdown = {dropDownId === id}
                                            setDropdown = {setAsDropDown}
                                            setCollapsed = {collapsedDropdown}/>
                    </>
                )
                :

                <S_NavLink to = {menuItem.url} onClick = {setNavigationClose}>
                    {menuItem.title}
                </S_NavLink>
            }
        </S_MobileMenuItem>


    );
};


export const S_MobileMenuItem = styled.li<{
    $isThereDropDown?: boolean,
    $isDropdown?: boolean
}>`
  background-color: ${({theme}) => theme.colors.black};

    //${outline(3, "green")}
  ${({$isThereDropDown}) => $isThereDropDown && css`
      // ${outline(3)}
    position: relative;
    left: -80%;
  `}
  &, & > a {
    ${plainTransition()}
  }

  & > a:hover {
    background-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.primary};
  }

  border-bottom: 2px solid ${({theme}) => theme.colors.darkSlateGray};
  border-right: 2px solid ${({theme}) => theme.colors.darkSlateGray};

  &:first-child {
    border-top: 2px solid ${({theme}) => theme.colors.darkSlateGray};
  }
`;

export const S_MobileDropdownNavLink = styled.div<{}>`
  max-width: 100%;
  display: grid;
  grid-template-columns:auto 3.5rem;

  button {
    border-left: 2px solid ${({theme}) => theme.colors.darkSlateGray};
    outline: none;
    cursor: pointer;
`;





