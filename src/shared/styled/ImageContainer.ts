import styled from "styled-components";


type ImageContainerProps = {
  height?: string;
  width?: string;
  radius?: string;
  color?:string
  background?:string
  opacity?:string
};
export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.radius || "0"};
  overflow: hidden;
  color: ${(props) => props.color || props.theme.colors.dark};
  background: ${(props) => props.background || props.theme.colors.lightGray};
opacity:${(props) => props.opacity || '1'};;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
