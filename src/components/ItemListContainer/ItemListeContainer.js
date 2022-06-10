import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const onAdd = (quantify) =>{
        console.log(`Compraste ${quantify} unidades`);
    }
    return (
        <>
        <ItemList />
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer