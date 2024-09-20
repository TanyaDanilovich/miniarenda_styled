import {ReactNode} from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };

export type ImageProps = { src: string, alt: string }

export type MenuItemType = { title: string, url: string, subMenuItems?: MenuItemType[] }

export type mainDataItemType = {id:string, url: string, title: string }

