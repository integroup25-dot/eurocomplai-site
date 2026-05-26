type Props = {
  label?: string;
};

export default function TopStrip({ label = "EARLY ACCESS · ROADMAP 2026" }: Props) {
  return (
    <div className="strip">
      <div className="strip-inner">
        <span>Un prodotto di inteGroup</span>
        <span className="strip-label">{label}</span>
      </div>
    </div>
  );
}
