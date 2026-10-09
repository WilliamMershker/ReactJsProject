import { useRef } from "react";

function MyComponent() {

    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <div>

            <button onClick={handleClick}>
                Click me!
            </button>

            <br /><br />

            <input
                ref={inputRef}
                type="text"
            />

        </div>
    );
}

export default MyComponent;