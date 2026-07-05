<section
  id="creative"
  className="overflow-hidden border-y border-[#eadfce] bg-[#fffaf3] px-6 py-16 sm:px-10"
>
  <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
        Creative campaign studio
      </p>

      <h2 className="mt-3 font-serif text-4xl font-black leading-tight sm:text-5xl">
        Social media proof, shown like a real campaign system.
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-[#555] sm:text-base">
        Built a repeatable content production workflow for WPM across
        educational carousels, founder-led reels, owner-risk messaging,
        property performance content, and campaign CTAs. This section shows
        the creative side of the marketing system: strategy, content planning,
        visual direction, AI-assisted production, and platform-ready execution.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          "Content strategy",
          "Carousel design",
          "Founder-led reels",
          "CTA planning",
          "AI-assisted video",
          "Campaign operations",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[#eadfce] bg-white/70 px-4 py-3 text-sm font-bold text-[#203354] shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>

      <p className="mt-6 rounded-2xl bg-[#f5edf0] px-5 py-4 text-sm leading-6 text-[#70323c]">
        Portfolio framing: this is not just posting content. It shows a
        structured creative workflow connected to brand positioning, owner
        education, lead-generation messaging, and executive approval cycles.
      </p>
    </div>

    <div className="relative mx-auto w-full max-w-[430px] [perspective:1400px]">
      <div className="absolute -left-20 top-16 h-52 w-52 rounded-full bg-[#d8e3ea] blur-3xl" />
      <div className="absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-[#f1c5cc] blur-3xl" />

      <div className="relative mx-auto origin-center rotate-[-5deg] skew-y-[1deg] rounded-[3.5rem] bg-gradient-to-br from-[#0e0e0f] via-[#272727] to-[#050505] p-[10px] shadow-[0_45px_90px_rgba(32,51,84,0.42)] transition duration-500 hover:rotate-[-1deg] hover:scale-[1.02]">
        <div className="absolute -left-[6px] top-28 h-16 w-2 rounded-l-xl bg-[#1c1c1c]" />
        <div className="absolute -left-[6px] top-48 h-20 w-2 rounded-l-xl bg-[#1c1c1c]" />
        <div className="absolute -right-[6px] top-40 h-24 w-2 rounded-r-xl bg-[#1c1c1c]" />

        <div className="relative overflow-hidden rounded-[2.8rem] bg-white">
          <div className="absolute left-1/2 top-0 z-30 h-7 w-32 -translate-x-1/2 rounded-b-3xl bg-[#0e0e0f]" />

          <div className="flex items-center justify-between border-b border-[#ececec] bg-white px-5 pb-3 pt-9">
            <span className="text-lg font-black text-[#202020]">‹</span>
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#777]">
                Instagram proof
              </p>
              <p className="text-sm font-black text-[#202020]">
                westsidepropertymgmt
              </p>
            </div>
            <span className="text-lg font-black text-[#202020]">•••</span>
          </div>

          <div className="relative h-[620px] overflow-hidden bg-white">
            <img
              src="/social/wpm-social-grid.png"
              alt="WPM social media campaign grid proof"
              className="h-full w-full object-cover object-top"
            />

            <div className="pointer-events-none absolute right-[13%] top-[35%] flex h-10 w-10 animate-pulse items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#203354] shadow-xl">
              ▶
            </div>

            <div className="pointer-events-none absolute right-[13%] top-[66%] flex h-10 w-10 animate-pulse items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#203354] shadow-xl">
              ▶
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 max-w-sm rounded-3xl border border-[#eadfce] bg-white/80 p-5 text-center shadow-md">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6f86b8]">
          Visual proof
        </p>
        <h3 className="mt-2 font-serif text-2xl font-black">
          WPM Social Content System
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#555]">
          Strategy-led reels, carousels, founder messaging, and owner-education
          content packaged as a portfolio-ready proof asset.
        </p>
      </div>
    </div>
  </div>
</section>
