"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/validators";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true); // mark component as mounted
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/login");
  }

  if (!mounted || !user) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 mb-4"></div>
        <p className="text-gray-500">در حال بارگذاری...</p>
      </div>
    </div>
  );
 }


  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gray-50 p-6">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            خوش آمدید، {user.name}
          </h1>
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="w-full sm:w-auto"
            aria-label="خروج از حساب کاربری"
          >
            خروج
          </Button>
        </header>

        {/* Profile Card */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <Image
            src={user.picture}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
          />
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-semibold text-gray-800 text-lg">{user.name}</span>
            <span className="text-gray-500 text-sm">{user.email}</span>
          </div>
        </section>

        {/* Dashboard Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-sm font-medium text-gray-500">تعداد ورودها</h2>
            <p className="mt-2 text-xl font-bold text-gray-900">10</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-sm font-medium text-gray-500">وضعیت حساب</h2>
            <p className="mt-2 text-xl font-bold text-green-600">فعال</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-sm font-medium text-gray-500">اطلاعات دیگر</h2>
            <p className="mt-2 text-xl font-bold text-gray-900">می‌توانید آمار بیشتری اضافه کنید</p>
          </div>
        </section>
      </div>
    </main>
  );
}
