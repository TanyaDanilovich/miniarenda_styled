import React, {useId} from 'react';

import {useTheme} from 'styled-components';


import FontAwesomeIcon from '../icon/FontAwesomeIcon';
import {IconSize} from '../../types/common.types';


type props = { size: IconSize };
export const Rating = ({size = '1x'}: props) => {
    const theme = useTheme()
    const id = useId()
    return (
        <div>
            {[...Array(5)].map((undefined, index) => <FontAwesomeIcon key = {`${id}-${index}`} icon = {'icon-star'}
                                                                      size = {size}
                                                                      color = {theme.colors.primary}/>)}

        </div>
    );
};


