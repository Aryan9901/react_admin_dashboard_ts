import AdminSidebar from "../../components/AdminSidebar";
import { DougnutChart, PieChart } from "../../components/Charts";
import { categories } from "../../assets/data.json";

const PieCharts = () => {
	return (
		<div className="admin-container">
			<AdminSidebar />
			<main className="chart-container">
				<h1>Pie & Dougnut Charts</h1>
				<section>
					<div>
						<PieChart
							labels={["Processing", "Shipped", "Delivered"]}
							data={[12, 9, 13]}
							backgroundColor={[`red`, `rgb(0, 195, 0)`, `rgb(47, 0, 255)`]}
							offset={[0, 0, 50]}
							legends={false}
						/>
					</div>
					<h2>Order Fullfillment Ratio</h2>
				</section>
				<section>
					<div>
						<DougnutChart
							labels={categories.map((c) => c.heading)}
							data={categories.map((c) => c.value)}
							backgroundColor={categories.map((c) => `hsl(${c.value * 4},${c.value}%,50%)`)}
							offset={[0, 0, 0, 80]}
							legends={false}
						/>
					</div>
					<h2>Product Categories Ratio</h2>
				</section>
				<section>
					<div>
						<DougnutChart
							labels={["In Stock", "Out of Stock"]}
							data={[40, 20]}
							backgroundColor={["hsl(269,80%,40%)", "rgb(53,162,255)"]}
							offset={[0, 50]}
							legends={false}
							cutout={"50%"}
						/>
					</div>
					<h2>Stock Availability</h2>
				</section>
				<section>
					<div>
						<DougnutChart
							labels={["Marketing Cost", "Discount", "Burnt", "Production Cost", "Net Margin"]}
							data={[5049, 2040, 900, 1200, 15000]}
							backgroundColor={["hsl(110,80%,40%)", "hsl(19,80%,40%)", "hsl(69,80%,40%)", "hsl(300,80%,40%)", "rgb(53,162,255)"]}
							offset={[20, 30, 20, 30, 80]}
							legends={false}
							cutout={"50%"}
						/>
					</div>
					<h2>Revenue Distribution</h2>
				</section>
				<section>
					<div>
						<PieChart
							labels={["Teenagers (Below 20)", "Adult (20-40)", "Older (above 40)"]}
							data={[60, 269, 110]}
							backgroundColor={[`hsl(10,${80}%,80%)`, `hsl(10,${80}%,50%)`, `hsl(10,${40}%,50%)`]}
							offset={[10, 30, 50]}
							legends={false}
						/>
					</div>
					<h2>Users Age Group</h2>
				</section>
				<section>
					<div>
						<DougnutChart
							labels={["Admin", "Customers"]}
							data={[40, 250]}
							backgroundColor={["hsl(355,100%,38%)", "hsl(44,98%,50%)"]}
							offset={[0, 80]}
							legends={true}
						/>
					</div>
				</section>
			</main>
		</div>
	);
};

export default PieCharts;
