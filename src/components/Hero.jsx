import React from "react";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Hey, I'm an aspiring full stack developer</h1>
        <p>Let's make something great together!</p>
        <button className="cta-button">Contact me</button>
      </div>
      {[...Array(20)].map((_, index) => (
        <div key={index} className="falling-block"></div>
      ))}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-container {
          position: relative;
          height: 500px;
          width: 100%;
          overflow: hidden;
          background-color: #1a1a2e;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-content {
          text-align: center;
          color: white;
          z-index: 10;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeInUp 2s ease-in-out forwards;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 3s ease-in-out forwards;
        }

        .cta-button {
          margin-top: 25px;
          border: 0px;
          border-radius: 15px;
          background-color: #e94560;
          padding: 16px;
          width: 180px;
        }

        .cta-button:hover {
          background-color: #e22560;
          transition: all 0.3s ease;
        }

        .falling-block {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #e94560;
          top: -20px;
          animation: fall linear infinite;
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        ${[...Array(20)]
          .map(
            (_, index) => `
          .falling-block:nth-child(${index + 2}) {
            left: ${Math.random() * 100}%;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            animation-duration: ${Math.random() * 10 + 5}s;
            animation-delay: -${Math.random() * 10}s;
          }
        `
          )
          .join("")}

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }

          .cta-button {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
