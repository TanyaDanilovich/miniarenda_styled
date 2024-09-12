import styled, {css} from 'styled-components';
import React, {useId} from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {S_MobileMenuItem} from './MobileMenuItem';
import {outline, plainTransition} from '../../../../app/styles/mixins';


type props = {
    subMenuItems: MenuItemType[],
    mainUrl: string
    isDropdown: boolean,
    onClickCallback?: () => void,
    setCollapsed: () => void,
    setDropdown: () => void,
    mainTitle: string,
};
export const MobileDropdownMenu = ({
                                       subMenuItems,
                                       onClickCallback,
                                       isDropdown,
                                       setCollapsed,
                                       setDropdown, mainTitle
                                   }: props) => {

    const id = useId();
    //console.log(isDropdown);

    const goBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setCollapsed();
    }
    return (
        <S_MobileDropdownMenu onClick = {onClickCallback}
                              $asDropdown = {isDropdown}
                              onMouseEnter = {setDropdown}
                              onMouseLeave = {setCollapsed}>

            <S_GoBackButton onClick = {goBack}>{mainTitle}</S_GoBackButton>

            {subMenuItems.map((item, index) =>
                <S_MobileMenuItem key = {`${id}-${index}`} onClick = {onClickCallback} $isDropdown = {isDropdown}>
                    <S_NavLink to = {item.url}>{item.title}</S_NavLink>
                </S_MobileMenuItem>)}

        </S_MobileDropdownMenu>);
};


export const S_MobileDropdownMenu = styled.ul<{ $asDropdown: boolean }>`
  max-height: 0;
  overflow: hidden;
  position: absolute;
  z-index: ${({theme}) => theme.zIndices.header};
  ${({theme}) => plainTransition(theme.duration.middle)};

  ${({$asDropdown}) => $asDropdown && css`
      //${outline(1)}
    max-height: min-content;
    right: -80%;
    top: 0;
    left: 100%;
    border-left: 2px solid ${({theme}) => theme.colors.darkSlateGray};

    a {
      padding-inline: 1rem;
    }
  `}

`;
export const S_GoBackButton = styled.button<{}>`
  //display: inline-block;
  width: 100%;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.primary};
  padding-block: 1rem;
  font-size: 1rem;
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
`;
