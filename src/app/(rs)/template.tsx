// it render every time
import React from "react";

export default function Template({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <div className="animate-appear">{children}</div>;
}
