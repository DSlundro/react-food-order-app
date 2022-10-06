
import CartIcon from '../../Cart/CartIcon';
import classes from './css/HeaderCartButton.module.css'
import Button from './../../UI/Button';
import { useContext, useEffect, useState } from 'react';
import CartContext from './../../../store/cart-context';

const HeaderCartButton = props => {
    const [btnEffect, setBtnEffect] = useState(false)
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCardItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${btnEffect ? classes.bump : ''}`;


    useEffect(() => {
        if(items.length === 0) return;
        setBtnEffect(true);

        const timer = setTimeout(() => {
            setBtnEffect(false)
        },300)

        return () => {
            clearTimeout(timer)
        }
    },[items])


    return (
        <Button 
            event={props.onShowCart}
            className={btnClasses}
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