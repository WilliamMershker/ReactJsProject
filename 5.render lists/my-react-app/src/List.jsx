function List(props) 
{
    /*
    const fruits = [
        {id: 1, name: "Apple", calories: 95},
        {id: 2, name: "Orange", calories: 45},
        {id: 3, name: "Banana", calories: 105},
        {id: 4, name: "Coconut", calories: 159},
        {id: 5, name: "Pineapple", calories: 37},
    ];

    const lowcalFruit = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

    const lowCalItems = lowcalFruit.map(fruit =>
        <li key={fruit.id}>
            ID: {fruit.id} - {fruit.name} - {fruit.calories} calories
        </li>
    );

    const highCalItems = highCalFruit.map(fruit =>
        <li key={fruit.id}>
            ID: {fruit.id} - {fruit.name} - {fruit.calories} calories
        </li>
    );

    return (
        <>
            <h3>Low Calories</h3>
            <ul>{lowCalItems}</ul>

            <h3>High Calories</h3>
            <ul>{highCalItems}</ul>
        </>
    );
    */

    const lowCalFruit = props.items.filter(
        fruit => fruit.calories < 100
    );

    const highCalFruit = props.items.filter(
        fruit => fruit.calories >= 100
    );

    const lowCalItems = lowCalFruit.map(fruit =>
        <li key={fruit.id}>
            ID: {fruit.id} - {fruit.name} - {fruit.calories} calories
        </li>
    );

    const highCalItems = highCalFruit.map(fruit =>
        <li key={fruit.id}>
            ID: {fruit.id} - {fruit.name} - {fruit.calories} calories
        </li>
    );

    return (
        <>
            <h2>{props.category}</h2>

            <h3>Low Calories</h3>
            <ul>{lowCalItems}</ul>

            <h3>High Calories</h3>
            <ul>{highCalItems}</ul>
        </>
    );
    
}

export default List;