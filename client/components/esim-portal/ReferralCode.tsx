interface ReferralCodeProps {
  code: string;
}

export function ReferralCode({ code }: ReferralCodeProps) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="mb-12 flex justify-center">
      <div className="w-full max-w-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-[2.5rem] p-10 shadow-lg backdrop-blur-xl hover:shadow-xl transition-shadow">
        <div className="text-center">
          <div className="text-sm font-black text-amber-300 uppercase tracking-wider mb-6">
            Reseller's Referral Code
          </div>

          <h3 className="text-xl font-black text-white mb-4 leading-tight">
            Referral Code
          </h3>

          <div
            onClick={handleCopyCode}
            className="inline-block cursor-pointer bg-white/5 border border-amber-400/40 rounded-2xl px-8 py-6 mb-6 backdrop-blur-md hover:bg-white/10 transition-colors group"
          >
            <div className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-2">
              Use Code
            </div>
            <div className="text-4xl font-black text-amber-300 font-mono tracking-wider">
              {code}
            </div>
            <div className="text-sm text-slate-400 mt-3 flex items-center justify-center gap-2 group-hover:text-slate-300 font-semibold">
              <svg
                className="w-4 h-4"
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

          <p className="text-lg font-black text-white mb-3 leading-tight">
            Get Free 500-1000 Mbs Data
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-semibold">
            No expiry • Valid for all new activations • Exclusive reseller offer
          </p>
        </div>
      </div>
    </div>
  );
}
