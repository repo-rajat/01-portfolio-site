import React, { useState } from "react";
import BackButton from "../global/backButton/BackButton";

function Contact() {
  const [name, setName] = useState("");

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-8 " style={{ animationDelay: "0.2s" }}>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--black-50))]-50 border border-[rgb(var(--black-25))]"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--black-50))]-50 border border-[rgb(var(--black-25))] focus:border-violet focus:ring-1 focus:ring-violet outline-none transition-all"
              placeholder="your@email.com"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--black-50))]-50 border border-[rgb(var(--black-25))] focus:border-violet focus:ring-1 focus:ring-violet outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl gradient-violet text-primary-foreground font-display font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-violet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send w-5 h-5"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
            Send Message
          </button>
        </form>
      </div>

      <div className="space-y-8" style={{ animationDelay: "0.3s" }}>
        <div className="p-6 rounded-2xl bg-[rgb(var(--black-50))] border border-[rgb(var(--black-25))] space-y-6">
          <h3 className="text-xl font-display font-semibold text-violet">
            Contact Info
          </h3>

          <div className="space-y-4">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="p-3 rounded-xl bg-[rgb(var(--black-50))]-50 group-hover:bg-violet/20 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail w-5 h-5 group-hover:text-violet transition-colors"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span>hello@example.com</span>
            </a>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="p-3 rounded-xl bg-[rgb(var(--black-50))]-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin w-5 h-5"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>Your City, Country</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[rgb(var(--black-50))] border border-[rgb(var(--black-25))] space-y-6">
          <h3 className="text-xl font-display font-semibold text-violet">
            Follow Me
          </h3>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-4 rounded-xl bg-[rgb(var(--black-50))]-50 hover:bg-violet/20 hover:text-violet transition-all group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github w-6 h-6"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-4 rounded-xl bg-[rgb(var(--black-50))]-50 hover:bg-violet/20 hover:text-violet transition-all group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin w-6 h-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-4 rounded-xl bg-[rgb(var(--black-50))]-50 hover:bg-violet/20 hover:text-violet transition-all group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter w-6 h-6"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="p-6 rounded-2xl gradient-violet text-primary-foreground">
          <h3 className="text-xl font-display font-semibold mb-2">
            Let's Collaborate!
          </h3>
          <p className="opacity-90">
            Open for freelance projects, full-time roles, or interesting
            collaborations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
