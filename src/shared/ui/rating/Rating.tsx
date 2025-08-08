import {useId} from 'react';
import FontAwesomeIcon from '../icon/FontAwesomeIcon';
import {type IconSize} from '../../types/common.types';
import { useTheme } from 'styled-components'


type props = { size: IconSize };


export const Rating = ({size = '1x'}: props) => {
    const theme = useTheme()
    const id = useId()
    return (
        <div>
            {[...Array(5)].map((_, index) => <FontAwesomeIcon key = {`${id}-${index}`} icon = {'icon-star'}
                                                                      size = {size}
                                                                      color = {theme.colors.primary}/>)}

        </div>
    );
};


