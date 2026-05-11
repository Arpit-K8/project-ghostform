import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faChartColumn,
  faClock,
  faGraduationCap,
  faLock,
  faPeopleGroup,
  faUserSecret,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const plum = "#381932";
const plumMuted = "#5C4269";
const plumSoft = "#8B6F8E";
const milk = "#FFF3E6";
const milkDeep = "#fff9f3";
const line = "#E8DCC8";

export default function Home() {
  return (
    <div
      className="relative isolate flex min-h-screen flex-col overflow-x-hidden font-sans selection:bg-[#381932] selection:text-[#FFF3E6]"
      style={{ backgroundColor: milk, color: plum }}
    >
      {/* Ambient layers */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
      >
        <div
          className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full opacity-[0.35] blur-[100px]"
          style={{ background: `radial-gradient(circle, ${plumSoft} 0%, transparent 70%)` }}
        />
        <div
          className="absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full opacity-25 blur-[90px]"
          style={{ background: `radial-gradient(circle, ${plum} 0%, transparent 65%)` }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full opacity-20 blur-[80px]"
          style={{ background: `radial-gradient(circle, ${plumMuted} 0%, transparent 70%)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${plum} 1px, transparent 1px), linear-gradient(90deg, ${plum} 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-8 sm:px-8">
        <div className="flex items-center gap-4">
          <Image
            src="/Logo.png"
            alt="GhostForm"
            width={120}
            height={100}
            className="drop-shadow-sm rounded-2xl object-cover"
            style={{ width: 150, height: 70 }}
            priority
          />
          <span className="font-mono text-sm font-medium uppercase tracking-[0.18em]" style={{ color: plumMuted }}>
            ...
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium sm:flex" style={{ color: plumMuted }}>
          <a href="#how-it-works" className="transition-colors hover:opacity-80" style={{ color: plum }}>
            How it works
          </a>
          <a
            href="/create"
            className="rounded-full px-5 py-2.5 text-white transition-opacity hover:opacity-90 font-semibold"
            style={{ backgroundColor: plum }}
          >
            Create form
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-24 pt-12 sm:px-8 sm:pt-20">
        
        {/* NEW HERO: Split layout */}
        <section className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          <div className="flex flex-col items-start text-left pt-8 lg:pt-0">
            <h1 className="text-[3rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[4.5rem]">
              Gather feedback,
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(120deg, ${plum} 0%, ${plumSoft} 45%, ${plum} 100%)`,
                }}
              >
                completely anonymously.
              </span>
            </h1>
            <p
              className="mt-6 max-w-lg text-lg leading-relaxed sm:text-xl"
              style={{ color: plumMuted }}
            >
              The simplest way to create encrypted, anonymous forms. No tracking, no accounts—just
              pure data that respects everyone in the room.
            </p>

            <div className="mt-10 flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:w-auto">
              <a
                href="/create"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full px-8 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl sm:w-auto"
                style={{
                  backgroundColor: plum,
                  boxShadow: `0 18px 40px -12px ${plum}55`,
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Create your first GhostForm
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(105deg, transparent 0%, ${plumSoft}40 50%, transparent 100%)`,
                  }}
                />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 bg-white/40 px-8 text-base font-semibold backdrop-blur-sm transition-colors hover:bg-white/60 sm:w-auto"
                style={{ borderColor: plum, color: plum }}
              >
                How it works
              </a>
            </div>
          </div>

          {/* Right side: Dynamic Bento Stats */}
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            <div className="flex flex-col gap-4 sm:gap-6 pt-8 sm:pt-12">
              <div
                className="rounded-[2rem] border p-6 sm:p-8 backdrop-blur-md transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                style={{ borderColor: line, backgroundColor: `${milkDeep}cc` }}
              >
                <p className="font-mono text-3xl sm:text-4xl font-bold tabular-nums" style={{ color: plum }}>
                  E2EE
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium" style={{ color: plumMuted }}>Client-side encryption</p>
              </div>
              <div
                className="rounded-[2rem] border p-6 sm:p-8 backdrop-blur-md transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                style={{ borderColor: line, backgroundColor: plum, color: milk }}
              >
                 <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full mb-4" style={{ backgroundColor: `${milk}33` }}>
                  <FontAwesomeIcon icon={faUserSecret} className="h-5 w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Zero tracking</h3>
                <p className="mt-2 text-xs sm:text-sm opacity-80 leading-relaxed">No IP logs, fingerprints, or location. Total anonymity by design.</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:gap-6 pb-8 sm:pb-12 lg:pb-0">
              <div
                className="rounded-[2rem] border p-6 sm:p-8 backdrop-blur-md transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                style={{ borderColor: line, backgroundColor: plum, color: milk }}
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full mb-4" style={{ backgroundColor: `${milk}33` }}>
                  <FontAwesomeIcon icon={faLock} className="h-5 w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">End-to-end encryption</h3>
                <p className="mt-2 text-xs sm:text-sm opacity-80 leading-relaxed">Responses are encrypted before they reach us. Your data stays yours.</p>
              </div>
              <div
                className="rounded-[2rem] border p-6 sm:p-8 backdrop-blur-md transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                style={{ borderColor: line, backgroundColor: `${milkDeep}cc` }}
              >
                <p className="font-mono text-4xl sm:text-5xl font-bold tabular-nums" style={{ color: plum }}>
                  0
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium" style={{ color: plumMuted }}>IPs or fingerprints logged</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID: Features and Use cases */}
        <section className="mt-32 sm:mt-40">
           <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl" style={{ color: plum }}>
              Built for trust. <span style={{ color: plumSoft }}>Used for everything.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: plumMuted }}>
              Every detail is tuned so respondents can speak freely. From customer voice to research ethics—one link, zero identity leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Bento Item 1: Large */}
            <div className="group relative col-span-1 md:col-span-2 row-span-1 overflow-hidden rounded-[2rem] border p-8 transition-all hover:shadow-xl flex flex-col justify-between"
                 style={{ borderColor: line, background: `linear-gradient(145deg, ${milkDeep}f2 0%, #ffffffaa 100%)` }}>
               <div className="flex justify-between items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: `${plumSoft}1f`, color: plum }}>
                    <FontAwesomeIcon icon={faChartColumn} className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border bg-white/50" style={{ borderColor: line, color: plumSoft }}>Use Case</span>
               </div>
               <div className="mt-8">
                 <h3 className="text-2xl font-bold" style={{ color: plum }}>Customer feedback</h3>
                 <p className="mt-3 text-base max-w-md leading-relaxed" style={{ color: plumMuted }}>Capture honest input and actionable insights without revealing who said what. Build better products with unfiltered reality.</p>
               </div>
            </div>

            {/* Bento Item 2: Tall */}
            <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-[2rem] border p-8 transition-all hover:shadow-xl flex flex-col justify-between"
                 style={{ borderColor: line, background: plum, color: milk }}>
              <div className="flex justify-between items-start relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: `${milk}22` }}>
                    <FontAwesomeIcon icon={faClock} className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 text-white/70">Feature</span>
               </div>
               <div className="mt-12 relative z-10">
                 <h3 className="text-3xl font-bold">Disposable forms</h3>
                 <p className="mt-4 text-base opacity-90 leading-relaxed">Forms that self-destruct after a specific time or response count. Perfect for sensitive windows and time-boxed surveys where data shouldn't live forever.</p>
               </div>
               <div className="absolute -bottom-12 -right-8 font-mono text-[10rem] font-bold opacity-10 pointer-events-none select-none">∞</div>
            </div>

            {/* Bento Item 3 */}
            <div className="group relative col-span-1 overflow-hidden rounded-[2rem] border p-8 transition-all hover:shadow-xl flex flex-col justify-between"
                 style={{ borderColor: line, background: `linear-gradient(145deg, ${milkDeep}f2 0%, #ffffffaa 100%)` }}>
              <div className="flex justify-between items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${plumSoft}1f`, color: plum }}>
                    <FontAwesomeIcon icon={faPeopleGroup} className="h-5 w-5" />
                  </div>
               </div>
               <div className="mt-8">
                 <h3 className="text-xl font-bold" style={{ color: plum }}>Team feedback</h3>
                 <p className="mt-2 text-sm leading-relaxed" style={{ color: plumMuted }}>Psychological safety through candid, untraceable replies.</p>
               </div>
            </div>

             {/* Bento Item 4 */}
            <div className="group relative col-span-1 overflow-hidden rounded-[2rem] border p-8 transition-all hover:shadow-xl flex flex-col justify-between"
                 style={{ borderColor: line, background: `linear-gradient(145deg, ${milkDeep}f2 0%, #ffffffaa 100%)` }}>
              <div className="flex justify-between items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${plumSoft}1f`, color: plum }}>
                    <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
                  </div>
               </div>
               <div className="mt-8">
                 <h3 className="text-xl font-bold" style={{ color: plum }}>Surveys & research</h3>
                 <p className="mt-2 text-sm leading-relaxed" style={{ color: plumMuted }}>Academic and market studies with guaranteed anonymity.</p>
               </div>
            </div>
            
            {/* Bento Item 5: Wide */}
            <div className="group relative col-span-1 md:col-span-3 row-span-1 overflow-hidden rounded-[2rem] border p-8 transition-all hover:shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                 style={{ borderColor: line, background: `linear-gradient(145deg, ${milkDeep}f2 0%, #ffffffaa 100%)` }}>
               <div className="flex flex-col md:flex-row md:items-center gap-6">
                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl shrink-0" style={{ backgroundColor: `${plumSoft}1f`, color: plum }}>
                    <FontAwesomeIcon icon={faBullhorn} className="h-7 w-7" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold" style={{ color: plum }}>Event feedback</h3>
                   <p className="mt-2 text-base max-w-xl leading-relaxed" style={{ color: plumMuted }}>Capture the room’s pulse while protecting every attendee. Honest feedback for conferences, meetups, and internal all-hands.</p>
                 </div>
               </div>
               <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border bg-white/50 shrink-0" style={{ borderColor: line, color: plumSoft }}>Use Case</span>
            </div>
          </div>
        </section>

        {/* How it works - Zig Zag layout */}
        <section id="how-it-works" className="mt-32 sm:mt-40 scroll-mt-24">
           <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl" style={{ color: plum }}>
              How it works
            </h2>
          </div>

          <div className="relative mx-auto max-w-5xl space-y-16 sm:space-y-24">
            <div className="absolute left-[2.25rem] sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2"
                 style={{ background: `linear-gradient(180deg, transparent, ${plumSoft}40, transparent)` }} />
            
            {[
              {
                n: "01",
                title: "Create your form",
                desc: "Add questions in seconds—no bloated builder, no sign-up wall. Our minimalist editor focuses on what matters.",
                align: "left"
              },
              {
                n: "02",
                title: "Share anonymously",
                desc: "Distribute one link. Respondents stay private; you stay in control of the form lifecycle.",
                align: "right"
              },
              {
                n: "03",
                title: "Analyze results",
                desc: "Read encrypted responses, export data to CSV, and sleep better knowing privacy is guaranteed.",
                align: "left"
              },
            ].map((step) => (
              <div key={step.n} className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16 ${step.align === 'right' ? 'sm:flex-row-reverse' : ''}`}>
                <div className={`sm:w-1/2 flex justify-start ${step.align === 'right' ? 'sm:justify-start' : 'sm:justify-end'}`}>
                  <div className="relative z-10 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full border-[6px] sm:border-[8px] font-mono text-xl sm:text-3xl font-bold shadow-xl shrink-0"
                       style={{ backgroundColor: plum, borderColor: milk, color: milk }}>
                    {step.n}
                  </div>
                </div>
                <div className={`sm:w-1/2 pl-20 sm:pl-0 ${step.align === 'right' ? 'text-left' : 'text-left sm:text-left'} -mt-20 sm:mt-0 w-full`}>
                  <div className="rounded-[2rem] border p-6 sm:p-8 backdrop-blur-sm transition-all hover:shadow-lg bg-white/40"
                       style={{ borderColor: line }}>
                    <h3 className="text-xl sm:text-2xl font-bold" style={{ color: plum }}>
                      {step.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed" style={{ color: plumMuted }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative mt-32 sm:mt-40 overflow-hidden rounded-[3rem] px-6 py-20 text-center sm:px-16 sm:py-32"
          style={{ backgroundColor: plum }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: plumSoft }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-32 h-[40rem] w-[40rem] rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: milk }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl max-w-2xl leading-tight">
              Ready to protect privacy?
            </h2>
            <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed" style={{ color: milk, opacity: 0.9 }}>
              Start collecting anonymous feedback today—no friction, no surveillance tail. Just honest answers.
            </p>
            <a
              href="/create"
              className="group mt-10 inline-flex h-14 sm:h-16 items-center justify-center gap-3 rounded-full px-8 sm:px-12 text-base sm:text-lg font-bold transition-transform hover:scale-[1.02] shadow-2xl"
              style={{ backgroundColor: milk, color: plum }}
            >
              Get started now
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </main>

      <footer
        className="mt-auto border-t py-10 text-center text-sm"
        style={{ borderColor: line, color: plumMuted }}
      >
        <p>© {new Date().getFullYear()} GhostForm. Privacy by default.</p>
        <p className="mt-2 text-xs opacity-90">
          End-to-end encryption · Zero tracking · Anonymous responses
        </p>
      </footer>
    </div>
  );
}
