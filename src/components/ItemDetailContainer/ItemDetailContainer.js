import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { getProductsID } from "../../Asyncmock";

const ItemDetailContainer= ({id}) =>{
    const [product, setProduct] = useState();

    useEffect(() => {
        getProductsID(id).then(response => {
            setProduct(response)
        })
    }, [])

    return (
        <ItemDetail title={product?.name}/>
    )
}
export default ItemDetailContainer