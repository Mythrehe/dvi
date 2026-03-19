'use client';

import React, { useEffect, useState } from 'react';

interface PageLoaderProps {
  isLoading?: boolean;
}

const PageLoader = ({ isLoading = true }: PageLoaderProps) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(isLoading);
    }, 100);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <>
      <style jsx>{`
        .loader-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at center, #ffffff 0%, #f0f4f8 100%);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Subtle Medical Grid Background */
        .loader-wrapper::before {
          content: "";
          position: absolute;
          width: 200%; height: 200%;
          background-image: 
            linear-gradient(rgba(13, 27, 42, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 27, 42, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: rotate(15deg);
          z-index: 0;
        }

        .content-box {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Logo Glow Effect */
        .logo-container {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
        }

        .logo-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-image: url("/dvi_logo.jpeg");
          background-size: cover;
          background-position: center;
          z-index: 2;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #ffc107;
          border-radius: 50%;
          animation: ripple 2s linear infinite;
          opacity: 0;
        }

        .pulse-ring:nth-child(2) {
          animation-delay: 0.5s;
        }

        /* ECG Line Effect */
        .loading-text {
          font-family: 'Courier New', Courier, monospace;
          font-size: 14px;
          font-weight: 800;
          color: #0d1b2a;
          letter-spacing: 4px;
          text-transform: uppercase;
          position: relative;
        }

        .loading-text::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ffc107;
          box-shadow: 0 0 8px #ffc107;
          animation: drawLine 2s infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.05); }
          20% { transform: scale(1); }
          30% { transform: scale(1.05); }
        }

        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes drawLine {
          0% { width: 0; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0; left: 100%; }
        }
      `}</style>

      <div className="loader-wrapper">
        <div className="content-box">
          <div className="logo-container">
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
            <div className="logo-img"></div>
          </div>

          <div className="loading-text">
            Sri Dhanvantri
          </div>
          
          <div style={{ 
            marginTop: '15px', 
            fontSize: '10px', 
            color: '#778da9', 
            letterSpacing: '2px',
            fontWeight: 600
          }}>
            LOADING...
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLoader;