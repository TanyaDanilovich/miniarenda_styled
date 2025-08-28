import type { EmblaCarouselType } from 'embla-carousel';
type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};
export declare const usePrevNextButtons: (emblaApi: EmblaCarouselType | undefined, onButtonClick?: (emblaApi: EmblaCarouselType) => void) => UsePrevNextButtonsType;
export {};
