import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../Asyncmock";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts().then(result => setProducts(result));
    }, [])

    
    return (
        <>
        <ItemList products={products}/>
        
        </>
    )
}
export default ItemListContainer