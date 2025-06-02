import React from 'react';
import styled, {css} from 'styled-components';
import {S_OuterContainer} from '../../styled/S_OuterContainer';
import {getResponsiveSize} from '../../utils/getResponsiveSize';
import {BASE} from '../../constants/constants';


type props = { title: string, text?: string, color?: string };
export const SectionTitle = ({title, text, color}: props) => {

    return (
        <StyledSectionTitleContainer $isWithText = {!!text}>
            <S_SectionTitle $isWithText = {!!text} $color = {color}>
                {title}
            </S_SectionTitle>
            {text && <p>{text}</p>}
        </StyledSectionTitleContainer>)
        ;
};

export const StyledSectionTitleContainer = styled(S_OuterContainer)<{ $isWithText: boolean }>`

  margin-block: ${getResponsiveSize(BASE * 2, BASE * 4)};
  //margin-block: 1rem;
  white-space: normal;

  p {
    font-size: 1rem;
    text-align: justify;
  }

  @media ${({theme}) => theme.mediaMinWidth.mobile} {
    display: flex;
    gap: 1rem;
    width: 100%;


    ${({$isWithText}) => $isWithText && css`
      border-left: 5px solid ${({theme}) => theme.colors.primary};
      align-items: center;
      @media ${({theme}) => theme.mediaMinWidth.tablet} {

        p {
          width: 50%;
        }
      }
    `}


  }
`;

export const S_SectionTitle = styled.h2<{ $isWithText: boolean, $color?: string }>`
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
  position: relative;
  font-size: ${({theme}) => theme.fonts.size.h2};
  width: 100%;
  color: ${({$color}) => $color || "inherit"};
  ${({$isWithText}) => $isWithText && css`
    @media ${({theme}) => theme.mediaMinWidth.tablet} {
      width: 50%;
      padding-left: 1.5rem;
      text-align: left;
    }
  `}

`;