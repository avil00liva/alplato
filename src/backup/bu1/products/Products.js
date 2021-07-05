import React, {useContext, useState} from 'react'
import {H1} from "./ProductsElements"
import "./Products.css"
import {ProductsContext} from "../../global/ProductsContext"
import Navbar from "../navbar/index"
import Footer from "../footer/index"


const Products = () => {
    const [buscarProductos, setBuscarProductos]=useState([])

    const {products}=useContext(ProductsContext) 
    console.log(products)
    return (
            <>
                <Navbar />
                {products.length !== 0 && <h1 className="h1Products">Catálogo de comidas</h1>}
                
                {products.length !== 0 && 
                    <div className="content">
                        <input className="inputMenu" type="text" onChange={(e)=>{setBuscarProductos(e.target.value.toLowerCase())}} placeholder="Busca tu plato aqui..." autoComplete="off"/>
                    </div> }
                <div className='products-container'>
                    {products.length === 0 && <div>Conexión lenta...no hay productos para mostrar</div>}
                    {products.filter((products)=>{
                        if (buscarProductos === [""]){
                            return products
                        } else if (products.PlateFood.toLowerCase().includes(buscarProductos)){
                            return products
                        }
                    }).map(product => (
                        <div className='product-card' key={product.ProductID}>
                            <div className='product-img'>
                                <img src={product.FoodImg} alt="not found" />
                            </div>
                            <div className='product-name'>
                                {product.PlateFood}
                            </div>
                            <div className='product-price'>
                                $ {product.FoodPrice}.00
                            </div>
                            <button className='addcart-btn'>ADD TO CART</button>
                        </div>
                    ))}
                </div>
                <Footer />
             </>
    )

}
export default Products
