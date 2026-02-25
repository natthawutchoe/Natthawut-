export default function Systems({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="sticky top-0 z-10 dark:bg-green-950 border-b border-green-200 dark:border-green-800 bg-white">
        <div className="flex items-center p-4 justify-between">
          <div
            onClick={() => navigate('home')}
            className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-green-900 dark:text-green-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            Night Market Proposal
          </h2>
        </div>
      </div>

      {/* Main Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Hero Section */}
        <div className="p-6 pb-2">
          <h1 className="text-green-900 dark:text-green-50 tracking-tight text-3xl font-bold leading-tight">
            Systems Overview
          </h1>
        </div>

        <div className="p-4 space-y-4">
          {/* Category 1: Booking Stalls */}
          <div className="group flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-slate-800/50 p-6 shadow-sm border border-green-100 dark:border-green-900/50 hover:border-green-300 transition-all">
            <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      storefront
                    </span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">
                    จองล็อค (Booking Stalls)
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                  Reserve vendor space, deposit system, and cleanup rules for
                  all market zones.
                </p>
              </div>
              <button
                onClick={() => navigate('stall-booking')}
                className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white gap-2 text-sm font-semibold transition-transform active:scale-95 shadow-lg shadow-primary/20"
              >
                <span className="truncate">Manage Stalls</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Category 2: Stage Booking */}
          <div className="group flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-slate-800/50 p-6 shadow-sm border border-green-100 dark:border-green-900/50 hover:border-green-300 transition-all">
            <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      theater_comedy
                    </span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">
                    จองเวที (Stage Booking)
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                  Performance slot booking for clubs and administrative
                  confirmation workflow.
                </p>
              </div>
              <button
                onClick={() => navigate('stage-booking')}
                className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary border border-primary/20 gap-2 text-sm font-semibold transition-all hover:bg-primary/20"
              >
                <span className="truncate">Performance List</span>
                <span className="material-symbols-outlined text-sm">
                  event_note
                </span>
              </button>
            </div>
          </div>

          {/* Category 3: Coupons */}
          <div className="group flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-slate-800/50 p-6 shadow-sm border border-green-100 dark:border-green-900/50 hover:border-green-300 transition-all">
            <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      confirmation_number
                    </span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">
                    คูปอง (Coupons)
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                  Cloth bag campaign and game reward coupons via LINE OA
                  integration.
                </p>
              </div>
              <button
                onClick={() => navigate('coupons')}
                className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary border border-primary/20 gap-2 text-sm font-semibold transition-all hover:bg-primary/20"
              >
                <span className="truncate">Redeem Center</span>
                <span className="material-symbols-outlined text-sm">
                  loyalty
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
