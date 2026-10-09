import { useState } from "react";

function MyComponent() 
{

    const [name, setName] = useState("World");
    const [age, setAge] = useState(20);
    const [isEmployed, setIsEmployed] = useState(true);

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>This is my React component.</p>
            <p>Age: {age}</p>
            <p>Employed: {isEmployed ? "Yes" : "No"}</p>

            <button onClick={() => setName("Bro")}>
                Change Name
            </button>

            <button onClick={() => setAge(age + 1)}>
                Increase Age
            </button>

            <button onClick={() => setIsEmployed(!isEmployed)}>
                Toggle Employment Status
            </button>

        </div>

        


    );
}

export default MyComponent;