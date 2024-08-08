import styled from "styled-components";


export const
    S_NavItem = styled.li<{}>`
  border-bottom: 1px solid ${({theme}) => theme.colors.dark};

  &:first-child {
    border-top: 1px solid ${({theme}) => theme.colors.dark};
  }

  &:focus {
    background-color: ${({theme}) => theme.colors.lightSlateGray};
  }

  @media ${({theme}) => theme.media.tablet} {
    &, &:first-child {
      border: none;
     
    }

  }
`;