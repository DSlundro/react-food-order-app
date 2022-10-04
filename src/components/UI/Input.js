import classes from './css/Input.modules.css'


const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input {...props.input}/>
        </div>
    )
}
export default Input