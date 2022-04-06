import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>Interested working with me?</FooterSubHeading>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            Viktor Kotrucz © Copyright {new Date().getFullYear()} | All Rights Reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href='https://github.com/vikhaon'
              target='blank'
              aria-label='Github'
            >
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
