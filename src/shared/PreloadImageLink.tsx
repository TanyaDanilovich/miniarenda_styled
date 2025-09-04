import {Helmet} from 'react-helmet-async';
import type { SrcSetProps} from './types/common.types';
type props= {
    srcSet: SrcSetProps|undefined,
    href: string
}
export const PreloadImageLink = ({srcSet,href}:props) => {
    return <Helmet>

        {srcSet?.['480'] && (
            <link
                rel = "preload"
                as = "image"
                href = {srcSet['480']}
                media = "(max-width: 480px)"
                fetchPriority = "high"
                type = "image/webp"
            />
        )}


        {srcSet?.['768'] && (
            <link
                rel = "preload"
                as = "image"
                href = {srcSet['768']}
                media = "(min-width: 481px) and (max-width: 768px)"
                fetchPriority = "high"
                type = "image/webp"
            />
        )}


        {srcSet?.['1200'] && (
            <link
                rel = "preload"
                as = "image"
                href = {srcSet['1200']}
                media = "(min-width: 769px) and (max-width: 1199px)"
                fetchPriority = "high"
                type = "image/webp"
            />
        )}


        <link
            rel = "preload"
            as = "image"
            href = {href}
            media = "(min-width: 1200px)"
            fetchPriority = "high"
            type = "image/webp"
        />
    </Helmet>;
}