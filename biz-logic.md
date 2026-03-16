# REPLICANTE — Business Context Document

# Feed this entire file to Cursor when building the website.

## COMPANY OVERVIEW

**Company Name:** Replicante
**Domain:** replicante.eu
**Tagline:** "AI assistants for luxury real estate"
**One-liner:** We build AI-powered virtual assistants that help luxury real estate firms in Lisbon qualify leads, answer buyer questions in any language, and automate the repetitive work that eats agents' time.

**Founded:** 2026, Lisbon, Portugal
**Founders:**

- Derek — Co-Founder, Business Development & VFX/AI Visuals. Background in VFX production, filmmaking, and AI visual workflows. Handles client relationships, go-to-market, and visual product strategy.
- Alexis — Co-Founder, Technical Lead & AI Engineering. Professional coder with previous startup experience (sold last company in late 2025). Handles all AI engineering, bot development, Cloudflare infrastructure, and deployment.

**Stage:** Pre-revenue. Working product built and deployed. Actively seeking first pilot clients among luxury real estate agencies in Lisbon.

**Location:** Based in Lisbon, Portugal. Targeting the Portuguese luxury real estate market initially, with plans to expand across Europe.

---

## THE PROBLEM WE SOLVE

Luxury real estate firms in Lisbon serve buyers from 40+ nationalities across every time zone. Yet their digital lead handling is stuck in 2015:

**For buyers:**

- International buyers browsing at 2am get a contact form and a promise that "someone will get back to you." By morning, they've moved on to the next agency.
- French, German, Chinese, and Brazilian buyers who don't speak Portuguese or English struggle to get answers about properties and the buying process.
- Every buyer asks the same 20 questions: What is a NIF? How does IMT tax work? Can I get a Golden Visa? What's the buying process? How much are total costs? These questions go unanswered for hours while agents sleep or are in meetings.

**For agents:**

- Agents spend hours each week answering the same regulatory and process questions manually — time that should be spent on high-value activities like viewings and closings.
- Follow-up emails after calls take 30-45 minutes each. Many never get written at all.
- There's no way to distinguish a serious €2M cash buyer from a casual browser until an agent manually engages — wasting time on unqualified leads.
- The 5-hour time zone gap between Portugal and the US East Coast (now the #1 foreign buyer nationality in Lisbon) means lost leads every single day.

**For agencies:**

- No luxury agency in Lisbon (except one) has deployed AI tools. The industry is technologically behind.
- Porta da Frente Christie's is the only firm that has deployed an AI agent — they reported $100M in sales attributed to it. This proves the model works. Every other luxury firm is leaving money on the table.
- Hiring multilingual staff to cover all time zones and languages is prohibitively expensive. An AI assistant that speaks 6 languages and works 24/7 costs a fraction of one additional hire.

---

## OUR PRODUCT: SOFIA

Sofia is an AI-powered virtual assistant purpose-built for luxury real estate firms in the Lisbon market. She is not a generic chatbot — she is a real estate specialist with deep knowledge of Portuguese property law, tax regulations, neighborhoods, and the luxury buying process.

### What Sofia Does for Buyers (Front-End)

**Multilingual Conversations:**

- Answers questions in 6+ languages: Portuguese, English, French, Spanish, German, Mandarin
- Auto-detects the buyer's language and responds in kind — never defaults to English
- Understands real estate terminology across languages: T-system (T0-T4) in Portuguese/French, Zimmer in German, piso in Spanish
- Keeps Portuguese legal terms (escritura, NIF, IMT, CPCV) in Portuguese across all languages but explains them naturally

**Property Search & Matching:**

- Searches live property listings matching buyer criteria (location, budget, bedrooms, type, sale or rent)
- Integrated with Idealista API covering 30+ locations across Greater Lisbon and the Portuguese Riviera
- Presents compact property cards with price, size, bedrooms, price-per-m², and direct links
- Matches buyers to neighborhoods based on lifestyle: schools, beaches, golf, nightlife, healthcare, commute

**Deep Regulatory Knowledge:**

- Calculates exact IMT tax at any price point (knows the 7.5% flat rate above €1.1M, stamp duty at 0.8%, total acquisition costs of ~8.5-9%)
- Explains the current Golden Visa status accurately: real estate route eliminated Oct 2023, fund-based route at €500k minimum, 5-year citizenship pathway still active
- Covers IFICI/NHR 2.0 tax regime, D7/D8/D2 visa pathways, CPCV process, NIF requirements
- Knows AL (Alojamento Local) short-term rental licensing restrictions including Lisbon's containment zones
- Critical nuance: correctly explains that buying property does NOT automatically grant residency

**Neighborhood Intelligence:**

- Structured data on 14 luxury neighborhoods: 9 in Lisbon proper + 5 on the Portuguese Riviera
- Each neighborhood includes: personality description, price per m², named international schools, private hospitals, Michelin-starred restaurants, transport links, outdoor amenities
- Matches buyer lifestyle preferences to 2-3 recommended neighborhoods with explanations

**Viewing Scheduling:**

- Collects preferred dates, times, timezone, and property reference
- Submits viewing request to the agency
- Agent confirms with one command, buyer receives confirmation automatically
- For properties above €5M, suggests private viewing with a senior consultant

### What Sofia Does for Agents (Back-End)

**Lead Scoring (0-100):**

- Scores every conversation in real time based on: budget, financing method (cash/mortgage/fund), timeline, nationality, NIF status, property specificity, buyer type
- Tiers: HOT (70+) triggers instant agent notification, WARM (40-69) for daily digest, COOL (<40) bot continues nurturing
- Nationality priority flags: 🇺🇸 US (highest value), 🇧🇷 Brazilian, 🇫🇷 French, 🇬🇧 British, 🇨🇳 Chinese
- Buyer type detection: end-user, investor, relocation, second home, retirement

**Hot Lead Notifications:**

- Instant Telegram alert when a lead crosses the hot threshold
- Full breakdown: name, score, budget range, financing method, nationality, NIF status, timeline, score signals
- Agent sees everything they need to take over the conversation with full context

**Auto-Drafted Follow-Up Emails:**

- After 10+ messages with a warm/hot lead, automatically drafts a personalized follow-up email
- Draft sent to agent channel only — never to the buyer
- Agent approves with one tap, edits, or discards
- Sends via email integration (SendGrid)
- Also supports manual /followup command for external meeting transcripts (paste a Google Meet transcript, get a draft email back)

**Privacy & Discretion Controls:**

- Three disclosure tiers: Anonymous → Identified → Verified
- Anonymous: listed properties, general info, legal guidance
- Identified (gave name + contact): full property details, schedule viewings
- Verified (agent manually verifies): off-market/pocket listings, exclusive portfolio
- GDPR compliant: conversations stored securely, deletable on request
- For properties above €5M: defaults to suggesting private consultation

**CRM & Data Capture:**

- Captures buyer data silently during natural conversation: name, email, phone, budget, nationality, NIF status, buyer type, financing method, language
- Stores lead scores, conversation history, and score signals
- Every interaction logged to database for reporting

### Where Sofia Lives

**Omnichannel:**

- Telegram bot (live and working)
- WhatsApp Business API (webhook routing built)
- Embeddable web widget — one script tag on any website
- All channels share the same conversation state and CRM data

**Web Widget:**

- Floating chat bubble (bottom-right corner)
- Expands into a clean chat panel
- Mobile responsive (full-width on phones)
- Passes the current page URL to Sofia so she knows which property the buyer is looking at
- Agency embeds with one line: `<script src="https://domain.com/widget.js"></script>`

---

## OUR MARKET

### The Lisbon Luxury Real Estate Market

- Lisbon's luxury property prices expected to grow 4-5.9% in 2026, leading global prime residential markets (Savills forecast)
- Average luxury transaction: ~€1.5M. Ultra-luxury: €2M-€12M+
- 88% of luxury purchases in Cascais/Estoril are all-cash transactions
- International buyers account for up to 70% of luxury new-build transactions in central Lisbon
- Americans surged from 2% to 15.2% of foreign purchases — now the #1 foreign nationality
- Key neighborhoods: Avenida da Liberdade (€9,000-12,000/m²), Chiado (€8,000-10,000/m²), Príncipe Real (€8,000-9,500/m²), Estrela/Lapa (€7,300-8,000/m²), Cascais (€8,000-10,000/m²)
- Karl Lagerfeld branded residences coming to Lisbon. 15 branded residence projects in pipeline adding 1,200 units by 2031.

### Target Customers

**Primary:** Luxury real estate agencies in Lisbon, Cascais, Estoril, and Sintra selling to international buyers.

**Ideal customer profile:**

- 10-50 agents
- Serving international clientele (especially American, French, British, Brazilian buyers)
- Properties in the €500k-€10M+ range
- Currently using contact forms and email for lead capture (no AI, no chatbot)
- English-friendly leadership

**Target firms (by tier):**

- Tier 1 (aspirational, future): Portugal Sotheby's International Realty, Quintela + Penalva | Knight Frank
- Tier 2 (current targets): Fine & Country Portugal, Portugal Homes, Fantastic Frank Lisbon
- Tier 3 (network development): Independent luxury agents, boutique agencies, Flaminia Buda's agent network

### Competitive Landscape

**Direct competitors in Portuguese luxury RE: None.**

- Porta da Frente Christie's uses eSelf AI (Israeli company) — the only AI deployment in the market. General-purpose video AI agent, not RE-specific.
- No other luxury agency in Lisbon has deployed any AI tool.

**US-based luxury RE AI platforms (not in Europe):**

- Luxury Presence ($89M raised, 87,000 agents) — US only
- Compass ($1.6B tech investment) — US only
- Ylopo, Structurely, Lofty, Rechat — all US only

**Local proptech (data, not client-facing AI):**

- CASAFARI — market data and CRM, 60,000+ users, $135M raised. Data platform, not client-facing AI.
- eGO Real Estate — dominant Portuguese CRM, 3,000+ companies. CRM only.

**Our moat:**

1. Deep Portuguese regulatory knowledge built into the AI (IMT brackets, Golden Visa current status, IFICI, AL licensing, CPCV process)
2. Purpose-built for the Lisbon luxury market (neighborhoods, price data, school/healthcare/lifestyle matching)
3. Integration with Portuguese CRM ecosystem (eGO, CASAFARI) and portals (Idealista)
4. GDPR-compliant from day one (unlike US platforms that would need to retrofit)
5. First-mover in European luxury RE AI — no dedicated platform exists

---

## BUSINESS MODEL

**Pricing (planned):**

- SaaS subscription per agency
- Tiered by features and volume (number of conversations, agents, properties)
- Free 2-week pilot to prove value with zero risk to the agency

**Revenue streams:**

- Monthly SaaS subscription (core)
- Setup and customization fees (loading firm's property data, brand customization)
- Future: per-lead or per-conversion fees, premium integrations, data analytics

**Go-to-market:**

- Phase 1 (now): Direct outreach to 3-4 luxury agencies in Lisbon. Free pilots to prove value and gather case study data.
- Phase 2: Flaminia Buda's focus group with 5 Lisbon agents. Live demo and feedback session.
- Phase 3: Case study-driven sales. Use pilot results (leads generated, agent hours saved) to sell to larger firms.
- Phase 4: Expand across Portuguese Riviera (Cascais, Estoril, Sintra) and to Porto. Then broader European luxury markets (Madrid, Barcelona, South of France, Italian Riviera).

---

## SECOND PRODUCT LINE: AI VISUAL WORKFLOWS

In addition to the chatbot, Replicante offers AI-powered visual services for real estate:

**Virtual Staging:**

- Transform empty rooms into fully staged properties using AI
- Multiple style options (modern, classic, Scandinavian, etc.)
- Convert blueprints into photorealistic fully-furnished renders

**3D Video Walkthroughs:**

- AI-generated room-to-room video tours from photos
- Useful for pre-development properties and off-plan sales

**Photo Enhancement:**

- AI-powered photo improvement for existing listings
- Sky replacement, lighting enhancement, object removal

This visual product serves as a door-opener with agencies — it's a tangible, immediately visible service that leads to the deeper chatbot/AI assistant engagement.

---

## BRAND IDENTITY GUIDELINES

**Tone:** Professional but approachable. Confident but not arrogant. We speak like a smart colleague, not a corporate brochure. We respect the luxury market's standards of discretion and quality while being clearly tech-forward.

**Key messaging principles:**

- Lead with the problem, not the technology. Agents don't care about "large language models" — they care about not losing the American buyer who inquired at 2am.
- Prove with specifics. "€150,000 IMT on a €2M apartment" is more compelling than "handles tax questions."
- Reference the Porta da Frente Christie's $100M stat as market validation — this isn't a concept, it's a proven model.
- Always mention multilingual capability early — this is the instant differentiator in the Lisbon market.

**Visual direction:**

- Clean, modern, premium. Think luxury tech — not generic SaaS.
- Dark mode primary (dark navy/charcoal #1B3A4B) with white text and subtle gold or warm accent
- Photography: Lisbon architectural details, Tagus river views, luxury interiors, Portuguese tiles (azulejos). NOT stock photos of people pointing at screens.
- Typography: clean sans-serif, generous spacing, nothing cramped
- The website should feel like it belongs in the world of Sotheby's and Knight Frank, not in the world of Zendesk and Intercom.

**What the website must NOT look like:**

- Generic SaaS landing page with cartoon illustrations
- Chatbot company template with floating bubble screenshots
- Anything that screams "startup" more than "luxury technology partner"

---

## WEBSITE STRUCTURE

### Page 1: Homepage

**Hero section:**

- Headline: "Your buyers have questions at 2am. Sofia has answers."
- Subheadline: "AI assistants for luxury real estate firms in Portugal. Multilingual. Always on. Built for the Lisbon market."
- CTA: "See Sofia in Action" (scrolls to demo section or opens a contact form)
- Background: cinematic shot of Lisbon at golden hour, or luxury apartment interior with Tagus view

**Problem section:**

- "International buyers don't wait for business hours."
- Brief stats: 70% of luxury buyers in Lisbon are international. Americans are the #1 foreign nationality. The 5-hour time zone gap means lost leads every night.
- "Porta da Frente Christie's deployed an AI agent and reported $100M in sales. Your firm doesn't have one yet."

**Solution section:**

- Show the three core capabilities as cards or blocks:
  1. "Speaks their language" — 6+ languages, auto-detection, real estate terminology
  2. "Knows Portuguese law" — IMT, Golden Visa, CPCV, NIF, AL licensing
  3. "Finds serious buyers" — 0-100 lead scoring, nationality detection, instant agent alerts

**How it works section:**

- Simple 3-step flow:
  1. Buyer asks a question (show example in French about T3 in Cascais)
  2. Sofia responds instantly with property matches and regulatory info
  3. Agent gets a notification with qualified lead details and a one-tap follow-up

**Social proof section:**

- For now (pre-customer): use the Porta da Frente Christie's $100M stat as market validation
- Quote from Flaminia Buda if she approves
- "Built in Lisbon, for Lisbon" credibility note
- Future: customer logos and testimonials

**CTA section:**

- "Ready to see what Sofia can do for your agency?"
- "We're offering free 2-week pilots to select luxury agencies in Lisbon."
- Contact form: name, email, agency name, message
- Or: "Book a 20-minute demo" button

### Page 2: Product / How It Works

**Detailed feature breakdown:**

- For Buyers section (multilingual, property search, regulatory knowledge, neighborhood matching, viewing scheduling)
- For Agents section (lead scoring, hot alerts, auto-drafted emails, privacy controls, CRM)
- For Your Website section (embeddable widget, one line of code, mobile responsive, property-page aware)
- Show actual interface mockups or screenshots of the bot in action

**Integration section:**

- "Works with your existing tools"
- Telegram, WhatsApp, Web
- Idealista integration
- CRM compatibility (eGO, CASAFARI, HubSpot)

### Page 3: About

- Our story: two founders in Lisbon combining AI engineering and visual production expertise to modernize the real estate industry
- Brief founder bios
- "We live in Lisbon. We know this market. We built Sofia specifically for it."
- The Lisbon focus: not trying to be everything to everyone. Purpose-built for the Portuguese luxury market.

### Page 4: Contact

- Simple contact form
- Email: contact@replicante.eu
- Phone number
- "Based in Lisbon. Happy to meet at your office."
- Optional: Calendly embed for booking demo calls

---

## KEY STATS TO USE ON THE WEBSITE

All verified from research conducted March 2026:

- Lisbon projected to lead global prime residential price growth in 2026 at 4-5.9% (Savills)
- Americans now the #1 foreign buyer nationality in Lisbon at 15.2% of foreign purchases
- US investment in Portuguese luxury RE increased 82% in Q2 2025 (Portugal Sotheby's)
- 88% of luxury purchases in Cascais/Estoril are all-cash transactions
- Average foreign buyer spends ~€1.5M in the luxury segment
- Porta da Frente Christie's deployed an AI agent and reported $100M in sales (Fox Business, HousingWire)
- Portugal's Golden Visa program had a record 4,987 visas in 2024 (72% YoY increase)
- Portugal housing prices hit all-time high in 2025 (Euronews)
- Lisbon ranked as one of the most popular cities in the world for millionaires

---

## TECHNICAL ARCHITECTURE (for context, not for the website)

- Built on Cloudflare Workers (TypeScript)
- Database: Cloudflare D1 (SQLite)
- LLM: via OpenRouter (supports Claude, GPT-4, Gemini)
- Property search: Idealista API
- Email: SendGrid
- Deployed at: sofia-bot.alexispp95.workers.dev
- GitHub repo: replicant

---

## WHAT THE WEBSITE IS FOR

This website serves one purpose: **get a luxury real estate agency to book a 20-minute demo.**

Every element on every page should drive toward that action. We're not selling software online — we're establishing enough credibility that Christopher Fortunato at Fine & Country or David Poston at Portugal Homes clicks "Book a Demo" instead of deleting our email.

The website answers three questions:

1. "Who are these people?" → About page, Lisbon-based, real founders
2. "Is this real?" → Working product, specific features, market stats
3. "Is this worth 20 minutes of my time?" → Free pilot, no risk, come to your office
