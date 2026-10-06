'use client';

import { Autocomplete } from '@base-ui/react/autocomplete';
import { Input } from '@/components/ui/input';

import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';

export function AutocompleteBasic({
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
			<Autocomplete.Root items={options} name={name} openOnInputClick>
				<Autocomplete.Input
					id={id}
					placeholder={placeholder}
					render={<Input className="bg-white" />}
				/>
				<Autocomplete.Portal>
					<Autocomplete.Positioner sideOffset={6} align="start" className="z-50">
						<Autocomplete.Popup className="bg-popover text-popover-foreground ring-foreground/10 w-(--anchor-width) overflow-hidden rounded-lg shadow-md ring-1">
							<Autocomplete.Empty>
								<div className="text-muted-foreground p-2 text-sm">
									No matching items. Please add custom entry.
								</div>
							</Autocomplete.Empty>

							<Autocomplete.List className="max-h-64 overflow-y-auto p-1 data-empty:p-0">
								{(item: string) => (
									<Autocomplete.Item
										key={item}
										value={item}
										className="data-highlighted:bg-accent data-highlighted:text-accent-foreground cursor-default rounded-md px-2 py-1 text-sm outline-none"
									>
										{item}
									</Autocomplete.Item>
								)}
							</Autocomplete.List>
						</Autocomplete.Popup>
					</Autocomplete.Positioner>
				</Autocomplete.Portal>
			</Autocomplete.Root>
			<FieldDescription>{description}</FieldDescription>
		</Field>
	);
}
