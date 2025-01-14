"use server";

import { createUser } from "../services/createUser.service";

export async function testServer() {
	try {
		console.log("server started");
		await createUser({
			name: "Mark Wayne Menorca",
			email: "marcuwynu23@gmail.com",
			password: "Password",
		});
	} catch (error: any) {
		console.error(error.message);
	}
}
