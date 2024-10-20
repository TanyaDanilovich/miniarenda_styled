import React from 'react';
import styled, {css} from 'styled-components';
import {S_OuterContainer} from '../../styled/S_OuterContainer';


type props = { title: string, text?: string };
export const SectionTitle = ({title, text}: props) => {

    return (
        <StyledSectionTitleContainer $isWithText = {!!text}>
            <S_SectionTitle $isWithText = {!!text}>
                {title}
            </S_SectionTitle>
            {text && <p>{text}</p>}
        </StyledSectionTitleContainer>)
        ;
};

export const StyledSectionTitleContainer = styled(S_OuterContainer)<{ $isWithText: boolean }>`

  margin: auto auto 4rem;
  white-space: normal;

  p {
    font-size: 1rem;
    text-align: justify;
  }

  @media ${({theme}) => theme.media.mobile} {
    display: flex;
    gap: 1rem;
    width: 100%;


    ${({$isWithText}) => $isWithText && css`
      border-left: 5px solid ${({theme}) => theme.colors.primary};
      align-items: center;
      @media ${({theme}) => theme.media.tablet} {

        p {
          width: 50%;
        }
      }
    `}


  }
`;

export const S_SectionTitle = styled.h2<{ $isWithText: boolean }>`
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
  position: relative;
  font-size: ${({theme}) => theme.fonts.size.h2};
  width: 100%;
  ${({$isWithText}) => $isWithText && css`
    @media ${({theme}) => theme.media.tablet} {
      width: 50%;
      padding-left: 1.5rem;
      text-align: left;
    }
  `}

`;