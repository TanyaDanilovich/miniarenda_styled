import type {EmblaCarouselType, EmblaOptionsType} from 'embla-carousel'
import React, {useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styled from 'styled-components'
import {usePrevNextButtons} from './hooks/usePrevNextButtons';
import {NextArrowButton, PrevArrowButton} from './CarouselArrowButtons';
import {useDotButton} from './hooks/useDotButtons';
import {DotButton} from './CarouselDotButtons';


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


    return (
        <S_AppCarouselWrapper id = {id}>
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
                        className = {'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                    />
                ))}
            </S_AppCarouselDotsContainer>}


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
export const S_AppCarouselArrowButtonsContainer = styled.div`
    position:absolute;
    top:50%;
    left:0;
    right:0;
    display:flex;
    justify-content:space-between;
    transform:translateY(-50%);
    z-index:1;
`


export const S_AppCarouselDotsContainer = styled.div`
    position:absolute;
    bottom:20px;
    left:0;
    right:0;
    display:flex;
    justify-content:center;
    gap:8px;
    z-index:1;
`