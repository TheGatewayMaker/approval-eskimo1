interface ReferralCodeProps {
  code: string;
}

export function ReferralCode({ code }: ReferralCodeProps) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="mb-10 flex justify-center">
      <div className="w-full max-w-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-3xl p-8 shadow-lg backdrop-blur-xl hover:shadow-xl transition-shadow">
        <div className="text-center">
          <div className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-5">
            Reseller's Referral Code
          </div>

          <h3 className="text-lg font-bold text-white mb-2">
            Referral Code
          </h3>

          <div
            onClick={handleCopyCode}
            className="inline-block cursor-pointer bg-slate-800 border-2 border-amber-700/60 rounded-xl px-6 py-4 mb-4 hover:bg-slate-700 transition-colors group"
          >
            <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
              Use Code
            </div>
            <div className="text-3xl font-black text-amber-300 font-mono tracking-widest">
              {code}
            </div>
            <div className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1 group-hover:text-slate-300">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Click to copy
            </div>
          </div>

          <p className="text-sm font-semibold text-white mb-2">
            Get Free 500-1000 Mbs Data
          </p>
          <p className="text-xs text-slate-300 leading-relaxed">
            No expiry • Valid for all new activations • Exclusive reseller offer
          </p>
        </div>
      </div>
    </div>
  );
}
