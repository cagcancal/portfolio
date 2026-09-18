"use client";

import Image from "next/image";
import { motion } from "motion/react";
import TopographicBackground from "@/components/topographic-background";

const interests = [
  "Rock Mechanics",
  "Natural Hazards",
  "GIS & Remote Sensing",
  "GeoAI",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <TopographicBackground />

      <div className="hero-noise" />

      <div className="hero-shell">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.12,
              },
            },
          }}
        >
          <motion.div
            className="status-line"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <span className="status-dot" />
            GEOLOGICAL ENGINEER · RESEARCHER
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            Çağcan
            <br />
            <span className="hero-surname">Çal.</span>
          </motion.h1>

          <motion.div
            className="hero-bottom"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <p>
              Exploring uncertainty in the ground,
              <br />
              from rock mechanics to geospatial intelligence.
            </p>

            <a className="hero-button" href="#about">
              <span>Explore my work</span>
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.aside
          className="profile-card"
          initial={{ opacity: 0, scale: 0.97, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            delay: 0.42,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="profile-photo-shell">
            <Image
              src="/cagcan-profile.jpg"
              alt="Portrait of Çağcan Çal"
              width={800}
              height={1000}
              priority
              className="profile-photo"
            />
          </div>

        </motion.aside>
      </div>

      <div className="interest-strip">
        <div className="interest-track">
          {[...interests, ...interests].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}