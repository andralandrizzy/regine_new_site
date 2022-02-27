import styled from 'styled-components'
import { ImPhone } from 'react-icons/im'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { MdEmail, MdLocationOn, MdFacebook } from 'react-icons/md'

export const FooterWrapper = styled.div`
    width: 100%;
`
export const FooterContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 20px auto;
    padding: 60px 20px;

`
export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`
export const FooterInfo = styled.div`
`
export const FooterHeading = styled.h2`
    font-size: 2.5rem;
    color: #6e6c6c;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`
export const FooterInfoWrap = styled.div`
    display: flex;
    gap: 25px;
    font-size: 1.5rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #707070;
    margin-top: 20px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 60px;
        margin-top: 5px
    }
`
export const FooterIconWrap = styled.div`
    display: flex;
    gap: 25px;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #707070;
    margin-top: 20px;
`
export const LocIcon = styled(MdLocationOn)`
    font-size: 2.5rem;
    color: #04c3b4;
`
export const LocInfo = styled.div`
    
`
export const HotLineIcon = styled(ImPhone)`
    font-size: 2.5rem;
    color: #04c3b4;
`
export const PhoneInfo = styled.div`
    
`
export const EmailIcon = styled(MdEmail)`
    font-size: 2.5rem;
    color: #04c3b4;
`
export const EmailInfo = styled.div`
    
`
export const FooterCopyright = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-top: 50px;
    color: #707070;
`
export const IgIcon = styled(AiFillInstagram)`
    font-size: 2.5rem;
    color: #04c3b4;
`
export const FacebookIcon = styled(MdFacebook)`
    font-size: 2.5rem;
    color: #04c3b4;
`
export const TwitterIcon = styled(AiFillTwitterCircle)`
    font-size: 2.5rem;
    color: #04c3b4;
`