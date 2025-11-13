interface ResellerInfoProps {
  name: string;
  ranking: string;
  type: string;
}

export function ResellerInfo({ name, ranking, type }: ResellerInfoProps) {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border-2 border-slate-200 shadow-md p-8 sm:p-10 mb-10">
      {/* Header with verification badge */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-xs font-bold text-slate-700 uppercase tracking-widest">
          ✓ Authorized Reseller Partner
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 border border-green-300">
          <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
          <span className="text-xs font-semibold text-green-700">Verified</span>
        </div>
      </div>

      {/* Reseller Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
            Reseller Name
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1">
            {name}
          </div>
          <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </div>

        <div className="flex flex-col">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
            Global Ranking
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
            #{ranking}
          </div>
          <div className="text-xs text-slate-600">Among top resellers</div>
        </div>

        <div className="flex flex-col">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
            Partner Status
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
            {type}
          </div>
          <div className="text-xs text-slate-600">Active partnership</div>
        </div>
      </div>
    </div>
  );
}
