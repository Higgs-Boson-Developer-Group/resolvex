"use server";


import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
	},
	{
		timestamps: true, // Adds createdAt and updatedAt timestamps automatically
	}
);

const User = models.User || model("User", UserSchema);
export { User };
