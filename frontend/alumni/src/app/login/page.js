"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (data.success) {
            localStorage.setItem("token", data.token);
            alert("Login successful!");
            router.push("/dashboard");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>

                <input type="text"
                    className="border border-gray-300 p-3 w-full rounded-lg text-gray-800 mb-3"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />

                <input type="password"
                    className="border border-gray-300 p-3 w-full rounded-lg text-gray-800 mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                <button type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded-lg transition duration-200">
                    Login
                </button>
            </form>
        </div>
    );
}
