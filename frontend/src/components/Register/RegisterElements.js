import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
    min-height: 692px;
    width: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    leff: 0;
    z-index: 0;
    overflow: hidden;
    background: #CECECE;
`;
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width : 400px){
        height: 80%;
    }
`;
export const LogoImg = styled.img`
    height: 50px;
    -o-object-fit: cover;
    object-fit: cover:
    display: block;
`;
export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;

    @media screen and (max-width : 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width : 480px){
        padding: 10px;
    }
`;
export const Form = styled.form`
    background: #fff;
    max-width: 550px;
    height: auto;
    width: 100%;
    z-index:1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9)
    @media screen and (max-width : 480px){
        padding: 32px;
    }
`;
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
`;
export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 18px;
    color: #000;
`;
export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    border-bottom: solid #00F0DE 2px;
`;
export const FormButton = styled.button`
    background: #00F0DE;
    padding: 16px 0;
    border: none;
    border-radius: 10px;
    color: #000;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #00f0de;
        border: solid #00f0de 2px;
      }
`;
export const Text = styled.span`
    margin-top: 30px;
    text-align: center;
    color: #000;
    font-size: 14px;
`;