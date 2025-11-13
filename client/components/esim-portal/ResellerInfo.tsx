interface ResellerInfoProps {
  name: string;
  ranking: string;
  type: string;
}

export function ResellerInfo({ name, ranking, type }: ResellerInfoProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-3xl border border-slate-700 shadow-2xl p-6 sm:p-8 lg:p-12 mb-10 sm:mb-12 mx-2 sm:mx-0">
      {/* Header with verification badge */}
      <div className="flex items-center justify-between mb-8 sm:mb-10 gap-2">
        <div className="text-xs sm:text-sm font-black text-cyan-300 uppercase tracking-wider truncate">
          ✓ Authorized Reseller
        </div>
        <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-green-900 border border-green-700 flex-shrink-0">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-xs sm:text-sm font-bold text-green-300 whitespace-nowrap">
            Verified
          </span>
        </div>
      </div>

      {/* Reseller Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        <div className="flex flex-col">
          <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
            Reseller Name
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-300 mb-2 sm:mb-3 leading-tight break-words">
            {name}
          </div>
          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        <div className="flex flex-col">
          <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
            Global Ranking
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3 leading-tight">
            #{ranking}
          </div>
          <div className="text-xs sm:text-sm text-slate-400 font-semibold">
            Top resellers
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
            Partner Status
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-300 mb-2 sm:mb-3 leading-tight break-words">
            {type}
          </div>
          <div className="text-xs sm:text-sm text-slate-400 font-semibold">
            Active partnership
          </div>
        </div>
      </div>
    </div>
  );
}
