"use client";

import { useState } from "react";
import { registerEmail } from "@/actions/registerEmail";

export default function Interested() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setErrorMsg("");

    try {
      await registerEmail(formData);
      setEmail("");
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong");
    }
  }

  return (
    <div className="w-full max-[460px]:px-10 px-16 md:px-20 py-8">
      <div className="relative w-full max-w-6xl mx-auto rounded-2xl p-[1px] bg-gradient-to-br from-green to-blue overflow-auto animate-reveal-gradient">
        <form
          action={handleSubmit}
          className="w-full rounded-2xl bg-black px-8 min-[500px]:px-12 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col gap-4 max-w-2xl text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-blue animate-reveal-gradient">
              Intrested for IT-Meet 2025?
            </h2>
            <p className="text-gray-300 max-[410px]:text-sm text-base md:text-lg leading-relaxed">
              Enter your email to get exclusive news and announcements regarding
              the events of IT Meet.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full w-auto min-[420px]:min-w-[300px] md:min-w-[380px] lg:min-w-[420px]">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#2a2445] border border-blue text-white placeholder-gray-400 focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-all"
            />

            {status === "error" && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}
            {status === "success" && (
              <p className="text-green-400 text-sm">Registered successfully!</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue hover:bg-green disabled:opacity-70 disabled:cursor-not-allowed text-black font-bold px-8 py-3 rounded-lg transition-colors shadow-lg shadow-green-500/20"
            >
              {status === "loading" ? "Submitting..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
