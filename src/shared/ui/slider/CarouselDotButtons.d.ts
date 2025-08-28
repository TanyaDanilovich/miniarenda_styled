import { type ComponentPropsWithRef } from 'react';
type PropType = {
    isActive: boolean;
} & ComponentPropsWithRef<'button'>;
export declare const DotButton: (props: PropType) => import("react/jsx-runtime").JSX.Element;
export {};
