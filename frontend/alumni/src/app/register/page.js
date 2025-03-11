"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const res = await fetch("http://localhost:3001/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, username, password }),
        });

        const data = await res.json();
        if (data.success) {
            alert("Registration successful! You can now log in.");
            router.push("/login");
        } else {
            alert(data.message);
        }
    };

    return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
        {/* วิดีโอพื้นหลัง */}
        <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
        >
            <source src="/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
        <div className="relative flex flex-col items-center justify-center  bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>

                <input type="text"
                    className="border border-gray-300 p-3 w-full rounded-lg text-gray-800 mb-3"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />

                <input type="email"
                    className="border border-gray-300 p-3 w-full rounded-lg text-gray-800 mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

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

                <input type="password"
                    className="border border-gray-300 p-3 w-full rounded-lg text-gray-800 mb-3"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required />

                <button type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-full rounded-lg transition duration-200">
                    Register
                </button>
            </form>
        </div>
        </div>
    );
}
