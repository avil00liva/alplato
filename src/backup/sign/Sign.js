import React, {useState} from 'react'
import NavBar from '../navbar/index'
import {auth} from "../../config/config"
import {useHistory} from "react-router-dom"
import {
    ContainerSign,
    FormSignContainer,
    FormSignH1,
    FormSign,
    FormInput,
    FormInputBtn,
    BtnSignIn,
    DivMsgError,
} 
from "./signElements"

const Sign = () => {
    const historial=useHistory()
    const [email, setEmail]=useState("")
    const [pass, setPass]=useState("")
    const [msgerror, setMsgError]=useState(null)

    const registrarUsuario=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
            .then(r =>{historial.push("/")})
            .catch ((e) =>{
            if(e.code == "auth/invalid-email"){
                setMsgError("Formato de email incorrecto")
            }
            if(e.code == "auth/weak-password"){
                setMsgError("Password should be at least 6 characters")
            }
        })
    }

    const loginUsuarios=()=>{
        auth.signInWithEmailAndPassword(email, pass)
        .then(r=> {historial.push("/")})
        .catch((error)=>{
            //auth/wrong-password
            //The password is invalid or the user does not have a password.
            //auth/user-not-found
            //email incorrecto
            if(error.code=="auth/wrong-password"){
                setMsgError("The password is invalid or the user does not have a password.")
            }
        })
    }

    return (
        <>
        <NavBar />
        <ContainerSign>
            <FormSignContainer>
                <FormSignH1>Hazte miembro</FormSignH1>
                <FormSign onSubmit={registrarUsuario} autoComplete="off">
                    <FormInput onChange={(e)=>{setEmail(e.target.value)}} placeholder="Ingrese un email válido" type="email"/>
                    <FormInput  onChange={(e)=>{setPass(e.target.value)}} placeholder="Ingrese una contraseña" type="password"/>
                    <FormInputBtn value="Registrar usuario" type="submit"/>
                </FormSign>
                <BtnSignIn onClick={loginUsuarios}>Iniciar sesión</BtnSignIn>
                {
                    msgerror !== null ? 
                    (
                        <DivMsgError>
                            {msgerror}    
                        </DivMsgError>
                    ) 
                    : 
                    (
                        <span></span>
                    )
                }
                </FormSignContainer>
        </ContainerSign>
            
        </>
    )
}

export default Sign
