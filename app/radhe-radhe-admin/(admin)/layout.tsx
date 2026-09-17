import Link from "next/link";
import { ReactNode } from "react";
import { LayoutDashboard, FileText, Film, MessageSquare } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-10">
        <div className="p-6">
          <Link href="/radhe-radhe-admin/dashbord" className="text-xl font-black tracking-tighter text-white flex items-center gap-2">
            RANKVRA<span className="text-indigo-400">ADMIN</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/radhe-radhe-admin/dashbord" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link href="/radhe-radhe-admin/blogs" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
            <FileText size={18} />
            Manage Blogs
          </Link>
          <Link href="/radhe-radhe-admin/reels" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
            <Film size={18} />
            Manage Reels
          </Link>
          <Link href="/radhe-radhe-admin/leads" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
            <MessageSquare size={18} />
            Manage Leads
          </Link>
        </nav>
        
        <div className="p-6 border-t border-slate-800">
          <Link href="/" className="text-xs font-semibold text-slate-500 hover:text-white transition-colors">
            &larr; Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 sm:p-12 h-screen overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
