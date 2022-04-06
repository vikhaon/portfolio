import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
  ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
  CharacterContainer,
} from './HeroStyles';
import { useInView } from 'react-intersection-observer';
import Modal from '../Modal/Modal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    setShowModal(!showModal);
  };

  const { ref, inView } = useInView({
    rootMargin: '-120px',
  });

  return (
    <>
      <HeroSection id='hero'>
        <HeroImage className='pattern' src='./images/hero-pattern-bg-lg.png' />
        <HeroImage className='guy' src='./images/hero-guy-1.png' />
        <CharacterContainer>
          <ImageCharacter className='blue-painter' src='./images/innovative-blue.svg' />
        </CharacterContainer>
        <HeroContent>
          <Heading>Viktor Kotrucz</Heading>
          <HeroText>
            I am a Web developer, specialized in the JavaScript ecosystem and more.
          </HeroText>
          <ButtonContainer ref={ref}>
            <ButtonWrapper>
              <HeroButton onClick={toggleModal} className={inView ? '' : 'corner'}>
                {inView ? <> Contact Me </> : <FiMail color='white' size='2.5rem' />}
              </HeroButton>
            </ButtonWrapper>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Hero;
