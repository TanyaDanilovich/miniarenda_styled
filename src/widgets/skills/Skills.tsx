import styled, {useTheme} from 'styled-components';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';
import {S_Flex} from '../../shared/styled/S_Flex';
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import FontAwesomeIcon from '../../shared/ui/icon/FontAwesomeIcon';


const Skills = () => {
    const theme = useTheme()
    return (
        <SkillsSection id = {"skills"}>
            <SkillsWrapper>
                <SkillsContent>
                    <SectionTitle title = {"Почему мы?"}/>

                </SkillsContent>

                <SkillsGrid $wrap = {"wrap"} $justify = {"space-between"}>

                    <SkillsItem $direction = {"column"} $align = {"center"}>
                        <SkillsIconContainer $justify = {"center"} $align = {"center"}>
                            <FontAwesomeIcon icon = {'icon-award'} size = {'2x'} color = {theme.colors.white}/>
                        </SkillsIconContainer>

                        <SkillsInnerContent>
                            <SkillsInnerTitle>16 ЛЕТ РАБОТЫ</SkillsInnerTitle>
                            <SkillsInnerItem>У нас большая команда профессионалов с огромным опытом
                                             работы</SkillsInnerItem>
                        </SkillsInnerContent>
                    </SkillsItem>

                    <SkillsItem $direction = {"column"} $align = {"center"}>
                        <SkillsIconContainer $justify = {"center"} $align = {"center"}>
                            <FontAwesomeIcon icon = {'icon-calendar'} size = {'2x'} color = {theme.colors.white}/>
                        </SkillsIconContainer>

                        <SkillsInnerContent>
                            <SkillsInnerTitle>РАБОТАЕМ без выходных</SkillsInnerTitle>
                            <SkillsInnerItem>Обеспечиваем бесперебойную работу техники на объекте</SkillsInnerItem>
                        </SkillsInnerContent>
                    </SkillsItem>

                    <SkillsItem $direction = {"column"} $align = {"center"}>

                        <SkillsIconContainer $justify = {"center"} $align = {"center"}>
                            <FontAwesomeIcon icon = {'icon-suitcase'} size = {'2x'} color = {theme.colors.white}/>
                        </SkillsIconContainer>

                        <SkillsInnerContent>
                            <SkillsInnerTitle>УЗКАЯ СПЕЦИАЛИЗАЦИЯ</SkillsInnerTitle>
                            <SkillsInnerItem>Мы специализируемся на аренде мини-экскаваторов, и поэтому
                                             работаем быстро и качественно.</SkillsInnerItem>
                        </SkillsInnerContent>
                    </SkillsItem>

                    <SkillsItem $direction = {"column"} $align = {"center"}>
                        <SkillsIconContainer $justify = {"center"} $align = {"center"}>
                            <FontAwesomeIcon icon = {'icon-handshake'} size = {'2x'} color = {theme.colors.white}/>
                        </SkillsIconContainer>


                        <SkillsInnerContent>
                            <SkillsInnerTitle>ОТЛИЧНАЯ РЕПУТАЦИЯ</SkillsInnerTitle>
                            <SkillsInnerItem>Большая часть клиентов возвращается к нам и также,
                                             рекомендует нас другим</SkillsInnerItem>
                        </SkillsInnerContent>
                    </SkillsItem>
                </SkillsGrid>
            </SkillsWrapper>
        </SkillsSection>
    );
};

export default Skills;

// Общая секция
const SkillsSection = styled.section`
    ${sectionMargin};
    ${sectionPadding};
        //padding-block: ${getResponsiveSize(BASE, BASE * 3)};
    background-color:${({theme}) => theme.colors.black};
    color:${({theme}) => theme.colors.white};

`;

const SkillsWrapper = styled.div`
    max-width:1200px;
    margin:0 auto;
    padding:0 1rem;
`;

const SkillsContent = styled.div`
    text-align:center;
    margin-bottom:2rem;
`;

// Сетка для элементов
const SkillsGrid = styled(S_Flex)`

`;

// Индивидуальные элементы
const SkillsItem = styled(S_Flex)`

    width:100%;
    padding:${getResponsiveSize(BASE / 2, BASE * 2)};
    margin-block:${getResponsiveSize(BASE, BASE * 2)};
    @media ${({theme}) => theme.mediaMinWidth.mobile}{
        width:calc(50% - 0.5rem);
    }
    @media ${({theme}) => theme.mediaMinWidth.computer}{
        width:calc(25% - 0.75rem);
    }
    background-color:${({theme}) => theme.colors.bg_primary};
    //padding: 2rem;
    box-shadow:${({theme}) => theme.shadow.full};
    text-align:center;
`;

const SkillsIconContainer = styled(S_Flex)`
    display:inline-flex;
    width:4rem;
    height:4rem;
    padding:1rem;
    margin-bottom:1rem;
    background-color:${({theme}) => theme.colors.primary};
    border-radius:50%;
`;

const SkillsInnerContent = styled.div`
    color:${({theme}) => theme.colors.bg_primary};
`;

const SkillsInnerTitle = styled.h3`
    text-transform:uppercase;
    font-size:${getResponsiveSize(16, 20)};
    margin-bottom:1rem;
    color:${({theme}) => theme.colors.primary};
`;

const SkillsInnerItem = styled.p`


`;

