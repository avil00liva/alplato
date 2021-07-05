import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../config/config'
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import {ConsultasContainer,
        Consultas,
        ConsultaLi,
        BtnBorrarConsulta,     
} 
from "./LeerConsultasElements"

const LeerConsultas = () => {
    const [consultas, setConsultas]=useState([])
    useEffect(()=>{
        const getConsultas=async (e)=>{
            const {docs}=await db.collection("consultas").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data() }))
            setConsultas(nuevoArray)
        }
        getConsultas()
    },[])
    const TerminarConsulta=async(id)=>{
        try {
            await db.collection("consultas").doc(id).delete()
            const {docs}=await db.collection("consultas").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data()}))
            setConsultas(nuevoArray)
        } catch(e){
            console.log(e)
        }
    }
    return (
        <> 
            <Navbar />
            <ConsultasContainer>
                {
                    consultas.length !== 0?
                    (
                        consultas.map(item=>(
                            <Consultas key={item.id}>
                                <ConsultaLi><div>
                                                <div>
                                                    <h2>Nombre:</h2>
                                                    <p>{item.nombre}</p>
                                                </div>
                                            </div>
                                </ConsultaLi>
                                <ConsultaLi><div>
                                                <div>
                                                    <h2>Email:</h2>
                                                    <p>{item.email}</p>
                                                </div>
                                            </div>
                                </ConsultaLi>
                                <ConsultaLi><div>
                                                <div>
                                                    <h2>Consulta:</h2>
                                                    <p>{item.pregunta}</p>
                                                </div>
                                            </div>
                                </ConsultaLi>
                                <li>
                                    <div>
                                        <BtnBorrarConsulta onClick={(id)=>{TerminarConsulta(item.id)}}>Terminar consulta</BtnBorrarConsulta>
                                    </div>
                                </li>
                            </Consultas>
                        ))
                    )
                    :
                    (
                        <span>No hay consultas</span>
                    )
                }
            </ConsultasContainer>
            <Footer />
        </>
    )
}

export default LeerConsultas
