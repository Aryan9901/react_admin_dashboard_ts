import {
	Chart as ChartJS,
	PointElement,
	LineElement,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	ChartData,
	ChartOptions,
	ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

// registering charts componets
ChartJS.register(Filler, CategoryScale, LineElement, PointElement, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// export function App() {}

// **???  bar Charts --------------------------------

const months = ["January", "February", "March", "April", "May", "June", "July"];

// props
interface BarChartProps {
	horizontal?: boolean;
	data_1: number[];
	data_2: number[];
	title_1: string;
	title_2: string;
	bgColor_1: string;
	bgColor_2: string;
	labels?: string[];
	legend?: boolean;
	categoryPercentage?: number;
}

// exporting bar component
export const BarChart = ({
	data_1 = [],
	data_2 = [],
	title_1,
	title_2,
	bgColor_1,
	bgColor_2,
	labels = months,
	horizontal = false,
	legend = false,
	categoryPercentage = 0.6,
}: BarChartProps) => {
	const options: ChartOptions<"bar"> = {
		responsive: true,
		indexAxis: horizontal ? "y" : "x",
		plugins: {
			legend: {
				position: "top" as const,
				display: legend,
			},
			title: {
				// display: true,
				display: legend,
				text: `${title_1} & ${title_2}`,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: false,
				},
			},
			x: {
				beginAtZero: true,
				grid: {
					display: false,
				},
			},
		},
	};

	const data: ChartData<"bar", number[], string> = {
		labels,
		datasets: [
			{
				label: title_1,
				data: data_1,
				backgroundColor: bgColor_1,
				barThickness: "flex",
				barPercentage: 1,
				categoryPercentage,
			},
			{
				label: title_2,
				data: data_2,
				backgroundColor: bgColor_2,
				barThickness: "flex",
				barPercentage: 1,
				categoryPercentage,
			},
		],
	};

	return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;
};

// **???  Dougnut Charts --------------------------------

interface DoughNutChartProps {
	labels?: string[];
	data: number[];
	backgroundColor: string[];
	cutout?: number | string;
	legends?: boolean;
	offset?: number[];
}

export const DougnutChart = ({ labels, data, backgroundColor, cutout, legends = true, offset }: DoughNutChartProps) => {
	const doughnutData: ChartData<"doughnut", number[], string> = {
		labels,
		datasets: [
			{
				data,
				backgroundColor,
				borderWidth: 0,
				offset,
			},
		],
	};

	const doughnutOptions: ChartOptions<"doughnut"> = {
		responsive: true,
		plugins: {
			legend: {
				display: legends,
				position: "bottom",
				labels: {
					padding: 40,
				},
			},
		},
		cutout,
	};

	return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

interface PieChartProps {
	labels?: string[];
	data: number[];
	backgroundColor: string[];
	legends?: boolean;
	offset?: number[];
}

// **???  Pie Charts --------------------------------

export const PieChart = ({ labels, data, backgroundColor, legends = true, offset }: PieChartProps) => {
	const pieChartData: ChartData<"pie", number[], string> = {
		labels,
		datasets: [
			{
				data,
				backgroundColor,
				borderWidth: 1,
				offset,
			},
		],
	};

	const pieChartOptions: ChartOptions<"pie"> = {
		responsive: true,
		plugins: {
			legend: {
				display: legends,
				position: "bottom",
				labels: {
					padding: 40,
				},
			},
		},
	};

	return <Pie data={pieChartData} options={pieChartOptions} />;
};

// **???  Line Charts --------------------------------

// props
interface LineChartProps {
	data: number[];
	label: string;
	backgroundColor: string;
	borderColor: string;
	labels?: string[];
	legend?: boolean;
}

// exporting bar component
export const LineChart = ({ data, label, backgroundColor, borderColor, labels, legend = false }: LineChartProps) => {
	const options: ChartOptions<"line"> = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
				display: legend,
			},
			title: {
				// display: true,
				display: legend,
				text: label,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: false,
				},
			},
			x: {
				beginAtZero: true,
				grid: {
					display: false,
				},
			},
		},
	};

	const lineChartData: ChartData<"line", number[], string> = {
		labels,
		datasets: [
			{
				label,
				data,
				backgroundColor,
				borderColor,
				fill: true,
			},
		],
	};

	return <Line options={options} data={lineChartData} />;
};
