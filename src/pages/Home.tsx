export default function Home({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-neutral-surface">
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] text-center">
          Night Market Proposal
        </h2>
        <div className="size-10 shrink-0"></div>
      </div>

      {/* Hero Section */}
      <div className="@container px-4 pt-4">
        <div
          className="relative flex min-h-[420px] w-full flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-no-repeat shadow-lg bg-left"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 100%), url("https://picsum.photos/seed/nightmarket/800/600")',
          }}
        >
          <div className="mt-auto flex flex-col gap-3 p-6 text-right items-end">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 backdrop-blur-sm border border-primary/30">
              <span className="material-symbols-outlined text-primary text-[16px]">
                stars
              </span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                Phase 1 Approved
              </span>
            </div>
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight drop-shadow-md mb-2">
              KU SRC <div className="inline-block">NIGHT MARKET</div>
            </h1>
            <p className="text-gray-200 text-sm font-medium leading-relaxed drop-shadow-sm ml-auto">
              A proposal for a vibrant, sustainable community night market
              experience that brings local culture to life.
            </p>
            <button className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors">
              Explore Full Proposal
            </button>
          </div>
        </div>
      </div>

      {/* Project Overview Text */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-6 w-1 bg-primary rounded-full"></span>
          <h2 className="text-slate-900 dark:text-slate-100 text-[20px] font-bold leading-tight">
            Executive Summary
          </h2>
        </div>
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
          This proposal outlines the development of the "Neon District" urban
          night market. Our focus is on fostering community engagement,
          implementing sustainable waste systems, and driving local economic
          growth through small business incubation.
        </p>
      </div>

      {/* Main Navigation Tiles */}
      <div className="grid grid-cols-2 gap-4 px-4 pb-6">
        {/* Site Map Card */}
        <div
          onClick={() => navigate('site-plan')}
          className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-surface shadow-sm border border-gray-100 dark:border-gray-800 transition-all active:scale-95 cursor-pointer"
        >
          <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[20px]">map</span>
          </div>
          <div
            className="h-24 w-full bg-gray-200 dark:bg-gray-800 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://picsum.photos/seed/map/400/300")',
            }}
          >
            <div className="h-full w-full bg-gradient-to-t from-white dark:from-neutral-surface to-transparent opacity-80"></div>
          </div>
          <div className="flex flex-1 flex-col justify-end p-4 pt-0">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold">
              Site Plan
            </h3>
            <p className="text-slate-500 dark:text-gray-500 text-xs mt-1">
              Layout & Stalls
            </p>
          </div>
        </div>

        {/* Systems Card */}
        <div
          onClick={() => navigate('systems')}
          className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-surface shadow-sm border border-gray-100 dark:border-gray-800 transition-all active:scale-95 cursor-pointer"
        >
          <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
            <span className="material-symbols-outlined text-[20px]">
              settings_suggest
            </span>
          </div>
          <div
            className="h-24 w-full bg-gray-200 dark:bg-gray-800 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwFy4S-4TfrPwTpHWL_zWBdeYzIyBo7gcMpAF7Tm-vHU4VMtp4XbWsMMMqsYdfNWPSfnKfx_3R5GHBqeeaolrRIuQfdEkEimFzTg-5w8rvgweZVAjCPmTDFUD2sIpDft7aK-cmC3ePPdYc3ams7REtAkSlLnAyqWsVu8tYco_66Kxsh6o2y4YYFHGTQtXkVjHt0Z3hiXiBz9TqSSgKoP1xB9Isox4KvOv-NAfmqjq35VmoLf25WvfeYCvkUzt0nKGLybFCAvC7tIY")',
            }}
          >
            <div className="h-full w-full bg-gradient-to-t from-white dark:from-neutral-surface to-transparent opacity-80"></div>
          </div>
          <div className="flex flex-1 flex-col justify-end p-4 pt-0">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold">
              Systems
            </h3>
            <p className="text-slate-500 dark:text-gray-500 text-xs mt-1">
              Logistics & Power
            </p>
          </div>
        </div>

        {/* Roles Card */}
        <div
          onClick={() => navigate('team')}
          className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-surface shadow-sm border border-gray-100 dark:border-gray-800 transition-all active:scale-95 cursor-pointer"
        >
          <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
            <span className="material-symbols-outlined text-[20px]">groups</span>
          </div>
          <div
            className="h-24 w-full bg-gray-200 dark:bg-gray-800 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQcQet6s3C2hOkIPJvjmgT89Q51lRclUEt9bCfhLSAf-aKrU5DRcUi_93cCr39FkekG354Ocas9sjvblql3-ewX_ALIXRwK0gyFpk2rMGQjK6Wx-e4tftgkyVDm2vqJl4jpa-pEIHDo8TjNig0IXnuvwPcbwhJKA9SVfQkqB9SUQa88qNqmracn_4N0KwtBNGoJXTjqyBKoWeHtUkM3U6ydXpMz1JfilporY8yJOiP4Vs8e18fnz2ooslxhollQ38zi66yKt0ADM0")',
            }}
          >
            <div className="h-full w-full bg-gradient-to-t from-white dark:from-neutral-surface to-transparent opacity-80"></div>
          </div>
          <div className="flex flex-1 flex-col justify-end p-4 pt-0">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold">
              The Team
            </h3>
            <p className="text-slate-500 dark:text-gray-500 text-xs mt-1">
              Roles & Responsibilities
            </p>
          </div>
        </div>

        {/* Budget Card */}
        <div
          onClick={() => navigate('budget')}
          className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-surface shadow-sm border border-gray-100 dark:border-gray-800 transition-all active:scale-95 cursor-pointer"
        >
          <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <span className="material-symbols-outlined text-[20px]">
              attach_money
            </span>
          </div>
          <div
            className="h-24 w-full bg-gray-200 dark:bg-gray-800 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4038PFNMBOogTjDZZH7onbblsbwjrObBCm_UolKwPU5yp3bdJHbDHPy4EAY12__Xo59muLqVYyNhRitH3HQ2nsfvIhSvzapA4mwN43vv1RF2Wx-01LTrTAXOBP4ZyzvFjyZ3deFJgQilTmptilV4sT29jn9RsUtrz02IYayO4JVDAOovDqqPnvvJm_VF6845Nu8dc0ZRD__bHKqvT2dpPKmCFiB0CrubYC_KpDcgBXiC8ztls3ZMJDjoZ4oNqLi3R4PCY694Rxh8")',
            }}
          >
            <div className="h-full w-full bg-gradient-to-t from-white dark:from-neutral-surface to-transparent opacity-80"></div>
          </div>
          <div className="flex flex-1 flex-col justify-end p-4 pt-0">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold">
              Budget
            </h3>
            <p className="text-slate-500 dark:text-gray-500 text-xs mt-1">
              Financial Plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
