import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

export const useAutoplay = (emblaApi: EmblaCarouselType | undefined) => {
    const [autoplay, setAutoplay] = useState<ReturnType<typeof Autoplay> | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    // Инициализация автопрокрутки
    useEffect(() => {
        if (!emblaApi) return

        const plugin = Autoplay({
            delay: 4000,
            stopOnInteraction: false
        })
        emblaApi.reInit({}, [plugin])
        setAutoplay(plugin)

        return () => {
            plugin.destroy()
        }
    }, [emblaApi])

    // Обработчик ручной прокрутки
    const handleManualScroll = useCallback(() => {
        if (!autoplay || !emblaApi) return

        // Сбрасываем таймер и начинаем новую паузу
        autoplay.reset()
        setIsPlaying(true)
    }, [autoplay, emblaApi])

    // Подписка на события
    useEffect(() => {
        if (!emblaApi || !autoplay) return

        const onPlay = () => setIsPlaying(true)
        const onStop = () => setIsPlaying(false)

        emblaApi.on('autoplay:play', onPlay)
        emblaApi.on('autoplay:stop', onStop)

        return () => {
            emblaApi.off('autoplay:play', onPlay)
            emblaApi.off('autoplay:stop', onStop)
        }
    }, [emblaApi, autoplay])

    return {
        isPlaying,
        handleManualScroll
    }
}

