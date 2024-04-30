import {S_LinkAsButton} from './S_Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import styled, {useTheme} from 'styled-components';
import {ButtonsType, PropsWithChildren} from '../../types/common.types';


type props = {
    type: ButtonsType
};
export const Button = ({type, children}: PropsWithChildren<props>) => {
    const theme = useTheme()
    switch (type) {
        case "read more": {
            return (
                <S_LinkAsButton $type = {"read more"}>
                    <StyledCircle>
                        <FontAwesomeIcon icon = {faPlusCircle} size = {'1x'} color = {theme.colors.primary}/>
                    </StyledCircle>
                    <span>&nbsp;Подробнее</span>
                </S_LinkAsButton>);
        }
        case "colored": {
            return (
                <S_LinkAsButton $type = {"colored"} as={"button"}>
                    {children}
                </S_LinkAsButton>);
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

