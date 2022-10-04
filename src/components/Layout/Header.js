import classes from './css/Headers.module.css'
import mealsImg from '../../assets/meals.jpg'

const Header = props => {
    return (
        <>
        <header
            className={classes.header}
        >
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>

        <div 
            className={classes['main-image']}
        >
            <img
                src={mealsImg} 
                alt='Meals'
            />
        </div>
        </>
    )
}
export default Header;