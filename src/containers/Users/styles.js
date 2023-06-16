import styled from "styled-components";
import Backgroud from "../../assets/bgimage2.svg";

export const Container = styled.div`
  background: url("${Backgroud}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 110vh;
  min-height:  calc(100vh - 170px);
`;

export const Img = styled.img`
  margin-top: 30px;

`;



export const Button = styled.button`
width: 342px;
height: 74px;

margin-top: 120px;
background: transparent;
border-radius: 14px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #ffffff;
cursor: pointer;
border: 1px solid #ffffff;
outline: none;
text-decoration: none;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

img{
transform: rotateY(180deg);

};

&:hover {
    opacity: 0.8;

};

&:active{
    opacity: 0.5;
}

`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
background: rgba(255, 255, 255, 0.25);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 14px;
border: none;
outline: none;
width: 342px;
height: 58px;
color: #ffffff;

p{
  font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 28px;
}

button{
  width: 24px;
height: 28px;
background: none;
border:none;
cursor:pointer;
}
`;

