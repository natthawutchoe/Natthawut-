export default function BottomNav({
  currentPath,
  navigate,
}: {
  currentPath: string;
  navigate: (path: string) => void;
}) {
  const navItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'site-plan', icon: 'map', label: 'Site Plan' },
    { id: 'systems', icon: 'settings', label: 'Systems' },
    { id: 'team', icon: 'groups', label: 'Team' },
    { id: 'budget', icon: 'payments', label: 'Budget' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-4 pb-safe pt-2">
      <div className="flex justify-between items-end pb-2">
        {navItems.map((item) => {
          const isActive =
            currentPath === item.id ||
            (item.id === 'systems' &&
              ['coupons', 'stage-booking', 'stall-booking'].includes(
                currentPath
              ));

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-slate-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary'
              }`}
            >
              <div
                className={
                  isActive && item.id === 'systems'
                    ? 'bg-primary/10 dark:bg-primary/20 p-1.5 rounded-xl flex items-center justify-center'
                    : ''
                }
              >
                <span
                  className="material-symbols-outlined text-[24px]"
                  style={
                    isActive
                      ? {
                          fontVariationSettings:
                            '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
                        }
                      : {}
                  }
                >
                  {item.icon}
                </span>
              </div>
              <p
                className={`text-[10px] ${
                  isActive ? 'font-bold' : 'font-medium'
                }`}
              >
                {item.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
