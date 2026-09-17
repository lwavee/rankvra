const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const blogsPath = path.join(process.cwd(), 'data', 'blogs.json');
const reelsPath = path.join(process.cwd(), 'data', 'reels.json');
const visitorsPath = path.join(process.cwd(), 'data', 'visitors.json');

const readDB = (filePath: string) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
  }
  return [];
};

async function main() {
  console.log('Starting migration...');

  // Create initial Admin
  console.log('Creating initial admin...');
  const existingAdmin = await prisma.admin.findUnique({
    where: { username: '701452' }
  });
  
  if (!existingAdmin) {
    await prisma.admin.create({
      data: {
        username: '701452',
        password: 'Sarla@1607'
      }
    });
    console.log('Created admin: 701452');
  }

  // Migrate Blogs
  const blogs = readDB(blogsPath);
  console.log(`Migrating ${blogs.length} blogs...`);
  for (const blog of blogs) {
    await prisma.blog.create({
      data: {
        title: blog.title,
        image: blog.image,
        content: blog.content,
        createdAt: new Date(blog.createdAt),
      }
    });
  }

  // Migrate Reels
  const reels = readDB(reelsPath);
  console.log(`Migrating ${reels.length} reels...`);
  for (const reel of reels) {
    await prisma.reel.create({
      data: {
        title: reel.title,
        link: reel.link,
        createdAt: new Date(reel.createdAt),
      }
    });
  }

  // Migrate Visitors
  const visitors = readDB(visitorsPath);
  console.log(`Migrating ${visitors.length} visitors...`);
  for (const visitor of visitors) {
    await prisma.visit.create({
      data: {
        timestamp: new Date(visitor.timestamp)
      }
    });
  }

  console.log('Migration completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
