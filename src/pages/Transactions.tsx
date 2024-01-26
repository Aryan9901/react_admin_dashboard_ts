import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import TableHOC from "../components/TableHOC";

interface DataType {
	user: string;
	amount: number;
	discount: number;
	quantity: number;
	status: ReactElement;
	action: ReactElement;
}

const columns: Column<DataType>[] = [
	{
		Header: "User",
		accessor: "user",
	},
	{
		Header: "Amount",
		accessor: "amount",
	},
	{
		Header: "Discount",
		accessor: "discount",
	},
	{
		Header: "Quantity",
		accessor: "quantity",
	},
	{
		Header: "Status",
		accessor: "status",
	},
	{
		Header: "Action",
		accessor: "action",
	},
];

const arr: DataType[] = [
	{
		user: "Aryan Gupta",
		amount: 7799,
		discount: 450,
		quantity: 2,
		status: <span className="red">Processing</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Neha Sharma",
		amount: 4099,
		discount: 400,
		quantity: 6,
		status: <span className="green">Shipped</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Rohit Shetty",
		amount: 1399,
		discount: 200,
		quantity: 5,
		status: <span className="purple">Delivered</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
];

const Transactions = () => {
	const [data] = useState<DataType[]>(arr);

	const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Transactions", true), []);

	return (
		<div className="admin-container">
			<AdminSidebar />
			<main>{Table()}</main>
		</div>
	);
};

export default Transactions;
