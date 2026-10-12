import Form from 'next/form';
import { AutocompleteBasic } from './AutocompleteBasic';
import { InputField } from './InputField';
import { Plus, ArrowRight } from 'lucide-react';

const storeList = [
	'Acme',
	'Aldi',
	'Amazon',
	'Amazon Fresh',
	'Big Y',
	"BJ's Wholesale Club",
	'Costco',
	'Dollar General Market',
	'Food Lion',
	'Fred Meyer',
	'Fresh Market',
	'FreshDirect',
	'Giant',
	'Giant Eagle',
	'Grocery Outlet',
	'H-E-B',
	'Harris Teeter',
	'Hy-Vee',
	'Imperfect Foods',
	'Ingles',
	'Instacart',
	'Jewel-Osco',
	'Kroger',
	'Lidl',
	"Lucky's Market",
	"Mariano's",
	'Market Basket',
	'Meijer',
	'Misfit Market',
	'Natural Grocers',
	'Other',
	'Piggly Wiggly',
	'Publix',
	"Raley's",
	'Ralphs',
	'Safeway',
	"Sam's Club",
	"Shaw's",
	'ShopRite',
	"Smith's",
	'Sprouts',
	'Stop & Shop',
	'Target',
	'Thrive Market',
	'Tom Thumb',
	"Trader Joe's",
	'Vons',
	'Walmart',
	'Wegmans',
	'Weis Markets',
	'Whole Foods',
	'WinCo',
	'Winn-Dixie',
];

const sectionList = [
	'Baby',
	'Bakery',
	'Baking',
	'Bread & Cereal',
	'Bulk',
	'Candy & Chocolate',
	'Canned Goods',
	'Cleaning Supplies',
	'Coffee & Tea',
	'Condiments & Sauces',
	'Cookies & Crackers',
	'Dairy & Eggs',
	'Deli',
	'Ethnic & International',
	'Floral',
	'Frozen Breakfast',
	'Frozen Desserts',
	'Frozen Meals',
	'Frozen Meat',
	'Frozen Pizza',
	'Frozen Vegetables',
	'Grains, Pasta & Rice',
	'Health & Pharmacy',
	'Juice & Drinks',
	'Meat & Seafood',
	'Nuts & Dried Fruit',
	'Oil & Vinegar',
	'Other',
	'Paper Products',
	'Personal Care',
	'Pet Supplies',
	'Prepared Foods',
	'Produce',
	'Snacks & Chips',
	'Soup',
	'Spices & Seasonings',
	'Water & Sparkling',
	'Wine, Beer & Spirits',
];

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
			className="mb-3 flex w-full max-w-3xl min-w-0 flex-col self-center px-3"
		>
			<div className="mb-3 flex items-center px-2 py-4">
				<div className="flex w-full flex-row justify-between gap-4">
					<button
						type="submit"
						className="flex w-full flex-row items-center justify-center gap-1 rounded-lg bg-amber-600 px-3 py-2 text-sm font-medium text-white shadow-lg transition-all duration-150 ease-in-out hover:bg-amber-700 hover:shadow-md hover:shadow-black/25 active:scale-95 active:bg-amber-700"
					>
						<Plus size={18}></Plus>
						Add Item
					</button>

					<button
						formAction={moveChecks}
						type="submit"
						className="flex w-full flex-row items-center justify-center gap-1 rounded-lg bg-amber-600 px-3 py-2 text-sm font-medium text-white shadow-lg transition-all duration-150 ease-in-out hover:bg-amber-700 hover:shadow-md hover:shadow-black/25 active:scale-95 active:bg-amber-700"
					>
						<ArrowRight size={18}></ArrowRight>
						Finish Shopping
					</button>
				</div>
			</div>

			<div className="flex flex-col rounded-3xl bg-lime-500 p-3 shadow">
				<div className="flex flex-col">
					<div id="warner" className="mx-auto flex w-full max-w-2xl flex-wrap px-2 text-red-500">
						{warning}
					</div>

					<div className="flex flex-col px-1">
						<InputField
							label={'Item'}
							id={'itemName'}
							name={'itemName'}
							placeholder={'Milk'}
						></InputField>
					</div>
					<div className="flex flex-col px-1">
						<InputField
							label={'Quantity'}
							id={'quantity'}
							name={'quantity'}
							defaultValue={1}
						></InputField>
					</div>
					<div className="flex flex-col px-1">
						<AutocompleteBasic
							label={'Store'}
							id={'store'}
							name={'store'}
							placeholder={'Wegmans'}
							options={storeList}
						></AutocompleteBasic>
					</div>
					<div className="flex flex-col px-1">
						<AutocompleteBasic
							label={'Section'}
							id={'section'}
							name={'section'}
							placeholder={'Section or aisle'}
							options={sectionList}
						></AutocompleteBasic>
					</div>
				</div>
			</div>
		</Form>
	);
}
