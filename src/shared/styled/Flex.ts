import styled, {css} from "styled-components";

type FlexItemProp = {
    $direction?: string;
    $justify?: string;
    $align?: string;
    $wrap?: string;
    $gap?: string;
    $columnGap?: string;
    $rowGap?: string;
    $grow?: string;
    $style?:string
};

export type StyledFlexWrapperProps = FlexItemProp;

export const Flex = styled.div<StyledFlexWrapperProps>`
  display: flex;
  flex-direction: ${({$direction}) => $direction || "row"};
  justify-content: ${({$justify}) => $justify || "flex-start"};
  align-items: ${({$align}) => $align || "stretch"};
  flex-wrap: ${({$wrap}) => $wrap || "nowrap"};
  flex-grow: ${({$grow}) => $grow || "0"};
  column-gap: ${({$gap, $columnGap}) => $gap || $columnGap || "0"};
  row-gap: ${({$gap, $rowGap}) => $gap || $rowGap || "0"};
  ${({$style})=>$style && css`${$style}`};
  //height: 100%;
`;
