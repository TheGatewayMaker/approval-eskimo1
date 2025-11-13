export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-colors shadow-lg">
        <svg
          className="w-10 h-10 mx-auto mb-4 text-cyan-400"
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
        <h3 className="font-black text-white text-lg text-center">Verified</h3>
        <p className="text-sm text-slate-300 mt-3 text-center font-semibold">
          Identity verified & approved
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-colors shadow-lg">
        <svg
          className="w-10 h-10 mx-auto mb-4 text-cyan-400"
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
        <h3 className="font-black text-white text-lg text-center">Secure</h3>
        <p className="text-sm text-slate-300 mt-3 text-center font-semibold">
          End-to-end encrypted
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-colors shadow-lg">
        <svg
          className="w-10 h-10 mx-auto mb-4 text-cyan-400"
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
        <h3 className="font-black text-white text-lg text-center">Instant</h3>
        <p className="text-sm text-slate-300 mt-3 text-center font-semibold">
          Immediate activation
        </p>
      </div>
    </div>
  );
}
