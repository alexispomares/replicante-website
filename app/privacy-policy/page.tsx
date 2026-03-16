import Header from "../components/Header";
import Footer from "../components/Footer";
import { marked } from "marked";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FadeIn } from "../components/FadeIn";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content", "pages", "privacy-policy.md"),
    "utf-8"
  );
  const { data, content } = matter(raw);

  const text = content || data?.content?.text || "";
  const html = marked(text) as string;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-24 md:pt-36 md:pb-36 px-6 md:px-16 lg:px-24 max-w-[62rem] mx-auto">
        <FadeIn>
          <h1 className="font-display text-4xl md:text-5xl text-slate-900 mb-10">
            Privacy Policy
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <article
            className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-semibold"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
