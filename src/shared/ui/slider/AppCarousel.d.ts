import type { EmblaEventType, EmblaOptionsType } from 'embla-carousel';
import type { ReactNode } from 'react';
export type CarouselAutoplayOptions = {
    delay: number;
    stopOnInteraction?: boolean;
};
export type CarouselProps = {
    id: string;
    options?: EmblaOptionsType;
    autoplay?: CarouselAutoplayOptions;
    showDots?: boolean;
    showArrows?: boolean;
    children: ReactNode;
    className?: string;
    callback?: () => void;
    eventType?: EmblaEventType;
};
export declare const AppCarousel: ({ id, options, showDots, showArrows, className, callback, eventType, children }: CarouselProps) => import("react/jsx-runtime").JSX.Element;
