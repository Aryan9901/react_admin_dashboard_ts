/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const Toss = () => {
	const [angle, setAngle] = useState(0);

	const flipCoin = () => {
		if (Math.random() > 0.5) setAngle((prev) => prev + 180);
		else setAngle((prev) => prev + 360);
	};

	return (
		<div className="admin-container">
			<AdminSidebar />
			<main className="dashboard-app-container">
				<h1>Toss Coin</h1>
				<section>
					<article className="tosscoin" style={{ transform: `rotateY(${angle}deg)` }}>
						<div></div>
						<div></div>
					</article>
					<button onClick={flipCoin}>Toss</button>
				</section>
			</main>
		</div>
	);
};

export default Toss;
