import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (time: number) => {
	const hours = String(Math.floor(time / 3600));
	const minutes = String(Math.floor((time % 3600) / 60));
	const seconds = String(Math.floor(time % 60));

	return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
};

const StopWatch = () => {
	const [time, setTime] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);

	const resetHandler = () => {
		setTime(0);
		setIsRunning(false);
	};

	useEffect(() => {
		let intervalID: number;
		if (isRunning) {
			intervalID = setInterval(() => {
				setTime((prev) => {
					return prev + 1;
				});
			}, 1000);
		}

		return () => clearInterval(intervalID);
	}, [isRunning]);

	return (
		<div className="admin-container">
			<AdminSidebar />
			<main className="dashboard-app-container">
				<h1>Stopwatch</h1>
				<section>
					<div className="stopwatch">
						<h2>{formatTime(time)}</h2>
						<button onClick={() => setIsRunning((prev) => !prev)}>{isRunning ? "Stop" : "Start"}</button>
						<button onClick={resetHandler}>Reset</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default StopWatch;
