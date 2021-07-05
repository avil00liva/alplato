import React, {useEffect} from 'react'
import { useState } from 'react';
import {auth} from "../../config/config"
import {useHistory} from "react-router-dom"
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        ItemConsultas,
        LinkAddress,
        BtnCerrarSesion,
} from "./SidebarElements"


const Sidebar = ({isOpen, toggle}) => {

    const historial=useHistory()
    const[usuario,setUsuario]=useState(null)
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          setUsuario(user.email)
          console.log(user.email)
        }
      })
    },[])
    const cerrarSesion=()=>{
      auth.signOut()
      setUsuario(null)
      historial.push("/")
    } 


    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {
                        usuario ?
                        (
                        <ItemConsultas to="/consultas">Consultas</ItemConsultas>
                        )
                        :
                        (
                        /*PROBAR CON SPAN EN LUGAR DE USAR EL STYLE */
                        <ItemConsultas  style={{opacity: "0.0", cursor: "default"}}>Consultas</ItemConsultas>
                        )
                    }
                    {
                        usuario ?
                        (
                        <ItemConsultas to="/addproducts">Agregar</ItemConsultas>
                        )
                        :
                        (
                        <ItemConsultas style={{opacity: "0.0", cursor: "default"}}>Agregar</ItemConsultas>
                        )
                    }
                    <LinkAddress to="/foodmenu">Explora</LinkAddress>
                    <LinkAddress>Especiales</LinkAddress>
                    <LinkAddress>Licencia</LinkAddress>
                    {
                        usuario ?
                        (
                        <BtnCerrarSesion onClick={cerrarSesion}>Cerrar sesion</BtnCerrarSesion>
                        )
                        :
                        (
                        <span></span>
                        )
                    }
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
