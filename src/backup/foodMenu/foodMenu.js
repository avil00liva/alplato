import React, { useState } from 'react'
import "./foodMenu.css"
import Navbar from "../navbar/index"
import { useEffect } from 'react'
import {db} from "../../config/config"
import Footer from '../footer'

const FoodMenu = () => {
    const [foods, setFoods]=useState([])
    const [buscarProductos, setBuscarProductos]=useState([])

    useEffect(()=>{
        db.collection("Plates").onSnapshot(snapshot=>(
            setFoods(snapshot.docs.map(doc=>doc.data()))
        ))
    }, [])

    return (
        <>
            <Navbar />
                    
                    {foods.length !== 0 && 
                        <div className="content">
                            <h1 className="h1MenuFood">Catálogo de comidas</h1>
                            <input className="inputMenu" type="text" onChange={(e)=>{setBuscarProductos(e.target.value.toLowerCase())}} placeholder="Busca tu plato aqui..." autoComplete="off"/>
                        </div> }
            <div className="products-container">
                    {foods.length === 0 && <div>Conexión lenta...no hay productos para mostrar</div>}
                    {foods.filter((foods)=>{
                        if (buscarProductos === [""]){
                            return foods
                        } else if (foods.PlateFood.toLowerCase().includes(buscarProductos)){
                            return foods
                        }
                    }).map(({FoodImg,FoodPrice,PlateFood})=>(
                        <div className='product-card'>    
                            <div className="product-img">
                                <img src={FoodImg} alt="Food plate"/>
                            </div>
                            <div className="product-name">
                                {PlateFood}
                            </div>
                            <div className="product-price">
                                ${FoodPrice}.00
                            </div>
                            <button className='addcart-btn'>Ordenar pedido</button>
                        </div>    
                    ))}
            </div>  
            <Footer />  
        </>
    )
}

export default FoodMenu
