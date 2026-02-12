'use client'

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  return (
    <main className="home-main" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div className="auth-card" style={{ width: "min(92vw, 420px)" }}>
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
    </main>
  );
}
