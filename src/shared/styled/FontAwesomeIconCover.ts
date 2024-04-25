import styled from 'styled-components';

export const FontAwesomeIconCover = styled.span<{}>`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 50%;
  text-align: center;
  line-height: 3rem;
  position: absolute;
  right: 3rem;
  bottom: 0;
  z-index: 5;
`