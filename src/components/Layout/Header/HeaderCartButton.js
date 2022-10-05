
import CartIcon from '../../Cart/CartIcon';
import classes from './css/HeaderCartButton.module.css'
import Button from './../../UI/Button';

const HeaderCartButton = props => {

    return (
        <Button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </Button>
    )
}
export default HeaderCartButton;