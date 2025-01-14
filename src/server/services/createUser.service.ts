"use server";
import dbConnect from "../database/database";
import { User } from "../models/user.model";

await dbConnect();

export async function createUser(data: any) {
	let user = new User(data);
	await user.save();
}
