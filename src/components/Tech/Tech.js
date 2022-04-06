import React from 'react';
import { Container } from '../../styles/globalStyles';
import {
  TechSection,
  TechColumn,
  TechText,
  TechTitle,
  TechRow,
  TechWrapper,
  TechImage,
  TechTextWrapper,
} from './TechStyles';
import { techStackData } from '../../data/techStackData';

const Tech = () => {
  return (
    <TechSection id='tech'>
      <Container>
        <TechTextWrapper>
          <TechTitle>My Tech Stack</TechTitle>
          <TechText>
            I’ve been working with these technologies from front to back.
          </TechText>
        </TechTextWrapper>

        <TechRow>
          {techStackData.map((tech, index) => (
            <TechColumn key={index}>
              {tech.map((el, index) => (
                <TechWrapper key={index}>
                  <TechImage src={`./images/tech/${el.name}.svg`} />
                </TechWrapper>
              ))}
            </TechColumn>
          ))}
        </TechRow>
      </Container>
    </TechSection>
  );
};

export default Tech;
