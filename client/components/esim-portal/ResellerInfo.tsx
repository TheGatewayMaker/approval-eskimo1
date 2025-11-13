interface ResellerInfoProps {
  name: string;
  ranking: string;
  type: string;
}

export function ResellerInfo({ name, ranking, type }: ResellerInfoProps) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-xl shadow-lg p-8 sm:p-10 mb-10">
      {/* Header with verification badge */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
          ✓ Authorized Reseller Partner
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-900/40 border border-green-700/60">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          <span className="text-xs font-semibold text-green-300">Verified</span>
        </div>
      </div>

      {/* Reseller Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Reseller Name
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-1">
            {name}
          </div>
          <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        <div className="flex flex-col">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Global Ranking
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            #{ranking}
          </div>
          <div className="text-xs text-slate-400">Among top resellers</div>
        </div>

        <div className="flex flex-col">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Partner Status
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-1">
            {type}
          </div>
          <div className="text-xs text-slate-400">Active partnership</div>
        </div>
      </div>
    </div>
  );
}
