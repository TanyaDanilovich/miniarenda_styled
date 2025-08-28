type props = {
    text: string;
    isCollapsed: boolean | null;
    setCollapsed: () => void;
    setUnCollapsed: () => void;
};
export declare const ReviewContent: ({ text, isCollapsed, setUnCollapsed, setCollapsed }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_reviewContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isCollapsed: boolean | null;
}>> & string;
export {};
