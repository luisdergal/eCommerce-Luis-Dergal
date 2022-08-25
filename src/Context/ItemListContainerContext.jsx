
import { useGetProductsFirestore } from "../../../hooks/useGetProductsFirebase"
import ItemList from "../../ItemList/ItemList"
import Loading from "../../Loading/Loading"

const ItemListContainer = ({ saludo }) => {         
    
    const [productos, loading] = useGetProductsFirestore()
    
    return (
        <div>
            { saludo }                
                { loading ? 
                    <Loading />
                    : 
                    <ItemList productos={productos} />
                }   
        </div>
        
    )
}

export default ItemListContainer