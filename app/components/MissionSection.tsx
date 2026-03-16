"use client";

import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "./FadeIn";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  {
    value: 70,
    suffix: "%",
    unit: "of luxury buyers",
    label: "Are international in Lisbon",
  },
  {
    value: 82,
    suffix: "%",
    unit: "YoY growth",
    label: "US investment in Lisbon luxury RE",
  },
  {
    value: 6,
    suffix: "+",
    unit: "languages",
    label: "Sofia speaks natively",
  },
  {
    value: 24,
    suffix: "/7",
    unit: "availability",
    label: "Across every time zone",
  },
];

const chatMessages = [
  {
    role: "buyer" as const,
    flag: "🇫🇷",
    text: "Bonjour, je cherche un T3 à Cascais avec vue mer. Budget autour de 1,5M€.",
  },
  {
    role: "sofia" as const,
    text: "Bonjour ! J'ai trouvé 3 propriétés à Cascais correspondant à vos critères. Pour un achat à 1,5M€, l'IMT sera d'environ 97 500€ (7,5%), plus 0,8% de droit de timbre. Souhaitez-vous planifier une visite ?",
  },
  {
    role: "notification" as const,
    text: "HOT LEAD (Score: 78) — French buyer, €1.5M cash, Cascais T3, ready to view",
  },
];

export default function MissionSection() {
  return (
    <section id="product" className="bg-warm-white">
      {/* Problem + Stats */}
      <div className="px-6 py-24 md:px-16 md:py-32 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[5fr_4fr] gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <span className="font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase text-crystal-rose mb-8 block">
                The challenge
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl lg:text-[3.6rem] text-slate-900 leading-[1.1]">
                International buyers don&rsquo;t wait for business hours
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-lg text-slate-500 leading-relaxed">
                Lisbon&rsquo;s luxury market serves buyers from 40+ nationalities
                across every time zone. Yet most agencies rely on contact forms and
                a promise that &ldquo;someone will get back to you.&rdquo; By
                morning, those buyers have moved on. The 5-hour gap to the US East
                Coast &mdash; now the #1 foreign buyer nationality &mdash; means
                lost leads every single night.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/kitchen-lifestyle.jpeg"
                alt="Luxury kitchen in a Lisbon property"
                width={1200}
                height={686}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto pb-24">
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="px-6 py-10 md:px-8 md:py-12 bg-white rounded-xl border border-slate-200/60 h-full">
                <div className="font-display text-4xl md:text-5xl text-slate-900 leading-none">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    duration={s.value > 1000 ? 2.5 : 1.8}
                  />
                </div>
                <div className="font-mono text-[0.62rem] font-medium tracking-[0.15em] uppercase text-slate-400 mt-2">
                  {s.unit}
                </div>
                <div className="font-heading text-sm font-medium text-slate-600 mt-4 min-h-[2.5rem]">
                  {s.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      {/* Sofia showcase — dark */}
      <div id="sofia-section" className="relative overflow-hidden bg-slate-950">
        <div className="relative z-[1] px-6 py-24 md:px-16 md:py-32 lg:px-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[4fr_5fr] gap-12 lg:gap-16 items-start">
            <div>
              <FadeIn>
                <span className="font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase text-crystal-rose mb-8 block">
                  Meet Sofia
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.8rem] text-lavender-bright leading-[1.1]">
                  An AI assistant that never sleeps, speaks six languages, and
                  knows Portuguese law
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-base text-slate-300 leading-relaxed">
                  Sofia is purpose-built for luxury real estate in the Lisbon
                  market. She handles multilingual buyer conversations, searches
                  live property listings, calculates IMT tax to the euro, and
                  scores every lead in real time &mdash; so your agents only
                  spend time on buyers who are ready to act.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: "Speaks their language",
                      desc: "6+ languages with auto-detection and real estate terminology",
                    },
                    {
                      title: "Knows Portuguese law",
                      desc: "IMT, Golden Visa, CPCV, NIF, AL licensing — always current",
                    },
                    {
                      title: "Finds serious buyers",
                      desc: "0–100 lead scoring with instant agent alerts for hot leads",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-crystal-rose mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-heading text-sm font-semibold text-white">
                          {item.title}
                        </span>
                        <span className="text-sm text-slate-400 ml-1">
                          — {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 h-[3px] w-16 rounded-full bg-crystal-rose" />
              </FadeIn>
            </div>

            {/* Chat mockup */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-900/50 border border-white/[0.08] rounded-2xl p-5 md:p-6 space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
                  <div className="w-2.5 h-2.5 rounded-full bg-crystal-rose animate-pulse" />
                  <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-slate-400">
                    Live conversation
                  </span>
                </div>

                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`${
                      msg.role === "buyer"
                        ? "ml-auto max-w-[85%]"
                        : msg.role === "notification"
                          ? "max-w-full"
                          : "mr-auto max-w-[85%]"
                    }`}
                  >
                    {msg.role === "notification" ? (
                      <div className="bg-crystal-rose/10 border border-crystal-rose/20 rounded-xl p-3.5">
                        <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-crystal-rose mb-1.5">
                          Agent notification
                        </div>
                        <p className="text-[0.8rem] text-crystal-blush leading-relaxed">
                          {msg.text}
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`rounded-xl px-4 py-3 ${
                          msg.role === "buyer"
                            ? "bg-white/[0.08] text-white/90"
                            : "bg-slate-800 text-slate-200"
                        }`}
                      >
                        <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-slate-500 mb-1.5">
                          {msg.role === "buyer" ? (
                            <>{msg.flag} Buyer</>
                          ) : (
                            "Sofia"
                          )}
                        </div>
                        <p className="text-[0.8rem] leading-relaxed">
                          {msg.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Virtual staging showcase */}
      <div className="bg-warm-white">
        <div className="px-6 py-24 md:px-16 md:py-32 lg:px-24 max-w-7xl mx-auto">
          <FadeIn>
            <span className="font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase text-crystal-rose mb-8 block">
              AI visual workflows
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl lg:text-[3.2rem] text-slate-900 leading-[1.1] max-w-3xl">
              From blueprint to photorealistic in minutes
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-base text-slate-500 max-w-2xl leading-relaxed">
              Transform empty floor plans into fully staged, photorealistic
              renders. Virtual staging, 3D walkthroughs, and photo enhancement
              &mdash; all powered by AI.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-14 grid md:grid-cols-2 gap-6">
              <div className="relative rounded-xl overflow-hidden border border-slate-200/60 bg-white">
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-sm">
                  <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white">
                    Before
                  </span>
                </div>
                <Image
                  src="/images/floorplan-wireframe.jpeg"
                  alt="Architectural floor plan — before AI staging"
                  width={1200}
                  height={686}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden border border-crystal-rose/20 bg-white">
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-crystal-rose/80 backdrop-blur-sm">
                  <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white">
                    After
                  </span>
                </div>
                <Image
                  src="/images/floorplan-rendered.jpeg"
                  alt="AI-rendered photorealistic floor plan — after staging"
                  width={1200}
                  height={686}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* How it works */}
      <div id="how-it-works" className="relative overflow-hidden bg-paper scroll-mt-24">
        <div className="aurora-bg aurora-bg-sub" style={{ opacity: 0.35 }} />
        <div className="relative z-[1] px-6 py-24 md:px-16 md:py-32 lg:px-24 max-w-7xl mx-auto">
          <FadeIn>
            <span className="font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase text-slate-400 mb-8 block">
              How it works
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl lg:text-[3.2rem] text-slate-900 leading-[1.1] max-w-3xl">
              From inquiry to qualified lead in seconds
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-base text-slate-500 max-w-2xl leading-relaxed">
              Sofia works on your website, WhatsApp, and Telegram &mdash;
              wherever your buyers are. One script tag to embed, zero training
              required.
            </p>
          </FadeIn>

          <StaggerChildren
            className="mt-16 grid md:grid-cols-3 gap-6"
            stagger={0.12}
          >
            {[
              {
                step: "01",
                title: "Buyer asks a question",
                description:
                  "A French buyer browses your site at 2am and asks about a T3 in Cascais. Sofia responds instantly — in French — with matching properties and tax calculations.",
                image: "/images/terrace-golden-hour.jpeg",
              },
              {
                step: "02",
                title: "Sofia qualifies the lead",
                description:
                  "Through natural conversation, Sofia captures budget, timeline, nationality, financing method, and property preferences. Every lead gets a real-time score from 0 to 100.",
                image: "/images/kitchen-lifestyle.jpeg",
              },
              {
                step: "03",
                title: "Your agent takes over",
                description:
                  "Hot leads trigger an instant notification with full context. Your agent steps in with a pre-drafted follow-up email, ready to close — not to answer basic questions.",
                image: "/images/floorplan-rendered.jpeg",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="group bg-white rounded-xl border border-slate-200/60 overflow-hidden h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="font-mono text-[0.62rem] font-medium tracking-[0.15em] uppercase text-crystal-rose">
                      {item.step}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-slate-900 mt-3">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
