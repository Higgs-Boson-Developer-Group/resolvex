"use server";

import dbConnect from "../database/database";

export async function serverStart() {
	await dbConnect();
}
