import styled from "styled-components";


type ImageContainerProps = {
    $height?: string;
    $width?: string;
    $radius?: string;
    $color?: string
    $background?: string
    $opacity?: string
};
export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${({$width}) => $width || "100%"};
  height: ${({$height}) => $height || "auto"};
  border-radius: ${({$radius}) => $radius || "0"};
  overflow: hidden;
  color: ${({$color, theme}) => $color || theme.colors.dark};
  background: ${({$background, theme}) => $background || theme.colors.lightGray};
  opacity: ${({$opacity}) => $opacity || '1'};
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
