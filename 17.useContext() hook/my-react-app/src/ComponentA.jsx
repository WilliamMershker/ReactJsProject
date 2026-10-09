import { useState } from "react";
import ComponentB from "./ComponentB.jsx";
import UserContext from "./UserContext.jsx";

function ComponentA() {

    const [user, setUser] = useState("BroCode");

    return (
        <div className="box">

            <h2>Component A</h2>

            <p>Hello {user}</p>

            <button onClick={() => setUser("Vu")}>
                Change User
            </button>

            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>

        </div>
    );
}

export default ComponentA;