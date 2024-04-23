import {StyledLinkAsButton} from './StyledButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import styled, {useTheme} from 'styled-components';
import {ButtonsType} from '../../types/common.types';


type props = {
    type: ButtonsType
};
export const Button = ({type}: props) => {
    const theme = useTheme()
    switch (type) {
        case "read more": {
            return (
                <StyledLinkAsButton $type = {"read more"}>
                    <StyledCircle>
                        <FontAwesomeIcon icon = {faPlusCircle} size = {'1x'} color = {theme.colors.primary}/>
                    </StyledCircle>
                    <span>&nbsp;Подробнее</span>
                </StyledLinkAsButton>);
        }
        case "colored": {
            return (
                <StyledLinkAsButton $type = {"colored"}>
                    <span>Подробнее</span>
                </StyledLinkAsButton>);
        }

    }

};


export const StyledCircle = styled.span<{}>`
  display: inline-block;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 50%;
  line-height: 1;
  padding: 4px;
`

