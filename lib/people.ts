import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Person {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  linkedin?: string;
  x?: string;
}

function readPeopleFile(filename: string): Person[] {
  const filePath = path.join(process.cwd(), "content", "people", filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  const key = filename.replace(".md", "");
  return (data[key] || []) as Person[];
}

export function getEmployees(): Person[] {
  return readPeopleFile("employees.md");
}

export function getAdvisors(): Person[] {
  return readPeopleFile("advisors.md");
}
