import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn } from "../components/FadeIn";

export const metadata = { title: "Updates" };

export default function UpdatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 text-center px-6">
          <div className="aurora-bg aurora-bg-sub" />
          <FadeIn>
            <h1 className="relative z-10 font-display text-5xl md:text-7xl text-slate-900">
              Updates
            </h1>
          </FadeIn>
        </section>
        <section className="px-6 pb-28 md:px-16 md:pb-28 lg:px-24 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-base text-slate-500 leading-relaxed">
              Updates coming soon. Subscribe below to be the first to know.
            </p>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
