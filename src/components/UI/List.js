import MealForm from '../Meals/MealForm';
import classes from './css/MealItem.module.css'


const List = props => {
    const price = `$ ${props.price}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealForm id={props.id}/>
            </div>
        </li>
    )
}
export default List;