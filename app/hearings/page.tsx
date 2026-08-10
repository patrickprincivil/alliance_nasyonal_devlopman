"use client";

const commerceModules = [
  {
    title: "Digital Marketplace",
    items: [
      "Digital products",
      "Courses and certifications",
      "Agricultural products",
      "Local artisan products",
      "Software and business tools",
      "Emergency and humanitarian supplies",
    ],
  },
  {
    title: "Smart Checkout",
    items: [
      "Guest checkout",
      "Saved shopping cart",
      "Coupons and discounts",
      "Multiple currencies",
      "Mobile money",
      "Card and bank payments",
    ],
  },
  {
    title: "Checkout Add-Ons",
    items: [
      "Priority processing",
      "Printing services",
      "Technical support",
      "Installation assistance",
      "Extended protection",
      "Optional donations",
    ],
  },
  {
    title: "Post-Purchase Offers",
    items: [
      "Related courses",
      "Additional services",
      "Membership upgrades",
      "Business support",
      "Community programs",
      "Humanitarian projects",
    ],
  },
  {
    title: "Memberships",
    items: [
      "Citizen membership",
      "Business membership",
      "School membership",
      "Church membership",
      "Nonprofit membership",
      "International partner membership",
    ],
  },
  {
    title: "Subscriptions",
    items: [
      "Monthly plans",
      "Quarterly plans",
      "Annual plans",
      "Automatic renewal",
      "Cancellation controls",
      "Invoices and receipts",
    ],
  },
  {
    title: "Payment Recovery",
    items: [
      "Failed-payment alerts",
      "Automatic retry",
      "Email reminders",
      "SMS reminders",
      "WhatsApp reminders",
      "Alternative payment options",
    ],
  },
  {
    title: "Abandoned Checkout",
    items: [
      "Saved checkout session",
      "Customer reminders",
      "Return-to-cart links",
      "Recovery reporting",
      "Follow-up automation",
      "Human support",
    ],
  },
  {
    title: "Course Platform",
    items: [
      "Course hosting",
      "Video lessons",
      "Student progress",
      "Assessments",
      "Certificates",
      "Teacher dashboards",
    ],
  },
  {
    title: "Affiliate Management",
    items: [
      "Referral links",
      "Click tracking",
      "Sales tracking",
      "Commission calculation",
      "Affiliate payments",
      "Performance reports",
    ],
  },
  {
    title: "Revenue Reporting",
    items: [
      "Sales reports",
      "Donation reports",
      "Subscription reports",
      "Refund reports",
      "Course revenue",
      "Affiliate performance",
    ],
  },
  {
    title: "AI Commerce Support",
    items: [
      "Customer assistance",
      "Product recommendations",
      "Translation",
      "Fraud alerts",
      "Inventory forecasting",
      "Revenue summaries",
    ],
  },
];

const integrations = [
  "Government services",
  "Hospitals and clinics",
  "Ambulance services",
  "Emergency food programs",
  "Emergency shelters",
  "Housing programs",
  "Schools and universities",
  "Agriculture",
  "Transportation",
  "Waste and recycling",
  "Energy and water",
  "Employment and training",
];

export default function SmartCommerceClient() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">SilverOak Haiti Platform</p>

        <h1>Smart Commerce and Revenue Platform</h1>

        <p>
          A secure national platform for digital products, payments,
          donations, courses, memberships, subscriptions, affiliates,
          humanitarian services, and transparent revenue reporting.
        </p>

        <div className="hero-actions">
          <a className="button" href="#commerce-modules">
            Explore Platform
          </a>

          <a className="button secondary" href="/contact">
            Contact SilverOak
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Complete Customer Workflow</h2>

        <div className="workflow">
          <span>Select product or service</span>
          <span>Create account or continue as guest</span>
          <span>Add items to cart</span>
          <span>Select optional add-ons</span>
          <span>Complete secure payment</span>
          <span>Receive confirmation and access</span>
          <span>Receive follow-up support</span>
          <span>Update reports and dashboards</span>
        </div>
      </section>

      <section id="commerce-modules" className="section">
        <h2>Commerce Platform Modules</h2>

        <div className="grid">
          {commerceModules.map((module) => (
            <article className="card" key={module.title}>
              <h3>{module.title}</h3>

              <ul>
                {module.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Platform Integrations</h2>

        <div className="grid">
          {integrations.map((integration) => (
            <article className="card" key={integration}>
              <h3>{integration}</h3>
              <p>
                Connect this service with checkout, payments, reporting,
                notifications, user accounts, and authorized staff review.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Artificial Intelligence Rules</h2>

          <p>
            AI may recommend products, translate content, forecast inventory,
            summarize reports, identify unusual transactions, and assist
            customers.
          </p>

          <p>
            AI must not independently approve financial transactions, deny
            essential services, make legal decisions, or override authorized
            human controls.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Mission</h2>

          <p>
            The SilverOak Haiti Smart Commerce and Revenue Platform connects
            commerce, education, healthcare, humanitarian assistance,
            infrastructure, and public services through one transparent and
            accessible digital system.
          </p>
        </div>
      </section>
    </main>
  );
}

