const CoffeePage = () => {
  const features = [
    {
      id: 1,
      title: "THE PERFECT CUP",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 8h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 11h12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 2,
      title: "THE MOKA POT",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 20v-6l4-4 4 4v6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14h8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 14l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="7" y="4" width="10" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 3,
      title: "SUPREME BEANS",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse
            cx="8"
            cy="12"
            rx="3"
            ry="5"
            transform="rotate(-15 8 12)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse
            cx="16"
            cy="12"
            rx="3"
            ry="5"
            transform="rotate(15 16 12)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 4,
      title: "THE COFFEE MACHINE",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="4" width="12" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14v4h8v-4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="1.5" fill="currentColor" />
          <path d="M10 18h4v2h-4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 5,
      title: "FRENCH PRESS",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="8" width="10" height="12" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8V4M10 4h4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="0.5" fill="currentColor" />
          <path d="M7 12h10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 6,
      title: "COFFEE TO GO",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 5l1 14h6l1-14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 5h12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ]

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-12 lg:text-right">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.id} className="flex flex-col items-start lg:items-end gap-3">
                <div className="text-stone-400 lg:order-2">{feature.icon}</div>
                <h3 className="text-stone-700 font-serif text-sm tracking-wider lg:order-1">{feature.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed max-w-xs lg:order-3">{feature.description}</p>
              </div>
            ))}
          </div>


          <div className="flex justify-center items-center">
            <img src="/cofeenew.png" alt="Premium Coffee Bag" className="w-full max-w-xs h-auto object-contain rounded-xl" />
          </div>


          <div className="flex flex-col gap-12">
            {features.slice(3, 6).map((feature) => (
              <div key={feature.id} className="flex flex-col items-start gap-3">
                <div className="text-stone-400">{feature.icon}</div>
                <h3 className="text-stone-700 font-serif text-sm tracking-wider">{feature.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed max-w-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoffeePage
