import React, { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
	"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2hvZXN8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagemnet = () => {
	const [name, setName] = useState<string>("Puma Shoes");
	const [price, setPrice] = useState<number>(1399);
	const [stock, setStock] = useState<number>(12);
	const [photo, setPhoto] = useState<string>(img);

	const [nameUpdate, setNameUpdate] = useState<string>("Puma Shoes");
	const [priceUpdate, setPriceUpdate] = useState<number>(1399);
	const [stockUpdate, setStockUpdate] = useState<number>(12);
	const [photoUpdate, setPhotoUpdate] = useState<string>(img);

	const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const file: File | undefined = e.target.files?.[0];
		const reader: FileReader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				if (typeof reader.result === "string") setPhotoUpdate(reader.result);
			};
		}
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setName(nameUpdate);
		setPrice(priceUpdate);
		setStock(stockUpdate);
		setPhoto(photoUpdate);
	};

	return (
		<div className="admin-container">
			<AdminSidebar />
			<main className="product-management">
				<section>
					<strong>ID - Prdouct-101</strong>
					<img src={photo} alt={name} />
					<p>{name}</p>
					{stock > 0 ? <span className="green">{stock} Available</span> : <span className="red">Not Available</span>}
					<h3>${price}</h3>
				</section>
				<article>
					<form onSubmit={submitHandler}>
						<h2>Manage Product</h2>
						{photoUpdate && <img src={photoUpdate} alt={nameUpdate} />}
						<div>
							<label style={{ backgroundColor: "transparent", top: "-1.5rem" }}>Choose Photo</label>
							<input required type="file" placeholder="Choose Photo" onChange={changeImageHandler} />
						</div>
						<div>
							<label>Name</label>
							<input required type="text" placeholder="Name" value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)} />
						</div>
						<div>
							<label>Price</label>
							<input
								required
								type="number"
								placeholder="Price"
								value={priceUpdate}
								onChange={(e) => setPriceUpdate(Number(e.target.value))}
							/>
						</div>
						<div>
							<label>Stock</label>
							<input
								required
								type="number"
								placeholder="Stock"
								value={stockUpdate}
								onChange={(e) => setStockUpdate(Number(e.target.value))}
							/>
						</div>
						<button type="submit">Update Product</button>
					</form>
				</article>
			</main>
		</div>
	);
};

export default ProductManagemnet;
