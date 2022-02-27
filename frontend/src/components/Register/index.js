import React from 'react'
import { RegisterContainer, LogoImg, FormButton, FormContent,Form, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './RegisterElements'
import LogoSite from '../../images/rlogo.png'


const Register = () => {
  return (
    <>
    <RegisterContainer>
        <FormWrap>
            <FormContent>
                <Form>
                    <Icon to="/"><LogoImg src={LogoSite} alt="Register logo"/></Icon>
                    <FormH1>Create an account</FormH1>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <FormInput type='name' required />
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormLabel htmlFor='password1'>Confirm Password</FormLabel>
                    <FormInput type='password1' required />
                    <FormButton type='submit'>Register</FormButton>
                    <Icon to="/login"><Text>Already have an account? Login here </Text></Icon>
                </Form>
            </FormContent>
        </FormWrap>
    </RegisterContainer>
    </>
  )
}

export default Register