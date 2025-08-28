import type { EmblaCarouselType } from 'embla-carousel';
type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};
export declare const useDotButton: (emblaApi: EmblaCarouselType | undefined, onButtonClick?: (emblaApi: EmblaCarouselType) => void) => UseDotButtonType;
export {};
