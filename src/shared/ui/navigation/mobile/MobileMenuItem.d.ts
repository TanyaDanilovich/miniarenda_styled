import { type MenuItemType } from '../../../types/common.types';
type props = {
    id: string;
    dropDownId: string | null;
    menuItem: MenuItemType;
    setNavigationClose: () => void;
    setDropDown: (id: string) => void;
    collapsedDropdown: () => void;
};
export declare const MobileMenuItem: ({ menuItem, setNavigationClose, dropDownId }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_MobileMenuItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {
    $isThereDropDown?: boolean;
    $isDropdown?: boolean;
}>> & string;
export declare const S_MobileDropdownNavLink: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
