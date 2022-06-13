import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { getProductsID } from "../../Asyncmock";
import { useParams } from "react-router-dom";

const ItemDetailContainer= () =>{
    const [product, setProduct] = useState({});

    const { productId } = useParams()

    useEffect(() =>{
            getProductsID(productId).then(result => setProduct(result));
        },[])

    return (
        <ItemDetail {...product}/>
    )
}
export default ItemDetailContainer