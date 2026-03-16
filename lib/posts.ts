import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  date: string;
  image?: string;
  summary: string;
  category: string;
  slug: string;
  source_type?: string;
  source_url?: string;
  source_author?: string;
  source_handle?: string;
}

export function getPostSlugs(): string[] {
  return getPostMetadata().map((p) => p.slug);
}

export function getPostMetadata(): PostMetadata[] {
  const folder = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(folder).filter((f) => f.endsWith(".md"));

  const posts = files.map((fileName) => {
    const raw = fs.readFileSync(path.join(folder, fileName), "utf8");
    const { data } = matter(raw);
    return {
      title: data.title || "",
      image: data.image || "",
      date: data.date || "",
      summary: data.summary || "",
      category: data.category || "",
      slug: fileName.replace(".md", ""),
      draft: data.draft || false,
      source_type: data.source_type,
      source_url: data.source_url,
      source_author: data.source_author,
      source_handle: data.source_handle,
    };
  });

  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "posts",
    `${slug}.md`
  );
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
}
