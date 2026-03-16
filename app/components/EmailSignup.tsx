"use client"

import { useState, useEffect } from "react"
import { submitSubscription } from "@/lib/api"

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

interface EmailSignupProps {
  variant?: "footer" | "inline"
  label?: string
}

export default function EmailSignup({
  variant = "footer",
  label = "Stay updated",
}: EmailSignupProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [focused, setFocused] = useState(false)
  const [touched, setTouched] = useState(false)
  const [showDone, setShowDone] = useState(false)

  const emailValid = isValidEmail(email)
  const showError = touched && email.length > 0 && !emailValid

  useEffect(() => {
    if (showDone) {
      const t = setTimeout(() => setShowDone(false), 5000)
      return () => clearTimeout(t)
    }
  }, [showDone])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailValid) {
      setTouched(true)
      return
    }
    setStatus("loading")
    try {
      await submitSubscription(email)
      setStatus("idle")
      setEmail("")
      setTouched(false)
      setShowDone(true)
    } catch {
      setStatus("error")
    }
  }

  const isFooter = variant === "footer"
  const btnEnabled = emailValid && status !== "loading"

  return (
    <div className={isFooter ? "w-full" : ""}>
      <label
        className={
          isFooter
            ? "font-mono text-[0.62rem] tracking-[0.15em] uppercase text-slate-400 mb-2 block"
            : "font-mono text-[0.62rem] tracking-[0.15em] uppercase text-crystal-rose"
        }
      >
        {label}
      </label>
      <form
        onSubmit={handleSubmit}
        className={isFooter ? "w-full mt-2" : "flex mt-3"}
      >
        <div className={`relative ${isFooter ? "flex w-full" : "inline-flex"} items-center`}>
          <div
            className={`flex ${isFooter ? "w-full" : ""} rounded-lg overflow-hidden border transition-all duration-300 ${
              showError
                ? "border-crystal-rose shadow-[0_0_0_3px_rgba(212,160,176,0.12)]"
                : focused
                  ? isFooter
                    ? "border-crystal-rose shadow-[0_0_0_3px_rgba(212,160,176,0.12)]"
                    : "border-prismatic-cyan shadow-[0_0_0_3px_rgba(64,224,208,0.12)]"
                  : isFooter
                    ? "border-slate-200"
                    : "border-crystal-rose/30 hover:border-crystal-rose/50"
            }`}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false)
                if (email.length > 0) setTouched(true)
              }}
              placeholder="your@email.com"
              className={
                isFooter
                  ? "flex-1 px-4 py-3 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                  : "w-52 px-4 py-2.5 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none"
              }
              required
            />
            <button
              type="submit"
              disabled={!btnEnabled}
              className={
                isFooter
                  ? `px-5 py-3 font-heading font-semibold text-[0.78rem] transition-all duration-500 ease-in-out ${
                      btnEnabled
                        ? "bg-slate-900 text-white hover:bg-crystal-rose"
                        : "bg-slate-900 text-white opacity-50"
                    }`
                  : `px-5 py-2.5 text-[0.78rem] font-heading font-semibold transition-all duration-500 ease-in-out ${
                      btnEnabled
                        ? "bg-crystal-rose text-white hover:bg-slate-900"
                        : "bg-crystal-rose text-white opacity-50"
                    }`
              }
            >
              {/* {status === "loading" ? "Subscribing..." : "Subscribe"} */}
              {status === "loading" ? "Subscribe" : "Subscribe"}
            </button>
          </div>
          {showDone && (
            <span className="absolute left-full ml-3 text-[0.72rem] font-mono text-crystal-rose whitespace-nowrap">
              Done!
            </span>
          )}
        </div>
      </form>
      {showError && (
        <p className="text-crystal-rose text-[0.72rem] mt-1.5 px-1">
          Please enter a valid email address
        </p>
      )}
      {status === "error" && (
        <p className="text-crystal-rose text-xs mt-2">
          Something went wrong. Try again.
        </p>
      )}
    </div>
  )
}
