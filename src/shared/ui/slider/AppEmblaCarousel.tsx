import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {useAutoplay} from './EmblaCarouselAutoplay'
import {NextButton, PrevButton, usePrevNextButtons} from './EmblaCarouselArrowButtons'
import type {EmblaOptionsType} from 'embla-carousel';
import './embla.css'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const {slides, options} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({playOnInit: true, delay: 3000})
    ])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const {onAutoplayButtonClick} = useAutoplay(emblaApi)

    return (
        <div className = "embla">
            <div className = "embla__viewport" ref = {emblaRef}>
                <div className = "embla__container">
                    {slides.map((index) => (
                        <div className = "embla__slide" key = {index}>
                            <div className = "embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className = "embla__controls">
                <div className = "embla__buttons">
                    <PrevButton
                        onClick = {() => onAutoplayButtonClick(onPrevButtonClick)}
                        disabled = {prevBtnDisabled}/>
                    <NextButton
                        onClick = {() => onAutoplayButtonClick(onNextButtonClick)}
                        disabled = {nextBtnDisabled}/>
                </div>

            </div>
        </div>
    )
}

export default EmblaCarousel
