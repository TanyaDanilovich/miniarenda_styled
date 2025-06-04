import styled from 'styled-components';

export const S_Span = styled.span<{$color?: string, $fontWeight?: string}>`

  color: ${({$color, theme}) => $color || theme.colors.dark};
  font-weight: ${({$fontWeight,theme}) => $fontWeight || theme.fonts.weight.regular};
`;