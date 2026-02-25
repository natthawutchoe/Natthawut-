export default function Budget({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Top Navigation / Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-primary/10 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate('home')}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 active:bg-primary/20 transition-colors text-slate-800 dark:text-slate-200"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-center flex-1 text-slate-900 dark:text-white">
          Financial Plan
        </h2>
        <div className="w-10"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full pb-8">
        {/* Hero / Title Section */}
        <div className="px-5 pt-6 pb-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            สรุปโครงสร้างการเงิน
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Detailed financial structure and profit projections for the Night
            Market operations.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="px-5 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              payments
            </span>
            Revenue (รายได้)
          </h3>
          <div className="bg-white dark:bg-[#2a1d18] rounded-xl p-5 shadow-sm border border-primary/10">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Stall Rental
                </p>
                <p className="text-xl font-bold text-primary">
                  150 THB
                  <span className="text-sm font-normal text-slate-500">
                    {' '}
                    /stall/day
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Schedule
                </p>
                <p className="text-sm font-bold dark:text-white">
                  2 days / week
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
              <p className="text-xs font-medium text-slate-500 uppercase mb-1">
                Forecasted Monthly Revenue (8 days)
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                36,000 - 120,000 THB
              </p>
            </div>
          </div>
        </div>

        {/* Spending Distribution Chart (Simulated) */}
        <div className="px-5 mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              account_balance
            </span>
            Fixed Costs (ต้นทุนคงที่)
          </h3>
          <div className="bg-white dark:bg-[#2a1d18] rounded-xl shadow-sm border border-primary/10 overflow-hidden">
            <div className="p-4 flex justify-between items-center bg-slate-50 dark:bg-slate-800">
              <span className="font-bold text-slate-900 dark:text-white">
                Total Monthly
              </span>
              <span className="font-bold text-primary">6,000 THB</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Waste disposal
                </span>
                <span className="font-medium dark:text-white">500 THB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Grease removal
                </span>
                <span className="font-medium dark:text-white">500 THB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Sales expenses
                </span>
                <span className="font-medium dark:text-white">5,000 THB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown List */}
        <div className="px-5 pb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">bolt</span>
            Variable Costs (ต้นทุนผันแปร)
          </h3>
          <div className="bg-white dark:bg-[#2a1d18] rounded-xl p-5 shadow-sm border border-primary/10 mb-8">
            <div className="flex justify-between items-end mb-2">
              <p className="text-xl font-bold text-slate-900 dark:text-white">
                5,000 - 20,000{' '}
                <span className="text-sm font-normal text-slate-500">
                  THB/mo
                </span>
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Primarily electricity: approx. 30-50 THB per stall based on usage.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              trending_up
            </span>
            Total Cost & Profit (ต้นทุนรวมและกำไร)
          </h3>
          <div className="space-y-4">
            <div className="bg-primary text-white rounded-xl p-5 shadow-lg shadow-primary/20">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xs opacity-80 uppercase font-bold">
                    Total Monthly Cost
                  </p>
                  <p className="text-xl font-bold">11,000 - 26,000 THB</p>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold italic">
                  ~80% Margin
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-white/20">
                <p className="text-xs font-bold uppercase opacity-80">
                  Net Profit Targets (78 stalls)
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm">1 Term (32 days)</span>
                  <span className="text-lg font-bold">~300,000 THB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">2 Terms (64 days)</span>
                  <span className="text-lg font-bold">~600,000 THB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
