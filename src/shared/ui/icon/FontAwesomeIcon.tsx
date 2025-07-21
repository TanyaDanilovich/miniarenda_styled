// src/components/Icon.tsx
import React, {useMemo} from 'react';
import styled from 'styled-components';
import spritePath from '../../../assets/svg/landing-svg-sprite.svg';
import {IconId, IconSize} from '../../types/common.types';

// Пропсы для компонента
type IconProps = React.SVGAttributes<SVGSVGElement> & {
    icon: IconId;
    size?: IconSize;
    color?: string;
};

// Styled‑компонент для SVG
const StyledSvg = styled.svg<{ $size: string, $color?: string }>`
  width: ${({$size}) => $size};
  height: ${({$size}) => $size};
  fill: ${({$color, theme}) => $color || theme.colors.primary};
  vertical-align: middle;
`;

const FontAwesomeIcon =
    React.memo(({
                    icon,
                    size = '1x',
                    color,
                    ...svgProps
                }: IconProps) => {

        const cssSize = useMemo(() => {
            const m = size.match(/^(\d+)x$/);
            if (m) return `${m[1]}em`;
            return size;
        }, [size]);

        return <StyledSvg
            $size = {cssSize}
            $color = {color}
            aria-hidden = "true"
            focusable = "false"
            {...svgProps}
        >
            <use href = {`${spritePath}#${icon}`}/>
        </StyledSvg>
    });

FontAwesomeIcon.displayName = 'Icon';

export default FontAwesomeIcon;
