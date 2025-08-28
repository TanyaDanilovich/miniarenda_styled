import { type MachineryData } from '../../shared/types/common.types';
type props = Pick<MachineryData, 'id' | 'priceCharacteristics' | 'tableTitle'> & {};
export declare const MachinePriceTable: ({ tableTitle, priceCharacteristics, id }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_MachinePriceTable: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, never>, never>> & string;
export {};
