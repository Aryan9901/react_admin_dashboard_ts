/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
	avatar: ReactElement;
	name: string;
	gender: string;
	email: string;
	role: string;
	action: ReactElement;
}

const columns: Column<DataType>[] = [
	{
		Header: "Avatar",
		accessor: "avatar",
	},
	{
		Header: "Name",
		accessor: "name",
	},
	{
		Header: "Gender",
		accessor: "gender",
	},
	{
		Header: "Email",
		accessor: "email",
	},
	{
		Header: "Role",
		accessor: "role",
	},
	{
		Header: "Action",
		accessor: "action",
	},
];

const img = "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg";
const img1 = "https://wallpapers.com/images/hd/cute-avatar-profile-picture-23yuqpb8wz1dqqqv.jpg";

const arr: DataType[] = [
	{
		avatar: <img src={img} style={{ borderRadius: "50%" }} alt="profile image" />,
		name: "Aryan Gupta",
		gender: "Male",
		email: "911aaryan@gmail.com",
		role: "Admin",
		action: <FaTrash />,
	},
	{
		avatar: <img src={img1} alt="Shoes" />,
		name: "Neha Sharma",
		gender: "Female",
		email: "neha@gmail.com",
		role: "user",
		action: <FaTrash />,
	},
];

const Customers = () => {
	const [data] = useState(arr);

	const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Customers", true), []);

	return (
		<div className="admin-container">
			<AdminSidebar />
			<main>{Table()}</main>
		</div>
	);
};

export default Customers;
