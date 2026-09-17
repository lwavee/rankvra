import { NextResponse } from 'next/server';
import { getReels, addReel, deleteReel } from '@/lib/db';

export async function GET() {
  try {
    const reels = getReels();
    return NextResponse.json(reels);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reels' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, link } = body;

    if (!title || !link) {
      return NextResponse.json({ error: 'Title and link are required' }, { status: 400 });
    }

    const reel = addReel({ title, link });
    return NextResponse.json(reel, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create reel' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    deleteReel(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete reel' }, { status: 500 });
  }
}
