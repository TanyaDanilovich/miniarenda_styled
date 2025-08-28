type props = {
    title: string;
    text?: string;
    color?: string;
    itemProp?: string;
};
export declare const SectionTitle: ({ title, text, color, itemProp }: props) => import("react/jsx-runtime").JSX.Element;
export declare const StyledSectionTitleContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, {
    $isWithText: boolean;
}>> & string;
export declare const S_SectionTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
    $isWithText: boolean;
    $color?: string;
}>> & string;
export {};
