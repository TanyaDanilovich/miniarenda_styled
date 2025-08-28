import { type IconId } from '../../types/common.types';
type props = {
    url?: string;
    title?: string;
    icon?: IconId;
};
export declare const OrderedButton: ({ url, title, icon }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_OrderedButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>, never>> & string;
export {};
