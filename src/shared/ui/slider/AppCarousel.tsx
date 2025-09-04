import type {EmblaCarouselType, EmblaEventType, EmblaOptionsType} from 'embla-carousel'
import React, {useCallback, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {usePrevNextButtons} from './hooks/usePrevNextButtons';
import {NextArrowButton, PrevArrowButton} from './CarouselArrowButtons';
import {useDotButton} from './hooks/useDotButtons';
import {DotButton} from './CarouselDotButtons';
import {
    S_AppCarouselArrowButtonsContainer,
    S_AppCarouselContainer, S_AppCarouselDotsContainer,
    S_AppCarouselViewport
} from './appCarouselStyle';


export type CarouselAutoplayOptions = {
    delay: number
    stopOnInteraction?: boolean
}

export type CarouselProps = {
    options?: EmblaOptionsType
    autoplay?: CarouselAutoplayOptions
    showDots?: boolean
    showArrows?: boolean
    children: React.ReactNode
    callback?: () => void // Колбек для событий
    eventType?: EmblaEventType,
}


export const AppCarousel = ({

                                     options = {},
                                     autoplay,
                                     showDots = true,
                                     showArrows = true,
                                     callback = () => {
                                     },
                                     eventType = 'select',
                                     children
                                 }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({...autoplay})])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(
        emblaApi,
        onNavButtonClick
    )

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    useEffect(() => {
        if (!emblaApi || !callback) return
        const handleEvent = () => callback()
        emblaApi.on(eventType, handleEvent)
        //console.log(eventType)
        // return () => emblaApi.off(eventType, handleEvent)

    }, [emblaApi, callback, eventType])

    return (
        <>

            <S_AppCarouselViewport ref = {emblaRef}>
                <S_AppCarouselContainer>
                    {children}
                </S_AppCarouselContainer>
            </S_AppCarouselViewport>


            {showArrows && <S_AppCarouselArrowButtonsContainer>
                <PrevArrowButton onClick = {onPrevButtonClick} disabled = {prevBtnDisabled}/>
                <NextArrowButton onClick = {onNextButtonClick} disabled = {nextBtnDisabled}/>
            </S_AppCarouselArrowButtonsContainer>}

            {showDots && <S_AppCarouselDotsContainer>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key = {index}
                        onClick = {() => onDotButtonClick(index)}
                        isActive = {index === selectedIndex}
                    />
                ))}
            </S_AppCarouselDotsContainer>}


        </>
    )
}
