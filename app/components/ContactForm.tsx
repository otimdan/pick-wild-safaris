"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [trip, setTrip] = useState<string>("");

  // Prefill "Safari of interest" when arriving from an itinerary's
  // Enquire button, e.g. /contact?trip=Uganda%20Gorilla%20Safari.
  // Read from window (not useSearchParams) to avoid a Suspense bailout.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("trip");
    if (t) setTrip(t);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
        setTrip("");
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError(
        "Couldn't reach the server. Please check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="form-alert form-alert-success" role="status">
        <h3>Thank you — your enquiry is on its way.</h3>
        <p>
          One of our safari planners will be in touch shortly. For anything
          urgent, email us directly at{" "}
          <a href="mailto:info@wildsafarisuganda.com">info@wildsafarisuganda.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hp-field"
        aria-hidden="true"
      />

      <div className="form-row">
        <label className="form-field">
          <span>Full name *</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="form-field">
          <span>Email *</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
        <label className="form-field">
          <span>Number of travellers</span>
          <input type="text" name="travellers" inputMode="numeric" />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Preferred travel dates</span>
          <input type="text" name="dates" placeholder="e.g. August 2026" />
        </label>
        <label className="form-field">
          <span>Safari of interest</span>
          <input
            type="text"
            name="trip"
            value={trip}
            onChange={(e) => setTrip(e.target.value)}
            placeholder="e.g. Gorilla Trekking"
          />
        </label>
      </div>

      <label className="form-field">
        <span>Your message *</span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell us what you have in mind — who's travelling, what you'd love to see, and any questions."
        />
      </label>

      {status === "error" && (
        <div className="form-alert form-alert-error" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="contact-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
