import CtaLink from "./components/CtaLink";
import {
  ctaConfig,
  hasExternalBookingUrl,
  hasGhlCalendar,
  hasGhlForm,
} from "./config/cta";

const navItems = [
  { label: "The System", href: "#why-usm" },
  { label: "Proof", href: "#proof" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const fitItems = [
  "Established log home restoration companies",
  "Log home staining and refinishing specialists",
  "Chinking, sealing, and preservation crews",
  "Operators who want premium rural and exurban projects",
  "Companies that can respond quickly to serious inbound leads",
];

const notFitItems = [
  "Handymen or general exterior repair crews",
  "Generic painters chasing low-ticket work",
  "Low-bid contractors competing on price alone",
  "Companies looking for shared leads",
  "Businesses that cannot keep up with inbound demand",
];

const painCards = [
  {
    title: "Inconsistent premium project flow",
    body: "High-ticket restoration jobs arrive in bursts, which creates schedule gaps and revenue swings.",
    featured: true,
  },
  {
    title: "Referrals are not a system",
    body: "Good referrals help, but they rarely create dependable demand across the season.",
  },
  {
    title: "Generic contractor marketing misses the niche",
    body: "Log home owners look for specialists, not broad exterior service companies.",
  },
  {
    title: "Lower-value work drifts into the pipeline",
    body: "When the calendar softens, it gets easier to take jobs that dilute premium positioning.",
  },
];

const offerItems = [
  "Meta campaigns built around log home restoration demand",
  "Ad messaging written for staining, chinking, blasting, and repair buyers",
  "Creative direction based on real log-home project visuals",
  "Exclusive inbound opportunities sent directly to your company",
  "Lead-quality optimization instead of cheap lead volume",
  "Clear communication and reporting without agency jargon",
];

const whyItWorks = [
  {
    title: "Hyper-specific messaging",
    body: "If the ad does not immediately read as log home restoration, the right homeowners scroll past it.",
  },
  {
    title: "Better-fit homeowners",
    body: "The offer attracts owners looking for specialized preservation and restoration work, not generic repainting.",
  },
  {
    title: "Premium project focus",
    body: "The system is built to support higher-value restoration opportunities, not random low-intent volume.",
  },
  {
    title: "Simple operator flow",
    body: "You respond, qualify, and close. We manage the acquisition side and sharpen it over time.",
  },
];

const proofStats = [
  { value: "Exclusive", label: "inquiries routed to one company, not shared" },
  { value: "Qualified", label: "homeowners asking about restoration-specific scopes" },
  { value: "Direct", label: "calls and forms sent straight to your team" },
  { value: "Premium", label: "project types aligned with staining, repair, and preservation work" },
];

const testimonials = [
  {
    quote:
      '"The message sounded like it came from somebody who actually understands log home restoration. That showed up in the quality of the calls."',
    name: "Owner",
    company: "Mountain West log home restoration company",
  },
  {
    quote:
      '"We were too referral-dependent. This gave us a cleaner way to bring in staining, blasting, and repair projects that fit our business."',
    name: "Operator",
    company: "Regional log home staining and blasting company",
  },
  {
    quote:
      '"The inquiries felt qualified from the start. People were asking for specialty work, not treating us like a generic paint crew."',
    name: "Founder",
    company: "Preservation-focused log home contractor",
  },
];

const proofExamples = [
  {
    title: "Booked estimate example",
    detail:
      "Homeowner requested blasting, failed-chink repair, and full exterior staining for a large weathered log residence.",
    meta: "Mountain market example",
  },
  {
    title: "Territory fit example",
    detail:
      "Service-area targeting adapted around rural drive times, second-home density, and high-value log home pockets.",
    meta: "Rural service area example",
  },
  {
    title: "Qualified inquiry example",
    detail:
      "Homeowner submitted property photos, square footage, and timing window before the estimate call was even booked.",
    meta: "Estimate-ready inquiry",
  },
];

const processSteps = [
  {
    title: "Book a fit call",
    body: "We review your company, service mix, and whether the niche fit is strong enough to move forward.",
  },
  {
    title: "Assess the market",
    body: "We evaluate your service area, premium offer positioning, and response capacity.",
  },
  {
    title: "Build the system",
    body: "Campaigns, messaging, creative direction, and routing are built around real log home demand.",
  },
  {
    title: "Launch and optimize",
    body: "Leads come directly to you while we improve quality based on inquiry and close feedback.",
  },
];

const bestFitBullets = [
  "You already do real log home restoration work",
  "You want more consistent premium opportunities",
  "You want a system instead of random lead sources",
  "You can respond to new leads quickly",
  "You care about fit and project quality more than cheap volume",
];

const faqs = [
  {
    question: "How is this different from generic contractor marketing?",
    answer:
      "Most contractor marketing is too broad for this niche. This is built around log home restoration demand, including the service language, homeowner concerns, and premium positioning that actually matter here.",
  },
  {
    question: "Are the leads exclusive?",
    answer:
      "Yes. The offer is positioned around exclusive inbound opportunities generated for your company. This is not a shared-lead model.",
  },
  {
    question: "What kinds of services does this work best for?",
    answer:
      "It works best for real log home restoration services such as staining, refinishing, blasting and prep, chinking, repair, preservation work, and larger restoration scopes.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "Some input helps, especially strong project photos. We handle the positioning and campaign buildout, but better field visuals usually improve results.",
  },
  {
    question: "What markets does this work in?",
    answer:
      "Fit depends on your service area, competition, homeowner demand, and whether your company is positioned for premium work. The fit call is where we evaluate that.",
  },
  {
    question: "How quickly can this launch?",
    answer:
      "That depends on readiness, service-area clarity, and available assets. Once the fit is clear, the process is built to move quickly.",
  },
  {
    question: "What determines whether we're a fit?",
    answer:
      "The main factors are whether you do legitimate log home restoration work, whether you can respond quickly to inbound demand, whether your market is viable, and whether you want qualified premium opportunities rather than cheap volume.",
  },
];

function App() {
  const featuredPain = painCards.find((item) => item.featured);
  const secondaryPainCards = painCards.filter((item) => !item.featured);
  const primaryBookingHref = ctaConfig.primaryBookingUrl;
  const secondaryCtaHref = ctaConfig.secondaryCtaUrl;

  return (
    <div className="overflow-x-clip bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)]/30 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--bg)]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,12,16,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold tracking-[0.22em] text-[var(--accent)]">
              LH
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Log Home Lead Engine™
              </p>
              <p className="text-xs text-[var(--muted)]">by UpScale Media</p>
              <p className="text-[11px] text-white/68">
                Built for log home restoration contractors
              </p>
            </div>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <CtaLink
            href={primaryBookingHref}
            className="hidden sm:inline-flex"
          >
            Book a Fit Call
          </CtaLink>
        </div>
      </header>

      <main id="main-content" className="overflow-x-clip">
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-hidden border-b border-white/8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(176,111,58,0.18),transparent_20%),linear-gradient(180deg,#11171d_0%,#090d11_54%,#12181e_100%)]" />
          <div className="wood-grain absolute inset-x-0 top-0 h-56 opacity-45" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-[4.5rem] sm:px-6 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-[7.5rem]">
            <div className="relative z-10 lg:pr-6">
              <p className="eyebrow">Log Home Lead Engine™</p>
              <p className="mt-3 text-sm font-medium text-white/72">
                by UpScale Media
              </p>
              <h1 className="hero-title mt-7 max-w-[11ch] text-white">
                Get More Premium
                <br />
                Log Home Restoration
                <br />
                Projects
              </h1>
              <p className="hero-copy mt-7 max-w-2xl">
                A niche-specific lead generation system built for serious log
                home restoration contractors who want exclusive inbound
                opportunities from homeowners already looking for staining,
                chinking, blasting, repair, and full-scope restoration work.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <CtaLink
                  href={primaryBookingHref}
                  className="button-primary-hero"
                >
                  Book a Fit Call
                </CtaLink>
                <CtaLink href={secondaryCtaHref} variant="secondary">
                  View Proof
                </CtaLink>
              </div>

              <p className="mt-5 text-sm font-medium text-white/88">
                Short fit call. We review your market, service area, and offer
                fit.
              </p>

              <p className="mt-5 text-sm font-medium text-white/82">
                Built specifically for log home restoration contractors. Not
                generic contractor marketing. Not for handymen. Not for
                low-bid painters.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Log home restoration",
                  "Staining and refinishing",
                  "Chinking and sealing",
                  "Blasting and prep",
                ].map((tag) => (
                  <span key={tag} className="chip-dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="panel-dark hero-proof-shell">
                <div className="surface-photo hero-proof-main min-h-[21rem] rounded-[1.9rem] p-6 sm:p-7">
                  <div className="flex h-full flex-col justify-between">
                    <div className="max-w-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-soft)]">
                        Results panel
                      </p>
                      <h2 className="mt-4 text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-white">
                        Demand built around real restoration work, not generic
                        contractor traffic
                      </h2>
                      <p className="mt-4 text-base leading-7 text-white/82">
                        Territory-based lead flow for companies quoting
                        high-ticket log home staining, chinking, blasting, and
                        preservation projects.
                      </p>
                    </div>

                    <div className="mt-10 space-y-4">
                      {[
                        "Latest inbound lead: 4,800 sq. ft. log home requesting blasting, repair, and exterior stain.",
                        "Booked call signal: homeowner submitted photos, timing, and service need before the estimate call.",
                      ].map((item) => (
                        <div key={item} className="proof-feed-row proof-feed-row-hero">
                          <span className="feed-dot" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 proof-card">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">
                        Active demand snapshot
                      </p>
                    </div>
                    <span className="proof-pill">Exclusive lead flow</span>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {proofStats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="proof-card proof-stat-dark">
                        <p className="text-4xl font-semibold tracking-[-0.05em] text-white">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/82">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  id="fit-call"
                  className="mt-5 grid gap-4 rounded-[1.9rem] border border-white/10 bg-[rgba(4,7,10,0.28)] p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-soft)]">
                        GoHighLevel Integration
                      </p>
                      <p className="mt-3 text-lg font-medium text-white">
                        The next step is a short fit call to review market,
                        service area, and response fit. Set your GoHighLevel
                        calendar or form URL in the CTA config to make this live.
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                      GHL-ready section
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="input-shell">
                      Primary booking URL
                      <span className="mt-1 block text-sm text-white/72">
                        {ctaConfig.primaryBookingUrl}
                      </span>
                    </div>
                    <div className="input-shell">
                      Thank-you page URL
                      <span className="mt-1 block text-sm text-white/72">
                        {ctaConfig.thankYouPageUrl}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <CtaLink
                      href={primaryBookingHref}
                      className="w-full sm:w-auto"
                    >
                      Book a Fit Call
                    </CtaLink>
                    {hasGhlCalendar ? (
                      <CtaLink href={ctaConfig.ghlCalendarUrl} variant="secondary">
                        Open GHL Calendar
                      </CtaLink>
                    ) : null}
                    {hasGhlForm ? (
                      <CtaLink href={ctaConfig.ghlFormUrl} variant="secondary">
                        Open GHL Form
                      </CtaLink>
                    ) : null}
                  </div>
                  <p className="text-sm text-white/72">
                    {hasExternalBookingUrl
                      ? "Primary CTAs now link to your configured booking destination."
                      : "Primary CTAs currently scroll to this section until a production booking URL is added."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For / Not For */}
        <section className="section-shell" aria-labelledby="for-not-for-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker">Qualification</p>
              <h2
                id="for-not-for-title"
                className="section-title title-on-dark mt-5"
              >
                Built for a Very Specific Type of Company
              </h2>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              <div className="panel-dark fit-card fit-card-positive">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">
                  This is for
                </p>
                <div className="mt-7 space-y-4">
                  {fitItems.map((item) => (
                    <div key={item} className="list-row list-row-strong">
                      <span className="list-icon list-icon-positive">+</span>
                      <span className="text-base font-medium text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-dark fit-card fit-card-negative">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/78">
                  This is not for
                </p>
                <div className="mt-7 space-y-4">
                  {notFitItems.map((item) => (
                    <div key={item} className="list-row list-row-muted">
                      <span className="list-icon list-icon-negative">-</span>
                      <span className="text-base font-medium text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-y border-white/8 bg-[var(--bg-soft)] py-24 sm:py-[7.5rem]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
            <div className="max-w-md">
              <p className="section-kicker">The Problem</p>
              <h2 className="section-title title-on-dark mt-5">
                Most Good Companies in This Space Still Rely Too Heavily on
                Referrals
              </h2>
              <div className="problem-copy mt-6 max-w-sm space-y-4 text-[1.02rem] leading-8 text-[var(--muted)]">
                <p>
                  You may do excellent work, but inconsistent inbound demand
                  creates schedule gaps, slows growth, and makes it harder to
                  stay focused on premium restoration projects.
                </p>
                <p>
                  Most contractor marketing is too broad to work here. Log home
                  owners need a different message, and companies in this niche
                  need a system built around that reality.
                </p>
              </div>
            </div>

            <div className="grid items-stretch gap-5 lg:grid-cols-[1.12fr_0.88fr]">
              <article className="panel-dark problem-featured-card min-h-[18rem]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">
                  Core constraint
                </p>
                <p className="mt-5 max-w-md text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-white">
                  {featuredPain?.title}
                </p>
                <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
                  {featuredPain?.body}
                </p>
              </article>

              <div className="grid gap-4 content-start">
                {secondaryPainCards.map((item) => (
                  <article
                    key={item.title}
                    className="panel-dark pain-card-secondary problem-side-card"
                  >
                    <p className="text-[1.08rem] font-semibold leading-7 text-white">
                      {item.title}
                    </p>
                    <p className="mt-3 max-w-sm text-[0.98rem] leading-7 text-[var(--muted)]">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offer / Solution */}
        <section id="why-usm" className="section-shell section-light">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker section-kicker-light">The Offer</p>
              <h2 className="section-title mt-5">
                A Lead Generation System Built Specifically for This Niche
              </h2>
              <p className="mt-7 max-w-xl text-[1.08rem] leading-8 text-[var(--muted-dark)]">
                We build and manage a paid acquisition system designed to bring
                in exclusive opportunities from log home owners looking for real
                restoration work.
              </p>

              <div className="support-panel mt-9">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-deep)]">
                  What the system handles
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--muted-dark)]">
                  Strategy, offer framing, campaign setup, creative direction,
                  lead routing, and ongoing optimization around lead quality.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {offerItems.map((item) => (
                <article key={item} className="panel-light feature-card-strong">
                  <div className="icon-chip" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  </div>
                  <p className="mt-5 text-lg font-semibold leading-7 text-[var(--text-strong)]">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="border-y border-white/8 bg-[var(--bg-soft)] py-[7rem] sm:py-[8.75rem]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker">Why This Works</p>
              <h2 className="section-title title-on-dark mt-5">
                Why This Works Better Than Generic Contractor Marketing
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyItWorks.map((item) => (
                <article key={item.title} className="panel-dark why-card">
                  <p className="text-[1.35rem] font-semibold leading-tight text-white">
                    {item.title}
                  </p>
                  <p className="mt-4 max-w-sm text-[0.98rem] leading-7 text-[var(--muted)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section id="proof" className="section-shell section-light">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker section-kicker-light">Proof</p>
              <h2 className="section-title mt-5">
                Proof of Demand Already Exists
              </h2>
              <p className="mt-7 max-w-2xl text-[1.08rem] leading-8 text-[var(--muted-dark)]">
                This section is built to show the kind of proof that matters in
                this niche: lead quality, estimate readiness, and project fit.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="proof-editorial">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-deep)]">
                      Flagship proof panel
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">
                      Proof should show lead quality, estimate readiness, and
                      project fit, not generic lead volume.
                    </h3>
                  </div>
                  <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs text-[var(--muted-dark)]">
                    Replace with real case data
                  </span>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {proofStats.map((stat) => (
                    <div key={stat.label} className="proof-stat-light">
                      <p className="text-5xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-sm font-medium uppercase tracking-[0.08em] text-[var(--muted-dark)]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 space-y-4">
                  {proofExamples.map((example) => (
                    <article key={example.title} className="proof-example-row">
                      <div className="proof-example-copy">
                        <p className="text-lg font-semibold text-[var(--text-strong)]">
                          {example.title}
                        </p>
                        <p className="mt-3 text-base leading-7 text-[var(--muted-dark)]">
                          {example.detail}
                        </p>
                      </div>
                      <span className="proof-example-tag">{example.meta}</span>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                {testimonials.map((item) => (
                  <blockquote key={item.quote} className="panel-light proof-support-card">
                    <p className="text-xl leading-8 text-[var(--text-strong)]">
                      {item.quote}
                    </p>
                    <footer className="mt-7">
                      <p className="font-semibold text-[var(--text-strong)]">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-[var(--muted-dark)]">
                        {item.company}
                      </p>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="section-shell section-tight">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker">How It Works</p>
              <h2 className="section-title title-on-dark mt-5">
                How It Works
              </h2>
            </div>

            <div className="process-grid mt-14 grid gap-6 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="panel-dark process-card">
                  <span className="step-badge">0{index + 1}</span>
                  <p className="mt-6 text-xl font-semibold leading-tight text-white">
                    {step.title}
                  </p>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Best Fit */}
        <section className="section-compact border-y border-white/8 bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="max-w-xl">
                <p className="section-kicker">Best Fit</p>
                <h2 className="section-title title-on-dark mt-5">Best Fit</h2>
                <p className="mt-7 text-[1.08rem] leading-8 text-[var(--muted)]">
                  This works best for operators already doing legitimate log
                  home restoration work who want a clearer, more dependable path
                  to premium project opportunities.
                </p>
              </div>

              <div className="panel-dark checklist-shell">
                <div className="space-y-4">
                  {bestFitBullets.map((item) => (
                    <div key={item} className="list-row list-row-strong">
                      <span className="list-icon list-icon-positive">+</span>
                      <span className="text-base font-medium text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-shell section-light faq-section">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker section-kicker-light">FAQ</p>
              <h2 className="section-title mt-5">Frequently Asked Questions</h2>
            </div>

            <div className="faq-stack mt-10 space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="faq-shell group">
                  <summary className="faq-summary">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="faq-mark transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-5 pr-8 text-base leading-8 text-[var(--muted-dark)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-shell final-cta-section border-t border-white/8">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <div className="panel-dark final-cta-shell text-center">
              <p className="section-kicker">Next Step</p>
              <h2 className="section-title title-on-dark mx-auto mt-5 max-w-[13ch]">
                See If This Is a Fit for Your Company
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[1.08rem] leading-8 text-[var(--muted)]">
                If you run a serious log home restoration company and want more
                premium project opportunities, the next step is a fit call.
              </p>
              <div className="mt-10">
                <CtaLink
                  href={primaryBookingHref}
                  className="button-primary-hero"
                >
                  Book a Fit Call
                </CtaLink>
                <p className="mt-4 text-sm text-white/90">
                  Short fit call to review your market, service area, and offer
                  fit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/8 bg-[rgba(7,10,13,0.8)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div>
              <p className="text-base font-semibold text-white">
                Log Home Lead Engine™
              </p>
              <p className="mt-1 text-[var(--muted)]">by UpScale Media</p>
            </div>
            <p className="max-w-xl text-white/72">
              Built by UpScale Media for premium log home restoration
              contractors.
            </p>
          </div>
        </footer>
      </main>

      <div className="mobile-cta sm:hidden">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-soft)]">
            Log Home Lead Engine™
          </p>
          <p className="text-sm font-medium text-white">Book a fit call</p>
        </div>
        <CtaLink
          href={primaryBookingHref}
          className="px-5 py-3 text-sm"
        >
          Book a Fit Call
        </CtaLink>
      </div>
    </div>
  );
}

export default App;
