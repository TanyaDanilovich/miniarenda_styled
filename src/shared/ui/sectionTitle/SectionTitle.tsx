import React from 'react';
import styled from 'styled-components';
import {getResponsiveSize} from '../../utils/getResponsiveSize';

type props = { title: string, text: string };
export const SectionTitle = ({title, text}: props) => {

    return (
        <StyledSectionTitleContainer>
            <S_SectionTitle>
                {title}
            </S_SectionTitle>
            <p>{text}</p>
        </StyledSectionTitleContainer>)
        ;
};

export const StyledSectionTitleContainer = styled.div<{}>`

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
    border-left: 5px solid ${({theme}) => theme.colors.primary};
    p {
      width: 50%;
    }

  }
`;

export const S_SectionTitle = styled.h2<{}>`
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
  position: relative;
  font-size: ${({theme}) => theme.fonts.size.h2};

  @media ${({theme}) => theme.media.tablet} {
    width: 50%;
    padding-left: 1.5rem;
  }
`;