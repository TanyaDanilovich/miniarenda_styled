import {type ImageProps} from '../../shared/types/common.types';
import {S_Image} from '../../shared/styled/S_Image';
import type {ImgHTMLAttributes} from 'react';

type props = {
    image: ImageProps,
    sizes?: string
} & ImgHTMLAttributes<HTMLImageElement>;
const ResponsiveImage = ({image, sizes = "100vw", ...rest}: props) => {
    const src480 = image.srcSet?.['480'];
    const src768 = image.srcSet?.['768'];
    const src1200 = image.srcSet?.['1200'];
    const src1920 = image.src;
    // return (<>
    //     {!image.srcSet
    //         ? <S_Image src = {image.src} alt = {image.alt || "мини экскаватор"} itemProp = "image"
    //                    {...rest} />
    //         : <picture>
    //             {image.srcSet['480'] &&
    //                 <source media = "(max-width: 480px)"
    //                         srcSet = {image.srcSet['480']}
    //                         sizes = {sizes}
    //                         type = "image/webp"/>}
    //             {image.srcSet['768'] &&
    //                 <source media = "(max-width: 768px)"
    //                         srcSet = {image.srcSet?.['768']}
    //                         sizes = {sizes}
    //                         type = "image/webp"/>}
    //             {image.srcSet['1200'] &&
    //                 <source media = "(max-width: 1400px)"
    //                         srcSet = {image.srcSet?.['1200']}
    //                         sizes = {sizes}
    //                         type = "image/webp"/>}
    //             <S_Image
    //                 src = {image.src}
    //                 alt = {image.alt || "мини экскаватор"}
    //                 itemProp = "image"
    //                 {...rest}
    //             />
    //         </picture>}
    // </>)

    return (
        <picture>
            {/* desktop ≥1200px: переносим 1920w из img.src сюда */}
            {src1920 && (
                <source media = "(min-width: 1200px)" srcSet = {src1920} sizes = {sizes} type = "image/webp"/>
            )}

            {/* tablet 769–1199px */}
            {src1200 && (
                <source media = "(min-width: 769px)" srcSet = {src1200} sizes = {sizes} type = "image/webp"/>
            )}

            {/* mobile 481–768px */}
            {src768 && (
                <source media = "(min-width: 481px)" srcSet = {src768} sizes = {sizes} type = "image/webp"/>
            )}

            {/* mobile ≤480px */}
            {src480 && (
                <source media = "(max-width: 480px)" srcSet = {src480} sizes = {sizes} type = "image/webp"/>
            )}

            {/* ВАЖНО: маленький fallback в <img>, чтобы Chrome не стянул 1920w спекулятивно */}
            <S_Image
                src = {src480 ?? src768 ?? src1200 ?? src1920}
                alt = {image.alt || 'мини экскаватор'}
                decoding = "async"
                {...rest} // тут окажутся loading / fetchPriority
            />
        </picture>
    )
};

export default ResponsiveImage;

