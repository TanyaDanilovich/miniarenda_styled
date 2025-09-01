import {S_Clients} from './S_Clients';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ClientsCarousel} from './ClientsSwiper/ClientsCarousel';
import styled, {css} from 'styled-components';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';


export const Clients = () => {

    return (
        <S_Clients>
            <S_TitleContainer $isWithText = {false}>
                <SectionTitle title = {"Работаем с частными лицами и организациями"} text = {''}/>
            </S_TitleContainer>
            <ClientsCarousel/>
        </S_Clients>);
};

const S_TitleContainer = styled.div<{ $isWithText: boolean }>`
  margin-block: ${getResponsiveSize(BASE * 2, BASE * 4)};
  white-space: normal;

  p {
    font-size: 1rem;
    text-align: justify;
  }

  @media ${({theme}) => theme.mediaMinWidth.largeMobile} {
    display: flex;
    gap: 1rem;
    width: 100%;

    ${({$isWithText}) => $isWithText && css`
      border-left: 5px solid ${({theme}) => theme.colors.primary};
      align-items: center;

      @media ${({theme}) => theme.mediaMinWidth.tablet} {
        p {
          width: 50%;
        }
      }
    `}
  }
`;


