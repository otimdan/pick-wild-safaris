"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function BlogNewsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again.");
    }
  }

  return (
    <section className="blog-newsletter">
      <h2>Safari Newbie? Start Here</h2>
      <p>
        Grab our free 24-page guide packed with tips on when to travel, what
        to pack, and how to plan your dream adventure.
      </p>

      {status === "success" ? (
        <p className="newsletter-success" role="status">
          You&apos;re in! Check your inbox — we&apos;ll be in touch soon.
        </p>
      ) : (
        <form className="blog-newsletter-form" onSubmit={handleSubmit} noValidate>
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hp-field"
            aria-hidden="true"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Get My Free Guide"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="newsletter-error" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
