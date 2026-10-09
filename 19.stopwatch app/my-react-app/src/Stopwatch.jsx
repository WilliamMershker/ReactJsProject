import { useState, useRef } from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    function start() {

        if (!isRunning) {

            setIsRunning(true);

            startTimeRef.current = Date.now() - elapsedTime;

            intervalRef.current = setInterval(() => {

                setElapsedTime(
                    Date.now() - startTimeRef.current
                );

            }, 10);
        }
    }

    function stop() {

        if (isRunning) {

            setIsRunning(false);

            clearInterval(intervalRef.current);
        }
    }

    function reset() {

        setIsRunning(false);

        setElapsedTime(0);

        clearInterval(intervalRef.current);
    }

    function formatTime() {

        const hours = Math.floor(
            elapsedTime / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            elapsedTime / (1000 * 60) % 60
        );

        const seconds = Math.floor(
            elapsedTime / 1000 % 60
        );

        const milliseconds = Math.floor(
            (elapsedTime % 1000) / 10
        );

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    }

    function pad(number) {
        return number.toString().padStart(2, "0");
    }

    return (
        <div className="stopwatch-card">

            <p className="small-title">
                REACT STOPWATCH
            </p>

            <h1>Stopwatch</h1>

            <div className="time-display">
                {formatTime()}
            </div>

            <p className="status">
                Status:
                <span className={isRunning ? "running" : "stopped"}>
                    {isRunning ? " Running" : " Stopped"}
                </span>
            </p>

            <div className="buttons">

                <button
                    className="start-button"
                    onClick={start}
                >
                    Start
                </button>

                <button
                    className="stop-button"
                    onClick={stop}
                >
                    Stop
                </button>

                <button
                    className="reset-button"
                    onClick={reset}
                >
                    Reset
                </button>

            </div>

        </div>
    );
}

export default Stopwatch;