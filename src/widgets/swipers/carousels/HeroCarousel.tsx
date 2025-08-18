import {heroData} from '../../hero/heroData';
import {HeroSlider} from '../heroSwiper/HeroSlider';
import styled from 'styled-components';
import {AppCarousel, type CarouselProps} from '../../../shared/ui/slider/AppCarousel';
import {BREAKPOINTS} from '../../../shared/constants/BREAKPOINTS';


export const HeroCarousel = (props: CarouselProps) => {
    return (
        <StyledHeroCarousel
            {...props}
            options={{
                duration: 1000,
                ...props.options
            }}
            autoplay={props.autoplay ?? {
                delay: 4000,
                stopOnInteraction: false
            }}
        >
            {heroData.map((slide, index) => (
                <div key={`${props.id}-${index}`}>
                    <HeroSlider {...slide} index={index} />
                </div>
            ))}
        </StyledHeroCarousel>
    )
}

const StyledHeroCarousel = styled(AppCarousel)`
    .embla__slide {
        height: 100%;
    }

    .embla__dots {
        bottom: 30px;
    }

    .embla__button {
        background-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 3px 3px 0 0 ${({ theme }) => theme.colors.dark};

        @media (max-width: ${BREAKPOINTS.tablet}) {
            width: 30px;
            height: 30px;
        }
    }
`