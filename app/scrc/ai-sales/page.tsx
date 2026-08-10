"use client";

import { useState } from "react";

type Lead = {
  name: string;
  company: string;
  email: string;
  need: string;
  score: number;
  status: string;
};

const demoLeads: Lead[] = [
  {
    name: "Jean Pierre",
    company: "Haiti Business Group",
    email: "jean@example.com",
    need: "AI automation",
    score: 85,
    status: "High Intent",
  },
  {
    name: "Marie Joseph",
    company: "Caribbean Services",
    email: "marie@example.com",
    need: "Website + CRM",
    score: 68,
    status: "Qualified",
  },
  {
    name: "David Charles",
    company: "Global Trade",
    email: "david@example.com",
    need: "Digital marketing",
    score: 42,
    status: "Potential",
  },
];

export default function AISalesPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "Hello! I'm the AI Sales Agent. How can I help your business today?",
  ]);

  function sendMessage() {
    const text = message.trim();

    if (!text) return;

    setMessages((current) => [
      ...current,
      `You: ${text}`,
      "AI Agent: Thanks! I can help identify the right solution and connect you with our sales team.",
    ]);

    setMessage("");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">
              AI Sales Agent
            </h1>
            <p className="text-sm text-slate-400">
              Global AI Revenue Pipeline
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold hover:bg-blue-500">
            Book Demo
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            AI-Powered Sales Automation
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Turn conversations into qualified opportunities.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Your AI Sales Agent responds to visitors, qualifies prospects,
            scores leads, books meetings, and sends qualified opportunities
            to your sales team.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500">
              Start Free Demo
            </button>

            <button className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">
              Talk to AI
            </button>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h3 className="text-2xl font-bold">
            AI Revenue Pipeline
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-4 lg:grid-cols-8">
            {[
              "Visitor",
              "Conversation",
              "Qualification",
              "Lead Score",
              "Booking",
              "CRM",
              "Follow-up",
              "Sales",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-white/10 bg-slate-950 p-4 text-center"
              >
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                  {index + 1}
                </div>

                <p className="text-sm font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h3 className="text-2xl font-bold">
          Sales Dashboard
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Metric title="Visitors" value="12,450" />
          <Metric title="Conversations" value="4,820" />
          <Metric title="Qualified Leads" value="1,240" />
          <Metric title="Meetings Booked" value="215" />
        </div>
      </section>

      {/* AI Chat */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold">
            Talk to the AI Sales Agent
          </h3>

          <p className="mt-3 text-slate-400">
            The AI can answer questions, collect lead information,
            qualify prospects, and prepare them for a human salesperson.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-5">
            <div className="mb-5 min-h-48 space-y-3">
              {messages.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-lg bg-slate-800 p-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Tell us what your business needs..."
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

              <button
                onClick={sendMessage}
                className="rounded-lg bg-blue-600 px-5 font-semibold hover:bg-blue-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Lead qualification */}
        <div>
          <h3 className="text-2xl font-bold">
            Lead Qualification
          </h3>

          <p className="mt-3 text-slate-400">
            Every conversation can become structured sales information.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left text-sm">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="px-5 py-4">Lead</th>
                    <th className="px-5 py-4">Company</th>
                    <th className="px-5 py-4">Need</th>
                    <th className="px-5 py-4">Score</th>
                    <th className="px-5 py-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {demoLeads.map((lead) => (
                    <tr
                      key={lead.email}
                      className="border-t border-white/10 bg-slate-950"
                    >
                      <td className="px-5 py-4 font-medium">
                        {lead.name}
                      </td>

                      <td className="px-5 py-4 text-slate-400">
                        {lead.company}
                      </td>

                      <td className="px-5 py-4 text-slate-400">
                        {lead.need}
                      </td>

                      <td className="px-5 py-4 font-bold">
                        {lead.score}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="text-2xl font-bold">
            Platform Capabilities
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="AI Conversations"
              text="Respond to website visitors and collect useful sales information."
            />

            <Feature
              title="Lead Scoring"
              text="Score prospects using configurable qualification signals."
            />

            <Feature
              title="Appointment Booking"
              text="Move qualified prospects toward meetings with your sales team."
            />

            <Feature
              title="CRM Integration"
              text="Store structured lead information and sales activity."
            />

            <Feature
              title="Automated Follow-up"
              text="Keep prospects engaged when they do not book immediately."
            />

            <Feature
              title="Human Handoff"
              text="Give sales representatives a concise AI-generated prospect summary."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h3 className="text-3xl font-bold md:text-4xl">
          Build your AI-powered sales pipeline.
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Start with a simple AI agent and expand into CRM,
          appointment booking, analytics, automation, and
          multilingual sales operations.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-500">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 AI Sales Agent. All rights reserved.
      </footer>
    </main>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function Feature({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950 p-6">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}

