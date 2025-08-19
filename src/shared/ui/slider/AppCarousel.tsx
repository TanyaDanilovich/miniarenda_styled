import type {EmblaCarouselType, EmblaOptionsType} from 'embla-carousel'
import React, {useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styled from 'styled-components'

import {usePrevNextButtons} from './hooks/usePrevNextButtons';
import {NextArrowButton, PrevArrowButton, S_AppCarouselArrowButtonsContainer} from './CarouselArrowButtons';
import {useDotButton} from './hooks/useDotButtons';
import {DotButton, S_AppCarouselDotsContainer} from './CarouselDotButtons';




export type CarouselAutoplayOptions = {
    delay: number
    stopOnInteraction?: boolean
}

export type CarouselProps = {
    id: string
    options?: EmblaOptionsType
    autoplay?: CarouselAutoplayOptions
    showDots?: boolean
    showArrows?: boolean
    children: React.ReactNode
}


export const AppCarousel = ({
                                id,
                                options = {},
                               // autoplay,
                                showDots = true,
                                showArrows = true,
                                children
                            }: CarouselProps) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    )

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)




    return (
        <S_AppCarouselWrapper id = {id}>
            <S_AppCarouselViewport ref = {emblaRef}>
                <S_AppCarouselContainer>
                    {children}
                </S_AppCarouselContainer>
            </S_AppCarouselViewport>



            <S_AppCarouselArrowButtonsContainer>


                <div className = "embla__buttons">
                    <PrevArrowButton onClick = {onPrevButtonClick} disabled = {prevBtnDisabled}/>
                    <NextArrowButton onClick = {onNextButtonClick} disabled = {nextBtnDisabled}/>
                </div>

                <S_AppCarouselDotsContainer>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key = {index}
                            onClick = {() => onDotButtonClick(index)}
                            className = {'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </S_AppCarouselDotsContainer>
            </S_AppCarouselArrowButtonsContainer>


        </S_AppCarouselWrapper>
    )
}

export const S_AppCarouselWrapper = styled.div`
    position:relative;
    width:100%;
    height:100%;
`

export const S_AppCarouselViewport = styled.div`
    overflow:hidden;
    width:100%;
    height:100%;
`

export const S_AppCarouselContainer = styled.div`
    display:flex;
    height:100%;
    user-select:none;
    backface-visibility:hidden; // Добавлено
    touch-action:pan-y; // Добавлено
`


