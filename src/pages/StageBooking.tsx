export default function StageBooking({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col w-full h-full bg-background-light dark:bg-background-dark">
      {/* Header Section */}
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 sticky top-0 z-50 shadow-sm justify-between">
        <div
          onClick={() => navigate('systems')}
          className="text-emerald-500 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-emerald-500/10 cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          จองเวที - KU SRC Night Market
        </h2>
      </div>

      {/* Hero Banner */}
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-emerald-500/20 @[480px]:rounded-xl min-h-[240px] relative"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(6, 78, 59, 0.8) 0%, rgba(6, 78, 59, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2HBTmhuuWWGOi7_6Oja-QOWOPGPH7-1TfZquD_MJF6F322nuq__TLc_QdVh6ANBMAtkICKnJRsIHRvO90BAGRRgsdBdPuwoWyeLNAsVsnZyIozhvteiQ02m19sZj-ze7_RmQk9oYx34UR54yvjeQv4jA6yPCVqGfgSAylpz8x17LDCDr3VZkZkH0WuahEBLYjczP5GU2tp-8P62D-zKKP7I2eT8KvbefRaHGedSXpuXwp-BsrXH47WSXUDH5MucFAeguz4TSqlIE")',
            }}
          >
            <div className="flex p-6">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full mb-2">
                  Stage Booking
                </span>
                <p className="text-white text-3xl font-bold leading-tight">
                  จองเวทีกลางแจ้ง
                </p>
                <p className="text-emerald-100 text-sm mt-1">
                  พื้นที่สำหรับแสดงความสามารถของนิสิต
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-[72px] bg-white dark:bg-slate-900 z-40 border-b border-emerald-100 dark:border-emerald-900">
        <div className="flex px-4 gap-4 overflow-x-auto no-scrollbar">
          <a
            className="flex flex-col items-center justify-center border-b-4 border-emerald-500 text-emerald-500 pb-3 pt-4 whitespace-nowrap"
            href="#club-process"
          >
            <p className="text-sm font-bold tracking-wide">ขั้นตอนชมรม</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-4 border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-4 whitespace-nowrap hover:text-emerald-500"
            href="#admin-process"
          >
            <p className="text-sm font-bold tracking-wide">ขั้นตอน Admin</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-4 border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-4 whitespace-nowrap hover:text-emerald-500"
            href="#conditions"
          >
            <p className="text-sm font-bold tracking-wide">เงื่อนไขการจอง</p>
          </a>
        </div>
      </div>

      {/* Content Sections */}
      <main className="flex-1 space-y-8 pb-8">
        {/* Section 1: ขั้นตอนฝั่งตัวแทนชมรม */}
        <section className="px-4 pt-8" id="club-process">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
              ขั้นตอนฝั่งตัวแทนชมรม
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-emerald-50 dark:border-emerald-900/50">
              <div className="size-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  เพิ่มเพื่อน LINE OA
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  แอดไลน์ทางการแล้วพิมพ์คำว่า "จองเวที" เพื่อเริ่มขั้นตอน
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-emerald-50 dark:border-emerald-900/50">
              <div className="size-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  ตรวจสอบคิวว่าง
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  ระบบจะส่งข้อความตอบกลับอัตโนมัติเพื่อแสดงช่วงเวลาที่ยังว่างอยู่
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-emerald-50 dark:border-emerald-900/50">
              <div className="size-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  ส่งข้อมูลการจอง
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  ตอบกลับด้วย 5 รายละเอียด: ชื่อชมรม, ชื่อผู้ติดต่อ, เบอร์โทร,
                  ช่วงเวลาที่จอง และรายชื่อผู้แสดงทั้งหมด
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-emerald-50 dark:border-emerald-900/50">
              <div className="size-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  รับการยืนยัน
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Admin จะตรวจสอบและส่งข้อความยืนยันการจองสำเร็จกลับไปทาง LINE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: ขั้นตอนฝั่ง Admin */}
        <section className="px-4" id="admin-process">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined">
                admin_panel_settings
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
              ขั้นตอนฝั่ง Admin
            </h2>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-500/20">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-emerald-500 mt-1">
                  campaign
                </span>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-white">
                    ประกาศเปิดจอง (Broadcast)
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    บรอดแคสต์แจ้งช่วงเวลาว่างก่อน 15:00 น. ในวันที่มีตลาดนัด
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-emerald-500 mt-1">
                  table_chart
                </span>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-white">
                    บันทึกข้อมูลทันที
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    บันทึกรายละเอียดการจองลงใน Google Sheet
                    ทันทีที่ได้รับการยืนยัน
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-emerald-500 mt-1">
                  notifications_active
                </span>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-white">
                    ส่งข้อความแจ้งเตือน
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    ส่งข้อความเตือนชมรมล่วงหน้า 1 ชั่วโมงก่อนเริ่มทำการแสดง
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: เงื่อนไขการจอง */}
        <section className="px-4" id="conditions">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined">gavel</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
              เงื่อนไขการจอง
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-emerald-500 shadow-sm">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-emerald-500">
                  สิทธิ์การจอง:
                </span>{' '}
                1 ชมรมสามารถจองได้เพียง 1 ช่วงเวลา (Slot) ต่อคืนเท่านั้น
              </p>
            </div>
            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-emerald-500 shadow-sm">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-emerald-500">
                  การจอง 2 วัน:
                </span>{' '}
                จองได้ทั้ง 2 วันของตลาด แต่รายชื่อผู้แสดงในวันที่ 2
                ต้องไม่ซ้ำกับวันที่ 1 เลย
              </p>
            </div>
            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-emerald-500 shadow-sm">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-emerald-500">
                  การรายงานตัว:
                </span>{' '}
                ต้องมาถึงก่อนเวลาแสดงอย่างน้อย 15 นาที
                หากไม่มาตามนัดโดยไม่แจ้งล่วงหน้าจะถือว่าสละสิทธิ์
              </p>
            </div>
            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-emerald-500 shadow-sm">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-emerald-500">การยกเลิก:</span>{' '}
                ต้องแจ้งยกเลิกก่อนเวลา 15:00 น. ของวันที่จะแสดงเท่านั้น
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">add_circle</span>
              เริ่มดำเนินการจองเวที
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
