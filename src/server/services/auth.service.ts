"use server";
import { User } from "../models/user.model";

export const createUser = async (data: any) => {
  const user = new User(data);
  await user.save();
  return user;
};
