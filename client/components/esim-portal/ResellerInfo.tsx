interface ResellerInfoProps {
  name: string;
  ranking: string;
  type: string;
}

export function ResellerInfo({ name, ranking, type }: ResellerInfoProps) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-[2.5rem] border border-white/20 backdrop-blur-xl shadow-xl p-8 sm:p-12 mb-12">
      {/* Header with verification badge */}
      <div className="flex items-center justify-between mb-10">
        <div className="text-sm font-black text-cyan-300 uppercase tracking-wider">
          ✓ Authorized Reseller Partner
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-900/40 border border-green-400/40">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-sm font-bold text-green-300">Verified</span>
        </div>
      </div>

      {/* Reseller Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="flex flex-col">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
            Reseller Name
          </div>
          <div className="text-3xl sm:text-4xl font-black text-cyan-300 mb-3 leading-tight">
            {name}
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
            Global Ranking
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            #{ranking}
          </div>
          <div className="text-sm text-slate-400 font-semibold">Among top resellers</div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
            Partner Status
          </div>
          <div className="text-3xl sm:text-4xl font-black text-cyan-300 mb-3 leading-tight">
            {type}
          </div>
          <div className="text-sm text-slate-400 font-semibold">Active partnership</div>
        </div>
      </div>
    </div>
  );
}
