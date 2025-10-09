import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // 2s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#333333]">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer glowing ring */}
          <div className="absolute w-16 h-16 border-4 border-[#FFBD39] rounded-full animate-spin opacity-70"></div>
          {/* Inner ring */}
          <div className="absolute w-10 h-10 border-4 border-t-[#FFBD39] border-[#FFBD39]/20 rounded-full animate-spin"></div>
          {/* Center dot */}
          <div className="w-3 h-3 bg-[#FFBD39] rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
