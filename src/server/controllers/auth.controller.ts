"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

export const login = async (formData: {
  username: string;
  password: string;
}) => {
  try {
    // Check credentials (in a real app, query your database)
    if (formData.username === "admin" && formData.password === "admin") {
      // Create JWT token with a 1 hour expiration
      const token = jwt.sign({ username: formData.username }, JWT_SECRET);

      const cookie = await cookies();

      // Set the token as an HTTP-only cookie
      cookie.set({
        name: "token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60, // 1 hour in seconds
      });

      return {
        success: true,
        message: "Authentication successful.",
      };
    } else {
      return {
        success: false,
        message: "Authentication failed.",
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "Internal Server Error.",
    };
  }
};

export const register = async () => {
  console.log("Registering user...");
  // TODO: Add user registration logic (e.g., store user details in your DB)
  return { success: true };
};

export const logout = async () => {
  console.log("Logging out...");
  // Delete the token cookie
  const cookie = await cookies();
  cookie.delete("token");

  return { success: true };
};
