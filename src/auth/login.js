'use client'

import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";

export default function Login({ isOpen, onClose }) {
  const loginRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">
      <div className="auth-orb one" />
      <div className="auth-orb two" />
      <div ref={loginRef} className="auth-card">
        <div className="auth-card-topline" />
        <div className="auth-head">
          <div>
            <h1 className="auth-title">Google Login</h1>
            <p className="auth-subtitle">Sign in with your Google account</p>
          </div>
          <div className="auth-badge">OAuth</div>
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="btn btn-primary auth-button"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
