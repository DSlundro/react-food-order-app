const Button = props => {
    return (
        <button 
            onClick={props.event}
            className={props.className}
        >{props.children}</button>
    )
}
export default Button;