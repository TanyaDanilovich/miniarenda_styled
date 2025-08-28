export declare const border: (width?: number, color?: string) => string;
export declare const outline: (width?: number, color?: string) => string;
export declare const plainTransition: (duration?: string) => import("styled-components").RuleSet<object>;
type FontProps = {
    size?: string;
    weight?: number;
};
export declare const OpenSansFont: ({ size, weight }: FontProps) => import("styled-components").RuleSet<object>;
export declare const RobotoFont: ({ size, weight }: FontProps) => import("styled-components").RuleSet<object>;
export declare const fullAbsoluteElement: (opacity?: number) => import("styled-components").RuleSet<object>;
export declare const ImageHover: import("styled-components").RuleSet<object>;
export declare const sectionMargin: import("styled-components").RuleSet<object>;
export declare const sectionPadding: import("styled-components").RuleSet<object>;
export declare const outlinedNestedDiv: import("styled-components").RuleSet<object>;
export declare const outlinedNestedEverything: import("styled-components").RuleSet<object>;
export declare const transitionHoverIcon: import("styled-components").RuleSet<object>;
export {};
