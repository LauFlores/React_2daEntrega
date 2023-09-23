import './NavigableMenu.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';


const NavigableMenu = ({classProp}) => {


    // Menu item de Material UI
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <nav className='nav__container'>
            <ul className={classProp}>
                <li>
                    <Link to={"/"}>
                        <Button
                            variant="text"
                            className='nav-btn'
                            sx={{ my: 2, color: { xs: '#000000', md: 'white'}}}
                        >
                            Home
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button
                        className='nav-btn'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        variant="text"
                        disableRipple
                        aria-expanded={open ? 'true' : undefined}
                        sx={{ my: 2, color: { xs: '#000000', md: 'white'}}}
                        onClick={handleClick}
                    >
                        Categorias
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>
                            <MenuItem to="/category/cocina" onClick={handleClose}>
                            Cocina
                            </MenuItem>
                            <MenuItem to="/category/dormitorio" onClick={handleClose}>
                            Dormitorio
                            </MenuItem>
                            <MenuItem to="/category/banio" onClick={handleClose}>
                            Baño
                            </MenuItem>
                            <MenuItem to="/category/hogar" onClick={handleClose}>
                            Deco Hogar
                            </MenuItem>
 
                    </Menu>
                </li>
                <li>
                    <Button
                        variant="text"
                        className='nav-btn'
                        sx={{ my: 2, color: { xs: '#000000', md: 'white'}}}
                    >
                        <Link to={"/contacto"}>Contacto</Link>
                    </Button>
                </li>
            </ul>
        </nav>
    )
}

NavigableMenu.propTypes = {
    classProp: PropTypes.string.isRequired
}

export default NavigableMenu;