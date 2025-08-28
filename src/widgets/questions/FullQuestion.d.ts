type props = {
    id: string;
    question: string;
    answer: string;
    toggleQuestionCallback: () => void;
    isOpen: boolean;
};
export declare const FullQuestion: ({ question, answer, toggleQuestionCallback, isOpen }: props) => import("react/jsx-runtime").JSX.Element;
export declare const S_FullQuestion: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isOpen: boolean;
}>> & string;
export {};
