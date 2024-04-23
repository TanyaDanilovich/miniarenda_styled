import styled, {useTheme} from 'styled-components';
import {ImageContainer} from '../../shared/styled/ImageContainer';
import {Button} from '../../shared/ui/button/Button';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {Flex} from '../../shared/styled/Flex';
import React from 'react';
import {StyledBox} from '../../shared/styled/Box';


export type ServiceCardData = {
    title: string,
    text: string,
    image: { src: string, alt: string }
}

type props = ServiceCardData & {};
export const ServiceCard = ({title, text, image}: props) => {
    const theme = useTheme()
    return (
        <StyledServiceCard>
            <ImageContainer>
                <img src = {image.src} alt = {image.alt}/>
            </ImageContainer>

            <Flex $gap = {"1rem"} $style = {"margin-top: 1rem"}>
                <FontAwesomeIcon icon = {faFolderOpen} size = {'1x'} color = {theme.colors.primary}/>
                <a href = {""}>Услуги</a>
            </Flex>


            <ServiceCardTitle>
                {title}
            </ServiceCardTitle>
            <ServiceCardText>
                {text}
            </ServiceCardText>
            <StyledBox $marginTop = {"1rem"}>
                <Button type = {'read more'}/>
            </StyledBox>
        </StyledServiceCard>);
};

export const StyledServiceCard = styled.div<{}>`
  padding: 15px;
  box-shadow: ${({theme}) => theme.shadow.full};

  a {
    text-transform: uppercase;
  }
`;

export const ServiceCardTitle = styled.h3<{}>`

`;

export const ServiceCardText = styled.p<{}>`

`