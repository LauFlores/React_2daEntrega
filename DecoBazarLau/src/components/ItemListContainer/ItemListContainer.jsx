import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticulos } from '../../services/services';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { clase } = useParams();
    const [isLoading, setIsLoading] = useState(true);
  
  
    useEffect(() => {
      setIsLoading(true);
  
      getArticulos(clase).then((response) => {
        setItems(response);
        setIsLoading(false);
  
      });
    }, [clase]);
  
    return <ItemList productos={items} isLoading={isLoading} />;
  };
  
  export default ItemListContainer;