
import List from './List';

const UnorderedList = props => {

    return (
        <ul>
            {props.meals.map( meal => {
                return (
                    <>
                        <List
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                        />
                    </>
                )
            })}
        </ul>
    )
}
export default UnorderedList;