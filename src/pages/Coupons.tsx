export default function Coupons({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col w-full h-full bg-green-50 dark:bg-green-950">
      {/* Header */}
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 pb-2 sticky top-0 z-10 border-b border-green-100 dark:border-green-900">
        <div
          onClick={() => navigate('systems')}
          className="text-green-600 flex size-10 shrink-0 items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 ml-2">
          คูปอง KU SRC Night Market
        </h2>
        <div className="text-green-600 flex size-10 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined">share</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="@container">
        <div className="px-4 py-3">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[180px] relative group"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3xBsivUeej2gAh_MCg0fAjnRUsMjuxE3-mgr1LdajJwq3nc-q1JQnXb9i-VxQE9eee5pp0SLl1azRKcqVSNqGr7XEGNIC9pMgmC1QJIb2K306EGA2742rjqQC35yjyzjYlw1lUgma_d4YbPiRChJZPh6bzYITcppfozbvgRB52Ymqnr2yw0OygsknVvdoZEm7c0dXHrgaB1_gczcy6v7If5VIw2WGLu2r2C_njKgV0pdBQXNgAYesLMsLhzQ45QXl-dkhsot9dTk")',
            }}
          >
            <div className="flex p-4 flex-col">
              <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full w-fit mb-2 uppercase tracking-wider">
                Campaign 2024
              </span>
              <p className="text-white tracking-tight text-2xl font-bold leading-tight">
                สิทธิพิเศษและขั้นตอนการใช้คูปอง
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selector Tabs */}
      <div className="bg-white dark:bg-slate-900 sticky top-[60px] z-10">
        <div className="flex border-b border-green-100 dark:border-green-900 px-4 gap-4 overflow-x-auto no-scrollbar">
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-green-600 text-green-600 pb-[13px] pt-4 whitespace-nowrap px-2"
            href="#"
          >
            <p className="text-sm font-bold leading-normal">ฝั่งลูกค้า</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 whitespace-nowrap px-2"
            href="#"
          >
            <p className="text-sm font-bold leading-normal">ฝั่งแม่ค้า</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 whitespace-nowrap px-2"
            href="#"
          >
            <p className="text-sm font-bold leading-normal">Admin</p>
          </a>
        </div>
      </div>

      {/* Coupon Quota Section */}
      <div className="p-4 mt-2">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-green-50 dark:border-green-900">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-green-600">
                inventory_2
              </span>
              โควต้าคูปองวันนี้
            </h3>
            <span className="text-green-600 text-sm font-bold">92 ใบ/วัน</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600 dark:text-slate-400">
                คูปองถุงผ้า (สุ่ม 5-20.-)
              </span>
              <span className="font-bold text-green-600">27 ใบ</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
              <div
                className="bg-green-600 h-1.5 rounded-full"
                style={{ width: '100%' }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-xs pt-1">
              <span className="text-slate-600 dark:text-slate-400">
                คูปองกิจกรรมเกม (สุ่ม 5-20.-)
              </span>
              <span className="font-bold text-green-600">65 ใบ</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
              <div
                className="bg-green-600 h-1.5 rounded-full"
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-3">
            *หมายเหตุ: จำกัดการรับคูปองสูงสุด 1 ใบ/คน/วัน (รวมทุกช่องทาง)
          </p>
        </div>
      </div>

      {/* How to Get & Use Section */}
      <div className="px-4 py-2 space-y-6">
        {/* วิธีรับคูปอง */}
        <div>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
            ขั้นตอนสำหรับลูกค้า
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-green-600/10 dark:bg-green-600/20 p-2 rounded-lg text-green-600 shrink-0">
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  1. พกถุงผ้ามางาน
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  แสดงถุงผ้าให้สตาฟหน้างานตรวจสอบความเรียบร้อย
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600/10 dark:bg-green-600/20 p-2 rounded-lg text-green-600 shrink-0">
                <span className="material-symbols-outlined">qr_code_2</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  2. สแกน Add LINE OA
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  สแกน QR Code จากสตาฟเพื่อรับคูปองส่วนลดแบบสุ่ม (5, 10, 20
                  บาท)
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600/10 dark:bg-green-600/20 p-2 rounded-lg text-green-600 shrink-0">
                <span className="material-symbols-outlined">
                  sports_esports
                </span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  3. รับเพิ่มจากกิจกรรมเกม
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  เล่นเกมในงานครบตามเงื่อนไข รับคูปองเพิ่มได้อีก 1 ใบ/วัน
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* วิธีใช้คูปอง */}
        <div>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
            ขั้นตอนสำหรับแม่ค้า
          </h2>
          <div className="bg-green-600/5 dark:bg-green-600/10 border-l-4 border-green-600 p-4 rounded-r-lg space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm text-green-600 shrink-0">
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  Add LINE OA ตลาด
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  ลงทะเบียนร้านค้าในระบบ LINE OA เพื่อใช้สแกนคูปองลูกค้า
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm text-green-600 shrink-0">
                <span className="material-symbols-outlined">
                  qr_code_scanner
                </span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  สแกนคูปองลูกค้า
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  สแกนคูปองจากมือถือลูกค้าเพื่อหักส่วนลดค่าอาหาร/สินค้าทันที
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm text-green-600 shrink-0">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  ส่งสรุปยอดให้ Admin
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  หลังปิดตลาด แคปหน้าจอรายการคูปองส่งทาง LINE ให้ Admin
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm text-green-600 shrink-0">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  รับเงินคืนใน 24 ชม.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  แอดมินจะโอนเงินส่วนลดคืนให้ร้านค้าผ่านระบบ PromptPay
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* เงื่อนไขการใช้คูปอง */}
        <div className="pb-8">
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
            เงื่อนไขการใช้คูปอง
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-green-600 text-lg">
                error
              </span>
              <span className="font-bold">
                จำกัดการรับสิทธิ์ 1 ท่าน ต่อ 1 คูปอง ต่อวันเท่านั้น
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-green-600 text-lg">
                check_circle
              </span>
              <span>
                หากรับคูปองจากถุงผ้าแล้ว จะไม่สามารถรับจากการเล่นเกมได้
                (และในทางกลับกัน)
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-green-600 text-lg">
                check_circle
              </span>
              <span>จำกัดคูปอง 1 ใบ ต่อการซื้อ 1 ครั้ง</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-green-600 text-lg">
                check_circle
              </span>
              <span>ไม่สามารถแลกเปลี่ยนเป็นเงินสดหรือทอนเงินได้</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-green-600 text-lg">
                history_toggle_off
              </span>
              <span className="font-bold text-red-500">
                หมดอายุ 23:00 น. ของคืนที่ได้รับเท่านั้น
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
