import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#32271d] text-[#4B3621]">

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#e1d5ce] mb-2">
              BrewHouse
            </h2>
            <p className="text-[#e1d5ce] text-sm leading-relaxed mb-4">
              Crafting rich, aromatic coffee experiences.
            </p>

            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#6B4F3A]/30
                  flex items-center justify-center
                  text-[#e1d5ce] hover:text-[#F3EFE3]
                  transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#e1d5ce] font-semibold text-xs uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {["Menu", "Coffee", "Shop", "Contact"].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#e1d5ce] hover:text-[#2B1B12] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#e1d5ce] font-semibold text-xs uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-[#e1d5ce]">
              <li>+91 85338 39002</li>
              <li>coffee@coffeemail.com</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-[#e1d5ce] font-semibold text-xs uppercase tracking-widest mb-4">
              Updates
            </h3>
            <p className="text-[#e1d5ce] text-sm mb-3">
              Offers & news
            </p>
            <button className="px-4 py-2 bg-[#4B3621] text-[#F3EFE3]
              text-xs font-semibold rounded-full
              hover:bg-[#2B1B12] transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      <div className="border-t border-[#6B4F3A]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 text-center text-xs text-[#e1d5ce]">
          © {new Date().getFullYear()} BrewHouse
        </div>
      </div>

    </footer>
  )
}
