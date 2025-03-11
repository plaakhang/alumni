"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

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

            {/* Overlay เพื่อให้ตัวหนังสืออ่านง่ายขึ้น */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* เนื้อหาหลัก */}
            <div className="relative  p-8 rounded-lg shadow-lg text-center">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">สาวักลี</h1>
                <p className="text-gray-600 mb-4">Manage alumni records with ease.</p>
                <div className="space-x-4">
                    <button onClick={() => router.push("/login")} 
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200">
                        Login
                    </button>
                    <button onClick={() => router.push("/register")} 
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-200">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
