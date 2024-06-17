import styled, {useTheme} from 'styled-components';
import {outline, plainTransition} from '../../../app/styles/mixins';
import {faLinkSlash, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {S_ImageContainer} from '../../styled/S_ImageContainer';

type props = {
    firstLink: string,
    secondLink: string
};
export const HoverIcons = ({firstLink, secondLink}: props) => {
    const theme = useTheme()
    return (
        <S_HoverIcons>
            <a href = {firstLink}>
                <FontAwesomeIcon icon = {faLinkSlash} size = {'1x'} color = {theme.colors.primary}/>
            </a>
            <a href = {secondLink}>
                <FontAwesomeIcon icon = {faSearch} size = {'1x'} color = {theme.colors.primary}/>
            </a>
        </S_HoverIcons>);
};


export const S_HoverIcons = styled.div<{}>`
  position: absolute;
  width: 100%;
  line-height: 100%;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);

    //${outline(4)};


  a {
    //${({theme}) => plainTransition(theme.duration.middle)};
    position: absolute;
    display: block;
    width: 2.75rem;
    line-height: 2.75rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    transform: translateY(-50%);
  }

  ${S_ImageContainer}:hover {
    cursor: col-resize;
  }
`;