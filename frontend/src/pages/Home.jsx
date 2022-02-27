import React, {useState} from 'react';
import FooterSection from '../components/FooterSection';
import SubscribeFormSection from '../components/SubscribeFormSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import CtaSection from '../components/CtaSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ServiceSection from '../components/ServiceSection';
import Sidebar from'../components/Sidebar';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Data';
import ContactMe from '../components/ContactMe';



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <ServiceSection {...homeObjOne}/>
      <CtaSection/>
      <AboutSection {...homeObjTwo}/>
      <ContactMe {...homeObjThree}/>
      <StatsSection/>
      <SubscribeFormSection/>
      <FooterSection/>
    </>
  )
}

export default Home 