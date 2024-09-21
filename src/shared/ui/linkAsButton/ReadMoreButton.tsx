import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import styled, {useTheme} from 'styled-components';
import {S_ReadMoreButton} from './S_ReadMoreButton';


type props = { url?: string };
export const ReadMoreButton = ({url}: props) => {
    const theme = useTheme()


    return (
        <S_ReadMoreButton href = {url}>
            <StyledCircle>
                <FontAwesomeIcon icon = {faPlusCircle} size = {'1x'} color = {theme.colors.primary}/>
            </StyledCircle>
            <span>&nbsp;Подробнее</span>
        </S_ReadMoreButton>);
};


export const StyledCircle = styled.span<{}>`
  display: inline-block;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 50%;
  line-height: 1;
  padding: 4px;
`

