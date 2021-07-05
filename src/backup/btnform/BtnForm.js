import React, {useState} from 'react'
import {MdClose} from "react-icons/md"
import {db} from "../../config/config"
import {motion, AnimatePresence} from "framer-motion"
import {
    FormModal,
    FormIClose,
    DivForm,
    LabelForm,
    InputForm,
    TextAreaForm,
    LinkBtnForm,
    BtnFormSubmit
} from "./BtnFormElements"

const containerVariants={
    hidden:{
        x: "100vw",
        opacity: 0,
    },
    show:{
        x: "0vw",
        opacity: 1,
        transition: {delay:0.2, ease: "easeInOut"},
    }
}

/*/*<LinkBtnForm className="linkBtnForm">*/
/*</LinkBtnForm>*/  //Encierran a BtnFormSubmit

const BtnModal = ({showModal, setShowModal}) => {
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
        {showModal && (
            <AnimatePresence exitBeforeEnter>
                <motion.FormModal onSubmit={Consultas} className="formModal" target="_parent" autoComplete="off" variants={containerVariants} initial="hidden" animate="show">
                    <FormIClose onClick={()=>setShowModal(false)}><MdClose/></FormIClose>
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
                </motion.FormModal>
            </AnimatePresence>
            )}
        </> 
    )
}

export default BtnModal
