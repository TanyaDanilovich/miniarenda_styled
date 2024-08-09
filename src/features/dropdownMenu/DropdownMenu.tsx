import styled, {useTheme} from 'styled-components';
import React, {useId} from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {S_NavLink} from '../../shared/ui/navigation/S_NavLink';
import {S_NavItem} from '../../shared/ui/navigation/S_NavItem';
import {plainTransition} from '../../app/styles/mixins';
import {DropdownItem} from '../../shared/types/common.types';


type props = {
    dropdown: DropdownItem,
    dropdownContent: DropdownItem[],
    onClickCallback: () => void
};
export const DropdownMenuItem = ({dropdown, dropdownContent, onClickCallback}: props) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const theme = useTheme()
    const id = useId();
    const {title, link} = dropdown;

    return (
        <S_DropdownMenu onClick = {onClickCallback}>
            <S_NavLink to = {link}>{title}
                <FontAwesomeIcon icon = {faAngleDown} size = {'1x'} color = {theme.colors.primary}
                                 transform = {"right-6"}/>
            </S_NavLink>

            <ul className = "dropdown-content">
                {dropdownContent.map((item, index) =>
                    <S_NavItem onClick = {onClickCallback}>
                        <S_NavLink key = {`${id}-${index}`} to = {item.link}>{item.title}</S_NavLink>
                    </S_NavItem>)}
            </ul>


        </S_DropdownMenu>);
};


export const S_DropdownMenu = styled(S_NavItem)<{}>`
  width: auto;


  & > ul {
    height: 0;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    z-index: 1000;
    border-radius: 5px;
    width: 160px;
  }

  &:hover > ul {
    ${({theme}) => plainTransition(theme.duration.long)}
    height: auto;
  }

`;