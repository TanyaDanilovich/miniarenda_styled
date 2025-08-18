import type {EmblaOptionsType} from 'embla-carousel'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styled from 'styled-components'
import {CarouselArrows} from './CarouselArrows'
import {CarouselDots} from './CarouselDots'


export type CarouselAutoplayOptions = {
    delay: number
    stopOnInteraction?: boolean
}

export type CarouselProps = {
    id: string
    className?: string
    options?: EmblaOptionsType
    autoplay?: CarouselAutoplayOptions
    showDots?: boolean
    showArrows?: boolean
    children: React.ReactNode
}


export const AppCarousel = ({
                                id,
                                className,
                                options = {},
                                autoplay,
                                showDots = true,
                                showArrows = true,
                                children
                            }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {loop: true, ...options},
        autoplay ? [Autoplay({
            delay: autoplay.delay,
            stopOnInteraction: autoplay.stopOnInteraction ?? false
        })] : []
    )

    return (
        <S_AppCarouselWrapper id = {id} className = {className}>
            <S_AppCarouselViewport ref = {emblaRef}>
                <S_AppCarouselContainer>
                    {children}
                </S_AppCarouselContainer>
            </S_AppCarouselViewport>

            {showArrows && emblaApi && (
                <CarouselArrows emblaApi = {emblaApi}/>
            )}

            {showDots && emblaApi && (
                <CarouselDots emblaApi = {emblaApi}/>
            )}
        </S_AppCarouselWrapper>
    )
}

const S_AppCarouselWrapper = styled.div`
    position:relative;
    width:100%;
    height:100%;
`

const S_AppCarouselViewport = styled.div`
    overflow:hidden;
    width:100%;
    height:100%;
`

const S_AppCarouselContainer = styled.div`
    display:flex;
    height:100%;
    user-select:none;
`