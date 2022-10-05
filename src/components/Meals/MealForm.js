import Input from '../UI/Input';
import classes from './css/MealForm.module.css'
import Button from './../UI/Button';


const MealForm = props => {

    return (
        <form className={classes.form}>
            <Input 
                label='Amount' 
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <Button>+ Add</Button>
        </form>
    )
}
export default MealForm;