import React from 'react';
import styled from 'styled-components';

type props = { title: string, text: string };
export const SectionTitle = ({title, text}: props) => {

    return (
        <StyledSectionTitleContainer>
            <StyledSectionTitle>{title}</StyledSectionTitle>
            <p>{text}</p>
        </StyledSectionTitleContainer>);
};

export const StyledSectionTitleContainer = styled.div<{}>`
  max-width: 530px;
  margin: auto;

  p {
    font-size: 1rem;
    text-align: justify;
  }
`;

export const StyledSectionTitle = styled.h2<{}>`
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
  position: relative;
  font-size: ${({theme}) => theme.fonts.size.h2};
`;