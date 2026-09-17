'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"

export async function authenticate(formData: FormData) {
  const id = formData.get("id") as string
  const password = formData.get("password") as string
  
  const admin = await prisma.admin.findUnique({
    where: { username: id }
  })

  if (admin && admin.password === password) {
    (await cookies()).set("admin-auth", "true", { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7 // 1 week
    })
  } else {
    return { error: "Invalid ID or Password" }
  }
  
  redirect("/radhe-radhe-admin/dashbord")
}
