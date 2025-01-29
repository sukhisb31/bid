import Styled from "styled-components";

export const Button = Styled.button`
    background:black;
    color:white;
    padding:15px 50px;
    border-radius:10px;
    cursor:pointer;
    min-width:220px;
    font-size:16px;
    border:1px solid black;
    transition: 0.3s background ease-in;

    &:hover{
    background:white;
    color:black;
    transition: 0.3s background ease-in;
    border: 1px solid black;
    font-size:16px;
    }
`;