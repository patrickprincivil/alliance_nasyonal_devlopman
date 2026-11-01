"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type FormState = {
  business: string;
  contact: string;
  email: string;
  country: string;
  industry: string;
  package: string;
  needs: string;
  budget: string;
  timeline: string;
  consent: boolean;
};
const initial: FormState = {
  business: "", contact: "", email: "", country: "", industry: "",
  package: "Launch", needs: "", budget: "", timeline: "", consent: false,
};
export default function AppLaunchRequestPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [opened, setOpened] = useState(false);
  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) return;
    const subject = `Silveroak App Launch inquiry — ${form.business}`;
    const body = [
      "Silveroak AI App Launch — consultation request",
      `Business: ${form.business}`,
      `Contact: ${form.contact}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      `Industry: ${form.industry}`,
      `Preferred package: ${form.package}`,
      `Needs: ${form.needs}`,
      `Budget range: ${form.budget || "Not specified"}`,
      `Timeline: ${form.timeline || "Not specified"}`,
    ].join("\n");
    window.location.href = `mailto:patrickprincivil@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  return (
    <main className="page">
      <p className="eyebrow">Silveroak Digital Solutions / Client intake</p>
      <h1>Request an AI App Launch Consultation</h1>
      <p>This form opens your email application with a draft. Nothing is uploaded to a server or saved by this page. You must send the email yourself; delivery is not guaranteed.</p>
      <section className="subSection">
        <form onSubmit={submit} style={{ display: "grid", maxWidth: 700, gap: 18 }}>
          <label>Business name *<br/><input style={{ width: "100%", padding: 12 }} required maxLength={120} value={form.business} onChange={(e) => update("business", e.target.value)} /></label>
          <label>Your name *<br/><input style={{ width: "100%", padding: 12 }} required maxLength={120} value={form.contact} onChange={(e) => update("contact", e.target.value)} /></label>
          <label>Email *<br/><input style={{ width: "100%", padding: 12 }} type="email" required maxLength={200} value={form.email} onChange={(e) => update("email", e.target.value)} /></label>
          <label>Country *<br/><input style={{ width: "100%", padding: 12 }} required maxLength={80} value={form.country} onChange={(e) => update("country", e.target.value)} /></label>
          <label>Industry *<br/><input style={{ width: "100%", padding: 12 }} required maxLength={120} value={form.industry} onChange={(e) => update("industry", e.target.value)} /></label>
          <label>Service package *<br/><select style={{ width: "100%", padding: 12 }} value={form.package} onChange={(e) => update("package", e.target.value)}>
            <option>Launch</option><option>Growth</option><option>AI Business</option><option>Not sure yet</option>
          </select></label>
          <label>What should your website or app do? *<br/><textarea style={{ width: "100%", padding: 12, minHeight: 130 }} required minLength={20} maxLength={3000} value={form.needs} onChange={(e) => update("needs", e.target.value)}/></label>
          <label>Estimated budget (optional)<br/><input style={{ width: "100%", padding: 12 }} maxLength={100} value={form.budget} onChange={(e) => update("budget", e.target.value)}/></label>
          <label>Preferred launch timeline (optional)<br/><input style={{ width: "100%", padding: 12 }} maxLength={100} value={form.timeline} onChange={(e) => update("timeline", e.target.value)}/></label>
          <label style={{ display: "flex", gap: 10, alignItems: "start" }}>
            <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} required />
            I agree to send this information by email for a project consultation. Do not include passwords or sensitive personal data.
          </label>
          <button type="submit" className="statusBadge" style={{ cursor: "pointer", justifySelf: "start" }}>Prepare email request</button>
          {opened && <p role="status">Your email app should open. Please review and send the draft. If it does not open, contact Silveroak using the contact page.</p>}
          <Link href="/silveroak-app-launch">Back to packages</Link>
        </form>
      </section>
    </main>
  );
}
