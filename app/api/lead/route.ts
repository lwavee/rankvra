import { NextRequest, NextResponse } from "next/server";

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

    // Lead payload structured for CRM, Webhook, or email dispatch
    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      website: website.trim(),
      company: company.trim(),
      primaryGoal: primaryGoal.trim(),
      details: (notes || message).trim(),
      source,
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "unknown",
      ip: req.headers.get("x-forwarded-for") || "unknown",
    };

    // Log structured lead record to server output (and ready for webhook integration)
    console.info("[RankVRA Lead Capture]", JSON.stringify(leadRecord));

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
