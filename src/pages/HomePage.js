import React from 'react';
import Tech from '../components/Tech/Tech';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroFour } from '../data/heroData';
import { Heading } from '../styles/globalStyles';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Tech />
      <Heading id='projects'>My Projects</Heading>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      {/* <Content {...heroThree} /> */}
      <Content {...heroFour} />
    </>
  );
};

export default HomePage;
