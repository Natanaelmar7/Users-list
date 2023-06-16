import styled from "styled-components";
import Backgroud from "../../assets/bgimage.svg";

export const Container = styled.div`
  background: url("${Backgroud}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 90%;
`;

export const Img = styled.img`
  margin-top: 30px;

`;

export const InputLabel = styled.p`
letter-spacing: -0.408px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: #EEEEEE;
margin-left: 25px;
`;

export const Input = styled.input`
outline: none;
color: #ffffff;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
width: 317px;
height: 58px;
padding-left: 25px;
margin-bottom: 25px;
`;

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 130px;
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #ffffff;
cursor: pointer;
border: none;
outline: none;
text-decoration: none;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover {
    opacity: 0.8;

};

&:active{
    opacity: 0.5;
}

`;



