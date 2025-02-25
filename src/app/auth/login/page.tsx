"use client";

import { login } from "@/server/controllers/auth.controller";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await login(formData);
  
    if(result.success){
      router.push('/management/dashboard')
    }
    setIsLoading(true);
    setErrorMessage(null);

    try {
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md rounded-xl p-6 md:p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-6">Sign in to continue</p>

        {/* Error Message */}
        {errorMessage && <div className="mb-4 text-sm text-center text-red-600 bg-red-100 p-2 rounded">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        {/* Extra Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Forgot your password?{" "}
            <a href="#" className="text-primary hover:underline">
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
