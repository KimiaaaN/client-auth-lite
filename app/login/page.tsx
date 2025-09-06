"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { isValidIranianPhone, User } from "@/lib/validators";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState(""); // optional UI field
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    if (!isValidIranianPhone(phone)) {
      setError("شماره موبایل نامعتبر است");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const apiUser = data.results[0];

      const user: User = {
        name: `${apiUser.name.first} ${apiUser.name.last}`,
        email: apiUser.email,
        picture: apiUser.picture.large,
      };

      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch {
      setError("خطا در دریافت اطلاعات کاربر");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">ورود</h1>

        <div className="space-y-4">
          <Input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="شماره موبایل"
          />
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور (اختیاری)"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <Button
          className="mt-4 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "در حال ورود..." : "ورود"}
        </Button>

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <button className="hover:underline">فراموشی رمز عبور؟</button>
          <button className="hover:underline">ثبت نام</button>
        </div>
      </div>
    </div>
  );
}
