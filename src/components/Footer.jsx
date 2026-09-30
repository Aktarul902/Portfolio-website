export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <span className="footer-brand">
            AKTARUL<span>.</span>
          </span>

          <p>FULL STACK WEB DEVELOPER</p>
        </div>

        <div className="footer-copy">
          <p>BUILT WITH REACT.</p>

          <p>
            © {new Date().getFullYear()} AKTARUL
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          OPEN TO BUILDING COOL THINGS.
        </span>

        <a href="#top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}