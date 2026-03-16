import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn } from "../components/FadeIn";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative pt-28 pb-10 md:pt-32 md:pb-14 text-center px-6">
          <div className="aurora-bg aurora-bg-sub" />
          <FadeIn>
            <h1 className="relative z-10 font-display text-5xl md:text-7xl text-slate-900">
              Careers
            </h1>
          </FadeIn>
        </section>
        <section className="px-6 py-16 md:px-16 md:py-20 lg:px-24 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-base text-slate-500 leading-relaxed">
              We don&rsquo;t have any open positions right now, but we&rsquo;re
              always interested in hearing from talented people. Drop us a line
              at{" "}
              <a
                href="mailto:contact@replicante.eu"
                className="text-crystal-rose hover:text-slate-700 transition-colors"
              >
                contact@replicante.eu
              </a>
            </p>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
