import type { SchemaOrgData } from '../../../shared/types/common.types.ts';
type Props = {
    id: string;
    descriptionUser: string[];
    descriptionGoogle?: string;
    isOpen: boolean;
    schemaOrg?: SchemaOrgData;
    textSchemaOrg?: SchemaOrgData;
};
export declare const ServiceCardDropdownText: ({ id, descriptionUser, descriptionGoogle, isOpen, textSchemaOrg }: Props) => import("react/jsx-runtime").JSX.Element;
export declare const S_ServiceCardDropdownText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$height" | "$maxHeight" | "$padding"> & {
    $maxHeight: string;
    $height: string;
    $padding?: string;
}, never>> & string;
export declare const S_DropdownTextList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {
    $maxHeight: string;
    $height: string;
    $padding?: string;
}>> & string;
export {};
