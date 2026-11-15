"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button className="rp-btn rp-btn--secondary" onClick={copy} aria-live="polite">
      {done ? <Check aria-hidden="true" strokeWidth={1.5} /> : <Copy aria-hidden="true" strokeWidth={1.5} />}
      {done ? "Copied" : "Copy email"}
    </button>
  );
}
