import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    return (
        <>
        <ItemList />
        <ItemCount initial={1} stock={5} />
        </>
    )
}
export default ItemListContainer