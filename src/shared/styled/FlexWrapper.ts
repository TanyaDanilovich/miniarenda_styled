import styled from "styled-components";

type FlexItemProp = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  grow?: string;
};

export type StyledFlexWrapperProps = FlexItemProp;

export const FlexWrapper = styled.div<StyledFlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-grow: ${(props) => props.grow || "0"};
  column-gap: ${(props) => props.gap || props.columnGap || "0"};
  row-gap: ${(props) => props.gap || props.rowGap || "0"};
  height: 100%;
`;
