"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import ThemeToggle from "@/components/theme-toggle";

const links = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Publications", href: "/#publications" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Ideas", href: "/ideas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">CC</span>
          <span className="brand-name">ÇAĞCAN ÇAL</span>
        </Link>

        <div className="desktop-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link className="nav-cta" href="/#contact">
            Contact
          </Link>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
          >
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <span>0{index + 1}</span>
                {link.label}
              </Link>
            ))}
            <div className="mobile-theme-row">
              <span>Theme</span>
              <ThemeToggle />
            </div>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Contact ↗
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
