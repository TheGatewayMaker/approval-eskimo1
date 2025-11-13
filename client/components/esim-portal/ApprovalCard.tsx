export function ApprovalCard() {
  return (
    <div className="mb-12 flex justify-center">
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow w-full max-w-lg">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-green-700">
              Ready for Activation
            </span>
          </div>
        </div>

        <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-6 text-center">
          Verification Link
        </p>

        <div className="flex justify-center mb-6">
          <a
            href="https://apps.apple.com/pk/app/eskimo-esim-travel-internet/id1590276868"
            target="_blank"
            rel="noopener noreferrer"
            className="block group w-full"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg text-white font-bold text-base text-center hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              Approve & Activate eSIM
            </div>
          </a>
        </div>

        <p className="text-xs text-slate-500 text-center">
          Secure verification via Eskimo App
        </p>

        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-blue-500"
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
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-blue-500"
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
