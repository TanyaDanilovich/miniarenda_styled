import { type SchemaOrgData } from '../../shared/types/common.types';
type Props = {
    text: string;
    isOpen: boolean;
    schemaOrg?: SchemaOrgData;
    textSchemaOrg?: SchemaOrgData;
};
export declare const QuestionDropdownText: ({ text, isOpen, textSchemaOrg }: Props) => import("react/jsx-runtime").JSX.Element;
export declare const S_QuestionDropdownText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$height" | "$maxHeight" | "$padding"> & {
    $maxHeight: string;
    $height: string;
    $padding?: string;
}, never>> & string;
export {};
