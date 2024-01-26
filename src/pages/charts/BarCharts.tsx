import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months = ["Jamuary", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BarCharts = () => {
	return (
		<div className="admin-container">
			<AdminSidebar />
			<main className="chart-container">
				<h1>Bar Charts</h1>
				<section>
					<BarChart
						data_1={[200, 444, 343, 556, 778, 455, 990]}
						data_2={[300, 144, 433, 655, 235, 755, 190]}
						title_1="Products"
						title_2="Users"
						bgColor_1="hsl(260,60%,30%)"
						bgColor_2="hsl(360,90%,90%)"
						legend={true}
					/>
					<h2>Top Selling Products & Top Customers</h2>
				</section>
				<section>
					<BarChart
						data_1={[200, 444, 343, 556, 778, 455, 790, 120, 450, 345, 234, 664]}
						data_2={[]}
						title_1="Products"
						horizontal={true}
						title_2=""
						bgColor_1="hsl(260,60%,30%)"
						bgColor_2=""
						labels={months}
						categoryPercentage={1.1}
					/>
					<h2>Orders throughout the year</h2>
				</section>
			</main>
		</div>
	);
};

export default BarCharts;
