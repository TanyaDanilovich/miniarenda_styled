import styled from 'styled-components';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';
import {S_Flex} from '../../shared/styled/S_Flex';
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';


const Skills = () => {
    return (
        <SkillsSection id = {"skills"}>
            <SkillsWrapper>
                <SkillsContent>
                    <SectionTitle title = {"Почему мы?"}/>

                </SkillsContent>

                <SkillsGrid $wrap = {"wrap"} $justify = {"space-between"}>

                    <SkillsItem $direction = {"column"} $align = {"center"}>
                        <SkillsInnerTitle>16 ЛЕТ РАБОТЫ</SkillsInnerTitle>
                        <SkillsInnerItem>У нас большая команда профессионалов с огромным опытом
                                         работы</SkillsInnerItem>
                    </SkillsItem>

                    <SkillsItem $direction = {"column"} $align = {"center"}>
                        <SkillsInnerTitle>РАБОТАЕМ без выходных</SkillsInnerTitle>
                        <SkillsInnerItem>Обеспечиваем бесперебойную работу техники на объекте</SkillsInnerItem>
                    </SkillsItem>

                    <SkillsItem $direction = {"column"} $align = {"center"}>
                        <SkillsInnerTitle>УЗКАЯ СПЕЦИАЛИЗАЦИЯ</SkillsInnerTitle>
                        <SkillsInnerItem>Мы специализируемся на аренде мини-экскаваторов, и поэтому
                                         работаем быстро и качественно.</SkillsInnerItem>
                    </SkillsItem>

                    <SkillsItem $direction = {"column"} $align = {"center"}>
                        <SkillsInnerTitle>ОТЛИЧНАЯ РЕПУТАЦИЯ</SkillsInnerTitle>
                        <SkillsInnerItem>Большая часть клиентов возвращается к нам и также,
                                         рекомендует нас другим</SkillsInnerItem>
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
    margin-block:${getResponsiveSize(BASE*2, BASE * 4)};
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

    &:before{
        content:" ";
        display:inline-flex;
        width:4rem;
        height:4rem;
        background-color:${({theme}) => theme.colors.primary};
        border-radius:50%;
        background-size:2rem;
        background-position:center;
        background-repeat:no-repeat;
        margin-block:1.5rem;
    }

    &:nth-child(1):before{
        background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white"><path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"/></svg>');
    }

    &:nth-child(2):before{
        background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg>');
    }

    &:nth-child(3):before{
        background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white"><path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"/></svg>');
    }

    &:nth-child(4):before{
        background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="white"><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"/></svg>');
    }
`;

const SkillsInnerTitle = styled.h3`
    text-transform:uppercase;
    font-size:${getResponsiveSize(16, 20)};
    margin-bottom:1rem;
    color:${({theme}) => theme.colors.primary};
`;

const SkillsInnerItem = styled.p`
    color:aliceblue;

`;

