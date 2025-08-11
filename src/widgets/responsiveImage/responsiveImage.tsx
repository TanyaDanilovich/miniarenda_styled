import {type ImageProps} from '../../shared/types/common.types';
import {S_Image} from '../../shared/styled/S_Image';

type props = { image: ImageProps };
const ResponsiveImage = ({image}: props) => {

    // return (<>
    //         {!image.srcSet
    //             ? <S_Image src = {image.src} alt = {image.alt || "мини экскаватор"} itemProp="image"/>
    //             : <picture>
    //                 {image.srcSet['480'] && <source media = "(max-width: 480px)" srcSet = {image.srcSet['480']}/>}
    //                 {image.srcSet['768'] && <source media = "(max-width: 768px)" srcSet = {image.srcSet?.['768']}/>}
    //                 {image.srcSet['1200'] &&
    //                     <source media = "(max-width: 1400px)" srcSet = {image.srcSet?.['1200']}/>}
    //                 <S_Image
    //                     src = {image.src}
    //                     // srcSet = {`${image.srcSet?.['480']} 480w, ${image.srcSet?.['768']} 768w, ${image.srcSet?.['1200']} 1200w, ${image.src} 1920w`}
    //                     //
    //                     // sizes = "(max-width: 480px) 480px, (max-width: 960px) 768px, (max-width: 1400px) 1200px, 1920px"
    //                     alt = {image.alt || "мини экскаватор"}
    //                     // loading="lazy"
    //                     itemProp="image"
    //                 />
    //             </picture>}
    //     </>


    return <S_Image src = {image.src} alt = {image.alt || "мини экскаватор"} itemProp="image"/>
};

export default ResponsiveImage;

