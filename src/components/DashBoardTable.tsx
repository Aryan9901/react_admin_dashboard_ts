import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface DataType {
	id: string;
	quantity: number;
	discount: number;
	amount: number;
	status: string;
}

const columns: Column<DataType>[] = [
	{
		Header: "Id",
		accessor: "id",
	},
	{
		Header: "Qunatity",
		accessor: "quantity",
	},
	{
		Header: "Amount",
		accessor: "amount",
	},
	{
		Header: "Status",
		accessor: "status",
	},
];

const DashBoardTable = ({ data = [] }: { data: DataType[] }) => {
	return TableHOC<DataType>(columns, data, "transaction-box", "Top Transactions")();
};

export default DashBoardTable;
