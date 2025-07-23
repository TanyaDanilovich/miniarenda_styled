import styled, {css} from "styled-components";
import React from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {plainTransition} from '../../../../app/styles/mixins';

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


                <S_NavLink href = {menuItem.url} onClick = {setNavigationClose}>
                    {menuItem.title}
                </S_NavLink>

        </S_MobileMenuItem>


    );
};


export const S_MobileMenuItem = styled.li<{
    $isThereDropDown?: boolean,
    $isDropdown?: boolean
}>`
  background-color: ${({theme}) => theme.colors.black};
  position: relative;
  left: 0;
  ${plainTransition()}

  border-bottom: 2px solid ${({theme}) => theme.colors.darkSlateGray};
  border-right: 2px solid ${({theme}) => theme.colors.darkSlateGray};

  &:first-child {
    border-top: 2px solid ${({theme}) => theme.colors.darkSlateGray};
  }

  ${({$isThereDropDown}) => $isThereDropDown && css`
    left: -100%;
  `}
  &, & > a {
    ${plainTransition()}
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





