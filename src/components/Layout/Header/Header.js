import classes from './css/Headers.module.css'
import mealsImg from '../../../assets/meals.jpg'
import Navbar from './Navbar';
import Image from '../../UI/Image';

const Header = props => {
    return (
        <header>
            <Navbar 
                onShowCart={props.onShowCart}
                className={classes.header} 
            />
            <Image
                className={classes['main-image']}
                src={mealsImg} 
                alt='Meals'
            />
        </header>
    )
}
export default Header;