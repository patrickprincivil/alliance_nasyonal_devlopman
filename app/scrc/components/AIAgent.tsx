"use client";

import { useState } from "react";

export default function AIAgent() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<string[]>([]);

  function sendMessage() {
    if (!message.trim()) return;

    setConversation((previous) => [
      ...previous,
      `You: ${message}`,
      "AI: Thanks. What product or service are you looking for?",
    ]);

    setMessage("");
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h1 className="text-2xl font-bold">
        🤖 Haiti Business AI Agent
      </h1>

      <p className="mt-2 text-sm text-slate-400">
        AI sales assistant — not a human representative.
      </p>

      <div className="mt-6 min-h-64 space-y-3 rounded-xl bg-slate-950 p-4">

        {conversation.map((item, index) => (
          <p key={index} className="text-slate-300">
            {item}
          </p>
        ))}

      </div>

      <div className="mt-4 flex gap-2">

        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what you need..."
          className="flex-1 rounded-lg bg-slate-800 px-4 py-3 outline-none"
        />

        <button
          onClick={sendMessage}
          className="rounded-lg bg-emerald-500 px-5 font-semibold text-slate-950"
        >
          Send
        </button>

      </div>

    </div>
  );
}

