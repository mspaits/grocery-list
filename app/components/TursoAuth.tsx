'use server';

import { connect } from '@tursodatabase/serverless';
import { userAddedGrocObj, type groceryObject } from '@/app/components/TypeDefinitions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const databaseUrl = process.env.TURSO_DATABASE_URL;
const token = process.env.TURSO_AUTH_TOKEN;
if (!databaseUrl) {
	throw new Error('TURSO_DATABASE_URL is not defined');
}
if (!token) {
	throw new Error('TURSO_AUTH_TOKEN is not defined');
}

const conn = connect({
	url: databaseUrl,
	authToken: token,
});

// Functions for grocerylist table
export async function fullList(userName: string, activeStatus: number) {
	const selectAll = await conn.prepare(
		'SELECT * FROM grocerylist WHERE (username, active) = (?, ?)',
	);
	const selectRows = await selectAll.all([userName, activeStatus]);

	const boolCorrectedRows = selectRows.map((row) => {
		return {
			...row,
			id: Number(row.ID),
			isChecked: row.isChecked === 1,
		};
	});

	const sortedBoolCorrectedRows = boolCorrectedRows
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
		});

	return sortedBoolCorrectedRows;
}

export async function addToDB(groceryObject: userAddedGrocObj) {
	const { name, quantity, section, store, isChecked, userName, active } = groceryObject;

	const addObject = await conn.prepare(
		'INSERT INTO grocerylist (name, quantity, section, store, ischecked, username, active) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING ID AS id',
	);
	const row = await addObject.get([name, quantity, section, store, isChecked, userName, active]);

	console.log(row);

	if (!row) {
		throw new Error('Insert did not return an id');
	}

	return { ...groceryObject, id: Number(row.id) };
}

export async function deleteFromDB(groceryObjects: groceryObject[]) {
	for (const grocery of groceryObjects) {
		const deleteObject = await conn.prepare('DELETE FROM grocerylist WHERE id = (?)');
		await deleteObject.run([grocery.id]);
	}
}

export async function checkDB(checkedItem: number, checkState: boolean) {
	if (checkState === true) {
		const checkObject = await conn.prepare('UPDATE grocerylist SET isChecked = 1 WHERE id = (?)');
		await checkObject.run([checkedItem]);
	} else if (checkState === false) {
		const checkObject = await conn.prepare('UPDATE grocerylist SET isChecked = 0 WHERE id = (?)');
		await checkObject.run([checkedItem]);
	}
}

export async function setActiveStateDB(groceryObjects: groceryObject[]) {
	for (const grocery of groceryObjects) {
		if (grocery.active === 1 || grocery.active === 0) {
			const statement = await conn.prepare('UPDATE grocerylist SET active = ? WHERE id = ?');
			await statement.run([grocery.active, grocery.id]);
		}
	}
}

// Non-database general use functions.  Bad practice, probably.
export async function getUser() {
	const cookieStore = await cookies();
	const userName: string | undefined = cookieStore.get('userName')?.value;

	if (!userName) {
		redirect('/');
	}

	return userName;
}
