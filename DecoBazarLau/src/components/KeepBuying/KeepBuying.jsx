import './KeepBuying.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const KeepBuying = ({sendFn}) => {
    return (
        <div className='cart-list-products'>
            <h4>No hay productos en el carrito</h4>
                <Link to="/">
                    <Button variant="contained" onClick={sendFn}>Seguir comprando</Button>
                </Link>
        </div>
    )
}

KeepBuying.propTypes = {
    sendFn: PropTypes.string.isRequired
}

export default KeepBuying