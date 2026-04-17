import { auth } from "@/config/auth.config";

export async function verifySession(token: string) {
	const session = await auth.api.getSession({
		headers: new Headers({
			Authorization: `Bearer ${token}`,
		}),
	});
	return session;
}
