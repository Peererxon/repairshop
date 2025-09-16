import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
	async function middleware(req: NextRequest) {
		return withAuth(req);
	},
	{
		// Middleware still runs on all routes, but doesn't protect the blog route
		publicPaths: ["auth/login"],
		isReturnToCurrentPage: true,
		loginPage: "/auth/login",
	}
);

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - auth
		 * - favicon.ico (favicon file)
		 * - robots.txt
		 * - images
		 * - login
		 * - homepage (represented with $ after beginning /)
		 */
		"/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)",
	],
};
