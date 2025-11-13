export function ApprovalCard() {
  return (
    <div className="mb-12 sm:mb-14 flex justify-center px-2 sm:px-0">
      <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-6 sm:p-8 lg:p-12 shadow-2xl hover:shadow-2xl transition-shadow w-full max-w-lg">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-green-900 border border-green-700">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-green-300 whitespace-nowrap">
              Ready for Activation
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mb-6 sm:mb-8 text-center">
          Verification Link
        </p>

        <div className="flex justify-center mb-6 sm:mb-8">
          <a
            href="https://apps.apple.com/pk/app/eskimo-esim-travel-internet/id1590276868"
            target="_blank"
            rel="noopener noreferrer"
            className="block group w-full"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-white font-black text-base sm:text-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer active:scale-95">
              Approve & Activate eSIM
            </div>
          </a>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 text-center font-semibold">
          Secure verification via Eskimo App
        </p>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-semibold">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
