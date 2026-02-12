import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="home-main">
      <section className="section-wrap">
        <div className="container">
          <div className="panel pad-lg">
            <span className="pill">About HeliusDEV</span>
            <h1 className="panel-title" style={{ marginTop: "0.8rem" }}>
              We build fast, practical web products.
            </h1>
            <p className="panel-subtitle" style={{ maxWidth: "760px" }}>
              HeliusDEV focuses on modern web development using Next.js, React, Node.js, and MongoDB.
              The goal is simple: ship reliable products quickly, with clean architecture and scalable code.
            </p>
          </div>
        </div>
      </section>

      <section className="section-wrap alt">
        <div className="container">
          <div className="card-grid-2">
            <div className="card-link">
              <div className="card-link-meta">What We Deliver</div>
              <h2 style={{ marginTop: ".5rem" }}>End-to-End Development</h2>
              <p className="card-link-copy">
                UI engineering, API development, authentication flows, payments, and admin dashboards.
                We prioritize performance, maintainability, and clear user journeys.
              </p>
            </div>

            <div className="card-link">
              <div className="card-link-meta">How We Work</div>
              <h2 style={{ marginTop: ".5rem" }}>Build, Measure, Improve</h2>
              <p className="card-link-copy">
                We release in small iterations, validate behavior with real usage, and improve continuously.
                This keeps delivery fast while reducing risk.
              </p>
            </div>
          </div>

          <div className="panel pad-lg" style={{ marginTop: "1rem" }}>
            <div className="admin-head-row">
              <div>
                <h2 className="panel-title">Ready to start a project?</h2>
                <p className="panel-subtitle">Sign in and explore resources, services, and premium features.</p>
              </div>
              <Link href="/login" className="btn btn-primary">
                Login with Google
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
