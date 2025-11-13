interface ReferralCodeProps {
  code: string;
}

export function ReferralCode({ code }: ReferralCodeProps) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="mb-12 flex justify-center px-2 sm:px-0">
      <div className="w-full max-w-lg bg-gradient-to-br from-amber-900 to-orange-900 border border-amber-700 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-2xl transition-shadow">
        <div className="text-center">
          <div className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider mb-4 sm:mb-6">
            Reseller's Referral Code
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4 leading-tight">
            Referral Code
          </h3>

          <div
            onClick={handleCopyCode}
            className="inline-block cursor-pointer bg-slate-900 border border-amber-600 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 mb-4 sm:mb-6 hover:bg-slate-800 transition-colors group active:scale-95"
          >
            <div className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wider mb-1 sm:mb-2">
              Use Code
            </div>
            <div className="text-3xl sm:text-4xl font-black text-amber-300 font-mono tracking-wider">
              {code}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-3 flex items-center justify-center gap-1 sm:gap-2 group-hover:text-slate-300 font-semibold">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
              <span className="whitespace-nowrap">Click to copy</span>
            </div>
          </div>

          <p className="text-base sm:text-lg font-black text-white mb-2 sm:mb-3 leading-tight">
            Get Free 500-1000 Mbs Data
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold px-1 sm:px-0">
            No expiry • Valid for all new activations • Exclusive reseller offer
          </p>
        </div>
      </div>
    </div>
  );
}
