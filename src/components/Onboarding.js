import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Custom styles for animations and specific fonts */}
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/tenorite');

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #666;
        }

        @keyframes colorFade {
          0% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
          100% { 
            background-position: 0% 50%;
          }
        }

        @keyframes wave {
          0% { transform: translateX(0) translateZ(0) scaleY(1); }
          50% { transform: translateX(-25%) translateZ(0) scaleY(0.8); }
          100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
        }

        .animated-text {
          font-family: 'Tenorite', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.0em;
          background: linear-gradient(
            90deg,
            #1D313C 0%,
            #1D313C 20%,
            #7AB52F 40%,
            #92C83E 50%,
            #7AB52F 60%,
            #1D313C 80%,
            #1D313C 100%
          );
          background-size: 200% 100%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: colorFade 8s ease-in-out infinite;
          line-height: 1.1;
        }

        .wave {
          position: absolute;
          width: 200%;
          height: 100%;
          animation: wave 40s linear infinite;
        }

        .wave:nth-child(2) {
          animation-delay: -10s;
          animation-duration: 50s;
          opacity: 0.5;
        }

        .wave:nth-child(3) {
          animation-delay: -20s;
          animation-duration: 60s;
          opacity: 0.3;
        }

        .highlight-text {
          font-family: 'Tenorite', sans-serif;
          font-weight: 600;
          background: linear-gradient(
            90deg,
            #1D313C 0%,
            #1D313C 20%,
            #7AB52F 40%,
            #92C83E 50%,
            #7AB52F 60%,
            #1D313C 80%,
            #1D313C 100%
          );
          background-size: 200% 100%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: colorFade 8s ease-in-out infinite;
        }
      `}</style>

      {/* Logo */}
      <Link to="/" className="fixed top-0 left-0 p-3 sm:p-6 z-50">
        <div className="flex justify-center items-center">
          <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] flex justify-center content-center">
            <img src={logo} alt="CloudoneLogo" />
          </div>
          <div
            className="text-xl sm:text-3xl font-bold"
            style={{
              color: "rgb(29, 49, 60)",
              fontFamily: "Tenorite, sans-serif",
            }}
          >
            Cloudone
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-3 sm:p-6 z-50">
        <div className="flex items-center gap-3 sm:gap-8">
          <a
            href="#application"
            onClick={(event) => scrollToSection(event, "application")}
            className="text-gray-600 hover:text-gray-900 transition-colors text-xs sm:text-sm"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Application
          </a>
          <a
            href="#why-now"
            onClick={(event) => scrollToSection(event, "why-now")}
            className="text-gray-600 hover:text-gray-900 transition-colors text-xs sm:text-sm"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Why Now
          </a>
          <a
            href="#team"
            onClick={(event) => scrollToSection(event, "team")}
            className="text-gray-600 hover:text-gray-900 transition-colors text-xs sm:text-sm"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Team
          </a>
        </div>
      </nav>

      {/* Decorative Wave Background */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none opacity-5"
        style={{ zIndex: 0 }}
      >
        <svg
          className="wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: "60%", left: 0 }}
        >
          <path
            d="M0,0 C150,50 350,0 600,20 C850,40 1050,0 1200,30 L1200,120 L0,120 Z"
            fill="#92C83E"
          />
        </svg>
        <svg
          className="wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: "40%", left: 0 }}
        >
          <path
            d="M0,40 C200,10 400,60 600,40 C800,20 1000,70 1200,40 L1200,120 L0,120 Z"
            fill="#7AB52F"
          />
        </svg>
        <svg
          className="wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: "20%", left: 0 }}
        >
          <path
            d="M0,60 C250,20 450,80 600,50 C750,20 950,90 1200,60 L1200,120 L0,120 Z"
            fill="#AAD96D"
          />
        </svg>
      </div>

      {/* Main Content */}
      <main
        className="max-w-3xl mx-auto px-6 pt-32 pb-8"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="text-center mb-20">
          <div className="mb-8">
            <h1 className="animated-text text-5xl md:text-7xl font-normal">
              Cloudone AI Robotics Lab
            </h1>
          </div>
          <p
            className="text-sm text-gray-900 font-medium"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Autonomy infrastructure for high-consequence systems
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <p
            className="text-lg leading-relaxed text-gray-900 mb-6 text-center"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            C1AI builds <span className="highlight-text">verification-first autonomy</span> and <span className="highlight-text">mission operations
              software</span> that makes <span className="highlight-text">complex systems run predictably</span> in demanding,
            real-world conditions—designed to integrate with proven platforms
            and scale through <span className="highlight-text">validated deployment</span>.
          </p>
        </section>

        {/* Application Section */}
        <section id="application" className="mb-16 scroll-mt-24">
          <h2
            className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Where it applies
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3
                className="text-base font-semibold text-gray-900 mb-2 text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                Remote & time-critical operations
              </h3>
              <p
                className="text-gray-900 leading-relaxed text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                Autonomy and ops tooling for environments where <span className="highlight-text">human presence
                  is constrained</span>, <span className="highlight-text">response time is valuable</span>, and <span className="highlight-text">reliability is
                    non-negotiable</span>.
              </p>
            </div>
            <div>
              <h3
                className="text-base font-semibold text-gray-900 mb-2 text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                Persistent, high-uptime missions
              </h3>
              <p
                className="text-gray-900 leading-relaxed text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                Systems that need <span className="highlight-text">stable performance over long
                  durations</span>—supported by <span className="highlight-text">monitoring</span>, <span className="highlight-text">health management</span>, and
                <span className="highlight-text">repeatable execution workflows</span>.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3
              className="text-base font-semibold text-gray-900 mb-4 text-center"
              style={{ fontFamily: "Tenorite, sans-serif" }}
            >
              Where in-all the autonomy will integrate:
            </h3>
            <ul className="space-y-2">
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                Satellites
              </li>
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                Launch Vehicle
              </li>
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                Strategic Flight Systems
              </li>
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                UAVs
              </li>
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                Aircrafts & Helicopters
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3
              className="text-base font-semibold text-gray-900 mb-4 text-center"
              style={{ fontFamily: "Tenorite, sans-serif" }}
            >
              What does inherent-intelligence autonomy core offers:
            </h3>
            <ul className="space-y-2">
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                <span className="highlight-text">AI Deterministic Control System</span>
              </li>
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                <span className="highlight-text">FDIR-regulated Feedback</span>
              </li>
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                <span className="highlight-text">Integrated VPNT Architecture</span>
              </li>
              <li
                className="text-gray-900 text-sm text-center"
                style={{ fontFamily: "Tenorite, sans-serif" }}
              >
                <span className="highlight-text">Sensor Suite for Crewed-to-Uncrewed Transition (C2U)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Why Now Section */}
        <section id="why-now" className="mb-16 scroll-mt-24">
          <h2
            className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Why now
          </h2>

          <p
            className="text-gray-900 leading-relaxed text-center max-w-3xl mx-auto"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            The technology behind autonomy is now <span className="highlight-text">strong enough to be used in
              real deployments</span>. What is still missing is the boring but essential
            part: <span className="highlight-text">proving it works reliably</span> and <span className="highlight-text">running it well every day</span>.
          </p>

          <p
            className="text-gray-900 leading-relaxed mt-4 text-center max-w-3xl mx-auto"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            As missions get more complex and real environments become harder to
            predict, teams need tools to <span className="highlight-text">test many scenarios</span>, <span className="highlight-text">monitor system
              health</span>, and <span className="highlight-text">learn from each deployment</span>. It cannot be only about
            clever algorithms.
          </p>

          <p
            className="text-gray-900 leading-relaxed mt-4 text-center max-w-3xl mx-auto"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            We are building the <span className="highlight-text">validation and operations layer</span> that makes
            autonomy <span className="highlight-text">dependable in the real world</span>.
          </p>
        </section>

        {/* Team Section */}
        <section id="team" className="mb-6 scroll-mt-24">
          <h2
            className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Team
          </h2>
          <p
            className="text-gray-900 leading-relaxed mb-4 text-center"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            We're a team of engineers and researchers focused on <span className="highlight-text">autonomy,
              controls, systems engineering, and mission operations</span>.
          </p>
          <p
            className="text-gray-900 leading-relaxed mb-4 text-center"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Interested in working with us? We're <span className="highlight-text">selective</span>, <span className="highlight-text">mission-driven</span>, and
            <span className="highlight-text"> move fast on validation</span>.
          </p>
          <p
            className="text-gray-900 leading-relaxed text-center"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Reach out to us at{" "}
            <a
              href="mailto:info@cloud1ai.com"
              className="text-gray-900 underline hover:text-gray-600 transition-colors"
              style={{ fontFamily: "Tenorite, sans-serif" }}
            >
              info@cloud1ai.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-base font-semibold text-gray-900 mb-4"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            CLOUDONE AI ROBOTICS LAB PRIVATE LIMITED
          </p>
          <p
            className="text-sm text-gray-900 mb-1"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            42 B3, Vedantha Desikar Swamy Street, Opposite to Kotak Mahindra
            Bank, Palathoppu, Mylapore
          </p>
          <p
            className="text-sm text-gray-900 mb-1"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            Tamil Nadu (600 004)
          </p>
          <p
            className="text-sm text-gray-900 mb-4"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            India
          </p>
          <div
            className="flex justify-center gap-6 text-xs text-gray-500"
            style={{ fontFamily: "Tenorite, sans-serif" }}
          >
            <p>CIN: U62099TN2023PTC163044</p>
            <p>GSTIN: 33AALCC2639R1Z4</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Onboarding;
