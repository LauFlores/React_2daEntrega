import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getArticulo } from '../../services/services';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      getArticulo(id).then((response) => {
         setItem(response);
      });
    }, [id]);
  
    return <ItemDetail producto={item} />;
  }
  
  export default ItemDetailContainer