export function PortalFooter() {
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
        <div>
          <h4 className="text-base font-black text-white mb-4">
            About This Portal
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed font-semibold">
            This is an official eSIM Activation Portal powered by Eskimo Global,
            providing secure and instant eSIM activation for approved resellers
            and partners worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-base font-black text-white mb-4">
            Security & Trust
          </h4>
          <ul className="space-y-3">
            <li className="text-sm text-slate-300 flex items-center gap-3 font-semibold">
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
              SSL/TLS Encrypted Connection
            </li>
            <li className="text-sm text-slate-300 flex items-center gap-3 font-semibold">
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
              Identity Verified & Approved
            </li>
            <li className="text-sm text-slate-300 flex items-center gap-3 font-semibold">
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
              Real-time Activation
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-sm text-slate-300 mb-2 font-semibold">
          © {new Date().getFullYear()} Eskimo Global. All rights reserved.
        </p>
        <p className="text-sm text-slate-400 font-semibold">
          Official eSIM Activation Approval Portal by Eskimo Global
        </p>
      </div>
    </div>
  );
}
