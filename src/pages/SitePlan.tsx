export default function SitePlan({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-20">
        <button
          onClick={() => navigate('home')}
          className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Market Layout & Zoning
        </h2>
        <div className="flex size-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-full size-10 bg-transparent text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">list</span>
          </button>
        </div>
      </div>

      {/* Main Content Scroll Area */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Page Title */}
        <div className="px-4 pb-3 pt-4">
          <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-[32px] font-bold leading-tight">
            Site Master Plan
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-2">
            Explore the proposed zoning and layout for the night market
            development. Tap on the zones to view detailed plans.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-sm transition-transform active:scale-95">
            <p className="text-sm font-medium leading-normal">All Zones</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 px-5 shadow-sm transition-transform active:scale-95">
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">
              Food Court
            </p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 px-5 shadow-sm transition-transform active:scale-95">
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">
              Retail Alley
            </p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 px-5 shadow-sm transition-transform active:scale-95">
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">
              Event Stage
            </p>
          </button>
        </div>

        {/* Map View Container */}
        <div className="relative w-full bg-slate-100 dark:bg-slate-800 mt-4 overflow-hidden group aspect-[3/4]">
          <img
            alt="Map layout of a night market with stalls and zones"
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            src="https://picsum.photos/seed/siteplan/800/1200"
          />
          {/* Interactive Pins */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-[20%] left-[10%] bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
              Zone A
            </div>
            <div className="absolute top-[20%] right-[10%] bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
              Zone B
            </div>
            <div className="absolute top-[58%] left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
              Zone C
            </div>
            <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
              Zone D
            </div>
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
              Stage
            </div>
          </div>
        </div>

        {/* Stats/Legend Strip */}
        <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
          <div className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">45</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide mt-1">
              Stalls
            </p>
          </div>
          <div className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">5</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide mt-1">
              Main Zones
            </p>
          </div>
          <div className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">1.2k</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide mt-1">
              Capactiy
            </p>
          </div>
        </div>

        {/* Detailed Zone Cards */}
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 px-1">
            Zone Details
          </h3>
          <div className="flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-1/3 bg-slate-200 dark:bg-slate-700 relative">
              <img
                alt="Zone A"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpWQkTHdsu5_fVvarAFTDytjS4a8ey6CXnHPZ9oxbqwwX65Lnyc9R3JTZ4q6KSn6OTBJrYiaXbuQo5vdyYQKSRflyhuL62kyE4KJ01_RHzqSLrEJ4-YRMYGK9G-oStoryIkDuAcrTou7cBRMFGriCVfXDzu6h_IzZ6zzfwJFZcmN9tHu2JcJPPcZcioW6uCJpkMeNDcJWQPRELEovy6Wao239yO5-otOIzkR9zt9H6HtS9DqTFnYf18vFQ6cno8_HNrovZCcz-OzE"
              />
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Zone A: ของกิน (Food & Snacks)
                </h4>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Zone A
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                Light snacks, desserts, and quick bites for market visitors.
              </p>
            </div>
          </div>
          <div className="flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-1/3 bg-slate-200 dark:bg-slate-700 relative">
              <img
                alt="Zone B"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpWQkTHdsu5_fVvarAFTDytjS4a8ey6CXnHPZ9oxbqwwX65Lnyc9R3JTZ4q6KSn6OTBJrYiaXbuQo5vdyYQKSRflyhuL62kyE4KJ01_RHzqSLrEJ4-YRMYGK9G-oStoryIkDuAcrTou7cBRMFGriCVfXDzu6h_IzZ6zzfwJFZcmN9tHu2JcJPPcZcioW6uCJpkMeNDcJWQPRELEovy6Wao239yO5-otOIzkR9zt9H6HtS9DqTFnYf18vFQ6cno8_HNrovZCcz-OzE"
              />
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Zone B: ของกิน (Street Food)
                </h4>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Zone B
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                Authentic street food stalls and variety of local main dishes.
              </p>
            </div>
          </div>
          <div className="flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-1/3 bg-slate-200 dark:bg-slate-700 relative">
              <img
                alt="Zone C"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjyueIbWjAdwZFVXBh9jJXrzRHMokqv0eK7eixo02PAaNqP0b2CZnM7OLskHcKaUz9jb4gKs97WP6FpeiK55jzzGIszGIFZ6hbpztRzKpXmyvLoYgoEoymEzwy7sZ5tr_UUFB6m6gz-zrsymfwuTGZjLdETwzd-9nYUTBrfyORRqCTJKcpvkPCHHdyp6tX4-7aAIcrMRbKdIF2Lz8qdck_d6hXZg1TkJJuZkTghmX7LiolQQt2IzoQ5qG-4Ak59wiwzlZtDq6MUYM"
              />
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Zone C: ของใช้/เสื้อผ้า (Retail & Fashion)
                </h4>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Zone C
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                Lifestyle products, clothing, and accessories from local designers.
              </p>
            </div>
          </div>
          <div className="flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-1/3 bg-slate-200 dark:bg-slate-700 relative">
              <img
                alt="Zone D"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEx2aTI_ZgxXXpccmWA9G9LPGmjghEZdsvP32SPPpHMTvwcyz6O7L-nJW374KIclXLlGUYV-P-8usXB_7oLDUpmYEGqJCkvkYL2PeHS9Iuc0GnD-dbZWq08jrCVMMAArioGHZpmWyrhcliBhQg-dGifYsa5PXUxIe1TdcucHAuOXAzlZ4Ba8nTbGF3vj4D2ZzQNGh5dZG100aZr_WOfNlB1_wOtXie9DYeH91ACG7ar7K48k8hZELd-okPMmEc2nQnWzZLljuTlFM"
              />
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Zone D: โซนกิจกรรม (Activity Zone)
                </h4>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Zone D
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                Community workshop area and interactive seasonal activities.
              </p>
            </div>
          </div>
          <div className="flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-1/3 bg-slate-200 dark:bg-slate-700 relative">
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">
                  festival
                </span>
              </div>
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Zone เวที (Stage Area)
                </h4>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Stage
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                Main performance stage for live music and cultural shows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
