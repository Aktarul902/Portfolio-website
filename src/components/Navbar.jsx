import { useState } from "react";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a
        href="#top"
        className="brand"
        onClick={() => setOpen(false)}
      >
        AKTARUL<span>.</span>
      </a>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([label, href]) => (
          <a
            href={href}
            key={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        LET&apos;S TALK <span>↗</span>
      </a>

      <button
        className="menu"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}