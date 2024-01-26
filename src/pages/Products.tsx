import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
	photo: ReactElement;
	name: string;
	price: number;
	stock: number;
	action: ReactElement;
}

const columns: Column<DataType>[] = [
	{
		Header: "Photo",
		accessor: "photo",
	},
	{
		Header: "Name",
		accessor: "name",
	},
	{
		Header: "Price",
		accessor: "price",
	},
	{
		Header: "Stock",
		accessor: "stock",
	},
	{
		Header: "Action",
		accessor: "action",
	},
];

const img = "https://m.media-amazon.com/images/I/71Un+LxdqYL._AC_UL480_FMwebp_QL65_.jpg";
const img1 = "https://m.media-amazon.com/images/I/91ExqbocT9L._SL1500_.jpg";

const arr: DataType[] = [
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes Air jordan Cook Nigga 2023",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img1} alt="Shoes" />,
		name: "Ambrane Extension Board, 10 Ports with 4 USB Ports",
		price: 7999,
		stock: 33,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
];

const Products = () => {
	const [data] = useState(arr);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Products", true), []);

	return (
		<div className="admin-container">
			<AdminSidebar />
			<main className="products">{Table()}</main>
			<Link to="/admin/product/new" className="create-product-btn">
				<FaPlus />
			</Link>
		</div>
	);
};

export default Products;
