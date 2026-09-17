"use client";

import { useState, useEffect, FormEvent } from "react";
import { Trash2, Loader2, Plus, Instagram } from "lucide-react";

type Reel = {
  id: string;
  title: string;
  link: string;
  createdAt: string;
};

export default function ManageReels() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const fetchReels = async () => {
    try {
      const res = await fetch("/api/reels");
      if (res.ok) {
        const data = await res.json();
        setReels(data);
      }
    } catch (error) {
      console.error("Failed to fetch reels:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReels();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !link) return;
    
    setIsAdding(true);
    try {
      const res = await fetch("/api/reels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, link }),
      });
      
      if (res.ok) {
        setTitle("");
        setLink("");
        await fetchReels();
      }
    } catch (error) {
      console.error("Failed to add reel:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this reel?")) return;
    
    try {
      const res = await fetch(`/api/reels?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        await fetchReels();
      }
    } catch (error) {
      console.error("Failed to delete reel:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-slate-900">Manage Reels</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Plus size={18} className="text-pink-600" />
              Add New Reel
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Reel Title / Keyword</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  placeholder="e.g. SEO Masterclass Reel"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Instagram Reel URL</label>
                <input 
                  type="url" 
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  placeholder="https://www.instagram.com/reel/..."
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isAdding || !title || !link}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl py-3 text-sm font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isAdding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                {isAdding ? "Adding..." : "Add Reel"}
              </button>
            </form>
          </div>
        </div>

        {/* List Column */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Linked Reels ({reels.length})</h2>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 size={32} className="animate-spin text-slate-300" />
            </div>
          ) : reels.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 border-dashed p-12 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 mb-3">
                <Instagram size={24} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">No reels added</h3>
              <p className="text-sm text-slate-500">Link your first Instagram reel using the form.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reels.map((reel) => (
                <div key={reel.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm group hover:shadow-md transition-shadow relative">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-inner">
                      <Instagram size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-slate-900 truncate">{reel.title}</h3>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                        {new Date(reel.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={reel.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline truncate block"
                  >
                    {reel.link}
                  </a>
                  
                  <button 
                    onClick={() => handleDelete(reel.id)}
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-100"
                    title="Delete reel"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
