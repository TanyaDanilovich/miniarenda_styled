import { type MachineryData } from '../../../shared/types/common.types';
type props = Omit<MachineryData, 'priceCharacteristics'> & {};
export declare const MachineryCard: ({ id, title, image, characteristics }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_MachineryCard: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
export {};
