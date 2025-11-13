export function PortalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/d4z3607G/eskimologo.png"
              alt="Eskimo Logo"
              className="w-12 h-12"
            />
            <div>
              <div className="text-2xl font-black text-white">Eskimo</div>
              <div className="text-xs text-slate-400 font-semibold">eSIM Activation</div>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-sm font-black text-slate-300 uppercase tracking-wider">
              Official Reseller Portal
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
