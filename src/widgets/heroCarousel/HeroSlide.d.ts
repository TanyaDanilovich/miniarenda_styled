import { type ImageProps } from '../../shared/types/common.types';
type props = {
    mainText: string;
    additionalText: string;
    image: ImageProps;
    index: number;
};
export declare const HeroSlide: ({ mainText, additionalText, image }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_HeroSliderContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, never>> & string;
export declare const S_HeroTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
export declare const S_HeroText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export declare const S_HeroPhoneWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof {
    $direction?: string;
    $justify?: string;
    $align?: string;
    $wrap?: string;
    $gap?: string;
    $columnGap?: string;
    $rowGap?: string;
    $grow?: string;
    $style?: string;
}> & {
    $direction?: string;
    $justify?: string;
    $align?: string;
    $wrap?: string;
    $gap?: string;
    $columnGap?: string;
    $rowGap?: string;
    $grow?: string;
    $style?: string;
}, never>> & string;
export {};
