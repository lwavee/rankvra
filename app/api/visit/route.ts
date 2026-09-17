import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    await prisma.visit.create({
      data: {} // timestamp defaults to now() based on Prisma schema
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error recording visit:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
