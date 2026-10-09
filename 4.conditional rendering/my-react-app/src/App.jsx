import UserGreeting from "./UserGreeting.jsx";

function App() 
{
    return (
        <>
            <UserGreeting isLoggedIn={false} username="Mershker" />
        </>
    );
}

export default App;