import { type ImageProps } from '../../shared/types/common.types';
type props = {
    id: string;
    image: ImageProps;
    title: string;
    description: string;
    characteristicList: string[];
};
export declare const EquipmentCard: ({ id, title, description, image, characteristicList, }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_EquipmentCard: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof {
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
export declare const S_EquipmentCardTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
export declare const S_EquipmentCardDescription: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export declare const S_EquipmentCardCharacteristics: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, never>> & string;
export {};
