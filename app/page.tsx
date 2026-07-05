<section
  id="creative"
  className="overflow-hidden border-y border-[#eadfce] bg-[#fffaf3] px-6 py-16 sm:px-10"
>
  <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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

    <div className="relative mx-auto w-full max-w-[420px] [perspective:1400px]">
      <div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-[#d8e3ea] blur-3xl" />
      <div className="absolute -right-12 bottom-16 h-48 w-48 rounded-full bg-[#f1c5cc] blur-3xl" />

      <div className="relative mx-auto w-[292px] origin-center rotate-[-3deg] rounded-[3.2rem] bg-gradient-to-br from-[#111111] via-[#242424] to-[#050505] p-[10px] shadow-[0_30px_70px_rgba(32,51,84,0.28)] transition duration-500 hover:rotate-0 hover:scale-[1.01] sm:w-[330px] lg:w-[360px]">
        {/* side buttons */}
        <div className="absolute -left-[5px] top-24 h-14 w-[5px] rounded-l-xl bg-[#1b1b1b]" />
        <div className="absolute -left-[5px] top-40 h-16 w-[5px] rounded-l-xl bg-[#1b1b1b]" />
        <div className="absolute -right-[5px] top-32 h-20 w-[5px] rounded-r-xl bg-[#1b1b1b]" />

        <div className="relative overflow-hidden rounded-[2.7rem] bg-[#faf7f1]">
          {/* phone notch */}
          <div className="absolute left-1/2 top-0 z-30 h-7 w-28 -translate-x-1/2 rounded-b-3xl bg-[#111111]" />

          {/* Instagram top bar */}
          <div className="flex items-center justify-between border-b border-[#ece7df] bg-[#fffdf9] px-4 pb-3 pt-9">
            <span className="text-lg font-black text-[#202020]">‹</span>

            <div className="text-center">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#777]">
                Instagram proof
              </p>
              <p className="text-sm font-black text-[#202020]">
                westsidepropertymgmt
              </p>
            </div>

            <span className="text-lg font-black text-[#202020]">•••</span>
          </div>

          {/* Instagram profile header */}
          <div className="bg-[#fffdf9] px-4 py-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px] shadow-md">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-2xl">
                  📸
                </div>
              </div>

              <div className="grid flex-1 grid-cols-3 text-center">
                <div>
                  <p className="text-sm font-black text-[#202020]">72</p>
                  <p className="text-[10px] font-semibold text-[#777]">
                    posts
                  </p>
                </div>
                <div>
                  <p className="text-sm font-black text-[#202020]">2.4K</p>
                  <p className="text-[10px] font-semibold text-[#777]">
                    reach
                  </p>
                </div>
                <div>
                  <p className="text-sm font-black text-[#202020]">WPM</p>
                  <p className="text-[10px] font-semibold text-[#777]">
                    brand
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-xs font-black text-[#202020]">
                Westside Property Management
              </p>
              <p className="mt-1 text-[11px] leading-4 text-[#555]">
                Owner education · Reels · Carousels · LA property management
              </p>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-[#e7e0d7] bg-white py-1.5 text-center text-[11px] font-bold text-[#202020]">
                Campaign proof
              </div>
              <div className="rounded-lg border border-[#e7e0d7] bg-white py-1.5 text-center text-[11px] font-bold text-[#202020]">
                Creative system
              </div>
            </div>
          </div>

          {/* Instagram tabs */}
          <div className="grid grid-cols-3 border-y border-[#ece7df] bg-white text-center text-lg text-[#202020]">
            <div className="border-b-2 border-[#202020] py-2">▦</div>
            <div className="py-2">▶</div>
            <div className="py-2">☰</div>
          </div>

          {/* grid screen */}
          <div className="relative bg-white p-[3px]">
            <img
              src="/social/wpm-social-grid.png"
              alt="WPM social media campaign grid proof"
              className="w-full rounded-b-[1.9rem] object-contain object-top"
            />

            {/* reel play indicators */}
            <div className="pointer-events-none absolute right-[15%] top-[33%] flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-black text-[#203354] shadow-lg">
              ▶
            </div>

            <div className="pointer-events-none absolute right-[15%] top-[66%] flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-black text-[#203354] shadow-lg">
              ▶
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-sm rounded-3xl border border-[#eadfce] bg-white/80 p-5 text-center shadow-md">
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
