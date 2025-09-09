"use client";
import * as sentry from "@sentry/nextjs";
import { useEffect } from "react";

// Error boundaries must be Client Components

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		sentry.captureException(error);
		console.error(error);
	}, [error]);
	return (
		// global-error must include html and body tags
		<html>
			<body>
				<h2>Something went wrong!</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
