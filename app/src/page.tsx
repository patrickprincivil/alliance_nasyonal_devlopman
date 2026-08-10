import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Haiti Business Digital Infrastructure
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Build. Sell. Connect. Grow.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            A digital platform connecting Haitian businesses,
            customers, entrepreneurs and the global Haitian diaspora.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/businesses"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950"
            >
              Find Businesses
            </Link>

            <Link
              href="/ai-sales"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold"
            >
              Talk to AI Sales
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold"
            >
              Business Dashboard
            </Link>

          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">

        <Feature
          title="AI Sales Agent"
          description="Capture, qualify and route potential customers."
        />

        <Feature
          title="Marketplace"
          description="Give businesses a digital storefront for products and services."
        />

        <Feature
          title="Business Tools"
          description="Connect commerce, bookings, customer management and analytics."
        />

      </section>

    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-3 text-slate-400">{description}</p>
    </div>
  );
}

