import React, { useState } from "react";
import Image from "../../images/show3.jpeg";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image} alt="hero image one" />
      </HeroBg>
      <HeroContent>
        <HeroTitle>Welcome</HeroTitle>
        <HeroText>
          Have a look around and learn all there is to know about us. Don't
          forget to check out the services we are offering. Feel free to
          continue explore and take a moment to drop us a line so we can talk
          about next steps.
        </HeroText>
        <HeroBtnWrapper>
          <Button fontBig={false} primary={true} dark={true} to="service" onMouseEnter={onHover} onMouseLeave={onHover}>
            Find out more {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
