export default function Index() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Background gradient with subtle grid effect */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-blue-50 to-blue-100" />

      {/* Decorative gradient blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl -z-10" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full -ml-32 -mb-32 blur-3xl -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/d4z3607G/eskimologo.png"
              alt="Eskimo Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-slate-900">Eskimo</span>
          </div>
          <div className="text-sm text-slate-600">Global eSIM Approval</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-2xl">
          {/* Approval Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
              <svg
                className="w-4 h-4 text-cyan-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-cyan-900">
                Official Approval Portal
              </span>
            </div>
          </div>

          {/* Hero Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              <span className="text-slate-900 block">Approve Your</span>
              <span className="block gradient-text">eSIM Activation</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Click the button below to approve and activate your eSIM. You'll
              be redirected to the Eskimo app to complete the verification
              process.
            </p>
          </div>

          {/* Approval Action Box */}
          <div className="mb-12 flex justify-center">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow w-full max-w-lg">
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4 text-center">
                Verification Link
              </p>
              <div className="flex justify-center">
                <a
                  href="https://apps.apple.com/pk/app/eskimo-esim-travel-internet/id1590276868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2.5 rounded-lg text-white font-bold text-base hover:shadow-lg hover:scale-105 transition-all duration-200">
                    Approve & Activate eSIM
                  </div>
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Secure verification via Eskimo App
              </p>
            </div>
          </div>

          {/* Warning Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-50 border border-orange-200">
              <svg
                className="w-5 h-5 text-orange-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-orange-900 animate-blink">
                Approval Link Will Expire in 20 Minutes
              </span>
            </div>
          </div>

          {/* Approval Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
            <div className="text-center p-4 rounded-lg bg-slate-50 border border-slate-200">
              <svg
                className="w-8 h-8 mx-auto mb-2 text-cyan-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-semibold text-slate-900 text-sm">Verified</h3>
              <p className="text-xs text-slate-600 mt-1">Identity verified</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50 border border-slate-200">
              <svg
                className="w-8 h-8 mx-auto mb-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <h3 className="font-semibold text-slate-900 text-sm">Secure</h3>
              <p className="text-xs text-slate-600 mt-1">
                End-to-end encrypted
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50 border border-slate-200">
              <svg
                className="w-8 h-8 mx-auto mb-2 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="font-semibold text-slate-900 text-sm">Instant</h3>
              <p className="text-xs text-slate-600 mt-1">
                Immediate activation
              </p>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-16 pt-8 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500 mb-2">
              Official eSIM Activation Approval Portal by Eskimo Global
            </p>
            <p className="text-xs text-slate-400">
              Secured & Verified • {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
