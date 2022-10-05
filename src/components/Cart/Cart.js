import classes from './css/Card.module.css'
import Button from './../UI/Button';


const Cart = props => {
    const cartItems = 
    <ul className={classes['cart-items']}>
        {
            [
                {
                    id: 'c1', 
                    name: 'Sushi',
                    amount: 2,
                    price: 12.99
                }
            ].map( item => <li>{item.name}</li>)
        }
    </ul>

    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <Button className={classes['button--alt']}>Close</Button>
                <Button className={classes.button}>Order</Button>
            </div>
        </div>
    )
}
export default Cart;