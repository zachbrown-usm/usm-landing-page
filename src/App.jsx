import { useState } from "react";
import logoImage from "./assets/Bitterroot Floors and More Logo (500 x 250 px) (1).png";
import warehouseImage from "./assets/Untitled design (31).png";
import beforeAfterImage from "./assets/Before and After 1.png";

const trustBadges = [
  "5-Star Google Rating",
  "0% Interest for 36 Months",
  "30+ Years Serving the Valley",
];

const painPoints = [
  "Hidden installation costs that show up late in the process",
  "Confusing material choices with no expert guidance",
  "Wasted weekends driving from store to store",
];

const features = [
  {
    icon: "DIAMOND",
    title: "Curated Premium Selection",
    description: "Hardwood, LVP, laminate, and tile chosen for beauty, durability, and long-term value.",
  },
  {
    icon: "PHONE",
    title: "Advanced Room Visualizer",
    description: "Preview flooring styles in your space before you commit so decisions feel clear and confident.",
  },
  {
    icon: "BADGE",
    title: "Certified Master Installers",
    description: "Professional crews deliver precise installs, clean finishes, and a polished project from start to finish.",
  },
  {
    icon: "PAW",
    title: "Pet & Kid-Friendly Options",
    description: "Waterproof and scratch-resistant options built for busy households and messy real life.",
  },
];

const categories = ["Hardwood", "LVP", "Tile"];

const testimonials = [
  {
    quote: "They finished in one day and left the house spotless. The entire process felt effortless.",
    name: "Sarah M.",
    detail: "Hamilton homeowner",
  },
  {
    quote: "The financing was seamless, and seeing the samples in our own light made the decision easy.",
    name: "Jason and Kelli R.",
    detail: "Stevensville remodel",
  },
  {
    quote: "Professional from estimate to install. We never felt pressured, and the floors look incredible.",
    name: "Monica T.",
    detail: "Florence customer",
  },
];

const steps = [
  {
    number: "01",
    title: "Visit the Showroom",
    description: "Walk the displays, compare materials side by side, and get expert help from the start.",
  },
  {
    number: "02",
    title: "Choose the Right Floor",
    description: "Review hardwood, LVP, tile, and pet-friendly options with guidance tailored to your home and budget.",
  },
  {
    number: "03",
    title: "Enjoy Flawless Installation",
    description: "Our experienced installers handle the details so your finished space looks clean, polished, and built to last.",
  },
];

const faqs = [
  {
    question: "Do I need to move my furniture?",
    answer:
      "We help coordinate the prep process and handle the heavy lifting details so the project feels simple, not overwhelming.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most projects move quickly once materials are selected. Your estimate includes a realistic timeline based on room size and product type.",
  },
  {
    question: "What is included in your lifetime warranty?",
    answer:
      "Our team walks you through product and installation coverage clearly so you know exactly what is protected before the job starts.",
  },
  {
    question: "Are your floors pet-friendly?",
    answer:
      "Yes. We offer waterproof and scratch-resistant options designed for pets, kids, and high-traffic homes.",
  },
  {
    question: "How exact is the free estimate?",
    answer:
      "We provide precise measurements and transparent pricing so you know exactly what to expect before installation starts.",
  },
];

function Icon({ type }) {
  const icons = {
    DIAMOND: (
      <path
        d="M12 3 4 11l8 10 8-10-8-8Zm0 0 4 8H8l4-8Zm-4 8h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    PHONE: (
      <path
        d="M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 15h.01M10 6h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    BADGE: (
      <path
        d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Zm-2.5 8 1.7 1.7L14.8 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    PAW: (
      <path
        d="M8.5 9.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2ZM6.5 15c0-2.1 2.5-3.8 5.5-3.8s5.5 1.7 5.5 3.8c0 1.7-1.2 3-3 3H9.5c-1.8 0-3-1.3-3-3Zm-.3-7.2c-.8 0-1.5-.8-1.5-1.8s.7-1.8 1.5-1.8 1.5.8 1.5 1.8-.7 1.8-1.5 1.8Zm11.6 0c-.8 0-1.5-.8-1.5-1.8s.7-1.8 1.5-1.8 1.5.8 1.5 1.8-.7 1.8-1.5 1.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      {icons[type]}
    </svg>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-[var(--ink)] text-white">
      <section className="hero-shell">
        <div className="hero-overlay" />
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="relative z-10 max-w-2xl">
            <img
              src={logoImage}
              alt="Bitterroot Floors and More logo"
              className="hero-logo"
            />
            <p className="eyebrow">Visit Our Showroom</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-[800] leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Find the Perfect Floors in a Showroom Built to Make Choosing Easy.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/82 sm:text-lg">
              Visit Bitterroot Floors & More to explore premium flooring in person, compare styles side
              by side, and get expert guidance from a local team that knows how to match the right floor
              to your home.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#final-cta" className="primary-button">
                Plan Your Showroom Visit
              </a>
              <a href="#offer" className="secondary-button">
                View 0% Financing
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="pill">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="hero-card">
              <div className="room-preview">
                <div className="room-window" />
                <div className="room-panel room-panel-left" />
                <div className="room-panel room-panel-right" />
                <div className="room-floor" />
                <div className="room-rug" />
                <div className="room-sofa" />
                <div className="room-table" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="metric-card">
                  <span className="metric-value">30+</span>
                  <span className="metric-label">Years serving the valley</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">Huge</span>
                  <span className="metric-label">Showroom selection to compare in person</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">A+</span>
                  <span className="metric-label">Trusted service reputation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div className="problem-visual">
            <img
              src={warehouseImage}
              alt="Overwhelming flooring warehouse aisle"
              className="problem-image"
            />
            <div className="shopper-card">
              <span className="text-sm uppercase tracking-[0.24em] text-white/60">The old way</span>
              <p className="mt-3 text-2xl font-[800] leading-tight">Aisles, confusion, and guesswork.</p>
            </div>
          </div>
          <div>
            <p className="section-tag">Discover a Better Way</p>
            <h2 className="section-heading mt-4">Tired of Wasting Weekends in Overwhelming Warehouses?</h2>
            <p className="section-copy mt-5">
              Buying new floors should not mean endless trips to confusing big-box stores, hidden
              installation fees, or trying to guess how a tiny sample will look in your unique lighting.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Bitterroot gives you a better showroom experience: expert help, curated options, and a local
              team that makes decisions feel straightforward instead of stressful.
            </p>
            <div className="mt-8 grid gap-3">
              {painPoints.map((point) => (
                <div key={point} className="list-card">
                  <span className="list-bullet" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 lg:px-12">
          <p className="section-tag">Come See It in Person</p>
          <h2 className="section-heading-dark mt-4">A Showroom Experience That Actually Helps You Decide.</h2>
          <p className="section-copy-dark mx-auto mt-5 max-w-3xl">
            Step into a curated showroom where you can compare premium samples, ask questions, and get
            practical design guidance without pressure. It is the easiest way to feel confident before you buy.
          </p>
          <div className="consultation-showcase mx-auto mt-10">
            <div className="sample-scene">
              <div className="sample-person" />
              <div className="sample-board sample-board-a" />
              <div className="sample-board sample-board-b" />
              <div className="sample-board sample-board-c" />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="pill-dark">Licensed</span>
            <span className="pill-dark">Bonded</span>
            <span className="pill-dark">Insured</span>
          </div>
        </div>
      </section>

      <section className="section-light border-t border-black/6">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-tag">Explore Our Catalog</p>
              <h2 className="section-heading-dark mt-4">Everything You Need for a Flawless Floor.</h2>
              <p className="section-copy-dark mt-5 max-w-2xl">
                From first walk-through to final install, Bitterroot helps you compare smarter and buy with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span key={category} className="category-chip">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">
                  <Icon type={feature.icon} />
                </div>
                <h3 className="mt-5 text-xl font-[800] text-[var(--ink)]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div className="before-after-card">
            <img
              src={beforeAfterImage}
              alt="Before and after flooring transformation"
              className="before-after-image"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="section-tag">See Real Transformations</p>
            <h2 className="section-heading-dark mt-4">Fall in Love with Your Home All Over Again.</h2>
            <p className="section-copy-dark mt-5">
              The right flooring changes how your whole home feels. Visit the showroom, see the materials
              up close, and choose a look that adds value, simplifies upkeep, and makes every room feel finished.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-700">
              <div className="benefit-row">Increase home value with premium, modern materials</div>
              <div className="benefit-row">Choose easier-clean surfaces for busy daily life</div>
              <div className="benefit-row">Create a polished look that wows guests instantly</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="section-tag">Read More Reviews</p>
            <h2 className="section-heading-dark mt-4">Loved by Over 5,000 Local Homeowners.</h2>
            <p className="section-copy-dark mt-5">
              Do not just take our word for it. See why your neighbors rate Bitterroot 5 stars for
              speed, professionalism, and clean installs.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="category-chip">Angi Super Service Award</span>
            <span className="category-chip">BBB A+ Rating</span>
            <span className="category-chip">Google 5-Star Logo</span>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div className="photo-tile photo-tile-a">
              <img
                src={beforeAfterImage}
                alt="Floor transformation detail"
                className="photo-tile-image"
              />
            </div>
            <article className="testimonial-card testimonial-highlight">
              <div className="star-row">5.0 / 5</div>
              <p className="mt-4 text-2xl font-[800] leading-tight text-[var(--ink)]">
                &quot;Professional from estimate to install. We never felt pressured.&quot;
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-slate-500">Real customer project</p>
            </article>
            <div className="grid gap-5">
              {testimonials.slice(0, 2).map((testimonial) => (
                <article key={testimonial.name} className="testimonial-card">
                  <div className="star-row">5.0 / 5</div>
                  <p className="mt-4 text-base leading-7 text-slate-700">&quot;{testimonial.quote}&quot;</p>
                  <p className="mt-5 text-sm font-[800] text-[var(--ink)]">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="section-tag">Start Step 1 Today</p>
            <h2 className="section-heading mt-4">Your Dream Floors in 3 Simple Steps.</h2>
            <p className="section-copy mt-5">
              We have built the process to be simple: see the options, choose the right one, then let our team handle the install.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3 className="mt-5 text-2xl font-[800] text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="offer-section">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="offer-card">
            <div>
              <p className="section-tag">Get Pre-Approved for 0% Financing</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-[800] leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
                Premium Floors. Zero Percent Stress.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700">
                Visit the showroom, choose the floors you want, and spread the cost over time with our exclusive promotional financing.
              </p>
            </div>
            <div className="offer-grid mt-10">
              <div className="offer-stat">
                <span className="offer-big">0%</span>
                <span className="offer-small">Interest for 36 Months</span>
              </div>
              <div className="offer-callout">
                <span className="category-chip">Price Match Guarantee</span>
                <span className="category-chip">No Hidden Installation Fees</span>
                <p className="mt-4 text-sm text-slate-500">Subject to credit approval.</p>
              </div>
            </div>
            <a href="#final-cta" className="primary-button mt-10 inline-flex">
              Get Pre-Approved for 0% Financing
            </a>
          </div>
        </div>
      </section>

      <section className="section-light border-t border-black/6">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="section-tag">Common Questions from Homeowners</p>
            <h2 className="section-heading-dark mt-4">Everything You Need to Know About the Process.</h2>
            <p className="section-copy-dark mx-auto mt-5 max-w-2xl">
              Clear answers right before the final step so you can move forward with confidence.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article key={faq.question} className="faq-card">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="faq-button"
                  >
                    <span>{faq.question}</span>
                    <span className="faq-symbol">{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen ? <p className="faq-answer">{faq.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="final-cta" className="final-cta">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:px-12">
          <p className="section-tag text-white/72">Claim My Free Estimate Now</p>
          <h2 className="mt-4 text-4xl font-[800] leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Ready to Visit the Showroom?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/78">
            Plan your showroom visit, explore the best options in person, and take the next step toward
            new floors with expert help and no pressure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Enter your phone or email"
              className="cta-input"
            />
            <a href="https://example.com/free-estimate" className="primary-button">
              Plan My Showroom Visit
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-white/68">
            <span>100% Satisfaction Guarantee</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span>Secure request form</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
