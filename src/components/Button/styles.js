import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 130px;
background: ${ property => property.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
border-radius: 14px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #ffffff;
cursor: pointer;
border: ${ property => property.isBack ? '1px solid #ffffff' : 'none'};
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

img{
transform:${ property => property.isBack && 'rotateY(180deg)'};

};

`;