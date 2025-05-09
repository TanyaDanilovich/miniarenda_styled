import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons';
import styled, {useTheme} from 'styled-components';
import {S_LinkAsButton} from './S_LinkAsButton';
import {plainTransition} from '../../../app/styles/mixins';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';


type props = {
    url?: string,
    title?: string,
    icon?: IconDefinition
};
export const OrderedButton = ({
                                  url = "#",
                                  title = "Забронировать",
                                  icon = faCalendarCheck
                              }: props) => {
    const theme = useTheme()


    return (
        <S_OrderedButton href = {url}>

            {/*<FontAwesomeIcon icon = {faCalendarDays} size = {'1x'} color = {theme.colors.primary}/>*/}

            <FontAwesomeIcon icon = {icon} size = {'1x'} color = {theme.colors.primary}/>

            <span>{title}</span>
        </S_OrderedButton>);
};

export const S_OrderedButton = styled(S_LinkAsButton)<{}>`
  background-color: ${props => props.theme.colors.white};
  color: ${({theme}) => theme.colors.darkGray};
  border: 3px solid ${props => props.theme.colors.primary};
  padding: 1.5rem;
  width: calc(100% - 2rem);
  margin-inline: 1rem;
  margin-top: 1rem;
  font-weight: ${props => props.theme.fonts.weight.semiBold};
  letter-spacing: 1px;
  align-content: center;

  & > span {
    margin-left: 1rem;
  }


  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    border: 3px solid transparent;

    svg path {
      ${plainTransition()}
      fill: ${({theme}) => theme.colors.white};
    }

    &:active {
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
      color: ${({theme}) => theme.colors.darkGray};

      svg path {
        fill: ${({theme}) => theme.colors.darkGray};
      }
    }
  }
`
