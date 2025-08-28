import { type MenuItemType } from '../../../types/common.types';
type props = {
    menuItem: MenuItemType;
    setClose?: () => void;
};
export declare const DesktopMenuItem: ({ menuItem, setClose }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_DesktopMenuItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, never>> & string;
export {};
