export function PortalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/d4z3607G/eskimologo.png"
              alt="Eskimo Logo"
              className="w-10 h-10"
            />
            <div>
              <div className="text-lg font-bold text-slate-900">Eskimo</div>
              <div className="text-xs text-slate-500">eSIM Activation</div>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Official Reseller Portal
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
