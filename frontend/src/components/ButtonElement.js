import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll'


export const Button = styled(LinkScroll)`
  border-radius: 10px;
  background: ${({primary}) => (primary ? '#00F0DE' : '#fff')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '30px 50px' : '20px 32px')};
  color: ${({dark}) => (dark ? '#fff' : '#00F0DE')};
  font-size: ${({fontBig}) => (fontBig ? '28px' : '16px')};
  font-family: 'Audiowide', cursive;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#00F0DE')};
    color: ${({dark}) => (dark ? '#00F0DE' : '#fff')};
  }
`