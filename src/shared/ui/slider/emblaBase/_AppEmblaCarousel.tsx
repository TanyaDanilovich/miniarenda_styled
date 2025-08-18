import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {useAutoplay} from './EmblaCarouselAutoplay'
import {NextButton, PrevButton, usePrevNextButtons} from './EmblaCarouselArrowButtons'
import type {EmblaOptionsType} from 'embla-carousel';
import './embla.css'
import {DotButton, useDotButton} from './EmblaCarouselDotButton';

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel = ({slides, options}: PropType) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({playOnInit: true, delay: 5000})
    ])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const {onAutoplayButtonClick} = useAutoplay(emblaApi)
    const {selectedIndex, scrollSnaps, onDotButtonClick} =
        useDotButton(emblaApi)

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

                <div className = "embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key = {index}
                            onClick = {() => onDotButtonClick(index)}
                            className = {'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default EmblaCarousel
