import React from 'react'
import { ContactMeContainer, ContactMeForm, ContactMeFormButton, ContactMeFormContent, ContactMeFormeTextArea, ContactMeFormInput, ContactMeFormWrap, ContactMeHeading, ContactMeMapContent } from './ContactMeElements'

const ContactMe = () => {
  return (
    <>
        <ContactMeContainer id='contact'>
            <ContactMeHeading>Contact Us</ContactMeHeading>
            <ContactMeFormWrap>
                <ContactMeFormContent>
                    <ContactMeForm>
                        <ContactMeFormInput type='name' placeholder="Enter name"/>
                        <ContactMeFormInput type='email' placeholder="Enter your email"/>
                        <ContactMeFormInput type='text' placeholder="Your message subject"/>
                        <ContactMeFormeTextArea type='text-area' placeholder="Message"></ContactMeFormeTextArea>
                        <ContactMeFormButton type='submit'>Submit</ContactMeFormButton>
                    </ContactMeForm>
                </ContactMeFormContent>
                <ContactMeMapContent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12095.588692552954!2d-74.05296020648504!3d40.72028006929465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b3d90d7f49%3A0x356e073c2184b995!2sJersey%20City%2C%20NJ%2007302!5e0!3m2!1sen!2sus!4v1645985096173!5m2!1sen!2sus"></ContactMeMapContent>

            </ContactMeFormWrap>
        </ContactMeContainer>
    </>
  )
}

export default ContactMe