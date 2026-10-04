export type groceryObject = {
	id: number;
	name: string;
	quantity: number;
	section: string;
	store: string;
	isChecked: boolean;
	userName: string;
	active: number;
};

export type userAddedGrocObj = Omit<groceryObject, 'id'>;
