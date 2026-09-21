'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"

export async function authenticate(formData: FormData) {
  const id = formData.get("id") as string
  const password = formData.get("password") as string
  
  try {
    const admin = await prisma.admin.findUnique({
      where: { username: id }
    })

    if (!admin || admin.password !== password) {
      return { error: "Invalid ID or Password" }
    }

    const cookieStore = await cookies()
    cookieStore.set("admin-auth", "true", { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7 // 1 week
    })
  } catch (error: any) {
    console.error("Login error:", error)
    return { 
      error: "Unable to connect to database. Please check your MongoDB connection or network access (allow IP 0.0.0.0/0)." 
    }
  }
  
  redirect("/radhe-radhe-admin/dashbord")
}
