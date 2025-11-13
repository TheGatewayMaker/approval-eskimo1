export function PortalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src="https://i.ibb.co/d4z3607G/eskimologo.png"
              alt="Eskimo Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="text-xl sm:text-2xl font-black text-white truncate">
                Eskimo
              </div>
              <div className="text-xs text-slate-400 font-semibold truncate">
                eSIM Activation
              </div>
            </div>
          </div>
          <div className="hidden sm:block text-right flex-shrink-0">
            <div className="text-xs sm:text-sm font-black text-slate-300 uppercase tracking-wider">
              Official Reseller Portal
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
