import styled, {useTheme} from 'styled-components';
import {outline, plainTransition} from '../../../app/styles/mixins';
import {faLinkSlash, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type props = {
    firstLink: string,
    secondLink: string
};
export const HoverIcons = ({firstLink, secondLink}: props) => {
    const theme = useTheme()
    return (
        <StyledHoverIcons>
            <a href = {firstLink}>
                <FontAwesomeIcon icon = {faLinkSlash} size = {'1x'} color = {theme.colors.primary}/>
            </a>
            <a href = {secondLink}><FontAwesomeIcon icon = {faSearch} size = {'1x'} color = {theme.colors.primary}/>
            </a>
        </StyledHoverIcons>);
};


export const StyledHoverIcons = styled.div<{}>`
  position: absolute;
  width: 100%;
  line-height: 100%;
  z-index: 100;
  opacity: 1;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;

    //${outline(4)};


  a {
    ${({theme}) => plainTransition(theme.duration.middle)};
    position: relative;
    display: inline-block;
    width: 2.75rem;
    line-height: 2.75rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    opacity: 1;
  }

  a:first-child {

  }

  a:last-child {
    margin-left: 1rem;
  }

  &:hover {


    a:first-child {
    }

    a:last-child {
    }
  }
`;