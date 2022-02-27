import React from 'react'
import { Col, Row } from 'react-bootstrap'
import imageOne from '../../images/about1.jpeg'
import imageTwo from '../../images/about2.jpeg'

import { 
    AboutContainer, 
    AboutHeading, 
    AboutImage, 
    AboutImageContent, 
    AboutImageWrapper, 
    AboutTextContent, 
    AboutWrapper, 
    AboutTitle,
    AboutTitleBar,
    AboutLine,
    DescriptionWrapper, 
    TitleWrapper } from './AboutElements'

const AboutSection = () => {

    const aboutData = [
        {
            id: 1,
            title: "Our Experience",
            Desc: "After 10 years in the industry, we decided to alter direction. Now, we share our passion by helping others. Our ramp up process is designed to empower your team and outfit them with the tools they need to succeed. Talk to us today about how we can support your growth, limit your turnover, and put you on a solid track to success and profit."
        },
        {
            id: 2,
            title: "Our Approach",
            Desc: "Our service includes a comprehensive consult to help identify gaps and opportunities, a comprehensive report that includes a project plan with timelines and milestones, a cost analysis, and a schedule. We also offer a suite of quality products that will help you get there quickly and smoothly. That's how we ensure your success."
        },
        {
            id: 3,
            title: "Why Us",
            Desc: "Business mentors are key-that's why when it comes to client selection, we're choosy. We want to give each of you the time and guidance you deserve. Whether you're seeking a strategic alliance with the right partner or a special skillset or tool, call us today. Together we'll create and refine your plan for success. We didn't get there alone. And neither will you."
        },

    ]
  return (
        <AboutContainer id='about'>
            <AboutHeading>About Us</AboutHeading>
            <Row>
            <AboutWrapper>
            <Col>
            <AboutImageContent>
                <AboutImageWrapper>
                    <AboutImage src={imageOne} alt="about image one"/>
                </AboutImageWrapper>
                <AboutImageWrapper>
                    <AboutImage src={imageTwo} alt="about image two"/>
                </AboutImageWrapper>
            </AboutImageContent>
            </Col>
            <Col>
            {aboutData.map(content => (
                <AboutTextContent key={content.id}>
                <TitleWrapper>
                    <AboutTitle>
                        {content.title}
                    </AboutTitle>
                    <AboutTitleBar/>
                </TitleWrapper>
                <DescriptionWrapper>
                    {content.Desc}
                </DescriptionWrapper>
                <AboutLine/>
            </AboutTextContent>
            ))}
            </Col>
            </AboutWrapper>
            </Row>
        </AboutContainer>
  )
}

export default AboutSection