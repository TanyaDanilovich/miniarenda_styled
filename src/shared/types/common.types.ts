import {ReactNode} from 'react';

export type ButtonsType = "read more" | "colored";

export type PropsWithChildren<P> = P & { children?: ReactNode };