
"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Our Values", href: "#values" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVBAR */}
      <header className="gold-navbar">
        <a href="#home" className="gold-brand" aria-label="ALPHAA LIVING home">
          <Image
            src="/alphaa-logo.png"
            alt="ALPHAA LIVING"
            width={190}
            height={100}
            priority
            className="gold-brand-logo"
          />
        </a>

        <nav className="gold-nav" aria-label="Main navigation">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`gold-nav-link ${
                index === 0 ? "gold-nav-active" : ""
              }`}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <a href="#contact" className="gold-enquire">
          <span>Enquire Now</span>
          <ArrowUpRight size={17} className="gold-enquire-arrow" />
        </a>

        <button
          type="button"
          className="gold-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="gold-mobile-menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <span className="gold-navbar-shine" />
      </header>

      {/* MOBILE MENU */}
      <div
        id="gold-mobile-menu"
        className={`gold-mobile-menu ${
          menuOpen ? "gold-mobile-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="gold-mobile-link"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {link.label}
            <ArrowUpRight size={19} />
          </a>
        ))}
      </div>

      {/* HERO SECTION */}
      <section id="home" className="al-hero">
        <div className="al-hero-backdrop" />

        <div className="al-hero-left">
          <div className="al-hero-eyebrow">
            <span className="al-eyebrow-line" />
            <span>THE ART OF ELEVATED LIVING</span>
          </div>

          <div className="al-hero-copy">
            <p className="al-hero-kicker">A DIFFERENT WAY TO LIVE</p>

            <h1>
              Space to
              <br />
              <span>live.</span>
              <br />
              Room to
              <br />
              <em>become.</em>
            </h1>

            <p className="al-hero-description">
              Thoughtfully envisioned residences where architectural
              beauty meets the quiet luxury of everyday living.
            </p>

            <div className="al-hero-actions">
              <a href="#projects" className="al-hero-primary">
                <span>Discover our spaces</span>
                <ArrowUpRight size={18} />
              </a>

              <a href="#about" className="al-hero-secondary">
                Our philosophy
                <span className="al-secondary-line" />
              </a>
            </div>
          </div>

          <div className="al-hero-bottom">
            <span className="al-hero-index">01</span>
            <span className="al-index-divider" />
            <span>DESIGNED FOR THE WAY YOU ASPIRE TO LIVE</span>
          </div>
        </div>

        <div className="al-hero-right">
          <div className="al-hero-image">
            <div className="al-image-overlay" />

            <div className="al-image-topline">
              <span>ALPHAA LIVING</span>
              <span>EST. IN EXCELLENCE</span>
            </div>

            <div className="al-image-caption">
              <span className="al-caption-number">01 / 03</span>
              <span className="al-caption-rule" />
              <span>ARCHITECTURE WITH INTENTION</span>
            </div>
          </div>

          <div className="al-hero-orbit" aria-hidden="true">
            <span>EXCEPTIONAL BY DESIGN</span>
          </div>

          <div className="al-hero-float-card">
            <div className="al-float-icon al-float-logo">
              <Image
                src="/alphaa-living-logo.png"
                alt="ALPHAA LIVING logo"
                width={52}
                height={52}
                className="al-float-logo-image"
              />
            </div>

            <div>
              <p>THE ALPHAA STANDARD</p>
              <h3>Beyond the ordinary.</h3>
              <span>Thoughtful spaces. Lasting value.</span>
            </div>

            <ArrowUpRight size={19} />
          </div>

          <div className="al-vertical-label">
            RESIDENCES · DESIGN · LIFESTYLE
          </div>
        </div>

        <a href="#about" className="al-scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <span className="al-scroll-track">
            <span />
          </span>
        </a>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="about" className="al-philosophy">
        <div className="al-philosophy-particles" aria-hidden="true">
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} className="al-particle" />
          ))}
        </div>

        <div className="al-philosophy-inner">
          <div className="al-philosophy-topline">
            <span className="al-section-kicker">
              <span className="al-kicker-dot" />
              THE ALPHAA PHILOSOPHY
            </span>
            <span className="al-section-index">01 / OUR APPROACH</span>
          </div>

          <div className="al-philosophy-grid">
            {/* IMAGE ON THE LEFT */}
            <div className="al-philosophy-visual">
              <div className="al-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Refined contemporary residential interior"
                  className="al-philosophy-image"
                />

                <div className="al-image-shade" />

                <div className="al-image-caption">
                  <span>THE ART OF LIVING</span>
                  <span className="al-caption-line" />
                  <span>EST. IN EVERY DETAIL</span>
                </div>
              </div>

              <div className="al-floating-detail">
                <span className="al-detail-number">A.</span>
                <div>
                  <p>THE ALPHAA DIFFERENCE</p>
                  <h3>Thoughtfully considered.</h3>
                </div>
                <span className="al-detail-dot" />
              </div>

              <div className="al-visual-orbit" aria-hidden="true">
                <span />
              </div>
            </div>

            {/* TEXT ON THE RIGHT */}
            <div className="al-philosophy-copy">
              <span className="al-giant-number">01</span>

              <h2>
                More than a home.
                <br />
                <em>A feeling of belonging.</em>
              </h2>

              <div className="al-philosophy-rule">
                <span />
              </div>

              <p className="al-philosophy-description">
                We believe a home should be more than a place to live.
                It should reflect who you are, bring you closer to what
                matters, and create space for the life you imagine.
              </p>

              <a href="#projects" className="al-philosophy-link">
                Discover our approach
                <span className="al-link-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <div className="al-philosophy-note">
                <span className="al-note-dot" />
                DESIGNED WITH INTENTION. BUILT FOR LIFE.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM BLUE AND GOLD VALUES SECTION */}
      <section className="al-values-section" id="values">
        <div className="al-values-glow al-values-glow-one" />
        <div className="al-values-glow al-values-glow-two" />

        <div className="al-values-heading">
          <span className="al-values-eyebrow">
            <span className="al-values-eyebrow-line" />
            THE ALPHAA PHILOSOPHY
            <span className="al-values-eyebrow-line" />
          </span>

          <h2>
            A better way <span>to live.</span>
          </h2>

          <p>
            Thoughtful spaces. Enduring value. Life, beautifully considered.
          </p>
        </div>

        <div className="al-values-grid">
          <article className="al-value-card">
            <span className="al-value-index">01</span>
            <span className="al-value-symbol" aria-hidden="true">
              ✳
            </span>

            <div className="al-value-content">
              <span className="al-value-label">THE ART OF DETAIL</span>
              <h3>Considered design</h3>
              <p>Every detail has a purpose.</p>
            </div>

            <span className="al-value-bottom-line" />
          </article>

          <article className="al-value-card al-value-card-featured">
            <span className="al-value-index">02</span>
            <span className="al-value-symbol" aria-hidden="true">
              ◇
            </span>

            <div className="al-value-content">
              <span className="al-value-label">BUILT FOR TOMORROW</span>
              <h3>Lasting value</h3>
              <p>A perspective beyond today.</p>
            </div>

            <span className="al-value-bottom-line" />
          </article>

          <article className="al-value-card">
            <span className="al-value-index">03</span>
            <span className="al-value-symbol" aria-hidden="true">
              ✧
            </span>

            <div className="al-value-content">
              <span className="al-value-label">MADE FOR LIVING</span>
              <h3>Meaningful living</h3>
              <p>Space for what matters most.</p>
            </div>

            <span className="al-value-bottom-line" />
          </article>
        </div>

        <div className="al-values-footer">
          <span />
          <p>MORE THAN PROPERTY. A WAY OF LIFE.</p>
          <span />
        </div>
      </section>
      
      {/* SIGNATURE RESIDENCES SECTION */}
      <section className="al-projects-section" id="projects">
        <div className="al-projects-inner">
          <div className="al-projects-heading">
            <div className="al-projects-eyebrow">
              <span />
              A CURATED COLLECTION
              <span />
            </div>

            <div className="al-projects-title-row">
              <div>
                <h2>
                  Spaces that
                  <br />
                  <em>inspire living.</em>
                </h2>
              </div>

              <p>
                Discover thoughtfully envisioned residences where
                distinctive architecture meets a more considered
                way of life.
              </p>
            </div>
          </div>

          <div className="al-projects-grid">
            {/* FEATURED PROPERTY */}
            <a
              href="#contact"
              className="al-project-card al-project-card-large"
              aria-label="Enquire about The Grand Residences"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury contemporary residence with a refined architectural design"
                className="al-project-image"
              />

              <div className="al-project-overlay" />

              <span className="al-project-number">01 / RESIDENCES</span>

              <span className="al-project-arrow">
                <ArrowUpRight size={21} />
              </span>

              <div className="al-project-info">
                <span className="al-project-category">
                  ARCHITECTURE · LIFESTYLE
                </span>
                <h3>The Grand Residences</h3>
                <p>Elevated living, thoughtfully imagined.</p>
              </div>
            </a>

            {/* SECOND PROPERTY */}
            <a
              href="#contact"
              className="al-project-card"
              aria-label="Enquire about The Serene Collection"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
                alt="Elegant modern home with natural materials and warm lighting"
                className="al-project-image"
              />

              <div className="al-project-overlay" />

              <span className="al-project-number">02 / COLLECTION</span>

              <span className="al-project-arrow">
                <ArrowUpRight size={21} />
              </span>

              <div className="al-project-info">
                <span className="al-project-category">
                  CALM · COMFORT
                </span>
                <h3>The Serene Collection</h3>
                <p>A quieter kind of luxury.</p>
              </div>
            </a>

            {/* THIRD PROPERTY */}
            <a
              href="#contact"
              className="al-project-card"
              aria-label="Enquire about The Signature Villas"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
                alt="Contemporary luxury villa surrounded by a landscaped garden"
                className="al-project-image"
              />

              <div className="al-project-overlay" />

              <span className="al-project-number">03 / PRIVATE LIVING</span>

              <span className="al-project-arrow">
                <ArrowUpRight size={21} />
              </span>

              <div className="al-project-info">
                <span className="al-project-category">
                  PRIVACY · DISTINCTION
                </span>
                <h3>The Signature Villas</h3>
                <p>Room to live entirely your way.</p>
              </div>
            </a>
          </div>

          <div className="al-projects-bottom">
            <span className="al-projects-bottom-line" />
            <p>EVERY SPACE HAS A STORY. FIND YOURS.</p>
            <a href="#contact">
              BEGIN YOUR JOURNEY
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* THE ALPHAA DIFFERENCE */}
      <section className="al-difference-section" id="difference">
        <div className="al-difference-inner">
          <div className="al-difference-top">
            <span className="al-difference-eyebrow">
              <span />
              THE ALPHAA DIFFERENCE
            </span>
            <span className="al-difference-index">DESIGNED WITH PURPOSE</span>
          </div>

          <div className="al-difference-heading">
            <h2>
              Not just spaces.
              <br />
              <em>A different perspective.</em>
            </h2>
            <p>
              We bring thoughtful design, a commitment to quality, and
              a deeper understanding of modern living into every detail.
            </p>
          </div>

          <div className="al-difference-grid">
            <article className="al-difference-card">
              <span className="al-difference-number">01</span>
              <div className="al-difference-icon">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M8 39V18L24 8L40 18V39H8Z" />
                  <path d="M18 39V26H30V39M5 20L24 6L43 20" />
                </svg>
              </div>
              <h3>Thoughtful by design</h3>
              <p>
                Considered layouts and architectural details that make
                everyday living feel effortless.
              </p>
              <span className="al-difference-line" />
            </article>

            <article className="al-difference-card">
              <span className="al-difference-number">02</span>
              <div className="al-difference-icon">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M24 5L39 11V23C39 32 32 39 24 43C16 39 9 32 9 23V11L24 5Z" />
                  <path d="M17 24L22 29L32 18" />
                </svg>
              </div>
              <h3>Quality that lasts</h3>
              <p>
                A lasting approach to materials, details, and the
                experience of coming home.
              </p>
              <span className="al-difference-line" />
            </article>

            <article className="al-difference-card">
              <span className="al-difference-number">03</span>
              <div className="al-difference-icon">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M24 40S7 30 7 18C7 11 15 7 21 13L24 16L27 13C33 7 41 11 41 18C41 30 24 40 24 40Z" />
                  <path d="M15 25H21L25 19L29 28L32 24H37" />
                </svg>
              </div>
              <h3>Life at the centre</h3>
              <p>
                Spaces shaped around comfort, connection, and the
                moments that matter most.
              </p>
              <span className="al-difference-line" />
            </article>
          </div>

          <div className="al-difference-bottom">
            <span>01 — 03</span>
            <span className="al-difference-bottom-rule" />
            <p>THE DETAILS MAKE THE DIFFERENCE.</p>
          </div>
        </div>
      </section>

      {/* ALPHAA — EDITORIAL ARCHITECTURE GALLERY */}
      <section className="al-gallery-section" id="gallery">
        <div className="al-gallery-inner">
          <div className="al-gallery-topline">
            <span className="al-gallery-eyebrow">
              <span className="al-gallery-dot" />
              A CLOSER LOOK AT ALPHAA
            </span>
            <span className="al-gallery-edition">DESIGN JOURNAL · 001</span>
          </div>

          <div className="al-gallery-intro">
            <h2>
              Designed to be
              <br />
              <em>experienced.</em>
            </h2>
            <div className="al-gallery-intro-right">
              <span className="al-gallery-gold-mark">✳</span>
              <p>
                Architecture is more than what you see.
                It is how a space makes you feel.
              </p>
            </div>
          </div>

          <div className="al-gallery-collage">
            <a href="#projects" className="al-gallery-photo al-gallery-photo-main">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
                alt="Elegant contemporary living room with refined natural finishes"
              />
              <span className="al-gallery-photo-shade" />
              <span className="al-gallery-photo-tag">01 — INTERIORS</span>
              <div className="al-gallery-photo-bottom">
                <div>
                  <span>THE ART OF COMING HOME</span>
                  <h3>Comfort, elevated.</h3>
                </div>
                <span className="al-gallery-photo-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </a>

            <a href="#projects" className="al-gallery-photo al-gallery-photo-top">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                alt="Contemporary luxury home architecture"
              />
              <span className="al-gallery-photo-shade" />
              <span className="al-gallery-photo-tag">02 — ARCHITECTURE</span>
              <div className="al-gallery-mini-caption">
                <span>Form with purpose</span>
                <ArrowUpRight size={17} />
              </div>
            </a>

            <a href="#projects" className="al-gallery-photo al-gallery-photo-bottom">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
                alt="Warm minimalist residential interior"
              />
              <span className="al-gallery-photo-shade" />
              <span className="al-gallery-photo-tag">03 — DETAILS</span>
              <div className="al-gallery-mini-caption">
                <span>Beauty in the details</span>
                <ArrowUpRight size={17} />
              </div>
            </a>

            <div className="al-gallery-collage-note">
              <span className="al-gallery-note-line" />
              <span>THOUGHTFULLY CONSIDERED</span>
              <strong>Every corner. Every moment.</strong>
            </div>

            <span className="al-gallery-outline" aria-hidden="true" />
          </div>

          <div className="al-gallery-bottom">
            <div className="al-gallery-bottom-label">
              <span>01</span>
              <span className="al-gallery-bottom-rule" />
              <span>THE ALPHAA COLLECTION</span>
            </div>

            <a href="#contact" className="al-gallery-cta">
              Discover the Alphaa experience
              <span>
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
        </div>
      </section>
      
      {/* ALPHAA LIVING — LUXURY EXPERIENCE */}
      <section className="al-experience-section" id="experience">
        <div className="al-experience-particles" aria-hidden="true">
          {Array.from({ length: 48 }, (_, i) => (
            <span
              key={i}
              className="al-experience-particle"
              style={{
                "--particle-index": i,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="al-experience-orbit al-experience-orbit-one" />
        <div className="al-experience-orbit al-experience-orbit-two" />

        <div className="al-experience-inner">
          <div className="al-experience-heading">
            <div className="al-experience-copy">
              <span className="al-experience-eyebrow">
                <span className="al-experience-eyebrow-line" />
                THE ALPHAA PROMISE
              </span>

              <h2>
                More than a
                <br />
                residence.
                <br />
                <em>A way of life.</em>
              </h2>

              <p>
                We believe exceptional living begins with a vision.
                Every detail, every space, and every experience
                should reflect a commitment to thoughtful design
                and enduring value.
              </p>

              <a href="#contact" className="al-experience-cta">
                Discover our philosophy
                <span>
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>

            <div className="al-experience-visual">
              <div className="al-experience-gold-frame" />

              <div className="al-experience-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
                  alt="Contemporary luxury residence with elegant architectural details"
                  className="al-experience-image"
                />

                <div className="al-experience-image-shade" />

                <div className="al-experience-image-caption">
                  <span>THE ALPHAA STANDARD</span>
                  <strong>Extraordinary, by intention.</strong>
                </div>
              </div>

              <div className="al-experience-floating-note">
                <span className="al-experience-note-symbol">✳</span>
                <div>
                  <span>OUR PHILOSOPHY</span>
                  <p>Designed around you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="al-experience-divider">
            <span />
            <p>THE VALUES THAT DEFINE US</p>
            <span />
          </div>

          <div className="al-experience-values">
            <article className="al-experience-value">
              <span className="al-experience-value-number">01</span>
              <span className="al-experience-value-icon">✧</span>
              <h3>Prime locations</h3>
              <p>Connected to what matters.</p>
            </article>

            <article className="al-experience-value">
              <span className="al-experience-value-number">02</span>
              <span className="al-experience-value-icon">◇</span>
              <h3>Timeless design</h3>
              <p>Beauty beyond the moment.</p>
            </article>

            <article className="al-experience-value">
              <span className="al-experience-value-number">03</span>
              <span className="al-experience-value-icon">✳</span>
              <h3>Lasting quality</h3>
              <p>Thoughtful in every detail.</p>
            </article>

            <article className="al-experience-value">
              <span className="al-experience-value-number">04</span>
              <span className="al-experience-value-icon">⌘</span>
              <h3>Personal approach</h3>
              <p>Your vision comes first.</p>
            </article>
          </div>
        </div>

        <div className="al-experience-bottom-decoration" aria-hidden="true" />
      </section>


      {/* ALPHAA — THE ART OF LIVING */}
      <section className="al-lifestyle-section" id="lifestyle">
        <div className="al-lifestyle-constellation" aria-hidden="true">
          <span className="al-lifestyle-star star-one" />
          <span className="al-lifestyle-star star-two" />
          <span className="al-lifestyle-star star-three" />
          <span className="al-lifestyle-star star-four" />
          <span className="al-lifestyle-star star-five" />
          <span className="al-lifestyle-star star-six" />

          <span className="al-lifestyle-ray ray-one" />
          <span className="al-lifestyle-ray ray-two" />
          <span className="al-lifestyle-ray ray-three" />
          <span className="al-lifestyle-ray ray-four" />
        </div>

        <div className="al-lifestyle-inner">
          <div className="al-lifestyle-topline">
            <span>THE FINER SIDE OF LIVING</span>
            <span className="al-lifestyle-topline-number">02 — OUR PHILOSOPHY</span>
          </div>

          <div className="al-lifestyle-center">
            <span className="al-lifestyle-emblem">✳</span>

            <p className="al-lifestyle-kicker">
              A LIFE, BEAUTIFULLY CONSIDERED
            </p>

            <h2>
              Not just a place
              <br />
              to live. <em>A place to belong.</em>
            </h2>

            <p className="al-lifestyle-description">
              The most meaningful spaces do more than surround us.
              They inspire us, bring us together, and make everyday
              moments feel extraordinary.
            </p>

            <span className="al-lifestyle-center-line" />
          </div>

          <div className="al-lifestyle-highlights">
            <article className="al-lifestyle-card">
              <div className="al-lifestyle-card-top">
                <span className="al-lifestyle-card-number">01</span>
                <span className="al-lifestyle-card-icon">✧</span>
              </div>

              <span className="al-lifestyle-card-rule" />

              <h3>Space to unwind</h3>
              <p>
                A sense of calm, with room to pause, recharge,
                and simply be yourself.
              </p>

              <span className="al-lifestyle-card-bottom">
                <span>YOUR PERSONAL SANCTUARY</span>
                <span className="al-lifestyle-card-dot" />
              </span>
            </article>

            <article className="al-lifestyle-card">
              <div className="al-lifestyle-card-top">
                <span className="al-lifestyle-card-number">02</span>
                <span className="al-lifestyle-card-icon">◇</span>
              </div>

              <span className="al-lifestyle-card-rule" />

              <h3>Room to connect</h3>
              <p>
                Thoughtful surroundings that make time with
                family and friends feel more meaningful.
              </p>

              <span className="al-lifestyle-card-bottom">
                <span>MADE FOR TOGETHERNESS</span>
                <span className="al-lifestyle-card-dot" />
              </span>
            </article>

            <article className="al-lifestyle-card">
              <div className="al-lifestyle-card-top">
                <span className="al-lifestyle-card-number">03</span>
                <span className="al-lifestyle-card-icon">✳</span>
              </div>

              <span className="al-lifestyle-card-rule" />

              <h3>Freedom to grow</h3>
              <p>
                A place that evolves with your ambitions,
                aspirations, and the life ahead.
              </p>

              <span className="al-lifestyle-card-bottom">
                <span>INSPIRED BY POSSIBILITY</span>
                <span className="al-lifestyle-card-dot" />
              </span>
            </article>
          </div>

          <div className="al-lifestyle-footer">
            <span />
            <p>ALPHAA LIVING — WHERE LIFE FINDS ITS SPACE</p>
            <span />
          </div>
        </div>
      </section>

{/* CONSTELLATION SECTION */}
<section className="al-constellation" id="vision">
  <div className="al-constellation-glow" />

  {/* Gold constellation lines */}
  <svg
    className="al-constellation-lines"
    viewBox="0 0 1440 700"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <g className="al-constellation-line-group">
      <path d="M0 170 L180 260 L310 150 L470 280 L610 190" />
      <path d="M1440 150 L1260 250 L1130 130 L970 270 L830 180" />
      <path d="M180 260 L220 410 L390 460 L470 280" />
      <path d="M1260 250 L1220 420 L1050 460 L970 270" />
      <path d="M310 150 L360 65 L470 100 L610 190" />
      <path d="M1130 130 L1080 55 L970 95 L830 180" />
      <path d="M390 460 L540 540 L720 490 L900 540 L1050 460" />
    </g>

    <g className="al-constellation-nodes">
      <circle cx="180" cy="260" r="3" />
      <circle cx="310" cy="150" r="3" />
      <circle cx="470" cy="280" r="3" />
      <circle cx="1260" cy="250" r="3" />
      <circle cx="1130" cy="130" r="3" />
      <circle cx="970" cy="270" r="3" />
      <circle cx="390" cy="460" r="3" />
      <circle cx="1050" cy="460" r="3" />
      <circle cx="720" cy="490" r="4" />
    </g>
  </svg>

  {/* Floating gold particles */}
  <div className="al-constellation-particles" aria-hidden="true">
    {Array.from({ length: 38 }, (_, i) => (
      <span
        key={i}
        className="al-constellation-particle"
        style={
          {
            "--i": i,
            "--x": `${(i * 37 + 11) % 100}%`,
            "--y": `${(i * 61 + 7) % 100}%`,
          } as React.CSSProperties
        }
      />
    ))}
  </div>

  <div className="al-constellation-content">
    <span className="al-constellation-eyebrow">
      <span />
      THE ART OF LIVING
      <span />
    </span>

    <div className="al-constellation-emblem">
      <span className="al-emblem-ring al-emblem-ring-one" />
      <span className="al-emblem-ring al-emblem-ring-two" />
      <span className="al-emblem-center">A</span>
      <span className="al-emblem-star">✦</span>
    </div>

    <h2>
      A life beyond
      <br />
      <span>the ordinary.</span>
    </h2>

    <p className="al-constellation-description">
      More than an address. A feeling of belonging.
      A thoughtful balance of timeless elegance,
      meaningful connections, and everyday discovery.
    </p>

    <a href="#contact" className="al-constellation-cta">
      <span>DISCOVER THE DIFFERENCE</span>
      <span className="al-constellation-arrow">↗</span>
    </a>

    <div className="al-constellation-footer">
      <span>DESIGNED FOR LIFE</span>
      <span className="al-footer-divider" />
      <span>DEFINED BY YOU</span>
    </div>
  </div>

  <div className="al-constellation-corner al-corner-tl" />
  <div className="al-constellation-corner al-corner-tr" />
  <div className="al-constellation-corner al-corner-bl" />
  <div className="al-constellation-corner al-corner-br" />
</section>

{/* ALPHAA LIVING — PRIVATE CONSULTATION */}
<section className="al-contact" id="contact">
  <div className="al-contact-grid-pattern" aria-hidden="true" />
  <div className="al-contact-glow" aria-hidden="true" />

  {/* Fine architectural line art */}
  <svg
    className="al-contact-architecture"
    viewBox="0 0 520 620"
    fill="none"
    aria-hidden="true"
  >
    <path d="M65 620V235L260 75L455 235V620" />
    <path d="M110 620V257L260 135L410 257V620" />
    <path d="M160 620V285L260 202L360 285V620" />
    <path d="M65 235H455" />
    <path d="M110 257H410" />
    <path d="M160 285H360" />
    <path d="M260 75V0" />
    <path d="M65 355H455" />
    <path d="M110 455H410" />
    <path d="M160 540H360" />
    <circle cx="260" cy="75" r="5" />
    <circle cx="65" cy="235" r="3" />
    <circle cx="455" cy="235" r="3" />
  </svg>

  {/* Gold details */}
  <div className="al-contact-star al-contact-star-one" aria-hidden="true">✦</div>
  <div className="al-contact-star al-contact-star-two" aria-hidden="true">✧</div>
  <span className="al-contact-particle al-contact-particle-one" />
  <span className="al-contact-particle al-contact-particle-two" />
  <span className="al-contact-particle al-contact-particle-three" />

  <div className="al-contact-inner">
    <div className="al-contact-intro">
      <span className="al-contact-eyebrow">
        <span className="al-contact-eyebrow-line" />
        LET'S BEGIN SOMETHING EXCEPTIONAL
      </span>

      <h2>
        Your next chapter
        <br />
        <em>begins here.</em>
      </h2>

      <p className="al-contact-lead">
        Every remarkable home begins with a conversation.
        Tell us what you envision, and let’s explore
        a place that feels unmistakably yours.
      </p>

      <div className="al-contact-promise">
        <span className="al-contact-promise-icon">✦</span>
        <div>
          <strong>A more personal approach</strong>
          <p>Thoughtful guidance, from the very first conversation.</p>
        </div>
      </div>

      <div className="al-contact-bottom-note">
        <span>ALPHAA LIVING</span>
        <span className="al-contact-note-line" />
        <span>SPACE FOR YOUR STORY</span>
      </div>
    </div>

    <div className="al-contact-form-wrap">
      <div className="al-contact-form-top">
        <div>
          <span className="al-contact-form-kicker">PRIVATE ENQUIRY</span>
          <h3>Let’s talk about your future.</h3>
        </div>
        <div className="al-contact-form-emblem" aria-hidden="true">
          <span>A</span>
        </div>
      </div>

      <p className="al-contact-form-description">
        Share a few details and our team can help you take the next step.
      </p>

      <form
        className="al-contact-form"
        onSubmit={(event) => {
          event.preventDefault();

          const form = event.currentTarget;
          const data = new FormData(form);
          const name = String(data.get("name") || "");
          const email = String(data.get("email") || "");
          const phone = String(data.get("phone") || "");
          const interest = String(data.get("interest") || "");
          const message = String(data.get("message") || "");

          const subject = encodeURIComponent(
            `Private enquiry from ${name}`
          );
          const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\nMessage: ${message}`
          );

          window.location.href =
            `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
        }}
      >
        <div className="al-contact-field">
          <label htmlFor="al-contact-name">YOUR NAME</label>
          <input
            id="al-contact-name"
            name="name"
            type="text"
            placeholder="How should we address you?"
            autoComplete="name"
            required
          />
        </div>

        <div className="al-contact-field-row">
          <div className="al-contact-field">
            <label htmlFor="al-contact-email">EMAIL ADDRESS</label>
            <input
              id="al-contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="al-contact-field">
            <label htmlFor="al-contact-phone">PHONE NUMBER</label>
            <input
              id="al-contact-phone"
              name="phone"
              type="tel"
              placeholder="Your contact number"
              autoComplete="tel"
              required
            />
          </div>
        </div>

        <div className="al-contact-field">
          <label htmlFor="al-contact-interest">I'M INTERESTED IN</label>
          <select
            id="al-contact-interest"
            name="interest"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Choose your preference
            </option>
            <option value="A luxury residence">A luxury residence</option>
            <option value="An investment opportunity">
              An investment opportunity
            </option>
            <option value="Project information">Project information</option>
            <option value="A private consultation">A private consultation</option>
            <option value="Other">Something else</option>
          </select>
        </div>

        <div className="al-contact-field">
          <label htmlFor="al-contact-message">YOUR VISION (OPTIONAL)</label>
          <textarea
            id="al-contact-message"
            name="message"
            placeholder="Tell us a little about what you are looking for..."
            rows={3}
          />
        </div>

        <button className="al-contact-submit" type="submit">
          <span>START A CONVERSATION</span>
          <span className="al-contact-submit-arrow">↗</span>
        </button>

        <p className="al-contact-privacy">
          Your details are intended for your enquiry only.
        </p>
      </form>
    </div>
  </div>
</section>

<footer className="al-footer">
  <div className="al-footer-top-line" />

  <div className="al-footer-container">
    {/* Brand and introduction */}
    <div className="al-footer-main">
      <div className="al-footer-brand">
        <a href="/" className="al-footer-logo">
          <img
            src="/alphaa-logo.png"
            alt="ALPHAA LIVING"
          />
        </a>

        <div className="al-footer-brand-line" />

        <p className="al-footer-tagline">
          A finer way to live.
          <br />
          A legacy worth leaving.
        </p>

        <p className="al-footer-description">
          Thoughtfully envisioned spaces for those who seek
          more than a home — a life of distinction.
        </p>

        <div className="al-footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
        </div>
      </div>

      {/* Navigation */}
      <div className="al-footer-column">
        <span className="al-footer-heading">EXPLORE</span>
        <a href="#home">Home</a>
        <a href="#about">Our Philosophy</a>
        <a href="#projects">Projects</a>
        <a href="#values">Our Values</a>
        <a href="#gallery">Gallery</a>
      </div>

      {/* Lifestyle */}
      <div className="al-footer-column">
        <span className="al-footer-heading">THE EXPERIENCE</span>
        <a href="#experience">The Alphaa Experience</a>
        <a href="#lifestyle">Elevated Living</a>
        <a href="#collections">Our Collections</a>
        <a href="#contact">Personal Consultation</a>
      </div>

      {/* Contact */}
      <div className="al-footer-column al-footer-contact">
        <span className="al-footer-heading">CONNECT WITH US</span>
        <p>Every exceptional home begins with a conversation.</p>
        <a className="al-footer-contact-link" href="#contact">
          Begin your journey <span>↗</span>
        </a>
        <span className="al-footer-small-label">PRIVATE ENQUIRIES</span>
        <a href="#contact">Request a consultation</a>
      </div>
    </div>

    {/* Statement */}
    <div className="al-footer-statement">
      <span className="al-footer-statement-line" />
      <p>NOT JUST A PLACE TO LIVE. A WAY TO BELONG.</p>
      <span className="al-footer-statement-line" />
    </div>

    {/* Bottom bar */}
    <div className="al-footer-bottom">
    <span>
  &copy; 2026 ALPHAA LIVING. ALL RIGHTS RESERVED.
</span>

      <div className="al-footer-legal">
        <a href="#contact">Privacy</a>
        <span className="al-footer-dot">◆</span>
        <a href="#contact">Terms</a>
      </div>

      <a href="#home" className="al-footer-back-top">
        BACK TO TOP <span>↑</span>
      </a>
    </div>
  </div>

  {/* Oversized background wordmark */}
  <div className="al-footer-watermark" aria-hidden="true">
    ALPHAA
  </div>
</footer>

    </main>
  );
}
