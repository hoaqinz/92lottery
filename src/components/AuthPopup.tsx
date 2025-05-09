"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AuthPopup() {
  const { showAuthPopup, closeAuthPopup, login } = useAuth();
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  // Handle ESC key press to close popup
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (showAuthPopup) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [showAuthPopup]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showAuthPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAuthPopup]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeAuthPopup();
      setIsClosing(false);
    }, 300);
  };

  const handleLogin = () => {
    handleClose();
    setTimeout(() => {
      router.push('/login');
    }, 300);
  };

  const handleRegister = () => {
    handleClose();
    setTimeout(() => {
      router.push('/register');
    }, 300);
  };

  if (!showAuthPopup) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-[300px] bg-gradient-to-b from-black to-[#e62e2e] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-300 transition-colors z-10 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-800"
          onClick={handleClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div className="p-5">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="relative w-32 h-10">
              <Image
                src="https://ext.same-assets.com/2315791583/2231750973.png"
                alt="92Lottery"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-center text-white mb-1">Chào mừng bạn!</h2>
          <p className="text-center text-gray-400 text-sm mb-5">Để tiếp tục vui lòng đăng nhập hoặc đăng ký</p>

          {/* Buttons */}
          <div className="flex gap-3 mb-5">
            <button
              className="flex-1 relative rounded-md bg-transparent border border-[#4CAF50] text-[#4CAF50] font-bold py-2.5 px-4 hover:bg-[#4CAF50] hover:bg-opacity-10 transition-colors shadow-sm before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-md before:bg-[#4CAF50]"
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
            <button
              className="flex-1 relative rounded-md bg-[#e62e2e] px-4 py-2.5 font-bold text-white transition-colors duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-md before:bg-[#e62e2e] hover:bg-[#d42a2a] hover:before:bg-[#d42a2a]"
              onClick={handleRegister}
            >
              ĐĂNG KÝ
            </button>
          </div>

          {/* Bonus button */}
          <div className="relative mt-5">
            <button type="button" className="lightning-button" onClick={handleRegister}>
              <div className="points_wrapper">
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
              </div>

              <span className="inner">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                >
                  <polyline
                    points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
                  ></polyline>
                </svg>
                ĐĂNG KÝ NHẬN 100K
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .lightning-button {
          --h-button: 48px;
          --w-button: 100%;
          --round: 0.75rem;
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.25s ease;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(255, 113, 113, 0.8) 0%,
              rgba(255, 113, 113, 0) 100%
            ),
            linear-gradient(0deg, #e62e2e, #e62e2e);
          border-radius: var(--round);
          border: none;
          outline: none;
          padding: 12px 18px;
          width: 100%;
          box-shadow: 0 4px 15px rgba(230, 46, 46, 0.4);
        }

        .lightning-button::before,
        .lightning-button::after {
          content: "";
          position: absolute;
          inset: var(--space);
          transition: all 0.5s ease-in-out;
          border-radius: calc(var(--round) - var(--space));
          z-index: 0;
        }

        .lightning-button::before {
          --space: 1px;
          background: linear-gradient(
            177.95deg,
            rgba(255, 255, 255, 0.19) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .lightning-button::after {
          --space: 2px;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(255, 113, 113, 0.8) 0%,
              rgba(255, 113, 113, 0) 100%
            ),
            linear-gradient(0deg, #e62e2e, #e62e2e);
        }

        .lightning-button:active {
          transform: scale(0.95);
        }



        .points_wrapper {
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .points_wrapper .point {
          bottom: -10px;
          position: absolute;
          animation: floating-points infinite ease-in-out;
          pointer-events: none;
          width: 2px;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 9999px;
        }

        @keyframes floating-points {
          0% {
            transform: translateY(0);
          }
          85% {
            opacity: 0;
          }
          100% {
            transform: translateY(-55px);
            opacity: 0;
          }
        }

        .points_wrapper .point:nth-child(1) {
          left: 10%;
          opacity: 1;
          animation-duration: 2.35s;
          animation-delay: 0.2s;
        }

        .points_wrapper .point:nth-child(2) {
          left: 30%;
          opacity: 0.7;
          animation-duration: 2.5s;
          animation-delay: 0.5s;
        }

        .points_wrapper .point:nth-child(3) {
          left: 25%;
          opacity: 0.8;
          animation-duration: 2.2s;
          animation-delay: 0.1s;
        }

        .points_wrapper .point:nth-child(4) {
          left: 44%;
          opacity: 0.6;
          animation-duration: 2.05s;
        }

        .points_wrapper .point:nth-child(5) {
          left: 50%;
          opacity: 1;
          animation-duration: 1.9s;
        }

        .points_wrapper .point:nth-child(6) {
          left: 75%;
          opacity: 0.5;
          animation-duration: 1.5s;
          animation-delay: 1.5s;
        }

        .points_wrapper .point:nth-child(7) {
          left: 88%;
          opacity: 0.9;
          animation-duration: 2.2s;
          animation-delay: 0.2s;
        }

        .points_wrapper .point:nth-child(8) {
          left: 58%;
          opacity: 0.8;
          animation-duration: 2.25s;
          animation-delay: 0.2s;
        }

        .points_wrapper .point:nth-child(9) {
          left: 98%;
          opacity: 0.6;
          animation-duration: 2.6s;
          animation-delay: 0.1s;
        }

        .points_wrapper .point:nth-child(10) {
          left: 65%;
          opacity: 1;
          animation-duration: 2.5s;
          animation-delay: 0.2s;
        }

        .inner {
          z-index: 2;
          gap: 6px;
          position: relative;
          width: 100%;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          transition: color 0.2s ease-in-out;
        }

        .inner svg.icon {
          width: 18px;
          height: 18px;
          transition: fill 0.1s linear;
        }

        .lightning-button:focus svg.icon {
          fill: white;
        }

        .lightning-button:hover svg.icon {
          fill: transparent;
          animation:
            dasharray 1s linear forwards,
            filled 0.1s linear forwards 0.95s;
        }

        @keyframes dasharray {
          from {
            stroke-dasharray: 0 0 0 0;
          }
          to {
            stroke-dasharray: 68 68 0 0;
          }
        }

        @keyframes filled {
          to {
            fill: white;
          }
        }
      `}</style>
    </div>
  );
}
