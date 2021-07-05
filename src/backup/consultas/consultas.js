import React, {useState} from 'react'
import {MdClose} from "react-icons/md"
import {db} from "../../config/config"
import {
    FormModal,
    FormIClose,
    DivForm,
    LabelForm,
    InputForm,
    TextAreaForm,
    BtnFormSubmit
} from "./consultasElements"
const Consultas = () => {

    const [nombre, setNombre]=useState("")
    const [email, setEmail]=useState("")
    const [pregunta, setPregunta]=useState("")
    const [error, setError]=useState("")
    const [consulta, setConsulta]=useState([])

    const Consultas=async (e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            setError("El campo nombre está vacío")
        }
        if(!email.trim()){
            setError("El campo email está vacío")
        }
        if(!pregunta.trim()){
            setError("El campo nombre está vacío")
        }
        const mensaje={
            nombre: nombre,
            email: email,
            pregunta: pregunta,
        }
        try{
            const data=await db.collection("consultas").add(mensaje)
            const {docs}=await db.collection("consultas").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data() }))
            setConsulta(nuevoArray)
            console.log("Consulta enviada")
        } catch(e) {
            console.log(e)
        }
        setNombre("")
        setEmail("")
        setPregunta("")
        
    }

    return (
        <>
            <FormModal onSubmit={Consultas} className="formModal" target="_parent" autoComplete="off">
                <FormIClose><MdClose/></FormIClose>
                <DivForm>
                    <LabelForm htmlFor="">Nombre</LabelForm>
                    <InputForm type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} autoComplete="off"/>
                </DivForm>            
                <DivForm>
                    <LabelForm htmlFor="">Email</LabelForm>
                    <InputForm type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete="off"/>
                </DivForm>  
                <DivForm>
                    <LabelForm htmlFor="">Consulta</LabelForm>
                    <TextAreaForm value={pregunta} onChange={(e)=>{setPregunta(e.target.value)}}></TextAreaForm>
                </DivForm>
                    <BtnFormSubmit to="/">Enviar consulta</BtnFormSubmit> 
            </FormModal>   
        </>
    )
}

export default Consultas
