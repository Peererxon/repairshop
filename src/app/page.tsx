import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-black bg-center bg-cover bg-hero-home">
			<main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
				<div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
					<h1 className="text-4xl font-bold">
						Dan&apos;s <br />
						Repair Shop{" "}
					</h1>
					<address>
						555 Main St.
						<br />
						Springfield, USA
						<br />
						(555) 123-4567
						<br />
					</address>
					<p>Open from 9 AM to 5 PM, Monday to Friday</p>
					<Link href={"tel:55555555"} className="hover:underline" />
				</div>
			</main>
		</div>
	);
}
