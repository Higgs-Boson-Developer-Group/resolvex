"use client";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-6">
      <div className="flex items-center space-x-6">
        <Image
          className="rounded-full"
          src="https://toolkits.cloudmateria.com/api/image-generator/text?text=Mark%20Menorca&bgColor=1B1B1E&fgColor=ffffff"
          alt="User avatar"
          width={80}
          height={80}
          unoptimized
        />
        <div>
          <h2 className="text-2xl font-bold text-primary">John Doe</h2>
          <p className="text-gray-600 text-primary">john.doe@example.com</p>
          <p className="text-sm text-gray-500 text-primary">Role: Admin</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-primary">Account Details</h3>
        <div className="mt-2 p-4 bg-gray-100 rounded-lg">
          <p className="text-primary">
            <strong>Full Name:</strong> John Doe
          </p>
          <p className="text-primary">
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p className="text-primary">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-primary">
            <strong>Address:</strong> 123 Street, City, Country
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-primary">Settings</h3>
        <div className="mt-2 flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Edit Profile</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Logout</button>
        </div>
      </div>
    </div>
  );
}
