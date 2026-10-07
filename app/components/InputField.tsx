import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';

export function InputField({
	label,
	id,
	name,
	placeholder,
	description,
	defaultValue,
	...props
}: {
	label: string;
	id: string;
	name: string;
	placeholder?: string;
	description?: string;
	defaultValue?: number;
} & ComponentProps<typeof Input>) {
	return (
		<Field>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>
			<Input
				id={id}
				name={name}
				type="text"
				placeholder={placeholder}
				className="bg-white"
				defaultValue={defaultValue}
				onFocus={(e) => e.target.select()}
				{...props}
			/>
			<FieldDescription>{description}</FieldDescription>
		</Field>
	);
}
