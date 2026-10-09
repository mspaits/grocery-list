'use client';

import { useState, type ChangeEvent } from 'react';
import Navbar from '@/app/components/Navbar';
import AddToList from '@/app/components/AddToList';
import IntroStatement from '@/app/components/IntroStatement';
import ToBuyList from '@/app/components/ToBuyList';
import { addToDB, checkDB, setActiveStateDB } from '@/app/components/TursoAuth';
import { userAddedGrocObj, type groceryObject } from '@/app/components/TypeDefinitions';
import { ScrollText } from 'lucide-react';

// This is the actual main page component
export default function Home({
	initialList,
	userName,
}: {
	initialList: groceryObject[];
	userName: string;
}) {
	const [list, setList] = useState<groceryObject[]>(initialList);
	const [warning, setWarning] = useState('');

	async function addItem(formData: FormData) {
		const newGrocery: userAddedGrocObj = {
			name: formData.get('itemName') as string,
			quantity: Number(formData.get('quantity')),
			section: formData.get('section') as string,
			store: formData.get('store') as string,
			isChecked: false,
			userName: userName,
			active: 1,
		};

		if (!newGrocery.name) {
			setWarning('Please add an item!');
			setTimeout(() => {
				setWarning('');
			}, 5000);
			return;
		} else {
			const savedGrocery = await addToDB(newGrocery);
			setList((list) =>
				[...list, savedGrocery]
					.sort((a, b) => {
						const sectionA = a.section.toUpperCase();
						const sectionB = b.section.toUpperCase();
						if (sectionA < sectionB) {
							return -1;
						}
						if (sectionA > sectionB) {
							return 1;
						}
						return 0;
					})
					.sort((a, b) => {
						const storeA = a.store.toUpperCase();
						const storeB = b.store.toUpperCase();
						if (storeA < storeB) {
							return -1;
						}
						if (storeA > storeB) {
							return 1;
						}
						return 0;
					}),
			);
		}
	}

	// Keeping track of which checkboxes are checked
	async function saveCheckState(e: ChangeEvent<HTMLInputElement>) {
		const id = Number(e.target.id);
		const isChecked = e.target.checked;
		const updatedList = list.map((item) => {
			if (item.id === id) {
				return {
					...item,
					isChecked: isChecked,
				};
			}

			return item;
		});

		setList(updatedList);
		await checkDB(id, isChecked);
	}

	async function moveToHistory() {
		const keepList = list.filter((grocery) => !grocery.isChecked);
		setList(keepList);

		const moveList = list.filter((grocery) => grocery.isChecked);

		// Inactivating tasks and unchecking to give to DB update functions.
		const updatedMoveList = moveList.map((item) => {
			if (item.isChecked) {
				return {
					...item,
					isChecked: false,
					active: 0,
				};
			}
			return item;
		});

		for (const item of updatedMoveList) {
			await checkDB(item.id, item.isChecked);
		}

		await setActiveStateDB(updatedMoveList);
	}

	return (
		<>
			<Navbar pageTitle={'Shopping List'} bgColor={''} icon={ScrollText}></Navbar>
			<ToBuyList listToRender={list} saveChecks={saveCheckState}></ToBuyList>
			<AddToList handleSubmit={addItem} moveChecks={moveToHistory} warning={warning}></AddToList>
			<IntroStatement sponsor={'mspaitsdev@gmail.com'}></IntroStatement>
		</>
	);
}
