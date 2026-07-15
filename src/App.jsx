import "./App.css";
import heroImage from "./assets/hero_image.png";

function App() {
  const featureCards = [
    {
      icon: "⌘",
      tone: "mint",
      title: "Comprehensive Scans",
      text: "Detect UI, UX, accessibility, performance, SEO, and best practice issues.",
    },
    {
      icon: "⚡",
      tone: "amber",
      title: "Instant Results",
      text: "Get actionable insights in seconds without leaving your browser.",
    },
    {
      icon: "☑",
      tone: "violet",
      title: "Actionable Insights",
      text: "Clear explanations and suggestions to help you fix issues fast.",
    },
    {
      icon: "</>",
      tone: "violet",
      title: "Developer Friendly",
      text: "Built for developers with a clean UI, console integration, and detailed reports.",
    },
    {
      icon: "◍",
      tone: "violet",
      title: "Privacy First",
      text: "All scans run locally in your browser. We don't collect any data.",
    },
    {
      icon: "◎",
      tone: "blue",
      title: "Works Everywhere",
      text: "Scan any website, including local and staging environments.",
    },
  ];

  const testimonials = [
    {
      quote:
        "UI Health Inspector has become part of my daily workflow. It catches issues my eyes often miss.",
      author: "James Ownby",
      role: "Senior Frontend Developer",
      initials: "JO",
    },
    {
      quote:
        "A must-have extension for any developer who cares about building accessible and high-quality interfaces.",
      author: "Sarah Drasner",
      role: "Frontend Developer",
      initials: "SD",
    },
    {
      quote:
        "Fast, accurate, and super useful. It helps me deliver better experiences every time.",
      author: "Sam Selikoff",
      role: "Engineering Manager",
      initials: "SS",
    },
  ];

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">⌁</span>
          <span className="brand-name">UI Health</span>
        </div>
        <nav>
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Checks</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </nav>
        <button className="button-chrome" type="button">
          <span className="chrome-dot" aria-hidden="true" /> Add to Chrome
        </button>
      </header>

      <section className="hero-grid">
        <div className="hero-copy">
          <h1>
            Find UI issues.
            <br />
            <span>Ship better</span>
            <br />
            experiences.
          </h1>
          <p className="lead">
            UI Health scans your web pages for design, usability, and
            accessibility issues so you can fix problems before your users find
            them.
          </p>
          <div className="hero-actions">
            <button className="button-primary" type="button">
              <span className="chrome-dot" aria-hidden="true" /> Add to Chrome -
              It&apos;s Free
            </button>
            <button className="button-ghost" type="button">
              View Demo
            </button>
          </div>
          <ul className="quick-points">
            <li>No sign up</li>
            <li>No configuration</li>
            <li>Works on any website</li>
          </ul>
        </div>

        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src={heroImage}
            alt="UI Health inspection results showing a healthy page score"
          />
        </div>
      </section>

      <section className="trusted-block" aria-label="Trusted by developers">
        <p>TRUSTED BY DEVELOPERS</p>
        <div className="trusted-row">
          <span>Chromatic</span>
          <span>Linear</span>
          <span>GitHub</span>
          <span>Vercel</span>
          <span>Notion</span>
          <span>Railway</span>
        </div>
      </section>

      <section className="features-section">
        <div className="section-intro">
          <h2>
            Everything you need for
            <br />
            <span>healthier user interfaces</span>
          </h2>
          <p>
            UI Health helps you catch design and quality issues early, follow
            best practices, and build inclusive, high-quality interfaces.
          </p>
        </div>
        <div className="features-grid">
          {featureCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <span className={`feature-icon ${card.tone}`}>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-bar" aria-label="Key metrics">
        <article>
          <i>⌕</i>
          <strong>50,000+</strong>
          <span>Pages Scanned</span>
        </article>
        <article>
          <i>✓</i>
          <strong>120,000+</strong>
          <span>Issues Detected</span>
        </article>
        <article>
          <i>♧</i>
          <strong>8,000+</strong>
          <span>Developers</span>
        </article>
        <article>
          <i>☆</i>
          <strong>4.9/5</strong>
          <span>Chrome Web Store</span>
        </article>
      </section>

      <section className="testimonials-section">
        <div className="section-topline">
          <h2>
            Loved by <span>developers</span>
          </h2>
          <a href="#">More on Chrome Web Store</a>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.author}>
              <p>&quot;{item.quote}&quot;</p>
              <div className="person">
                <span className="avatar">{item.initials}</span>
                <div>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <div className="shield">⌁</div>
        <div className="cta-copy">
          <h2>
            Ready to build
            <br />
            <span>better UI?</span>
          </h2>
          <p>Install UI Health Inspector and start scanning today.</p>
          <button className="button-primary" type="button">
            <span className="chrome-dot" aria-hidden="true" /> Add to Chrome -
            It&apos;s Free
          </button>
          <small>No sign up. No credit card. No hassle.</small>
        </div>
        <div className="cta-shield">⌁</div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">How It Works</a>
            <a href="#">Chrome Extension</a>
            <a href="#">Changelog</a>
          </div>
          <div className="footer-col">
            <h4>Resource</h4>
            <a href="#">Community</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-col">
            <h4>Stay in the Loop</h4>
            <p>Get product updates and UI tips delivered to your inbox.</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="your@email.com" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Built with <span>♥</span> for developers
        </div>
      </footer>
    </main>
  );
}

export default App;
