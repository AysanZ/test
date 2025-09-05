"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StoredUser } from "./types";
import { Button } from "../components/button/button";
import { useQueryClient } from "@tanstack/react-query";

export function DashboardTemplate() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<StoredUser | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (!userString) {
      // No user → redirect
      router.replace("/login");
    } else {
      // Parse user data
      try {
        const parsedUser: StoredUser = JSON.parse(userString);
        setUser(parsedUser);
      } catch {
        // If parsing fails → clear storage and redirect
        localStorage.removeItem("user");
        router.replace("/login");
      }
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    queryClient.clear();
    router.replace("/login");
  };

  if (loading) {
    return <p className="text-center p-10">در حال بررسی ورود...</p>;
  }

  if (!user) return null;
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center flex flex-col justify-center items-center gap-6 max-md:bg-transparent max-md:shadow-none max-md:rounded-none">
        <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-green-400">
          <img
            src={user.picture}
            alt={user.name}
            className="w-24 h-24 rounded-full"
          />
        </div>
        <h1 className="text-2xl font-semibold mb-2">Welcome, {user.name} 👋</h1>
        <p className="text-gray-600 mb-6">{user.email}</p>
        <Button type='button' onClick={handleLogout}>خروج از حساب</Button>
      </div>
    </div>
  );
}
