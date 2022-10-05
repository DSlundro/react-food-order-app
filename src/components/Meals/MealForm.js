import Input from '../UI/Input';
import classes from './css/MealForm.module.css'
import Button from './../UI/Button';
import { useRef, useState } from 'react';


const MealForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if(
            enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        };

        props.onAddToCard(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
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
            {!amountIsValid && <p style={{color: 'red'}}>Please enter a valid amount (1-5)</p>}
        </form>
    )
}
export default MealForm;