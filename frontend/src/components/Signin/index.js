import React from 'react'
import { SigninContainer, LogoImg, FormButton, FormContent,Form, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements'
import LogoSite from '../../images/rlogo.png'

const Signin = () => {
  return (
    <>
    <SigninContainer>
        <FormWrap>
            <FormContent>
                <Form>
                    <Icon to="/"><LogoImg src={LogoSite} alt="Signin logo"/></Icon>
                    <FormH1>Sign In to your account</FormH1>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Icon to="/register"><Text>Don't have an account? Register here </Text></Icon>
                </Form>
            </FormContent>
        </FormWrap>
    </SigninContainer>
    </>
  )
}

export default Signin