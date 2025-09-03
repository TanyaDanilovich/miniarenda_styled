import { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { type IconSize } from '../../types/common.types';

type Props = {
    size?: IconSize;
    value?: number;
    max?: number;
    gapPx?: number;
    inactiveColor?: string;
    activeColor?: string;
};

const STAR_SVG = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
\t viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">
<path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
\tc2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
\tc0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
\tc-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
\tc-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
\tC22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>`
);
const MASK_URL = `url("data:image/svg+xml,${STAR_SVG}")`;

export const Rating = ({
                           size = '1x',
                           value = 5,
                           max = 5,
                           gapPx = 6,
                           inactiveColor,
                           activeColor,
                       }: Props) => {
    const theme = useTheme();

    const cssSize = useMemo(() => {
        const m = String(size).match(/^(\d+)x$/);
        return m ? `${m[1]}em` : String(size);
    }, [size]);

    const v = Math.max(0, Math.min(value, max));
    const label = `Рейтинг ${v} из ${max}`;

    return (
        <Stars
            aria-label={label}
            //role="img"
            $size={cssSize}
            $value={v / max}
            $max={max}
            $gap={gapPx}
            $active={activeColor || theme.colors.primary}
            $inactive={inactiveColor || 'rgba(0,0,0,.18)'}
        />
    );
};

const Stars = styled.span<{
    $size: string;
    $value: number; // 0..1
    $max: number;
    $gap: number;
    $active: string;
    $inactive: string;
}>`
    --size:${({$size}) => $size};
    --value:${({$value}) => $value};
    --stars:${({$max}) => $max};
    --gap:${({$gap}) => $gap}px;
    --active:${({$active}) => $active};
    --inactive:${({$inactive}) => $inactive};
    display:inline-block;
    height:var(--size);
    width:calc(var(--stars) * var(--size) + (var(--stars) - 1) * var(--gap) + var(--gap));
    background:linear-gradient(
            90deg,
            var(--active) calc(var(--value) * 100%),
            var(--inactive) 0
    ) no-repeat;
    -webkit-mask-image:${MASK_URL};
    mask-image:${MASK_URL};
    -webkit-mask-size:calc(var(--size) + var(--gap)) var(--size);
    mask-size:calc(var(--size) + var(--gap)) var(--size);
    -webkit-mask-repeat:repeat-x;
    mask-repeat:repeat-x;
    vertical-align:middle;
`;
