import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">نظام إدارة العيادة</h1>
        <p className="text-gray-600 mb-8 text-lg">
          مرحباً بك في نظام إدارة عيادات الأسنان المتكامل
        </p>
        
        <Link 
          href="/login" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          تسجيل الدخول للنظام
        </Link>
      </div>
    </div>
  );
}
