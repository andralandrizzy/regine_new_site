import React, { useState } from 'react'
import Image from "../../images/show2.jpeg";
import {
    CtaContainer,
    CtaBg,
    ImageBg,
    CtaContent,
    CtaTitle,
    CtaButton,
    CtaText,
    CtaBtnWrapper,
    CalendarClear,
    CalendarEvent,
  } from "./CtaElements";


const CtaSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover);
    };
  return (
    <CtaContainer>
      <CtaBg>
        <ImageBg src={Image} alt="Cta image one" />
      </CtaBg>
      <CtaContent>
        <CtaTitle>save time, Feel better</CtaTitle>
        <CtaText>
          Skip the waiting line room! register online before you arrive
        </CtaText>
        <CtaBtnWrapper>
          <CtaButton to="service">
            {hover ? <CalendarClear /> : <CalendarEvent />} { } Book an appointment
          </CtaButton>
        </CtaBtnWrapper>
      </CtaContent>
    </CtaContainer>
  )
}

export default CtaSection