import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from './components/Meals/Meals';
import { useState } from 'react';

function App() {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false)
    }

    return (
        <>
            <Cart 
                show={showCart}
                onShowCart={showCartHandler}
                onHideCart={hideCartHandler}
            />
            <Header 
                onShowCart={showCartHandler}
            />
            <Meals />
        </>
    );
}

export default App;
