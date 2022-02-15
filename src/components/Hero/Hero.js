import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/> 
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Save Yourself Time, Avoid Tech Headache And Let Me Handle The Complex Task.
      </SectionText>
      <Button onClick={() => window.location = 'https://tegacreatives.com'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;