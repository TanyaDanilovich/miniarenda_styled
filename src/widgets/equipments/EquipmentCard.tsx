import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';

import {S_Box} from '../../shared/styled/S_Box';
import {S_Image} from '../../shared/styled/S_Image';
import img from '../../assets/images/servises/exavator/IMG_20190608_115344.jpg';
import {ImageProps} from '../../shared/types/common.types';
import {S_Flex} from '../../shared/styled/S_Flex';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';
import {S_ReadMoreButton} from '../../shared/ui/buttons/S_ReadMoreButton';
import FontAwesomeIcon from '../../shared/ui/icon/FontAwesomeIcon';

type props = {
    id: string,
    image: ImageProps,
    title: string,
    description: string,
    characteristicList: string[]
};
export const EquipmentCard = ({
                                  id,
                                  title,
                                  description,
                                  image,
                                  characteristicList,

                              }: props) => {
    const theme = useTheme()

    return (
        <S_EquipmentCard as = "article"
                         $direction = {"column"}

        >

            <S_ImageContainer>
                <S_Image src = {image.src || img} alt = {image.alt || `${title}`}/>
            </S_ImageContainer>


            <S_EquipmentCardTitle>
                {title}
            </S_EquipmentCardTitle>

            <S_EquipmentCardDescription>
                {description}
            </S_EquipmentCardDescription>

            <S_EquipmentCardCharacteristics>
                {characteristicList.map((characteristic, index) =>


                    <li key = {`${id}-${index}`}>
                        <FontAwesomeIcon icon = {'icon-check-circle'} size = {'1x'} color = {theme.colors.primary}/>
                        {characteristic}
                    </li>
                )}
            </S_EquipmentCardCharacteristics>

            <S_Box $marginTop = {"1rem"} $textAlign = {"center"}>
                {/*<ContactUsButton/>*/}
                {/*<ReadMoreButton url = {theme.hrefs.tel} title = {"Заказать"}/>*/}
            </S_Box>

        </S_EquipmentCard>
    );
};


type S_EquipmentCardProps = {}
export const S_EquipmentCard = styled(S_Flex)<S_EquipmentCardProps>`

  padding: ${getResponsiveSize(BASE * 0.5, BASE, 320, 1200)};
  box-shadow: ${({theme}) => theme.shadow.full};
  display: flex;
  flex-direction: column;
  width: calc(50% - 0.25rem);

  @media ${({theme}) => theme.mediaMinWidth.tablet} {
    width: calc(25% - 0.75rem);
  }

  background-color: ${({theme}) => theme.colors.white};

  ${S_ReadMoreButton} {
    font-size: ${getResponsiveSize(14, 16, 320, 768)};
  }
`;

export const S_EquipmentCardTitle = styled.h3<{}>`
  color: ${({theme}) => theme.colors.black};
  font-weight: 600;
  margin-block: ${getResponsiveSize(BASE * 0.5, BASE * 2, 320, 1200)};
  font-size: ${getResponsiveSize(18, 22, 320, 768)};
`;


export const S_EquipmentCardDescription = styled.p<{}>`
  color: ${({theme}) => theme.colors.black};
  //text-wrap: pretti;
  font-size: ${getResponsiveSize(14, 16, 320, 768)};
`;

export const S_EquipmentCardCharacteristics = styled.ul<{}>`
  flex-grow: 1;
  margin-top: ${getResponsiveSize(BASE * 0.5, BASE * 2, 320, 1200)};

  svg {
    position: absolute;
    left: -1.25rem;
    top: 0.2rem;
  }

  & li {
    position: relative;
    margin-left: 1.5rem;
    font-size: ${getResponsiveSize(12, 14, 320, 768)};
  }
`