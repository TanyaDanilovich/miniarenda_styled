export const debounceFunction = (cb: () => void, delay: number) => {
    let timer: ReturnType<typeof setTimeout>
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => cb(), delay);
    };
};