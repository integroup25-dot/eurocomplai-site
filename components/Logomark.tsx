import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "header" | "display" | "strip" | "footer";

type Props = {
  variant?: Variant;
  mono?: boolean;
  light?: boolean;
  href?: string;
  ariaLabel?: string;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export default function Logomark({
  variant = "header",
  mono = false,
  light = false,
  href = "/",
  ariaLabel = "EurocomplAI",
  className,
  ...rest
}: Props) {
  const variantClass = variant === "header" ? "" : variant;
  const classes = [
    "logomark",
    variantClass,
    mono ? "mono" : "",
    light ? "light" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className="bracket">[</span>
      eurocompl
      <span className="slash">/</span>
      <span className="ai">ai</span>
      <span className="bracket">]</span>
    </>
  );

  if (!href) {
    return (
      <span className={classes} aria-label={ariaLabel}>
        {inner}
      </span>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} {...rest}>
      {inner}
    </Link>
  );
}
