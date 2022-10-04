
import CartIcon from '../../UI/Cart/CartIcon';
import classes from './css/HeaderCartButton.module.css'

const HeaderCartButton = props => {

    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}
export default HeaderCartButton;