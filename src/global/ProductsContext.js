import React, {createContext} from 'react'
import {db} from "../config/config"

export const ProductsContext = createContext()

export class ProductsContextProvider extends React.Component{
    
    state={
        products:[]
    }

    componentDidMount(){
        const prevProducts=this.state.products;
        db.collection("Plates").onSnapshot(snapshot=>{
            let changes=snapshot.docChanges()
            changes.forEach(change=>{
                if(change.type==="added"){
                    prevProducts.push({
                        ProductID: change.doc.id,
                        PlateFood: change.doc.data().PlateFood,
                        FoodPrice: change.doc.data().FoodPrice,
                        FoodImg: change.doc.data().FoodImg
                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })
    }
    
    render(){
        return(
            <ProductsContext.Provider value={{products:[...this.state.products]}} >
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

export default ProductsContext
