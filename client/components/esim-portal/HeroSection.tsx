export function HeroSection() {
  return (
    <div className="text-center mb-14">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-white/15 mb-8">
        <svg
          className="w-5 h-5 text-cyan-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider">
          Reseller Approved Portal
        </span>
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-tight text-white">
        Approve Your eSIM<br />Activation
      </h1>

      <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-semibold">
        Complete your eSIM activation through this secure, verified portal.
        Click the button below to approve and proceed with instant activation.
      </p>
    </div>
  );
}
