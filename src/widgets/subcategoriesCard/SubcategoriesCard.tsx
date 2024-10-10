import {outline, plainTransition} from '../../app/styles/mixins';
import styled, {css} from 'styled-components';
import React from 'react';
import {S_Flex} from '../../shared/styled/S_Flex';
import {Category, SubcategoryItemData} from '../../shared/types/common.types';
import {S_Box} from '../../shared/styled/S_Box';
import {useLocation} from 'react-router-dom';

export type ServiceCardData = {}

type props = { isActive: boolean } &
    ServiceCardData &
    SubcategoryItemData<Category>
export const SubcategoriesCard = ({
                                      subcategoryTitle,
                                      url,
                                      icon,
                                      isActive,
                                      ...rest
                                  }: props) => {

    return (
        <S_SubcategoriesCard $isActive = {isActive}>
            <S_Flex $gap = {"2rem"} as = {'a'} href = {url}>
                {icon && <S_Box $height = {"4rem"} $width = {"4rem"}
                                style = {{maskImage: `url(${icon})`}}> </S_Box>}
                <h4>{subcategoryTitle}</h4>
            </S_Flex>
        </S_SubcategoriesCard>
    );
};

export const S_SubcategoriesCard = styled.article <{ $isActive: boolean }>`
  padding-block: 0.5rem;
  padding-inline: 1rem;
  margin-block: 1rem;
  box-shadow: ${({theme}) => theme.shadow.full};
  width: 100%;

  ${plainTransition()}
  &:hover {
    background-color: ${({theme}) => theme.colors.white_smoke};
    //box-shadow: none;
  }

  &:active {
    background-color: ${({theme}) => theme.colors.lightGray};
  }

    //${outline()} 
  @media ${({theme}) => theme.media.mobile} {
    // width: calc(30%);
    ${S_Flex} {
      gap: 1rem;
    }
  }

  ${S_Box} {
    min-width: auto;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    background-color: ${({theme}) => theme.colors.primary};
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
    align-content: center;
    color: ${({theme}) => theme.colors.dark};
    text-transform: uppercase;
  }

  ${({$isActive}) => $isActive && css`
    h4 {
      color: ${({theme}) => theme.colors.primary};
    }
  `}
`;
