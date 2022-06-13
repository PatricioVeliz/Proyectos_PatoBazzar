import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../Asyncmock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../Asyncmock";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);


    const { categoryId } = useParams()

    useEffect (() => {
        if (!categoryId){

            getProducts().then(result => setProducts(result));
        } else {
            getProductsByCategory(categoryId).then(result => {
                setProducts(result)
            })
        }
    }, [categoryId])


    return (
        <>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
        </>
    )
}
export default ItemListContainer