export function ApprovalCard() {
  return (
    <div className="mb-14 flex justify-center">
      <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-10 sm:p-12 shadow-2xl hover:shadow-2xl transition-shadow w-full max-w-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-900 border border-green-700">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-green-300">
              Ready for Activation
            </span>
          </div>
        </div>

        <p className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-8 text-center">
          Verification Link
        </p>

        <div className="flex justify-center mb-8">
          <a
            href="https://apps.apple.com/pk/app/eskimo-esim-travel-internet/id1590276868"
            target="_blank"
            rel="noopener noreferrer"
            className="block group w-full"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl text-white font-black text-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              Approve & Activate eSIM
            </div>
          </a>
        </div>

        <p className="text-sm text-slate-300 text-center font-semibold">
          Secure verification via Eskimo App
        </p>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex items-center justify-center gap-6 text-sm text-slate-300 font-semibold">
            <div className="flex items-center gap-2">
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
              SSL Secured
            </div>
            <div className="flex items-center gap-2">
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
              Verified
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
