import {useEffect, useState} from 'react';
import {debounceFunction} from '../utils/debounceFunction';

export const useDebouncedWindowSize = () => {

    const getSize = (): { width: number, height: number } => ({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    const [size, setSize] = useState<{ width: number, height: number }>(getSize);

    useEffect(() => {
        const onResize = debounceFunction(() => setSize(getSize()), 500);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [])

    return size
}