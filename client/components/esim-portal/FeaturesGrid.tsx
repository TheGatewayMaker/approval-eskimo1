export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
      <div className="p-5 rounded-lg bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-colors">
        <svg
          className="w-8 h-8 mx-auto mb-3 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="font-semibold text-white text-sm text-center">
          Verified
        </h3>
        <p className="text-xs text-slate-400 mt-1 text-center">
          Identity verified & approved
        </p>
      </div>

      <div className="p-5 rounded-lg bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-colors">
        <svg
          className="w-8 h-8 mx-auto mb-3 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <h3 className="font-semibold text-white text-sm text-center">
          Secure
        </h3>
        <p className="text-xs text-slate-400 mt-1 text-center">
          End-to-end encrypted
        </p>
      </div>

      <div className="p-5 rounded-lg bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-colors">
        <svg
          className="w-8 h-8 mx-auto mb-3 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <h3 className="font-semibold text-white text-sm text-center">
          Instant
        </h3>
        <p className="text-xs text-slate-400 mt-1 text-center">
          Immediate activation
        </p>
      </div>
    </div>
  );
}
