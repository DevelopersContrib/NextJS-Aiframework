"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import "./First100FoundersModal.css";

interface First100FoundersModalProps {
  autoShowDelay?: number;
  excludePaths?: string[];
  onNavigate?: (url: string) => void;
  controlledOpen?: boolean;
  onClose?: () => void;
}

const SESSION_KEY = "first100founders_modal_shown";

export const First100FoundersModal: React.FC<First100FoundersModalProps> = ({
  autoShowDelay = 15000,
  excludePaths = [],
  onNavigate,
  controlledOpen,
  onClose,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (controlledOpen !== undefined) {
      setOpen(controlledOpen);
      return;
    }
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (excludePaths.includes(window.location.pathname)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, autoShowDelay);
    return () => clearTimeout(timer);
  }, [autoShowDelay, excludePaths, controlledOpen]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" aria-label="Close" onClick={handleClose}>
          <X size={24} />
        </button>
        <div className="banner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles"
            style={{ color: "#fff" }}
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            <path d="M5 3v4"></path>
            <path d="M19 17v4"></path>
            <path d="M3 5h4"></path>
            <path d="M17 19h4"></path>
          </svg>
          Limited Time Offer
        </div>
        <div className="modal-title">
          🎉 Be One of the <br />
          <span>First 100 Founders!</span>
        </div>
        <div className="modal-subtitle">
          Don&apos;t wait for the public launch!
        </div>
        <div className="modal-desc">
          Secure your spot now and get exclusive access to VentureOS platform
          with incredible benefits.
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon" style={{ color: "#3b82f6" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rocket"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </span>
            <span className="feature-title">
              Full platform access on January 15, 2026
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-icon" style={{ color: "#a78bfa" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </span>
            <span className="feature-title">
              Auto-built contractor website with ALL AI agents
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-icon" style={{ color: "#fbbf24" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-crown"
              >
                <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
              </svg>
            </span>
            <span className="feature-title">
              Early access to DomainFund Secret Auction
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-icon" style={{ color: "#f472b6" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
            </span>
            <span className="feature-title">
              Founders Badge & exclusive community access
            </span>
          </div>
        </div>
        <div className="cta-row">
          <button
            className="cta-btn"
            onClick={() => {
              handleClose();
              router.push("/first100founders");
            }}
          >
            Reserve My Founder Spot
          </button>
          <button className="cta-btn later-btn" onClick={handleClose}>
            Maybe Later
          </button>
        </div>
        <div className="modal-footer">
          🔥 Only 100 slots available • Act fast before they&apos;re gone!
        </div>
      </div>
    </div>
  );
};
