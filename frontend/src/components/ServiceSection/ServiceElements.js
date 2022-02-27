import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'




export const ServiceContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ServiceHeading = styled.h1`
    font-family: 'Audiowide', cursive;
    font-size: 2.6rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 15px;

    @media screen and (max-width: 768px){
        font-size: 1.8rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1.3;
    }
`
export const ServiceSubHeading = styled.h3`
    font-family: 'Audiowide', cursive;
    text-align: center;
    font-size: 1.4rem;
    color: #4e4a4a;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`
export const ServiceIconWrap = styled.div`
    width: 110px;
    height: 110px;
    background: rgba(0, 240, 224, 0.43);
    text-align: center;
    border-radius: 50%;
    display: flex;
    align-item: center;
    justify-content: center;
    margin: auto;
`
export const ServiceIcon = styled.i`
    font-size: 4rem;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    padding-top: 20px;
`
export const ServiceContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px 12px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
    }

`
export const ServiceCardWrapper = styled.div`
    // display: grid;
`
export const ServiceCardTitle = styled.div`
    font-family: 'Audiowide', cursive;
    padding: 18px 0;
    font-size: 1.38rem;
`
export const ServiceCardDesc = styled.div`
    max-width: 1100px;
    width: 100%;
    font-size: 1.3rem;
    line-height: 1.2;
`

