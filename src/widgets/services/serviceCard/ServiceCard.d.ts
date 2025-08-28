import { type SubcategoryItem } from '../../../shared/types/common.types';
export type ServiceCardData = {
    toggleDescriptionCallback: () => void;
    isOpen: boolean;
};
type props = ServiceCardData & {
    data: SubcategoryItem;
};
export declare const ServiceCard: ({ data, toggleDescriptionCallback, isOpen }: props) => import("react/jsx-runtime").JSX.Element;
export declare const StyledServiceCard: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {
    $paddingInline: string;
}>> & string;
export declare const ServiceCardTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
    $paddingInline: string;
}>> & string;
export {};
