import classes from './css/AvailableMeals.module.css'
import Section from './../UI/Section';
import UnorderedList from './../UI/UnorderedList';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {

    return (
        <Section className={classes.meals} >
            <Card>
                <UnorderedList meals={DUMMY_MEALS} />
            </Card>
        </Section>
    )
}
export default AvailableMeals;