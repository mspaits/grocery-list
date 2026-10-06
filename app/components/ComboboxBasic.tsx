'use client';

import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from '@/components/ui/combobox';

import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';

export function ComboboxBasic({
	label,
	id,
	name,
	placeholder,
	description,
	options,
}: {
	label: string;
	id: string;
	name: string;
	placeholder?: string;
	description?: string;
	options: string[];
}) {
	return (
		<Field>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>
			<Combobox items={options}>
				<ComboboxInput id={id} name={name} className="bg-white" placeholder={placeholder} />
				<ComboboxContent>
					<ComboboxEmpty>No items found.</ComboboxEmpty>
					<ComboboxList>
						{(item) => (
							<ComboboxItem key={item} value={item}>
								{item}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxContent>
			</Combobox>
			<FieldDescription>{description}</FieldDescription>
		</Field>
	);
}
