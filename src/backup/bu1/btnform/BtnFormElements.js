import styled from "styled-components"
import {Link as LinkSB} from "react-router-dom"

export const FormContainer=styled.div`
justify-content: center;
display: flex;

`
export const BtnDisplayContainer=styled.button`
    margin-left: 95%;
    margin-top: 170px;
    transform: rotate(270deg);
`
export const DivContent=styled.div`
`
export const FormModal=styled.form`
    background-color: #efefef;
    color: black;
    padding: 30px;
    position: absolute;
    width: 50%;
    z-index: 2;
`
export const DivForm=styled.div``
export const LabelForm=styled.label`
    display: block;
    padding-top: 15px;
`
export const InputForm=styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    display: block;
    padding-top: 5px;
    margin-bottom: 5px;
    width: 90%;
    height: 25px;
    outline: none;
    border-radius: 5px;
`
export const TextAreaForm=styled.textarea`
    width: 90%;
    display: block;
    height: 200px;
    margin: 10px auto 0;
    outline: none;
    border-radius: 5px;
`
export const LinkBtnForm=styled(LinkSB)`
    text-decoration: none;
`
export const BtnFormSubmit=styled.button`
    background-color: #fff;
    color: #020202;
    cursor: pointer;
    width: 30%;
    display: block;
    padding: 5px 10px 5px 10px;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 20px auto 0;
`
export const FormIClose=styled.i`
    color: #020202;
    left: 95%;
    top: 2px;
    position: absolute;
    font-size: 27px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1000;
`