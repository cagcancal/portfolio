"use client";

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
            <span>Çal.</span>
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
          className="terrain-card"
          initial={{ opacity: 0, scale: 0.97, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.42, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="terrain-card-top">
            <span>FIELD / 01</span>
            <span>39.93° N</span>
          </div>

          <div className="terrain-visual">
            <svg
              viewBox="0 0 600 600"
              role="img"
              aria-label="Abstract topographic terrain"
            >
              <defs>
                <radialGradient id="glow">
                  <stop offset="0%" stopColor="rgba(210,177,115,0.24)" />
                  <stop offset="100%" stopColor="rgba(210,177,115,0)" />
                </radialGradient>
              </defs>

              <circle cx="330" cy="265" r="210" fill="url(#glow)" />

              {[
                "M72 315 C145 165 258 92 407 114 C515 131 560 226 510 321 C464 408 350 474 225 448 C105 423 33 395 72 315 Z",
                "M105 314 C169 194 270 132 393 146 C481 156 519 232 482 309 C447 381 349 426 245 410 C144 395 71 379 105 314 Z",
                "M139 310 C194 216 278 170 382 180 C451 187 486 244 454 304 C424 361 346 394 264 380 C183 368 106 364 139 310 Z",
                "M178 304 C220 238 290 205 370 213 C425 219 451 257 427 300 C403 343 343 366 279 356 C216 347 148 345 178 304 Z",
                "M218 296 C250 256 301 236 359 241 C399 245 420 269 402 298 C384 327 340 341 296 335 C253 328 196 326 218 296 Z",
                "M262 290 C282 269 315 258 352 261 C376 264 389 277 379 294 C368 311 341 319 315 315 C289 312 246 307 262 290 Z"
              ].map((path, index) => (
                <path
                  key={path}
                  d={path}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={index === 0 ? "1.4" : "1"}
                  opacity={0.94 - index * 0.08}
                />
              ))}

              <path
                d="M28 497 C154 414 244 440 330 390 C420 337 475 331 575 249"
                fill="none"
                stroke="currentColor"
                strokeDasharray="4 9"
                opacity="0.42"
              />

              <circle cx="355" cy="288" r="5" fill="currentColor" />
              <circle
                cx="355"
                cy="288"
                r="16"
                fill="none"
                stroke="currentColor"
                opacity="0.45"
              />
            </svg>

            <div className="terrain-label">
              <span>GROUND / DATA</span>
              <strong>UNCERTAINTY</strong>
            </div>
          </div>

          <div className="terrain-card-bottom">
            <span>ROCK · RISK · GEOAI</span>
            <span>2026</span>
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
