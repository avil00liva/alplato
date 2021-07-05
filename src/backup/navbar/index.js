import React, {useEffect} from 'react'
import { useState } from 'react';
import {animateScroll as scroll} from "react-scroll";
import {auth} from "../../config/config"
import {useHistory} from "react-router-dom"
import {NavContainer,
        Navbar,
        LinkLogo,
        Lista,
        Item,
        ItemConsultas,
        LinkAddress,
        BtnCerrarSesion,} from "./navbarElements"

const NavBar = () => {
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
  const ocultas={
    opacity: 0,
    cursor: "none",
  }

    return (
        <>
          <NavContainer>
            <Navbar>
              <LinkLogo to="/">alPlato</LinkLogo>
              <Lista>
                {
                  usuario ?
                  (
                  <Item><ItemConsultas to="/consultas">Consultas</ItemConsultas></Item>
                  )
                  :
                  (
                    /*PROBAR CON SPAN EN LUGAR DE USAR EL STYLE */
                  <Item><ItemConsultas  style={{opacity: "0.0", cursor: "default"}}>Consultas</ItemConsultas></Item>
                  )
                }
                {
                  usuario ?
                  (
                  <Item><ItemConsultas to="/addproducts">Agregar</ItemConsultas></Item>
                  )
                  :
                  (
                  <Item><ItemConsultas style={{opacity: "0.0", cursor: "default"}}>Agregar</ItemConsultas></Item>
                  )
                }
                <Item><LinkAddress to="/foodmenu">Explora</LinkAddress></Item>
                <Item><LinkAddress>Especiales</LinkAddress></Item>
                <Item><LinkAddress>Licencia</LinkAddress></Item>
              </Lista>
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
            </Navbar>
          </NavContainer> 
        </>
    )
}

export default NavBar
