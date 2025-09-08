import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Icon, LucideIcon } from "lucide-react";
type Props = {
	icon: LucideIcon;
	label: string;
	href?: string;
};

export default function NavButton({ icon: Icon, label, href }: Props) {
	return (
		<Button
			asChild
			variant={"ghost"}
			size={"icon"}
			aria-label={label}
			title={label}
			className="rounded-full"
		>
			{href ? (
				<Link href={href}>
					<Icon />
				</Link>
			) : (
				<Icon />
			)}
		</Button>
	);
}
