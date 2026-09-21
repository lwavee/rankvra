import Link from "next/link";
import { FileText, Video, Users, Calendar, Activity, MessageSquare } from "lucide-react";
import { getBlogs, getReels, getVisitorStats } from "@/lib/db";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const blogsCount = getBlogs().length;
  const reelsCount = getReels().length;
  const visitorStats = getVisitorStats();
  let leadsCount = 0;
  try {
    leadsCount = await prisma.lead.count();
  } catch (err) {
    console.error("Failed to count leads:", err);
  }

  return (
    <div>
      <h1 className="text-3xl font-black text-slate-900 mb-8">Admin Dashboard</h1>
      
      {/* Visitor Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Today's Visitors</p>
              <h2 className="text-2xl font-black text-slate-900">{visitorStats.today}</h2>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">7-Day Visitors</p>
              <h2 className="text-2xl font-black text-slate-900">{visitorStats.sevenDays}</h2>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Visitors</p>
              <h2 className="text-2xl font-black text-slate-900">{visitorStats.total}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/radhe-radhe-admin/blogs" className="group block bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Manage Blogs</h2>
              <p className="text-sm text-slate-500">{blogsCount} posts available</p>
            </div>
          </div>
        </Link>
        
        <Link href="/radhe-radhe-admin/reels" className="group block bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-pink-400 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 group-hover:text-white transition-colors">
              <Video size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Manage Reels</h2>
              <p className="text-sm text-slate-500">{reelsCount} reels linked</p>
            </div>
          </div>
        </Link>
        
        <Link href="/radhe-radhe-admin/leads" className="group block bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <MessageSquare size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Manage Leads</h2>
              <p className="text-sm text-slate-500">{leadsCount} total inquiries</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
