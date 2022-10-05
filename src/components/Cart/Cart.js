import classes from './css/Cart.module.css'
import Button from './../UI/Button';
import Modal from './../UI/Modal';


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
            ].map( item => <li key='sdfsdsdf'>{item.name}</li>)
        }
    </ul>

    return (
        props.show &&
        <Modal hide={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <Button
                    event={props.onHideCart}
                    className={classes['button--alt']}
                >Close</Button>
                <Button

                    className={classes.button}
                >Order</Button>
            </div>
        </Modal>
    )
}
export default Cart;