import ManageCookiesButton from "./ManageCookiesButton";

/** Footer della landing e della sua pagina di ringraziamento. */
export default function LandingFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot-row">
        <a className="logomark" href="https://eurocomplai.com/" aria-label="EurocomplAI">
          <span className="bracket">[</span>eurocompl<span className="slash">/</span><span className="ai">ai</span><span className="bracket">]</span>
        </a>
        <div className="foot-contact">Via Ippolito Nievo, 11 · 20145 Milano · <a href="mailto:eurocomplai@integroup.eu">eurocomplai@integroup.eu</a> · <a href="tel:+3902320626828">+39 02 320 626 828</a></div>
        <div className="foot-legal">
          <a href="https://eurocomplai.com/privacy/">Privacy</a>
          <a href="https://eurocomplai.com/cookie/">Cookie</a>
          <ManageCookiesButton />
        </div>
      </div>
    </footer>
  );
}
