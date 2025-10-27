"use client";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/Button";
import { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

// Obtiene los posibles valores de "variant" desde buttonVariants
type ButtonVariant = NonNullable<
	VariantProps<typeof buttonVariants>["variant"]
>;

// Crea el tipo Props usando ButtonVariant para el atributo "variant"
type Props = {
	title: string;
	className?: string;
	variant?: ButtonVariant;
} & Omit<VariantProps<typeof buttonVariants>, "variant"> &
	ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ title, className, variant, ...props }: Props) => {
	const router = useRouter();
	return (
		<Button
			variant={variant}
			className={className}
			onClick={() => router.back()}
			{...props}
		>
			{title}
		</Button>
	);
};
