import {memo, useMemo} from 'react';
import styled from 'styled-components';
import spritePath from '../../../assets/svg/landing-svg-sprite.svg';
import {type IconId, type  IconSize} from '../../types/common.types';


type IconProps = React.SVGAttributes<SVGSVGElement> & {
    icon: IconId;
    size?: IconSize;
    color?: string;
};


const S_Svg = styled.svg<{ $size: string, $color?: string }>`
    width:${({$size}) => $size};
    height:${({$size}) => $size};
    fill:${({$color, theme}) => $color || theme.colors.primary};
    vertical-align:middle;
`;

const FontAwesomeIcon =
    memo(({
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

        return <S_Svg
            $size = {cssSize}
            $color = {color}
            aria-hidden = "true"
            focusable = "false"
            {...svgProps}
        >
            <use href = {`${spritePath}#${icon}`}/>
        </S_Svg>
    });

//FontAwesomeIcon.displayName = 'Icon';

export default FontAwesomeIcon;
