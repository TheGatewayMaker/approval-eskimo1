interface ReferralCodeProps {
  code: string;
}

export function ReferralCode({ code }: ReferralCodeProps) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="mb-10 flex justify-center">
      <div className="w-full max-w-lg bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200 border border-amber-400 mb-5">
            <svg
              className="w-4 h-4 text-amber-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 1 1 0 000 2H6a1 1 0 100-2 4 4 0 00-4 4v10a4 4 0 004 4h8a4 4 0 004-4V7a4 4 0 00-4-4h-1.5a1 1 0 000 2H12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-bold text-amber-900">
              Exclusive Offer
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Referral Code
          </h3>

          <div
            onClick={handleCopyCode}
            className="inline-block cursor-pointer bg-white border-2 border-amber-300 rounded-xl px-6 py-4 mb-4 hover:bg-amber-50 transition-colors group"
          >
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Use Code
            </div>
            <div className="text-3xl font-black text-amber-700 font-mono tracking-widest">
              {code}
            </div>
            <div className="text-xs text-slate-500 mt-2 flex items-center justify-center gap-1 group-hover:text-slate-700">
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

          <p className="text-sm font-semibold text-slate-900 mb-2">
            Get Free 500-1000 Mbs Data
          </p>
          <p className="text-xs text-slate-700 leading-relaxed">
            No expiry • Valid for all new activations • Exclusive reseller offer
          </p>
        </div>
      </div>
    </div>
  );
}
