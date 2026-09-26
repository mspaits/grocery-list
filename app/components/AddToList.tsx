import Form from 'next/form';

export default function AddToList({
	handleSubmit,
	moveChecks,
	warning,
}: {
	handleSubmit: (formData: FormData) => Promise<void>;
	moveChecks: () => Promise<void>;
	warning: string;
}) {
	return (
		// Passing in handleSubmit prop to trigger addItem function on form submission

		<Form
			action={handleSubmit}
			className="mb-3 flex w-full max-w-3xl min-w-0 flex-col self-center px-2"
		>
			<div className="mb-3 flex items-center px-6 py-4">
				<div className="flex w-full flex-row justify-between gap-6">
					<button
						type="submit"
						className="w-full rounded-lg bg-amber-600 px-3 py-2 font-medium text-white shadow-lg transition-all duration-50 ease-in-out hover:bg-amber-700 hover:shadow-md hover:shadow-black/25 active:scale-95 active:bg-amber-700"
					>
						Add Item
					</button>

					<button
						formAction={moveChecks}
						type="submit"
						className="w-full rounded-lg bg-amber-600 px-3 py-2 font-medium text-white shadow-lg transition-all duration-50 ease-in-out hover:bg-amber-700 hover:shadow-md hover:shadow-black/25 active:scale-95 active:bg-amber-700"
					>
						Finish Shopping
					</button>
				</div>
			</div>

			<div className="flex flex-col rounded-3xl bg-lime-500 p-3 shadow">
				<div className="flex flex-col">
					<div id="warner" className="mx-auto flex w-full max-w-2xl flex-wrap px-2 text-red-500">
						{warning}
					</div>
					<div className="flex flex-col p-1">
						<label htmlFor="itemName">Item</label>
						<input
							type="text"
							id="itemName"
							name="itemName"
							placeholder="Milk"
							className="rounded-lg bg-white p-2 shadow"
						/>
					</div>
					<div className="flex flex-col p-1">
						<label htmlFor="quantity">Quantity</label>
						<input
							type="text"
							id="quantity"
							name="quantity"
							defaultValue="1"
							className="rounded-lg bg-white p-2 shadow"
						/>
					</div>
					<div className="flex flex-col p-1">
						<label htmlFor="store">Store</label>
						<input
							type="text"
							id="store"
							name="store"
							placeholder="Wegmans"
							className="rounded-lg bg-white p-2 shadow"
						/>
					</div>
					<div className="flex flex-col p-1">
						<label htmlFor="section">Section</label>
						<select
							id="section"
							name="section"
							className="rounded-lg bg-white p-2 shadow"
							autoComplete="off"
						>
							<option>Bakery</option>
							<option>Beverages</option>
							<option>Bread & Cereal</option>
							<option>Canned Goods</option>
							<option>Condiments</option>
							<option>Dairy</option>
							<option>Deli</option>
							<option>Frozen</option>
							<option>International</option>
							<option>Meat & Seafood</option>
							<option>Pasta & Rice</option>
							<option>Produce</option>
							<option>Snacks</option>
							<option>Spices</option>
							<option>Other</option>
						</select>
					</div>
				</div>
			</div>
		</Form>
	);
}
