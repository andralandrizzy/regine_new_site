import React from "react";
import { Button } from "react-scroll";
import { GiShakingHands } from "react-icons/gi";
import { FaPeopleArrows, FaGraduationCap } from "react-icons/fa";
import {
  ServiceCardWrapper,
  ServiceContainer,
  ServiceHeading,
  ServiceIconWrap,
  ServiceIcon,
  ServiceSubHeading,
  ServiceCardTitle,
  ServiceCardDesc,
  ServiceContent,
} from "./ServiceElements";

const ServiceSection = () => {
  const serviceData = [
    {
      id: 1,
      icon: [<GiShakingHands />],
      title: "All about you",
      text: "Your business is our business. We believe in making your dreams and goals a reality and our experts know just how to do that. We're prepared to help you at any level, from impartial advice or practical assistance to help you make the most of every opportunity.",
    },
    {
      id: 2,
      icon: [<FaPeopleArrows />],
      title: "The Technical Stuff",
      text: "Whether you're just starting out or looking to restructure we've got you covered. Our mantra is: analyze, identify, advise, execute. Our mission is to create relationships, not transactions. Our promise is that we'll be there, as questions or issues arise, every step of the way.",
    },
    {
      id: 3,
      icon: [<FaGraduationCap />],
      title: "Our expertise",
      text: "We're a group of accountants, analysts, advocates and strategists that thrive on sharing our experience and knowledge to help you make a success of your business. Our track record proves that clear communication and expert collaboration will boost your bottom line",
    },
  ];

  return (
    <>
      <ServiceContainer id="services">
        <ServiceHeading>Our Services</ServiceHeading>
        <ServiceSubHeading>What we do</ServiceSubHeading>
        <ServiceContent >
        {serviceData.map((service) => (
            <ServiceCardWrapper key={service.id}>
              <ServiceIconWrap>
                <ServiceIcon>{service.icon}</ServiceIcon>
              </ServiceIconWrap>
              <ServiceCardTitle>{service.title}</ServiceCardTitle>
              <ServiceCardDesc>{service.text}</ServiceCardDesc>
            </ServiceCardWrapper>
        ))}
        </ServiceContent>
      </ServiceContainer>
    </>
  );
};

export default ServiceSection;
