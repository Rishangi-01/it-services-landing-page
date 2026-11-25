
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import {
  finSecureBrandData,
  navbarContentData,
} from "@/data";

const navLinks = navbarContentData.navLinks
  .filter((link) => link.name && link.href)
  .map((link) => ({
    ...link,
    id: link.href.replace(/^#/, ""),
  }));

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Automatically detect active section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when navigating
  const handleNavigation = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="sticky top-0 left-0 z-[100] w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-[0_3px_20px_rgba(0,0,0,0.035)]"
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14">
          <div className="h-[76px] lg:h-[86px] flex items-center justify-between">

            <Link
              href={navLinks[0]?.href ?? "/"}
              onClick={() => handleNavigation(navLinks[0]?.id ?? "")}
              className="relative flex-shrink-0 z-[110]"
              aria-label={navbarContentData.homeAriaLabel}
            >
              <Image
                src={finSecureBrandData.logo}
                alt={finSecureBrandData.logoAlt}
                width={300}
                height={75}
                priority
                className="w-[190px] sm:w-[220px] lg:w-[260px] xl:w-[290px] h-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.5,
                    }}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleNavigation(link.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative block py-3 text-[15px] xl:text-[17px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                        isActive
                          ? "text-[#bd642d]"
                          : "text-[#101828] hover:text-[#bd642d]"
                      }`}
                    >
                      {link.name}

                      {/* ACTIVE UNDERLINE */}
                      <span
                        className={`absolute bottom-0 left-0 h-[2.5px] rounded-full bg-[#bd642d] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* DESKTOP CONTACT BUTTON */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="hidden lg:block"
            >
              <Link
                href={navbarContentData.contactHref}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#c36b32] to-[#a94e1e] px-6 xl:px-7 py-3 text-[15px] xl:text-[17px] font-semibold text-white shadow-[0_5px_15px_rgba(189,100,45,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_9px_24px_rgba(189,100,45,0.3)]"
              >
                <span className="relative z-10">{navbarContentData.contactLabel}</span>

                <ArrowRight
                  size={20}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                />

                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
            </motion.div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? navbarContentData.closeMenuLabel : navbarContentData.openMenuLabel}
              aria-expanded={menuOpen}
              className="lg:hidden relative z-[110] flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff4ed] text-[#bd642d] transition-all duration-300 hover:bg-[#bd642d] hover:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X size={25} /> : <Menu size={25} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* MOBILE MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-[76px] left-0 z-[100] w-full border-t border-gray-100 bg-white px-5 pb-7 pt-5 shadow-2xl lg:hidden sm:top-[76px]"
            >
              <nav className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;

                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleNavigation(link.id)}
                        aria-current={isActive ? "location" : undefined}
                        className={`group flex items-center justify-between border-b border-gray-100 py-4 text-[16px] font-semibold transition-all duration-300 ${
                          isActive
                            ? "text-[#bd642d]"
                            : "text-[#101828] hover:pl-2 hover:text-[#bd642d]"
                        }`}
                      >
                        <span>{link.name}</span>

                        {isActive && (
                          <motion.span
                            layoutId="mobileActive"
                            className="h-2 w-2 rounded-full bg-[#bd642d]"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* MOBILE CONTACT BUTTON */}
              <Link
                href={navbarContentData.contactHref}
                onClick={() => setMenuOpen(false)}
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#c36b32] to-[#a94e1e] px-6 py-4 text-[16px] font-semibold text-white shadow-lg shadow-orange-900/15 transition-all duration-300 hover:shadow-xl"
              >
                {navbarContentData.contactLabel}

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
