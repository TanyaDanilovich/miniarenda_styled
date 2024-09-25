import {useEffect, useState} from 'react';
import {debounceFunction} from '../utils/debounceFunction';

export const useDebouncedWindowSize = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [height, setHeight] = useState<number>(window.innerHeight)

    useEffect(() => {
        const handleResize = debounceFunction(() => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }, 500)
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    })
    return [width, height]
}