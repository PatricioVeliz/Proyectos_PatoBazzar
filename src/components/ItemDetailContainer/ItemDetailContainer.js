import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { getProductsID } from "../../Asyncmock";

const ItemDetailContainer= ({}) =>{
    const [product, setProduct] = useState({});

    useEffect(() =>{
            getProductsID('1').then(result => setProduct(result));
        },[])

    return (
        <ItemDetail product={product?.name}/>
    )
}
export default ItemDetailContainer