import Image from "next/image";
export const metadata = {
	title: "Page Not Found",
	description: "This page could not be found.",
};

export default function NotFound() {
	return (
		<div className="px-2 w-full">
			<div className="mx-auto py-4 flex flex-col gap-4 justify-center items-center">
				<h2 className="text-2xl">Page Not Found</h2>
				<p>Could not find requested resource</p>
				<Image
					src={"/img/not-found.png"}
					title="Page Not Found"
					alt="Page Not Found"
					width={300}
					height={300}
					sizes="300px"
					className="m-0 rounded-xl"
					priority={true}
				/>
			</div>
		</div>
	);
}
