import styled from "styled-components"

export const Background=styled.div`
    width: 100%;
    height: 100vh;
   /* background-color: rgb(154,154,154,0.2);*/
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    position: absolute;
    /*margin-top: 164px;*/
   /* display: none; */
`
export const PopupContainer=styled.div`
    
    width: 500px;
    height: 500px;
    background-color: #eaeaea;
    border-radius: 10px;
    box-shadow: 11px 11px 17px 6px rgba(0,0,0,0.62);

    @media screen and (max-width: 460px){
       width: 55%;
       height: 350px;
    }
`
export const SideDiv=styled.div`
    background-color: #0D816A;
    background: rgb(67,181,129);
    background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);
    padding: 0;
    height: 100%;
    width: 25%;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 75.1%;
    border-radius: 0 10px 10px 0;
`
export const IClosePopup=styled.i`
    position: absolute;
    z-index: 1;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
    right: 245px;

    @media screen and (max-width: 770px){
        right: 140px;
    }
    @media screen and (max-width: 460px){
        right: 150px;
    }
`
export const H1Popup=styled.h1`
    position: absolute;
    margin-bottom: 20px;
    font-size: 3.8em;
    z-index: 1;
    background: -webkit-linear-gradient(360deg, rgba(14,130,106,1) 39%, rgba(2,0,36,10) 97%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 460px){
       font-size: 3rem;
    }
`
export const PPopup=styled.p`
    position: absolute;
    z-index: 1;
    line-height: 45px;
    font-weight: bold;
    font-size: 22px;
    margin-top: 225px;
    margin-left: 20px;

    @media screen and (max-width: 460px){
        line-height: 30px;
        margin-top: 150px;
        z-index: 2;
        font-size: 25px;
        background: linear-gradient(50deg, rgba(0,0,0,1) 0%, rgba(67,181,129,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`
export const H2Popup=styled.h2`
    position: absolute;
    bottom: 113px;
    margin-left: 92px;
    transform: rotate(335deg);
    font-size: 2.5rem;
    color: #cf0000;
    font-weight: bold;

    @media screen and (max-width: 460px){
        bottom: 160px;
        margin-left: 60px;
        font-size: 2rem;
    }
    @media screen and (max-width: 1280px){
        bottom: 10rem;
    }
    @media screen and (max-width: 770px){
        bottom: 25.5rem;
    }
    @media screen and (max-width: 460px){
        bottom: 10rem;
        margin-left: 3rem;
    }
`
export const BtnPopup=styled.button`
    position: absolute;
    bottom: 105px;
    margin-left: 287px;
    z-index: 1;
    border: none;
    padding: 11px 30px;
    cursor: pointer;
    background-color: #ffc219;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #020202;
    box-shadow: 8px 7px 11px 2px rgb(0 0 0 / 62%);
    transition: .5s;

    &:hover{
    background-color: #f29900;
    border-radius: 10px;
    box-shadow: 8px 7px 11px 2px rgb(0 0 0 / 62%);
    }
    @media screen and (max-width: 1280px){
        bottom: 10rem;
    }
    @media screen and (max-width: 770px){
        bottom: 25.5rem;
    }
    @media screen and (max-width: 460px){
        bottom: 10rem;
        margin-left: 10.8rem;
    }
`
export const ImgPromo=styled.img`
    position: absolute;
    border-radius: 50%;
    margin-left: 250px;
    margin-top: 199px;
    width: 250px;
    height: 250px;
    transition: .5s;
    z-index: 1;
    &:hover {
        transform: scale(1.2) rotate(35deg);
    }
    @media screen and (max-width: 460px){
        margin-left: 193px;
        margin-top: 150px;
        width: 150px;
        height: 150px;
    }
`