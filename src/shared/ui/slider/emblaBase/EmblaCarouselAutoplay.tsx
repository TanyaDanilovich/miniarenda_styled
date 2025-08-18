import {useCallback, useEffect, useState} from 'react'
import type {EmblaCarouselType} from 'embla-carousel'

/**
 * Тип возвращаемого значения хука.
 * Содержит:
 * - autoplayIsPlaying: статус автопрокрутки (играет/остановлена)
 * - toggleAutoplay: функция переключения автопрокрутки
 * - onAutoplayButtonClick: обработчик клика с кастомным callback
 */
type UseAutoplayType = {
    autoplayIsPlaying: boolean
    toggleAutoplay: () => void
    onAutoplayButtonClick: (callback: () => void) => void
}

/**
 * Хук для управления автопрокруткой Embla Carousel
 * @param emblaApi - экземпляр Embla Carousel
 * @returns Объект с состоянием и методами управления автопрокруткой
 */
export const useAutoplay = (
    emblaApi: EmblaCarouselType | undefined
): UseAutoplayType => {
    // Состояние активности автопрокрутки
    const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(false)

    /**
     * Обработчик клика по кнопке с кастомным действием.
     * В зависимости от настроек autoplay:
     * - Либо сбрасывает таймер автопрокрутки (stopOnInteraction: false)
     * - Либо полностью останавливает автопрокрутку (stopOnInteraction: true)
     * Затем выполняет переданный callback
     */
    const onAutoplayButtonClick = useCallback(
        (callback: () => void) => {
            // Получаем плагин autoplay
            const autoplay = emblaApi?.plugins()?.autoplay
            if (!autoplay) return

            // Выбираем действие: reset или stop
            // const resetOrStop = autoplay.options.stopOnInteraction === false
            //     ? autoplay.reset  // Сброс таймера
            //     : autoplay.stop   // Полная остановка
//            resetOrStop()  // Выполняем выбранное действие

            // Всегда сбрасываем таймер, независимо от stopOnInteraction
            autoplay.reset();  // Сброс таймера
            autoplay.play();   // Возобновление автопрокрутки


            callback()     // Выполняем переданный callback
        },
        [emblaApi]  // Зависимость от emblaApi
    )

    /**
     * Переключает состояние автопрокрутки
     * (play/stop в зависимости от текущего состояния)
     */
    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        // Выбираем действие: play или stop
        const playOrStop = autoplay.isPlaying()
            ? autoplay.stop
            : autoplay.play

        playOrStop()  // Выполняем действие
    }, [emblaApi])

    // Эффект для подписки на события автопрокрутки
    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        // Устанавливаем начальное состояние
        setAutoplayIsPlaying(autoplay.isPlaying())

        // Подписываемся на события:
        emblaApi
            .on('autoplay:play', () => setAutoplayIsPlaying(true))    // При старте
            .on('autoplay:stop', () => setAutoplayIsPlaying(false))   // При остановке
            .on('reInit', () => setAutoplayIsPlaying(autoplay.isPlaying()))  // При реините

        // Отписка при размонтировании
        return () => {
            emblaApi
                .off('autoplay:play', () => setAutoplayIsPlaying(true))
                .off('autoplay:stop', () => setAutoplayIsPlaying(false))
        }
    }, [emblaApi])

    // Возвращаем состояние и методы управления
    return {
        autoplayIsPlaying,  // Текущее состояние
        toggleAutoplay,     // Переключатель
        onAutoplayButtonClick  // Обработчик клика
    }
}