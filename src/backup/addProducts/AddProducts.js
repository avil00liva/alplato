import React, { useState } from 'react'
import {H2, AddContainer, LinkReturn} from "./AddProductsElements"
import Navbar from "../navbar/index"
import {storage, db} from "../../config/config"


const AddProducts = () => {
    const [productName, setProductName]=useState("")
    const [productPrice, setProductPrice]=useState(0)
    const [productImg, setProductImg]=useState(null)
    const [error, setError]=useState("")

    const types=['image/png', 'image/jpeg', 'image/jpg']

    const productImgHandler=(e)=>{
        let selectedFile=e.target.files[0]
        if(selectedFile && types.includes(selectedFile.type)){
            setProductImg(selectedFile)
            setError("")
        } else {
            setProductImg(null)
            setError("Por favor seleccione un tipo de imagen png o jpeg")
        }
    }
    const addProducts=(e)=>{
        e.preventDefault()
        //console.log(productName, productPrice, productImg)
        const uploadTask=storage.ref(`FoodImg/${productImg.name}`).put(productImg)
        uploadTask.on("state_change", snapshot=>{
            const progress=(snapshot.bytesTransferred/snapshot.totalBytes) * 100
            console.log(progress)
        }, err=>{
            setError(err.message)
        }, ()=>{
            storage.ref('FoodImg').child(productImg.name).getDownloadURL().then(url=>{
                db.collection("Plates").add({
                    FoodImg: url,
                    FoodPrice: Number(productPrice),
                    PlateFood: productName,
                }).then(()=>{
                    setProductName("")
                    setProductPrice(0)
                    setProductImg("")
                    setError("")
                    document.getElementById("file").value=""
                }).catch(err=>setError(err.message))
            })
        })
    }

    return (
        <>  
            <Navbar />
            <AddContainer>
                <br/>
                <H2>ADD PRODUCTS</H2>
                <hr/>
                <form autoComplete="off" onSubmit={addProducts}>
                    <label htmlFor="product-name">Product name</label>
                    <br/>
                    <input type="text" required  onChange={(e)=>setProductName(e.target.value)} value={productName}/>
                    <label htmlFor="product-price">Product price</label>
                    <br/>
                    <input type="number" required onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
                    <input type="file" onChange={productImgHandler} id="file"/>
                    <br/>
                    <button>ADD</button>
                </form>
                {error &&<span>{error}</span>}
            </AddContainer>
        </>
    )
}

export default AddProducts
