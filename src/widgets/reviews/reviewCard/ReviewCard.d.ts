type props = {
    userName: string;
    reviewContent: string;
    isCollapsed: boolean | null;
    setCollapsed: () => void;
    setUnCollapsed: () => void;
};
export declare const ReviewCard: ({ userName, reviewContent, isCollapsed, setUnCollapsed, setCollapsed }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_RatingValue: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
