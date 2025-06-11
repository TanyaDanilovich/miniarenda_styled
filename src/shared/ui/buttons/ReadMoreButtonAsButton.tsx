import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import styled, {useTheme} from 'styled-components';
import {S_ReadMoreButton} from './S_ReadMoreButton';
import {S_ReadMoreButtonAsButton} from './S_ReadMoreButtonAsButton';


type props = { url?: string, title?: string, onClick?: () => void };
export const ReadMoreButtonAsButton = ({title = "Подробнее",onClick=()=>{}}: props) => {
    const theme = useTheme()


    return (
        <S_ReadMoreButton as="button" onClick={onClick}>
            <StyledCircle>
                <FontAwesomeIcon icon = {faPlusCircle} size = {'1x'} color = {theme.colors.primary}/>
            </StyledCircle>
            <span>&nbsp;{title}</span>
        </S_ReadMoreButton>);
};


export const StyledCircle = styled.span<{}>`
  display: inline-block;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 50%;
  line-height: 1;
  padding: 4px;
`

