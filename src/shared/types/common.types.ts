import {ReactNode} from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };

export type ImageProps = { src: string, alt: string }