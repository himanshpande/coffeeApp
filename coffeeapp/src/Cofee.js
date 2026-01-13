const CoffeePage = () => {
  const features = [
    {
      id: 1,
      title: "THE PERFECT CUP",
      description: "Balanced flavor crafted for an exceptional coffee experience.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
          <path d="M4 8h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" />
          <path d="M4 11h12" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "THE MOKA POT",
      description: "Traditional brewing that delivers rich aroma and bold taste.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 20v-6l4-4 4 4v6" />
          <path d="M8 14h8" />
          <path d="M6 14l6-6 6 6" />
          <rect x="7" y="4" width="10" height="4" rx="1" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "SUPREME BEANS",
      description: "Carefully selected beans roasted to perfection.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="8" cy="12" rx="3" ry="5" transform="rotate(-15 8 12)" />
          <ellipse cx="16" cy="12" rx="3" ry="5" transform="rotate(15 16 12)" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "COFFEE MACHINE",
      description: "Precision machines ensuring consistent quality.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="4" width="12" height="10" rx="1" />
          <path d="M8 14v4h8v-4" />
          <circle cx="12" cy="9" r="1.5" />
          <path d="M10 18h4v2h-4z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "FRENCH PRESS",
      description: "Full-bodied taste with a smooth finish.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="8" width="10" height="12" rx="1" />
          <path d="M12 8V4M10 4h4" />
          <circle cx="12" cy="10" r="0.5" />
          <path d="M7 12h10" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "COFFEE TO GO",
      description: "Freshly brewed coffee wherever you go.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 5l1 14h6l1-14" />
          <path d="M6 5h12" />
          <path d="M9 9h6" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-[#f5f3f0] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-12 lg:text-right">
            {features.slice(0, 3).map((item) => (
              <div key={item.id} className="flex flex-col gap-3 lg:items-end">
                <div className="text-[#8b6b4f]">{item.icon}</div>
                <h3 className="text-[#3e2f26] font-serif text-sm tracking-widest">
                  {item.title}
                </h3>
                <p className="text-[#7a6f68] text-xs max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="/cofeenew.png"
              alt="Premium Coffee"
              className="w-full max-w-xs object-contain"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-12">
            {features.slice(3, 6).map((item) => (
              <div key={item.id} className="flex flex-col gap-3">
                <div className="text-[#8b6b4f]">{item.icon}</div>
                <h3 className="text-[#3e2f26] font-serif text-sm tracking-widest">
                  {item.title}
                </h3>
                <p className="text-[#7a6f68] text-xs max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default CoffeePage
