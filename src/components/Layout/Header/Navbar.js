import HeaderCartButton from './HeaderCartButton';
import HeaderTitle from './HeaderTitle';

const Navbar = props => {

    return (
        <header className={props.className}>
            <HeaderTitle />
            <HeaderCartButton onShowCart={props.onShowCart} />
        </header>
    )
}
export default Navbar;