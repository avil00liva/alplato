import styled from "styled-components"

export const ContainerSign=styled.div`
    margin: 0 auto;
    background-color: #fff;
    width: 80%;
    height: 85.9vh;
    display: flex;
    justify-content: center;
`
export const FormSignContainer=styled.div`
    margin-top: 80px;
    justify-content: center;
`
export const FormSignH1=styled.h1`
`
export const FormSign=styled.form`
    display: flex;
    flex-flow: column;
`
export const FormInput=styled.input`
    margin-bottom: 20px;
    padding: 10px;
    outline: none;
    font-weight: 500;
    font-size: 17px;
    border: 2px solid #43b581;
    border-radius: 5px;
`
export const FormInputBtn=styled.input`
    padding: 10px;
    outline: none;
    font-weight: 500;
    font-size: 17px;
    border: 1px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);
    transition: .5s;

    &:hover{
        background: linear-gradient(180deg, rgba(13,129,10,1) 0%, rgba(67,181,129,1) 100%);
    }
`
export const BtnSignIn=styled.button`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 107px;
    outline: none;
    font-weight: 500;
    font-size: 17px;
    border: 1px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background: linear-gradient(180deg, rgba(13,129,10,1) 0%, rgba(67,181,129,1) 100%);
    transition: .5s;
    
    &:hover{
        background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);
    }
`
export const DivMsgError=styled.div`
    position: absolute;
    margin-top: 7px;
    padding: 7px;
    color: #cc3300;
    font-weight: bold;
    background-color: #ff9966;
    border: 2px solid #cc3300;
    border-radius: 5px;
`