import { useFormContext } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { TextareaHTMLAttributes } from "react";

type Props<S> = {
	fieldTitle: string;
	nameInSchema: keyof S & string;
	classname?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaWithLabel<S>({
	fieldTitle,
	nameInSchema,
	className,
	...props
}: Props<S>) {
	const form = useFormContext();
	return (
		<FormField
			control={form.control}
			name={nameInSchema}
			render={({ field }) => (
				<FormItem>
					<FormLabel className="text-base" htmlFor={nameInSchema}>
						{fieldTitle}
					</FormLabel>
					<FormControl>
						<textarea
							id={nameInSchema}
							{...field}
							{...props}
							className={`w-full max-w-xs disabled:text-blue-500 dark:disabled:text-green-500 disabled:opacity-75 ${className}`}
						/>
					</FormControl>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
