import {type ImageProps} from '../../shared/types/common.types';
import {S_Image} from '../../shared/styled/S_Image';
import type {ImgHTMLAttributes} from 'react';

type props = {
    image: ImageProps,
    sizes?: string
} & ImgHTMLAttributes<HTMLImageElement>;
const ResponsiveImage = ({image, sizes = "100vw", ...rest}: props) => {
    const src480 = image.srcSet?.['480'];
    const srcSetSize480 = image.srcSetSize?.['480'];
    const src768 = image.srcSet?.['768'];
    const srcSetSize768 = image.srcSetSize?.['768'];
    const src1200 = image.srcSet?.['1200'];
    const srcSetSize1200 = image.srcSetSize?.['1200'];
    const src1920 = image.src;
    const srcSetSize1920 = image.srcSize;

    return (
        <picture>

            {src1920 && <source media = "(min-width: 1200px)" srcSet = {src1920} sizes = {sizes} type = "image/webp"/>}
            {src1200 && <source media = "(min-width: 769px)" srcSet = {src1200} sizes = {sizes} type = "image/webp"/>}
            {src768 && <source media = "(min-width: 481px)" srcSet = {src768} sizes = {sizes} type = "image/webp"/>}
            {src480 && <source media = "(max-width: 480px)" srcSet = {src480} sizes = {sizes} type = "image/webp"/>}

            <S_Image
                src = {src1920}
                alt = {image.alt || 'мини экскаватор'}
                decoding = "async"
                width = {'480'}
                height = {'561'}
                {...rest}
            />
        </picture>
    )
};

export default ResponsiveImage;

