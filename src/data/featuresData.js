import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { GiConcentrationOrb } from 'react-icons/gi';
import { ImDatabase } from 'react-icons/im';
import { HiCode } from 'react-icons/hi';
import { MdSlowMotionVideo } from 'react-icons/md';
import { FaServer } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon size='3rem' color='#fefefe' />;

export const featuresData = [
  {
    name: 'UI/UX',
    description: 'Landing Pages, User Flow',
    icon: iconStyle(BsPhone),
    imgClass: 'one',
  },
  {
    name: 'Frontend',
    description:
      'HTML5/CSS3, SCSS, Styled-Components, Javascript, React, Redux, Responsive Design, React-Bootstrap, Material-UI',
    icon: iconStyle(HiCode),
    imgClass: 'two',
  },
  {
    name: 'Backend',
    description: 'Node.js, Express, JWT',
    icon: iconStyle(FaServer),
    imgClass: 'three',
  },
  {
    name: 'Databases',
    description: 'MongoDB, PostgreSQL',
    icon: iconStyle(ImDatabase),
    imgClass: 'four',
  },
  {
    name: 'Tools',
    description: 'VS Code, Git, Bash, NPM, ',
    icon: iconStyle(GiConcentrationOrb),
    imgClass: 'six',
  },
  {
    name: 'Motion',
    description: 'UI Motion, CSS-Animations, Framer-Motion,',
    icon: iconStyle(MdSlowMotionVideo),
    imgClass: 'five',
  },
];
