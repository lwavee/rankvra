import fs from 'fs';
import path from 'path';

const blogsPath = path.join(process.cwd(), 'data', 'blogs.json');
const reelsPath = path.join(process.cwd(), 'data', 'reels.json');
const visitorsPath = path.join(process.cwd(), 'data', 'visitors.json');

// Helper to safely read JSON
const readDB = (filePath: string) => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]', 'utf-8');
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
};

// Helper to safely write JSON
const writeDB = (filePath: string, data: any) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    return false;
  }
};

export const getBlogs = () => {
  const blogs = readDB(blogsPath);
  return blogs.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const addBlog = (blog: any) => {
  const blogs = readDB(blogsPath);
  const newBlog = {
    id: `blog_${Date.now()}`,
    ...blog,
    createdAt: new Date().toISOString(),
  };
  blogs.push(newBlog);
  writeDB(blogsPath, blogs);
  return newBlog;
};

export const deleteBlog = (id: string) => {
  const blogs = readDB(blogsPath);
  const newBlogs = blogs.filter((b: any) => b.id !== id);
  writeDB(blogsPath, newBlogs);
};

export const getReels = () => {
  const reels = readDB(reelsPath);
  return reels.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const addReel = (reel: any) => {
  const reels = readDB(reelsPath);
  const newReel = {
    id: `reel_${Date.now()}`,
    ...reel,
    createdAt: new Date().toISOString(),
  };
  reels.push(newReel);
  writeDB(reelsPath, reels);
  return newReel;
};

export const deleteReel = (id: string) => {
  const reels = readDB(reelsPath);
  const newReels = reels.filter((r: any) => r.id !== id);
  writeDB(reelsPath, newReels);
};

export const recordVisit = () => {
  const visitors = readDB(visitorsPath);
  const now = new Date();
  // Store just the timestamp for simplicity
  visitors.push({ timestamp: now.toISOString() });
  writeDB(visitorsPath, visitors);
};

export const getVisitorStats = () => {
  const visitors = readDB(visitorsPath);
  
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  const sevenDaysAgoStart = new Date(todayStart);
  sevenDaysAgoStart.setDate(todayStart.getDate() - 6);

  let todayCount = 0;
  let sevenDayCount = 0;
  const totalCount = visitors.length;

  for (const v of visitors) {
    const visitDate = new Date(v.timestamp);
    if (visitDate >= todayStart) {
      todayCount++;
    }
    if (visitDate >= sevenDaysAgoStart) {
      sevenDayCount++;
    }
  }

  return {
    today: todayCount,
    sevenDays: sevenDayCount,
    total: totalCount
  };
};
