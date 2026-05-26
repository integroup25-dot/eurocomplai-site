import { integrations } from "@/lib/integrations";
import ArrowIcon from "./ArrowIcon";

type Props = {
  /** Which Tally form to render: "scrivici" or "earlyAccess". */
  variant: "scrivici" | "earlyAccess";
  /** Optional iframe title for accessibility. */
  title?: string;
  /** Iframe height when the form is live. */
  height?: number;
};

const COPY = {
  scrivici: {
    heading: "Scrivici una domanda specifica",
    placeholderBody:
      "Per ora rispondiamo via email: descrivi la tua situazione e ti rispondiamo entro 2 giorni lavorativi, sempre da noi.",
    iframeTitle: "Scrivici · Form Tally",
  },
  earlyAccess: {
    heading: "Candidati al programma early access",
    placeholderBody:
      "Il programma early access è in apertura. Scrivici intanto via email — ti contattiamo quando partono le prime onboarding.",
    iframeTitle: "Early access · Form Tally",
  },
};

export default function TallyPlaceholder({ variant, title, height = 640 }: Props) {
  const url = integrations.tally[variant];
  const copy = COPY[variant];

  if (url) {
    return (
      <iframe
        src={url}
        title={title ?? copy.iframeTitle}
        style={{
          width: "100%",
          height: `${height}px`,
          border: "1px solid var(--border-1)",
          borderRadius: "16px",
          background: "var(--bg)",
        }}
        loading="lazy"
      />
    );
  }

  return (
    <div
      style={{
        padding: "28px 28px 26px",
        background: "var(--panel)",
        border: "1px solid var(--border-1)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "10.5px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--accent)",
        }}
      >
        Form in arrivo
      </div>
      <h3
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: "19px",
          fontWeight: 600,
          color: "var(--ink)",
          letterSpacing: "-0.015em",
          lineHeight: 1.3,
        }}
      >
        {copy.heading}
      </h3>
      <p
        style={{
          fontSize: "14.5px",
          lineHeight: 1.65,
          color: "var(--ink-2)",
          margin: 0,
        }}
      >
        {copy.placeholderBody}
      </p>
      <a
        href={`mailto:${integrations.fallbackEmail}`}
        className="btn btn-ghost"
        style={{ alignSelf: "flex-start", marginTop: "4px" }}
      >
        Scrivici a {integrations.fallbackEmail}
        <ArrowIcon />
      </a>
    </div>
  );
}
