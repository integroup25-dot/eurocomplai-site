import { getCalendlyEmbedUrl } from "@/lib/integrations";

type Props = {
  height?: number;
  title?: string;
};

export default function CalendlyInline({ height = 720, title = "Prenota una demo · Calendly" }: Props) {
  return (
    <iframe
      src={getCalendlyEmbedUrl()}
      title={title}
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
