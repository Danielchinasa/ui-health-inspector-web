import "./App.css";
import heroImage from "./assets/hero_image.png";
import uiHealthLogo from "./assets/Ui_health_logo.png";

function LegalPage({ type }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Use";

  return (
    <main className="page-shell legal-shell">
      <header className="site-header legal-header">
        <a className="brand" href="/" aria-label="UI Health home">
          <img className="brand-mark" src={uiHealthLogo} alt="" />
          <span className="brand-name">UI Health</span>
        </a>
        <a className="legal-home-link" href="/">
          ← Back to home
        </a>
      </header>

      <article className="legal-document">
        <p className="legal-eyebrow">UI HEALTH INSPECTOR</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: July 24, 2026</p>

        {isPrivacy ? <PrivacyPolicy /> : <TermsOfUse />}
      </article>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} UI Health Inspector</span>
        <span aria-hidden="true">•</span>
        <a href="/privacy-policy">Privacy Policy</a>
        <span aria-hidden="true">•</span>
        <a href="/terms-of-use">Terms of Use</a>
      </footer>
    </main>
  );
}

function PrivacyPolicy() {
  return (
    <div className="legal-content">
      <p className="legal-summary">
        UI Health Inspector is designed to inspect pages in your browser, not to
        build a profile about you. This policy explains the limited information
        the extension handles while providing its analysis.
      </p>
      <section>
        <h2>1. What UI Health Inspector does</h2>
        <p>
          UI Health Inspector analyzes the page you choose to inspect for UI,
          usability, accessibility, performance, SEO, and best-practice issues.
          The analysis is performed locally in your browser. We do not operate a
          service that receives the pages you scan or the results of those
          scans.
        </p>
      </section>
      <section>
        <h2>2. Information the extension can access</h2>
        <p>
          When you start a scan, the extension may read the active page&apos;s
          URL, document structure, visible content, styles, metadata, and
          technical signals needed to identify issues. A page can contain
          personal, confidential, or sensitive information. That information is
          processed only on your device for the duration needed to produce the
          inspection result.
        </p>
      </section>
      <section>
        <h2>3. Information we do not collect</h2>
        <p>
          We do not collect, transmit, sell, rent, or share your browsing
          history, scanned page content, scan results, account information,
          authentication credentials, financial information, or personal data.
          UI Health Inspector does not use advertising, analytics, tracking
          pixels, or third-party data brokers.
        </p>
      </section>
      <section>
        <h2>4. Local storage and permissions</h2>
        <p>
          The extension may use browser-local storage for settings that make the
          product work as expected, such as preferences you choose in the
          extension. This information stays in your browser and is not sent to
          us. Any permission requested by the extension is used only to enable
          the feature described in the extension&apos;s Chrome Web Store
          listing.
        </p>
      </section>
      <section>
        <h2>5. Third-party websites</h2>
        <p>
          This policy applies to UI Health Inspector. Websites you scan remain
          governed by their own privacy notices and practices. Using the
          extension does not change the information those websites collect from
          you directly.
        </p>
      </section>
      <section>
        <h2>6. Children&apos;s privacy</h2>
        <p>
          UI Health Inspector is not directed to children under 13, and we do
          not knowingly collect personal information from children.
        </p>
      </section>
      <section>
        <h2>7. Changes to this policy</h2>
        <p>
          If our data practices change, we will update this page before the
          change takes effect and revise the “Last updated” date above. A change
          that involves collecting or sharing personal data will be clearly
          described here.
        </p>
      </section>
      <section>
        <h2>8. Questions</h2>
        <p>
          For privacy questions or requests, contact us through the support
          contact listed in the UI Health Inspector Chrome Web Store listing.
        </p>
      </section>
    </div>
  );
}

function TermsOfUse() {
  return (
    <div className="legal-content">
      <p className="legal-summary">
        These Terms of Use govern your use of UI Health Inspector, including its
        Chrome extension and this website.
      </p>
      <section>
        <h2>1. Acceptance of these terms</h2>
        <p>
          By installing, accessing, or using UI Health Inspector, you agree to
          these Terms of Use. If you do not agree, do not use the extension or
          website.
        </p>
      </section>
      <section>
        <h2>2. The service</h2>
        <p>
          UI Health Inspector provides automated observations and suggestions
          about web pages. Its findings are informational only. They are not a
          substitute for professional accessibility, security, legal, or
          performance review, and they do not guarantee that a page is free of
          defects or compliant with any law, standard, or policy.
        </p>
      </section>
      <section>
        <h2>3. Your responsibilities</h2>
        <p>
          You may use the extension only on pages you are authorized to inspect.
          You are responsible for reviewing all results, validating changes
          before deployment, and complying with the terms, policies, and laws
          that apply to the websites and systems you access.
        </p>
      </section>
      <section>
        <h2>4. Acceptable use</h2>
        <p>
          You must not use UI Health Inspector to interfere with websites or
          networks, bypass access controls, violate another person&apos;s
          privacy or intellectual-property rights, reverse engineer the
          extension except where law permits, or use the service for unlawful
          activity.
        </p>
      </section>
      <section>
        <h2>5. Ownership</h2>
        <p>
          UI Health Inspector, its software, design, branding, and related
          materials are owned by their respective rights holders and are
          protected by applicable intellectual-property laws. We grant you a
          limited, personal, non-exclusive, non-transferable, revocable license
          to use the extension in accordance with these terms.
        </p>
      </section>
      <section>
        <h2>6. Availability and changes</h2>
        <p>
          We may update, suspend, or discontinue any part of UI Health Inspector
          to improve the product, address security concerns, or meet legal
          requirements. We do not guarantee uninterrupted availability or that
          every issue will be detected.
        </p>
      </section>
      <section>
        <h2>7. Disclaimer and limitation of liability</h2>
        <p>
          UI Health Inspector is provided “as is” and “as available,” without
          warranties of any kind, whether express, implied, or statutory. To the
          maximum extent allowed by law, we are not liable for indirect,
          incidental, special, consequential, or punitive damages, or for loss
          of data, profits, goodwill, or business opportunity arising from your
          use of the extension.
        </p>
      </section>
      <section>
        <h2>8. Changes to these terms</h2>
        <p>
          We may revise these terms from time to time. The updated version will
          be posted on this page with a new “Last updated” date. Continued use
          after an update means you accept the revised terms.
        </p>
      </section>
      <section>
        <h2>9. Contact</h2>
        <p>
          Questions about these terms can be sent through the support contact in
          the UI Health Inspector Chrome Web Store listing.
        </p>
      </section>
    </div>
  );
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/privacy-policy") {
    return <LegalPage type="privacy" />;
  }

  if (pathname === "/terms-of-use") {
    return <LegalPage type="terms" />;
  }

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
    <main className="page-shell" id="main-content" tabIndex="-1">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <a className="brand" href="/" aria-label="UI Health home">
          <img className="brand-mark" src={uiHealthLogo} alt="" />
          <span className="brand-name">UI Health</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button-chrome" href="#install">
          <span className="chrome-dot" aria-hidden="true" /> Get the extension
        </a>
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
            <a className="button-primary" href="#install">
              <span className="chrome-dot" aria-hidden="true" /> Add to Chrome -
              It&apos;s Free
            </a>
            <a className="button-ghost" href="#how-it-works">View how it works</a>
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

      <section className="how-it-works" id="how-it-works" aria-labelledby="how-it-works-title">
        <div className="section-heading">
          <p className="section-kicker">HOW IT WORKS</p>
          <h2 id="how-it-works-title">A clear checkup, right where you work.</h2>
        </div>
        <ol className="steps-grid">
          <li>
            <span>01</span>
            <h3>Open the page</h3>
            <p>Navigate to the live, staging, or local page you want to review.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Run a scan</h3>
            <p>Start UI Health Inspector from Chrome to inspect the current page.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Prioritize fixes</h3>
            <p>Use the report to understand issues and make improvements with confidence.</p>
          </li>
        </ol>
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

      <section className="features-section" id="features" aria-labelledby="features-title">
        <div className="section-intro">
          <h2 id="features-title">
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
              <span className={`feature-icon ${card.tone}`} aria-hidden="true">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-bar" aria-label="Key metrics">
        <article>
          <i aria-hidden="true">⌕</i>
          <strong>50,000+</strong>
          <span>Pages Scanned</span>
        </article>
        <article>
          <i aria-hidden="true">✓</i>
          <strong>120,000+</strong>
          <span>Issues Detected</span>
        </article>
        <article>
          <i aria-hidden="true">♧</i>
          <strong>8,000+</strong>
          <span>Developers</span>
        </article>
        <article>
          <i aria-hidden="true">☆</i>
          <strong>4.9/5</strong>
          <span>Chrome Web Store</span>
        </article>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="section-topline">
          <h2 id="testimonials-title">
            Loved by <span>developers</span>
          </h2>
          <a href="#install">Find us on Chrome Web Store</a>
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

      <section className="cta-panel" id="install" aria-labelledby="install-title">
        <div className="shield">⌁</div>
        <div className="cta-copy">
          <h2 id="install-title">
            Ready to build
            <br />
            <span>better UI?</span>
          </h2>
          <p>
            UI Health Inspector is preparing for its Chrome Web Store launch.
            This page will link directly to the listing when it is published.
          </p>
          <small>No sign up. No credit card. No hassle.</small>
        </div>
        <div className="cta-shield">⌁</div>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="section-kicker">QUESTIONS</p>
          <h2 id="faq-title">Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Does UI Health Inspector send my page content anywhere?</summary>
            <p>No. Scans run locally in your browser. See our <a href="/privacy-policy">Privacy Policy</a> for the full explanation.</p>
          </details>
          <details>
            <summary>Can I scan local and staging environments?</summary>
            <p>Yes. UI Health Inspector is designed to help review pages wherever they are available in your Chrome browser.</p>
          </details>
          <details>
            <summary>Does a scan guarantee my page is compliant or error-free?</summary>
            <p>No. The extension provides useful automated checks and recommendations; you should review findings and validate changes before release.</p>
          </details>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#install">Chrome Extension</a>
          </div>
          <div className="footer-col">
            <h4>Resource</h4>
            <a href="#faq">FAQ</a>
            <a href="/privacy-policy">Privacy</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
          </div>
          <div className="footer-col">
            <h4>Extension availability</h4>
            <p>The Chrome Web Store listing link will be posted here when the extension launches.</p>
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
