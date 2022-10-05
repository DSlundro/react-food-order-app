
import CartIcon from '../../Cart/CartIcon';
import classes from './css/HeaderCartButton.module.css'
import Button from './../../UI/Button';
import { useContext } from 'react';
import CartContext from './../../../store/cart-context';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCardItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    return (
        <Button 
            event={props.onShowCart}
            className={classes.button}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCardItems}</span>
        </Button>
    )
}
export default HeaderCartButton;