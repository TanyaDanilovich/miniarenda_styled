type FlexItemProp = {
    $direction?: string;
    $justify?: string;
    $align?: string;
    $wrap?: string;
    $gap?: string;
    $columnGap?: string;
    $rowGap?: string;
    $grow?: string;
    $style?: string;
};
export type StyledFlexWrapperProps = FlexItemProp;
export declare const S_Flex: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FlexItemProp>> & string;
export {};
