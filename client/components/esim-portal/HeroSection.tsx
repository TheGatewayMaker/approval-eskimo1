export function HeroSection() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-700/60 mb-6">
        <svg
          className="w-4 h-4 text-cyan-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-semibold text-cyan-300">
          Reseller Approved Portal
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
        Approve Your eSIM Activation
      </h1>

      <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Complete your eSIM activation through this secure, verified portal.
        Click the button below to approve and proceed with instant activation.
      </p>
    </div>
  );
}
