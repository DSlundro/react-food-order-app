import HeaderCartButton from './HeaderCartButton';
import HeaderTitle from './HeaderTitle';

const Navbar = props => {

    return (
        <header className={props.className}>
            <HeaderTitle />
            <HeaderCartButton />
        </header>
    )
}
export default Navbar;