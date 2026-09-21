'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authenticate } from './actions'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    try {
      const res = await authenticate(formData)
      if (res?.error) {
        setError(res.error)
        setLoading(false)
      }
    } catch (err: any) {
      // In Next.js, redirect() throws NEXT_REDIRECT which is expected when login succeeds
      if (err?.message?.includes("NEXT_REDIRECT") || err?.digest?.includes("NEXT_REDIRECT")) {
        return
      }
      console.error("Login submission error:", err)
      setError("Server error or connection timed out. Please check your database connection.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-black mb-2 text-center text-slate-800 tracking-tighter">
          RANKVRA<span className="text-indigo-500">ADMIN</span>
        </h1>
        <p className="text-center text-slate-500 mb-8 text-sm font-medium">Please login to continue</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Admin ID</label>
            <input 
              name="id" 
              type="text" 
              required 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm"
              placeholder="Enter ID"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm"
              placeholder="Enter Password"
            />
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm font-medium text-center border border-red-100">
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold disabled:opacity-70 mt-4 shadow-md shadow-indigo-200"
          >
            {loading ? 'Verifying...' : 'Login to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  )
}
