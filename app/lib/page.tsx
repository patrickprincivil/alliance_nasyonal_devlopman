const metrics = [
  ["Visitors", "0"],
  ["Conversations", "0"],
  ["Qualified Leads", "0"],
  ["High-Intent Leads", "0"],
  ["Meetings", "0"],
  ["Orders", "0"],
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-bold">
          Business Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Haiti Business Platform
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {metrics.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-sm text-slate-400">
                {label}
              </p>

              <p className="mt-2 text-4xl font-bold">
                {value}
              </p>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}




