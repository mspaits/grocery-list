import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export function InputField({
	label,
	id,
	name,
	placeholder,
	description,
	defaultValue,
}: {
	label: string;
	id: string;
	name: string;
	placeholder?: string;
	description?: string;
	defaultValue?: number;
}) {
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
			/>
			<FieldDescription>{description}</FieldDescription>
		</Field>
	);
}
