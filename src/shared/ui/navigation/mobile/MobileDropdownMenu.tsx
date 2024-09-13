import styled, {css} from 'styled-components';
import React, {useId} from 'react';
import {S_NavLink} from '../S_NavLink';
import {MenuItemType} from '../../../types/common.types';
import {S_MobileMenuItem} from './MobileMenuItem';
import {outline, plainTransition} from '../../../../app/styles/mixins';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons/faArrowUpFromBracket';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons/faLeftLong';


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

            <S_GoBackButton onClick = {goBack}>
                <FontAwesomeIcon icon = {faLeftLong}
                                 size = {'1x'}
                                 color = {"white"}
                />
                {mainTitle}</S_GoBackButton>

            {subMenuItems.map((item, index) =>
                <S_MobileMenuItem key = {`${id}-${index}`} onClick = {onClickCallback} $isDropdown = {isDropdown}>
                    <S_NavLink to = {item.url}>{item.title}</S_NavLink>
                </S_MobileMenuItem>)}

        </S_MobileDropdownMenu>);
};


export const S_MobileDropdownMenu = styled.ul<{ $asDropdown: boolean }>`
  height: 0;
  width: calc(80dvw + 15px);
  overflow: hidden;
  position: relative;
  z-index: ${({theme}) => theme.zIndices.header};
  ${({theme}) => plainTransition(theme.duration.middle)};

  ${({$asDropdown}) => $asDropdown && css`
      //${outline(1)}
    position: absolute;
    height: fit-content;
    top: 0;
    left: 100%;

    & > ${S_MobileMenuItem} {
      border-right: 2px solid transparent;
    }
  `}

`;
export const S_GoBackButton = styled.button<{}>`
  position: relative;
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

  & > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3rem;
  }
`;
