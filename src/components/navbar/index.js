import React, {useEffect, useState} from 'react'
import "./navbarElements.css"
import {animateScroll as scroll} from "react-scroll";
import {FaBars} from "react-icons/fa"
import { db } from '../../config/config'
import {auth} from "../../config/config"
import {useHistory} from "react-router-dom"
import {NavContainer,
        Navbar,
        LinkLogo,
        Lista,
        Item,
        ItemConsultas,
        LinkAddress,
        MobileIcon,
        BtnCerrarSesion,} from "./navbarElements"

const NavBar = ({toggle}) => {
  const [consultas, setConsultas]=useState([])
    useEffect(()=>{
        const getConsultas=async (e)=>{
            const {docs}=await db.collection("consultas").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data() }))
            setConsultas(nuevoArray)
        }
        getConsultas()
    },[])

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
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <Lista>
                {
                  usuario == "admin@admin.com" ?
                  (
                  <Item>
                    <ItemConsultas to="/consultas">Consultas</ItemConsultas>
                    {
                      consultas.length !== 0 ?
                      (
                        consultas.map(item=>(
                          <span className="consultasNoti">!</span>
                        ))
                      )
                      :
                      (
                        <span></span>
                      )
                    } 
                  </Item>
                  )
                  :
                  (
                    /*PROBAR CON SPAN EN LUGAR DE USAR EL STYLE */
                  <Item><ItemConsultas  style={{opacity: "0.0", cursor: "default"}}>Consultas</ItemConsultas></Item>
                  )
                }
                {
                  usuario == "admin@admin.com" ?
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
                <Item>{
                  usuario ?
                  (
                  <BtnCerrarSesion onClick={cerrarSesion}>Cerrar sesion</BtnCerrarSesion>
                  )
                  :
                  (
                   <span></span>
                  )
                }</Item>
              </Lista>
              
            </Navbar>
          </NavContainer> 
        </>
    )
}

export default NavBar
