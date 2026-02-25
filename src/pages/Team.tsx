export default function Team({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-primary/10 dark:border-white/10">
        <button
          onClick={() => navigate('home')}
          className="p-2 rounded-full hover:bg-primary/10 transition-colors text-slate-900 dark:text-slate-100"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight text-center flex-1">
          Roles & Responsibilities
        </h2>
        <button className="text-primary font-bold text-sm tracking-wide uppercase px-2 hover:opacity-80 transition-opacity">
          Share
        </button>
      </header>

      <main className="flex-1 overflow-x-hidden pb-8">
        {/* Header Section */}
        <div className="px-4 pt-4">
          <h3 className="text-xl font-bold leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
            Key Departments
          </h3>
        </div>

        {/* Departments List */}
        <div className="flex flex-col gap-4 px-4 pb-8">
          {/* Dept 1: Admin */}
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">
                  admin_panel_settings
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                1. ฝ่ายบริหารและระบบส่วนกลาง
              </h4>
              <p className="text-xs text-primary font-medium mb-1">
                Admin & System Manager
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                งานหลังบ้าน LINE OA (คูปอง, โควต้า, วันหมดอายุ), การสื่อสาร
                (Broadcast ประกาศสำคัญ), และการตัดสินใจ (หัวหน้าโครงการ)
              </p>
            </div>
          </div>

          {/* Dept 2: Finance */}
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">payments</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                2. ฝ่ายการเงินและบัญชี
              </h4>
              <p className="text-xs text-primary font-medium mb-1">Finance</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                จัดการรายรับ (เช็คสลิป 350 บาท, ค่าปรับ 2,000 บาท)
                และจัดการรายจ่าย/เงินคืน (คืนมัดจำ, เคลียร์ยอดคูปองใน 24 ชม.,
                คืนเงินกรณีฝนตก)
              </p>
            </div>
          </div>

          {/* Dept 3: Vendor */}
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">storefront</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                3. ฝ่ายพื้นที่และร้านค้า
              </h4>
              <p className="text-xs text-primary font-medium mb-1">
                Vendor Management
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                รับจองล็อค (จันทร์-พฤหัส), ตรวจความสะอาดหลังปิดตลาด (ภายใน 30
                นาที), และจัดการบทลงโทษ (แบน 1 สัปดาห์)
              </p>
            </div>
          </div>

          {/* Dept 4: Stage */}
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">
                  theater_comedy
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                4. ฝ่ายกิจกรรมและเวที
              </h4>
              <p className="text-xs text-primary font-medium mb-1">
                Stage & Activities
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                จัดการคิวเวที (Google Sheet, ตรวจรายชื่อไม่ซ้ำ),
                รันคิวหน้างาน (เตือนล่วงหน้า 1 ชม.), และดูแลโซนเกม
                (สแกนรับคูปอง 65 ใบ/วัน)
              </p>
            </div>
          </div>

          {/* Dept 5: Reception */}
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                5. ฝ่ายต้อนรับและสวัสดิภาพ
              </h4>
              <p className="text-xs text-primary font-medium mb-1">
                Reception & On-site Staff
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                ดูแลแคมเปญถุงผ้า (ขอดูถุงผ้า, สแกนรับคูปอง 27 ใบ/วัน)
                และดูแลหน้างาน (อำนวยความสะดวก, ประสานงานปัญหา)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
