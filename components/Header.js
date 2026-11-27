"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, whatsapp } from "./site-data";

const scrollKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const weeklySelection = useRef("weekly");
  const staySelection = useRef("stay");
  const menuOpenRef = useRef(false);
  const selectionLocked = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      if (menuOpenRef.current || selectionLocked.current) {
        frame = 0;
        return;
      }

      const readingLine = 140;
      const visited = new Set();
      let current = "home";

      navigation.forEach(([, target, active = target]) => {
        if (visited.has(target)) return;
        visited.add(target);
        const section = document.getElementById(target);
        if (section && section.getBoundingClientRect().top <= readingLine) {
          current = active;
        }
      });

      if (current === "weekly") current = weeklySelection.current;
      if (current === "stay") current = staySelection.current;

      const hash = window.location.hash.slice(1);
      if (hash === "puja" || hash === "yoga") {
        const selected = document.getElementById(hash);
        if (selected) {
          const bounds = selected.getBoundingClientRect();
          if (bounds.top <= readingLine && bounds.bottom > 0) current = "weekly";
        }
      }

      setActiveSection(current);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    const unlockSelection = (event) => {
      if (event.type === "pointerdown" && event.target.closest("a,button")) return;
      if (event.type !== "keydown" || scrollKeys.includes(event.key)) {
        selectionLocked.current = false;
        requestUpdate();
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);
    window.addEventListener("wheel", unlockSelection, { passive: true });
    window.addEventListener("touchmove", unlockSelection, { passive: true });
    window.addEventListener("pointerdown", unlockSelection, { passive: true });
    window.addEventListener("popstate", unlockSelection);
    window.addEventListener("keydown", unlockSelection);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
      window.removeEventListener("wheel", unlockSelection);
      window.removeEventListener("touchmove", unlockSelection);
      window.removeEventListener("pointerdown", unlockSelection);
      window.removeEventListener("popstate", unlockSelection);
      window.removeEventListener("keydown", unlockSelection);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    menuRef.current?.querySelector("a")?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const selectSection = (target, active) => {
    selectionLocked.current = true;
    if (target === "weekly") weeklySelection.current = active;
    if (target === "stay") staySelection.current = active;
    setActiveSection(active);
  };

  const selectMobileSection = (target, active) => {
    selectSection(target, active);
    setMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById(target)?.focus({ preventScroll: true });
    }, 0);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#home" onClick={() => { selectSection("home", "home"); setMenuOpen(false); }} aria-label="Ashram Munivara home">
            <img src="/images/logo.png" width="48" height="46" alt="" />
            <span className="brand-type">
              <strong>Ashram Munivara</strong>
              <span>Jnana Buda Siwa · Ubud</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(([label, target, active = target]) => (
              <a
                key={active}
                href={`#${target}`}
                className={activeSection === active ? "active" : ""}
                aria-current={activeSection === active ? "location" : undefined}
                onClick={() => selectSection(target, active)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            className="header-cta"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Plan a visit on WhatsApp (opens in a new tab)"
          >
            Plan a visit <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <nav ref={menuRef} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map(([label, target, active = target]) => (
            <a
              key={active}
              href={`#${target}`}
              className={activeSection === active ? "active" : ""}
              aria-current={activeSection === active ? "location" : undefined}
              onClick={() => selectMobileSection(target, active)}
            >
              {label}<ArrowRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a
            className="mobile-visit"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Plan a visit on WhatsApp (opens in a new tab)"
          >
            Plan a visit on WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>
      </header>
    </>
  );
}
