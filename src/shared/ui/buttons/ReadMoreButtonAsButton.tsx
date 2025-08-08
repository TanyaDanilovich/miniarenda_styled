import styled, {useTheme} from 'styled-components';
import {S_ReadMoreButton} from './S_ReadMoreButton';
import FontAwesomeIcon from '../icon/FontAwesomeIcon';


type props = { url?: string, title?: string, onClick?: () => void };
export const ReadMoreButtonAsButton = ({
                                           title = "Подробнее", onClick = () => {
    }
                                       }: props) => {
    const theme = useTheme()


    return (
        <S_ReadMoreButton as = "button" onClick = {onClick}>
            <StyledCircle>
                <FontAwesomeIcon icon = {'icon-plus-circle'} size = {'1x'} color = {theme.colors.primary}/>
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

