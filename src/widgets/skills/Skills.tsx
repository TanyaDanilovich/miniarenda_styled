import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAward,
    faBriefcaseClock,
    faCalendar,
    faFolderOpen,
    faHandshakeSimple,
    faSearch, faSuitcase
} from '@fortawesome/free-solid-svg-icons';


const Skills = () => {
    return (
        <SkillsSection>
            <SkillsWrapper>
                <SkillsContent>
                    <SkillsTitle>Аренда ямобура у нас это выгодно и надежно</SkillsTitle>
                    <SkillsText>
                        Мы предоставляем в аренду ямобур со шнеками различных диаметров: <b>200 mm, 250 mm, 300 mm, 400
                                                                                            mm, 500 mm, 600 mm</b>
                    </SkillsText>
                </SkillsContent>

                <SkillsGrid>
                    <SkillsItem>
                        <SkillsIconContainer>
                            <SkillsIcon icon = {faAward}/>
                        </SkillsIconContainer>
                        <SkillsInnerContent>
                            <SkillsInnerTitle>12 ЛЕТ РАБОТЫ</SkillsInnerTitle>
                            <SkillsInnerItem>У нас большая команда профессионалов с большим опытом
                                             работы</SkillsInnerItem>
                        </SkillsInnerContent>
                    </SkillsItem>

                    <SkillsItem>
                        <SkillsIconContainer>
                            <SkillsIcon icon = {faCalendar}/>
                        </SkillsIconContainer>
                        <SkillsInnerContent>
                            <SkillsInnerTitle>РАБОТАЕМ БЕЗ ВЫХОДНЫХ И ПРАЗДНИКОВ</SkillsInnerTitle>
                            <SkillsInnerItem>Обеспечиваем бесперебойную работу техники на объекте</SkillsInnerItem>
                        </SkillsInnerContent>
                    </SkillsItem>

                    <SkillsItem>
                        <SkillsIconContainer>
                            <SkillsIcon icon = {faSuitcase}/>
                        </SkillsIconContainer>
                        <SkillsInnerContent>
                            <SkillsInnerTitle>УЗКАЯ СПЕЦИАЛИЗАЦИЯ</SkillsInnerTitle>
                            <SkillsInnerItem>Мы специализируемся на арендке ямобуров на мини-экскаваторах, и поэтому
                                             бурим быстро и качественно.</SkillsInnerItem>
                        </SkillsInnerContent>
                    </SkillsItem>

                    <SkillsItem>
                        <SkillsIconContainer>
                            <SkillsIcon icon = {faHandshakeSimple}/>
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


const SkillsSection = styled.section`
  padding: 3rem 0;
  background-color: #f4f4f4;
`;

const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SkillsContent = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SkillsText = styled.div`
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsItem = styled.div`
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SkillsIconContainer = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  background-color: #ff9800;
  padding: 10px;
  border-radius: 50%;
`;

const SkillsIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #fff;
`;

const SkillsInnerContent = styled.div`
  color: #333;
`;

const SkillsInnerTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SkillsInnerItem = styled.p`
  font-size: 1rem;
`;
