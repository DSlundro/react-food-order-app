import { useContext } from 'react';
import classes from './css/Cart.module.css'
import Button from './../UI/Button';
import Modal from './../UI/Modal';
import CartContext from './../../store/cart-context';
import CartItem from './CartItem';


const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItems = 
    <ul className={classes['cart-items']}>
        {cartCtx.items.map( item => 
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount}
                price={item.price}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
        )}
    </ul>

    return (
        props.show &&
        <Modal hide={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <Button
                    event={props.onHideCart}
                    className={classes['button--alt']}
                >Close</Button>
                {
                    hasItems &&
                    <Button
                    className={classes.button}
                    >Order</Button>
                }
            </div>
        </Modal>
    )
}
export default Cart;