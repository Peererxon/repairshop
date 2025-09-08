import React from "react";
import NavButton from "@/components/NavButton";
import { File, HomeIcon, UsersRound } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
	return (
		<header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
			<div className="flex h8 items-center justify-between w-full">
				<div className="flex items-center gap-2">
					<NavButton icon={HomeIcon} href="/home" label="Home" />
					<Link
						href="/home"
						className="flex justify-center items-center gap-2 ml-0"
						title="Home"
					>
						<h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
							Computer Repair Shop
						</h1>
					</Link>
				</div>
				<div className="flex items-center">
					<NavButton icon={File} href="/ticket" label="Tickets" />
					<NavButton icon={UsersRound} href="/customer" label="Customers" />
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
