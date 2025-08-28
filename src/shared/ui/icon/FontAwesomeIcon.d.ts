import { type IconId, type IconSize } from '../../types/common.types';
import * as React from 'react';
type IconProps = React.SVGAttributes<SVGSVGElement> & {
    icon: IconId;
    size?: IconSize;
    color?: string;
};
declare const FontAwesomeIcon: React.MemoExoticComponent<({ icon, size, color, ...svgProps }: IconProps) => import("react/jsx-runtime").JSX.Element>;
export default FontAwesomeIcon;
