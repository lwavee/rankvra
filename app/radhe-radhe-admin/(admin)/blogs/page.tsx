"use client";

import { useState, useEffect, FormEvent } from "react";
import { Trash2, Loader2, Plus, Image as ImageIcon, FileText } from "lucide-react";
import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  image: string;
  content: string;
  createdAt: string;
};

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    
    setIsAdding(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, image, content }),
      });
      
      if (res.ok) {
        setTitle("");
        setImage("");
        setContent("");
        await fetchBlogs();
      }
    } catch (error) {
      console.error("Failed to add blog:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    
    try {
      const res = await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        await fetchBlogs();
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-slate-900">Manage Blogs</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Plus size={18} className="text-indigo-600" />
              Add New Blog
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Blog Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="e.g. 5 SEO Tips for 2026"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Image URL</label>
                <input 
                  type="url" 
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Content</label>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none h-40"
                  placeholder="Write your blog content here..."
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isAdding || !title || !content}
                className="w-full bg-indigo-600 text-white rounded-xl py-3 text-sm font-bold shadow-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isAdding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                {isAdding ? "Publishing..." : "Publish Blog"}
              </button>
            </form>
          </div>
        </div>

        {/* List Column */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Published Blogs ({blogs.length})</h2>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 size={32} className="animate-spin text-slate-300" />
            </div>
          ) : blogs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 border-dashed p-12 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-3">
                <FileText size={24} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">No blogs published</h3>
              <p className="text-sm text-slate-500">Create your first blog post using the form.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex gap-5 shadow-sm group hover:shadow-md transition-shadow">
                  {blog.image ? (
                    <div className="h-24 w-24 rounded-xl overflow-hidden shrink-0 relative bg-slate-100">
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        fill 
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="h-24 w-24 rounded-xl bg-slate-100 flex items-center justify-center text-slate-300 shrink-0">
                      <ImageIcon size={24} />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-slate-900 truncate mb-1">{blog.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-3">{blog.content}</p>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div>
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="h-8 w-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-100"
                      title="Delete blog"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
