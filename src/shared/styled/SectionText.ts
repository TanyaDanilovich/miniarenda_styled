import styled from "styled-components";
import {theme} from '../../app/styles/Theme.styled';


export const SectionText = styled.p<{ $fontSize?: string }>`
  color: ${({theme}) => theme.colors.dark};
  font-weight: 400;
  

  @media ${({theme}) => theme.media.mobile} {
    text-align: center;
  }
`;
// font-size: ${(props) => props.$fontSize || theme.font.size.p};