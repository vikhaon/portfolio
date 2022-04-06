import styled from 'styled-components';
import { Section } from '../../styles/globalStyles';
import { motion } from 'framer-motion';

export const HeroSection = styled(Section)`
  display: flex;
  position: relative;
  z-index: 11;
  background-size: cover;
  background-image: linear-gradient(to top right, #7a2fac, #2f70bb, #93aac4);
  align-items: center;
  height: 640px;

  @media screen and (min-width: 768px) {
    height: 692px;
  }

  @media screen and (min-width: 992px) {
    height: 710px;
  }

  @media screen and (min-width: 1200px) {
    height: 920px;
  }

  @media screen and (min-width: 1921px) {
    height: 1080px;
    background-size: cover;
  }
`;

export const HeroImage = styled.img`
  z-index: 10;
  width: 100%;
  position: absolute;
  left: 0;
  object-fit: cover;

  &.pattern {
    height: 100%;
    max-height: 100%;
    top: 0;
  }

  &.guy {
    bottom: 0;
  }
`;

export const ImageCharacter = styled(motion.img)`
  z-index: 11;
  width: 100%;
  position: absolute;
  /* width: clamp(90px, 15vw, 200px); */
  background-size: cover;
  left: auto;

  &.blue-painter {
    top: 5rem;
    right: 10px;
    width: 25%;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const CharacterContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const HeroContent = styled.div`
  width: 100%;
  padding: 0 15px;
  z-index: 10;
  position: relative;

  @media screen and (min-width: 1921px) {
    height: 65vh;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: clamp(2.8rem, 5.5vw, 6rem);
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: white;
`;

export const HeroText = styled.div`
  text-align: center;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  height: 170px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
`;

export const HeroButton = styled(motion.button)`
  position: absolute;
  width: 250px;
  margin: 0 auto;
  padding: 15px 20px;
  bottom: calc(100vh - 120px);
  right: 50%;
  transform: translate(50%);
  font-weight: bold;
  font-size: 0.7rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  border-radius: 25px;
  border: none;
  background-color: #222222e1;
  color: #a9e5f1;
  cursor: pointer;
  transition: all 0.4s ease-in;

  &.corner {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    width: 64px;
    height: 64px;
    padding: 10px;
    background-color: #ef4b6c;
    border-radius: 50%;
  }

  &:hover {
    box-shadow: 0 0 9px 9px #a9e5f1;
    transition: box-shadow 0.3s ease-in;
  }
`;
