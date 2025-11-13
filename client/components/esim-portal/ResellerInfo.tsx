interface ResellerInfoProps {
  name: string;
  ranking: string;
  type: string;
}

export function ResellerInfo({ name, ranking, type }: ResellerInfoProps) {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200 p-6 sm:p-8 mb-8">
      <div className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-4">
        Authorized Reseller
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="border-l-2 border-blue-500 pl-4">
          <div className="text-xs text-slate-600 uppercase tracking-wider mb-1">
            Reseller Name
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900">
            {name}
          </div>
        </div>
        <div className="border-l-2 border-cyan-500 pl-4">
          <div className="text-xs text-slate-600 uppercase tracking-wider mb-1">
            Ranking
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900">
            #{ranking}
          </div>
        </div>
        <div className="border-l-2 border-blue-400 pl-4">
          <div className="text-xs text-slate-600 uppercase tracking-wider mb-1">
            Partner Type
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900">
            {type}
          </div>
        </div>
      </div>
    </div>
  );
}
