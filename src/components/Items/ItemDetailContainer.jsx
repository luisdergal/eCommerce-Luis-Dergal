import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const { detailId } = useParams()
    console.log(detailId)

    

  return (
    <div>ItemDetailContainer
        <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer