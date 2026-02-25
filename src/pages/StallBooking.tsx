export default function StallBooking({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col w-full h-full bg-background-light dark:bg-background-dark">
      {/* Header / Navigation Top */}
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 border-b border-emerald-900/10 sticky top-0 z-10 justify-between">
        <div
          onClick={() => navigate('systems')}
          className="text-emerald-900 dark:text-emerald-500 flex size-12 shrink-0 items-center justify-start cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          จองล็อค (Stall Booking)
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-emerald-900 dark:text-emerald-500">
            <span className="material-symbols-outlined">info</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-emerald-900/20 @[480px]:rounded-xl min-h-[240px] relative"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX3NwJYdBNXzs0i2v14jwW_1kfFQczt-QHA9s0FAHB6LpnYeZe-kzKJBwwX9KBVB8xMHbbreM4WGbKUk9TTvnsy2FBHe5aqg-6JhD4mxCkqeUxGloDLK451v655idvoJ5RnFA-j-CTMK9V9-JruMg-RGdwEAOYnFI2mFGOG6Rig23iX8A70KRFwAei4TdfnQatlq8ZYKp6R8uZMLyQB_ki5Ijddf6pfvq6j5GQg6mblsyOfU8BnxjrtnNfuabgZlUIXxKWC0RF4p4")',
            }}
          >
            <div className="flex flex-col p-6">
              <span className="bg-emerald-900 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2">
                KU SRC NIGHT MARKET
              </span>
              <p className="text-white text-3xl font-bold leading-tight">
                ระเบียบและข้อตกลงการจองล็อค
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto w-full px-4 py-6 space-y-8 pb-8">
        {/* ระบบมัดจำล็อค */}
        {/* ช่องทางหลัก LINE OA */}
        <section className="bg-emerald-900/5 border border-emerald-900/20 p-5 rounded-2xl mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              chat_bubble
            </span>
            <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">
              ช่องทางหลัก: LINE Official Account
            </h2>
          </div>
          <div className="space-y-3">
            <p className="text-slate-700 dark:text-slate-300">
              จัดการทุกขั้นตอนผ่าน <strong>LINE OA</strong> เป็นหลัก
              เพื่อความสะดวกและโปร่งใส
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium border border-emerald-900/20">
                ✓ จองล็อค
              </span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium border border-emerald-900/20">
                ✓ ส่งสลิปโอนเงิน
              </span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium border border-emerald-900/20">
                ✓ ส่งรูปตรวจความสะอาด
              </span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium border border-emerald-900/20">
                ✓ รับเงินมัดจำคืน
              </span>
            </div>
            <p className="text-sm text-slate-500 italic mt-2">
              * ใช้เป็นหลักฐานประวัติการแชท (Chat History)
              ที่ตรวจสอบได้ทั้งผู้ขายและทีมงาน Admin
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              payments
            </span>
            <h2 className="text-xl font-bold">ระบบมัดจำล็อค</h2>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-emerald-900/10 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-900/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500">
                  currency_exchange
                </span>
              </div>
              <div>
                <p className="font-bold text-lg text-emerald-900 dark:text-emerald-500">
                  ค่าเช่า 150 + มัดจำ 200 = รวม 350 บาท
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  ค่าเช่า 150 บาท (ไม่ได้คืน) และเงินมัดจำ 200 บาท (คืนผ่าน LINE
                  OA เมื่อผ่านการตรวจหลังจบตลาด)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ช่วงเวลาเปิดรับจอง */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              calendar_month
            </span>
            <h2 className="text-xl font-bold">ช่วงเวลาเปิดรับจอง</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-emerald-900/10 border-l-4 border-l-emerald-900 dark:border-l-emerald-500">
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                เปิดระบบ
              </p>
              <p className="text-lg font-bold mt-1">
                ทุกวันจันทร์ เวลา 12:00 น.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-emerald-900/10 border-l-4 border-l-slate-400">
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                ปิดระบบ
              </p>
              <p className="text-lg font-bold mt-1">
                วันพฤหัสบดี 12:00 น. (รวม 72 ชม.)
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-emerald-900/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              confirmation_number
            </span>
            <h2 className="text-xl font-bold">โครงการคูปองส่วนลด</h2>
          </div>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <p>• ผู้ขายต้องเลือกเข้าร่วมโครงการในการจองครั้งแรก</p>
            <p>
              • <strong>ขั้นตอน:</strong> ให้ส่วนลดลูกค้า -&gt; จดรายการส่ง
              Admin -&gt; รับเงินคืนภายใน 24 ชม.
            </p>
            <p className="text-xs text-slate-500 italic">
              * เพื่อกระตุ้นยอดขายและดึงดูดลูกค้าเข้าตลาด
            </p>
          </div>
        </section>

        {/* การยกเลิกและคืนเงิน */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              cancel
            </span>
            <h2 className="text-xl font-bold">การยกเลิกและคืนเงิน</h2>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-emerald-900/10">
            <div className="p-4 border-b border-emerald-900/5 flex items-center justify-between">
              <span className="font-medium">ยกเลิกก่อนพฤหัสฯ 12:00 น.</span>
              <span className="text-emerald-900 dark:text-emerald-500 font-bold">
                คืน 150 (เฉพาะค่าเช่า)
              </span>
            </div>
            <div className="p-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/30">
              <span className="font-medium">ไม่มาขายโดยไม่แจ้งล่วงหน้า</span>
              <span className="font-bold text-emerald-900 dark:text-emerald-500">
                ยึดทั้งหมด 350 บาท
              </span>
            </div>
          </div>
        </section>

        {/* กรณีที่ไม่ผ่านการตรวจ */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              chat
            </span>
            <h2 className="text-xl font-bold">ตัวอย่างข้อความยืนยันจาก Admin</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border-l-4 border-emerald-900 dark:border-emerald-500">
              <p className="text-xs font-bold text-emerald-900 dark:text-emerald-500 mb-2">
                กรณี: เข้าร่วมโครงการคูปอง
              </p>
              <p className="italic text-sm text-slate-700 dark:text-slate-300">
                "ยืนยันการจองล็อค [เลขที่] เรียบร้อย (ร่วมโครงการคูปอง) กรุณาโอน
                350 บาท... หลังจบงานส่งรูปตรวจพร้อมสรุปยอดคูปองเพื่อรับมัดจำ 200
                + เงินคืนคูปองภายใน 24 ชม."
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border-l-4 border-slate-400">
              <p className="text-xs font-bold text-slate-500 mb-2">
                กรณี: ไม่เข้าร่วมโครงการ
              </p>
              <p className="italic text-sm text-slate-700 dark:text-slate-300">
                "ยืนยันการจองล็อค [เลขที่] เรียบร้อย (ไม่ร่วมโครงการ) กรุณาโอน
                350 บาท... หลังจบงานส่งรูปตรวจเพื่อรับมัดจำ 200 คืนปกติครับ"
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              rule
            </span>
            <h2 className="text-xl font-bold">กรณีที่ไม่ผ่านการตรวจ</h2>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 p-5 rounded-xl border border-green-200 dark:border-green-900/50">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 shrink-0">
                  warning
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  หากพบขยะหรือคราบน้ำ Admin จะแจ้งเตือนในแชททันที
                </p>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 shrink-0">
                  photo_camera
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  ผู้ขายต้องแก้ไขและส่งรูปใหม่ภายในเวลาที่กำหนดเพื่อรับมัดจำคืน
                </p>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 shrink-0">
                  block
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  หากเพิกเฉยหรือไม่แก้ไข จะถูกหักเงินมัดจำ 200 บาททันที
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* การระงับสิทธิ์จอง */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              person_off
            </span>
            <h2 className="text-xl font-bold">การระงับสิทธิ์จอง</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center border border-emerald-900/10 col-span-1 sm:col-span-2">
              <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-500 mb-1">
                2 ครั้ง / 1 เดือน
              </p>
              <p className="text-xs font-bold uppercase text-slate-500">
                ไม่ผ่านการตรวจซ้ำ
              </p>
              <p className="text-sm mt-2">ระงับสิทธิ์การจอง 1 สัปดาห์</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center border border-green-100 bg-green-50/30 dark:bg-green-900/20 dark:border-green-800">
              <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-500 mb-1">
                2,000 บาท
              </p>
              <p className="text-xs font-bold uppercase text-slate-500">
                คืนสิทธิ์ก่อนกำหนด
              </p>
              <p className="text-sm mt-2">ชำระผ่าน LINE OA</p>
            </div>
          </div>
        </section>

        {/* นโยบายคืนเงินกรณีฝนตก */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              cloudy_snowing
            </span>
            <h2 className="text-xl font-bold">นโยบายคืนเงินกรณีฝนตก</h2>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200 dark:border-green-900/50">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <span className="text-sm font-medium">กรณีฝนตกก่อนตลาดเปิด</span>
                <span className="text-emerald-900 dark:text-emerald-500 font-bold">
                  คืนเต็ม 350 บาท
                </span>
              </div>
              <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <span className="text-sm font-medium">
                  กรณีฝนตกเมื่อเริ่มงานแล้ว
                </span>
                <span className="text-emerald-900 dark:text-emerald-500 font-bold">
                  คืนรวม 275 บาท
                </span>
              </div>
              <div className="p-2 text-[11px] text-slate-500 italic">
                *คืนรวม 275 มาจาก (คืนค่าเช่า 50% = 75 + คืนมัดจำเต็ม = 200)
                ต้องส่งรูปความสะอาดปกติ
              </div>
            </div>
          </div>
        </section>

        {/* ขั้นตอนเมื่อฝนตก (ฝั่ง Admin) */}
        <section className="pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 text-3xl">
              admin_panel_settings
            </span>
            <h2 className="text-xl font-bold">ขั้นตอนเมื่อฝนตก (ฝั่ง Admin)</h2>
          </div>
          <div className="relative pl-8 space-y-6 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-900/30 dark:before:bg-emerald-500/30">
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-emerald-900 dark:bg-emerald-500 text-white size-6 rounded-full flex items-center justify-center text-xs font-bold">
                1
              </div>
              <p className="font-bold">ก่อนตลาดเปิด</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                ประกาศยกเลิกผ่าน LINE Broadcast คืนเงิน 350 เข้า Wallet ใน 24
                ชม. ไม่ต้องส่งรูป
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-emerald-900 dark:bg-emerald-500 text-white size-6 rounded-full flex items-center justify-center text-xs font-bold">
                2
              </div>
              <p className="font-bold">ระหว่างงาน (ฝนตกหนัก)</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                ประกาศปิดตลาดก่อนกำหนด คืนเงินรวม 275 บาท (ค่าเช่า 50% + มัดจำ)
                ภายในคืนนั้นหลังตรวจรูป
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
