import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+,-./";

const Coupons = () => {
	const [size, setSize] = useState<number>(8);
	const [prefix, setPrefix] = useState<string>("");
	const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
	const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
	const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const [coupon, setCoupon] = useState<string>("");

	const copyText = async (coupon: string) => {
		await window.navigator.clipboard.writeText(coupon);
		setIsCopied(true);
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!includeNumbers && !includeCharacters && !includeSymbols) {
			return alert("Please Select One At Least");
		}

		let result: string = prefix || "";
		const loopLength: number = size - result.length;

		for (let i = 0; i < loopLength; i++) {
			let entireString: string = "";
			if (includeCharacters) entireString += allLetters;
			if (includeNumbers) entireString += allNumbers;
			if (includeSymbols) entireString += allSymbols;

			const randomNum: number = ~~(Math.random() * entireString.length);
			result += entireString[randomNum];
		}

		setCoupon(result);
	};

	useEffect(() => {
		setIsCopied(false);
	}, [coupon]);

	return (
		<div className="admin-container">
			<AdminSidebar />
			<main className="dashboard-app-container">
				<h1>Coupon Generator</h1>
				<section>
					<form className="coupon-form" onSubmit={submitHandler}>
						<input
							type="text"
							placeholder="Text to include"
							value={prefix}
							onChange={(e) => setPrefix(e.target.value)}
							maxLength={size}
						/>
						<input
							type="number"
							value={size}
							onChange={(e) => setSize(Number(e.target.value))}
							min={8}
							max={25}
							placeholder="Coupon Length"
						/>
						<fieldset>
							<legend>Include</legend>
							<input id="numbers" type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers((prev) => !prev)} />
							<label htmlFor="numbers">Numbers</label>
							<input type="checkbox" id="char" checked={includeCharacters} onChange={() => setIncludeCharacters((prev) => !prev)} />
							<label htmlFor="char">Characters</label>
							<input type="checkbox" id="sym" checked={includeSymbols} onChange={() => setIncludeSymbols((prev) => !prev)} />
							<label htmlFor="sym">Symbols</label>
						</fieldset>
						<button type="submit">Generate Coupon</button>
					</form>
					{coupon && (
						<code>
							{coupon}
							<span onClick={() => copyText(coupon)} className={isCopied ? "green" : "purple"}>
								{isCopied ? "Copied" : "Copy"}
							</span>
						</code>
					)}
				</section>
			</main>
		</div>
	);
};

export default Coupons;
