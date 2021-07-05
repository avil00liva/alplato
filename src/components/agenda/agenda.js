import React,{useState, useEffect} from 'react'
import NavBar from '../navbar'
import {db} from "../../config/config"
import {AgendaContainer,
        Div1,
        DivForm,
        H2Form,
        Formulario,
        InputName,
        InputTask,
        InputSubmmit,
        SpanError,
        AgendaElements,
        H2ListaTareas
} from "./agendaElements"
const Agenda = () => {
    const [modoEdit, setModoEdit]=useState(null)
    const [idUsuario, setIdUsuario]=useState()
    const [nombre, setNombre]=useState("")
    const [task, setTask]=useState('')
    const [error, setError]=useState("")
    const [tareas, setTareas]=useState([])

    const settTareas= async (e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            setError("El campo nombre está vacío")
        }
        if(!task.trim()){
            setError("El campo tarea está vacío")
        }
        const usuario={
            nombre:nombre,
            tarea: task,
        }
        try{
            const data= await db.collection("agenda").add(usuario)
            const {docs}=await db.collection("agenda").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data() }))
            setTareas(nuevoArray)
            console.log("Tarea añadida")
        }catch(e){
            console.log(e)
        }
        setNombre("")
        setTask("")
    }
    const BtnActualizar=async(id)=>{
        try{
            const data= await db.collection("agenda").doc(id).get()
            const {idUsuario, nombre, tarea} = data.data()
            setNombre(nombre)
            setTask(tarea)
            setIdUsuario(id)
            setModoEdit(true)
            console.log(id)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        const getTask=async (e)=>{
            const {docs}=await db.collection("agenda").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data() }))
            setTareas(nuevoArray)
        }
        getTask()
    },[])
    const BorrarUsuario=async(id)=>{
        try{
            await db.collection("agenda").doc(id).delete()
            const {docs}=await db.collection("agenda").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data() }))
            setTareas(nuevoArray)
        }catch(e){
            console.log(e)
        }
    }
    const setUpdate = async (e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            setError("El campo nombre está vacío")
        }
        if(!task.trim()){
            setError("El campo tarea está vacío")
        }
        const userUpdate={
            nombre: nombre,
            tarea: task,
        }
        try {
            await db.collection("agenda").doc(idUsuario).set(userUpdate)
            const {docs}=await db.collection("agenda").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data() }))
            setTareas(nuevoArray)
        } catch(e) {
            console.log(e)
        }
        setNombre("")
        setTask("")
        setIdUsuario("")
        setModoEdit(null)
    }
    return (
        <>
            <NavBar />
            <AgendaContainer>
                <Div1>
                    <DivForm>
                        <H2Form>Registra tus tareas</H2Form>
                        <Formulario onSubmit={modoEdit ? setUpdate : settTareas} autoComplete="off">
                            <InputName value={nombre} onChange={(e)=>{setNombre(e.target.value)}} placeholder="Ingresa tu nombre" type="text"/>
                            <InputTask value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder="Ingresa tu tarea" type="text"/>
                            {
                                modoEdit ?
                                (
                                    <InputSubmmit type="submit" value="Editar" />
                                )
                                :
                                (
                                    <InputSubmmit type="submit" value="Registrar" />
                                )
                            }
                        </Formulario>
                        {
                            error ? 
                            (
                                <div>
                                    <p>{error}</p>
                                </div>
                            )
                            :
                            (
                                <span></span>
                            )
                        }
                    </DivForm>
                    <AgendaElements>
                        <H2ListaTareas>Tu lista de tareas</H2ListaTareas>
                        <ul className="agendaUl">
                        {
                            tareas.length !== 0?
                            (
                                tareas.map(item=>(
                                    <li className="liTask" key={item.id}>{item.nombre} -- {item.tarea}
                                        <div>
                                            <button onClick={(id)=>{BorrarUsuario(item.id)}} className="btnDeleteTask">Delete</button>
                                            <button onClick={(id)=>{BtnActualizar(item.id)}} className="btnEditTask">Edit</button>
                                        </div>
                                    </li>
                                ))
                            )
                            :
                            (
                                <span>No hay tareas</span>
                            )
                        }
                        </ul>
                        
                    </AgendaElements>
                </Div1>
            </AgendaContainer>
        </>
    )
}

export default Agenda
