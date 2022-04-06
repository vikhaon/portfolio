import React from 'react';
import { Container } from '../../styles/globalStyles';
import {
  FeatureText,
  FeatureSection,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from './FeaturesStyles';

import { featuresData } from '../../data/featuresData';

const Features = () => {
  return (
    <FeatureSection id='about'>
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>What I Do</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn key={index}>
              <FeatureImageWrapper className={el.imgClass}>{el.icon}</FeatureImageWrapper>
              <FeatureName>{el.name}</FeatureName>
              <FeatureText>{el.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </FeatureSection>
  );
};

export default Features;
