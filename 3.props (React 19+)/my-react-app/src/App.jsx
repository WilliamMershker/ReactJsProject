import Student from "./Student";

function App()
 {
    return (
        <>
            <Student name="Mershker" age={21} isStudent={true} />
            <Student name="Patrick" age={42} isStudent={false} />
            <Student name="Sarah" age={30} isStudent={false} />
            <Student name="Sandy" age={27} isStudent={true} />
            <Student />
        </>
    );
}

export default App;