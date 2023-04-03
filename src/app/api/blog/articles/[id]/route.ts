import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

import type { NextApiRequest } from 'next';

export async function GET(_req: NextApiRequest, { params }: { params: { id: string } }) {
  const data = await prisma.article.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(data);
}
