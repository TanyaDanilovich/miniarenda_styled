import styled from 'styled-components';

export const S_Span = styled.span<{
    $color?: string,
    $fontWeight?: string,
    $background?: string,
    $fontSize?:string
}>`

  color: ${({$color, theme}) => $color || theme.colors.dark};
  font-weight: ${({$fontWeight, theme}) => $fontWeight || theme.fonts.weight.regular};
  font-size: ${({$fontSize, theme}) => $fontSize || theme.fonts.weight.regular};
  background-color: ${({$background, theme}) => $background || 'transparent'};
`;