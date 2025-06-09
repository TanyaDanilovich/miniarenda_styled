import {ImageProps} from '../../shared/types/common.types';
import {S_Image} from '../../shared/styled/S_Image';

type props = {image:ImageProps};
const ResponsiveImage = ({image}: props) => {
    return (
        <S_Image
            src={image.src}
            srcSet={`${image.srcSet?.['480']} 480w, ${image.srcSet?.['768']} 768w, ${image.srcSet?.['1280']} 1280w, 1920w`}

            sizes="
        (max-width: 600px) 480px,
        (max-width: 960px) 768px,
        (max-width: 1400px) 1280px,
        1920px
      "
            alt={image.alt}
            loading="lazy"

        />
    );
};

export default ResponsiveImage;

