import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      website = "",
      company = "",
      primaryGoal = "",
      notes = "",
      message = "",
      source = "website",
      honeypot = "",
    } = body;

    // Spam honeypot trap: if a bot fills the hidden honeypot field, succeed silently without processing
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid contact number." },
        { status: 400 }
      );
    }

    // Save Lead to database using Prisma
    const leadRecord = await prisma.lead.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: company.trim() || null,
        primaryGoal: primaryGoal.trim() || null,
        notes: (notes || message).trim() || null,
        source: source.trim() || null,
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your inquiry has been logged successfully.",
        leadId: leadRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[RankVRA Lead Error]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try WhatsApp or email." },
      { status: 500 }
    );
  }
}
